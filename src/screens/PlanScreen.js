import React ,{useState , useEffect} from 'react'
import './PlanScreen.css'
import db from '../firebaseConfig'
import {getDocs, addDoc, collection ,where, onSnapshot } from "firebase/firestore"
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'

function PlanScreen (){

    const [products , setProducts] = useState([])
    const user = useSelector(selectUser)
    const [subscription , setSubscription] = useState(null)

   useEffect(()=>{
      const collectionRef =  collection(db , `customers/${user.uid}/subscriptions`)

       onSnapshot(collectionRef ,(querySnapshot)=>{
           querySnapshot.forEach(async (subscription)=>{
              setSubscription({
               role : subscription.data().role,
               current_period_end : subscription.data().current_period_end.seconds,
               current_period_start : subscription.data().current_period_start.seconds,
           });

           });
       });
      
       
   } ,[user.uid])


    useEffect(()=>{


      getDocs(collection(db , "products"),where("active", "==" , true))
     .then((querySnapshot)=>{
       const products ={}
        querySnapshot.forEach(async (productDoc)=>{
            products[productDoc.id] = productDoc.data()
            
            const priceSnap  =await getDocs(collection(productDoc.ref , "prices"))
          
            priceSnap.forEach((price)=>{
                products[productDoc.id].prices ={
                    priceId : price.id,
                    priceData : price.data(),
                };
            });
        });
      setProducts(products);       
       })
     .catch((err)=>{
         console.log( err.message)
     })
    },[])
    console.log(subscription)
    


   const loadcheckout = async(priceId)=>{
      const  docRef= await  addDoc(collection(db ,`customers/${user.uid}/checkout_sessions`),{
           price : priceId,
           success_url: window.location.origin,
           cancel_url : window.location.origin,
       });
      
   onSnapshot(docRef ,async(snap) => {
  const { error,  sessionId } = snap.data();
  
  if (error) {
    // Show an error to your customer and
    // inspect your Cloud Function logs in the Firebase console.
    alert(`An error occured: ${error.message}`);
  }
  if (sessionId) {
    // We have a Stripe Checkout URL, let's redirect.
       
          // We have a Stripe Checkout URL, let's redirect.
          const stripe = await loadStripe(
              "pk_test_51LIV6USD5I7g1UtIIDHNw1qNlNCdKBlDkWCo3Zvj2cFjz9qwQ6F8Jd38wk4twwD6X9Pu3SsUjpi5eOGFDtJmFkZj001BbAL4pK")
            stripe.redirectToCheckout({ sessionId});
        //  window.location.assign(url);      
     }
   
       });

   }
  return (
      <div className='planScreen'>
          <br />
         {subscription && 
         <p>Renewal date : {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p> }
        {Object.entries(products).map(([productID , productData])=>{
         
         const isCurrentPackage = productData?.name.includes(subscription?.role)
            return (
                  <div  className={ `${isCurrentPackage && "PlanScreen_disabled"} PlanScreen-plan`}
                   key={productID}>
                      <div className="PlanScreen-info">
                          <h5>{productData.name}</h5>
                          <h4>{productData.description}</h4>
                      </div>
                      <button onClick ={()=>
                        !isCurrentPackage && loadcheckout(productData.prices.priceId)}>
                          {isCurrentPackage ? "Current Package" : "Subscribe"}
                          </button>
                  </div>
            )
        })}
      </div>

  )
}

export default PlanScreen