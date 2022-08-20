import React , {useEffect} from 'react';
import Homescreen from './components/Homescreen';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase/firebaseConfig"
import {login , logout , selectUser} from "./features/userSlice"
import {useDispatch, useSelector } from "react-redux"
import ProfileScreen from './components/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth , (userAuth)=>{

       if(userAuth){
       //logged in 
       dispatch(
         login({
         uid : userAuth.uid,
         email : userAuth.email,
       })
       );
       }
       else{
      // logged out 
      dispatch(logout())
       }
    })
        return unsubscribe;
  } ,[dispatch])
  return (
   <div className="app">
     <Router>
       {!user ? (
        <LoginScreen />
       ) : (
       <Switch>
         <Route path="/profile">
           <ProfileScreen />
         </Route>
          <Route exact path="/">
             <Homescreen />
           </Route>
        </Switch>
       )}
     </Router>
   
    </div>
  );
}

export default App;
