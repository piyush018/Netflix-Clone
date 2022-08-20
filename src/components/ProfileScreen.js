import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import {selectUser} from "../features/userSlice"
import { auth } from '../firebase/firebaseConfig'
import  "../styles/ProfileScreen.css"
import PlanScreen from './PlanScreen'

function ProfileScreen() {
    const user = useSelector(selectUser)
  return (
      <div className='profileScreen'>
     <Navbar />
     <div className="profileScreen_body">
     <h1>Edit Profile</h1>
     <div className="profileScreen_info">
      <img 
         src="https://pbs.twimg.com/media/Ev0Fa_MXAAAREWR.jpg" 
         alt=""/>

         <div className='profileScreen_details'>
             <h2>{user.email}</h2>
             <div className="profileScreen_plans">
                 
                <PlanScreen />
              <button onClick={()=> auth.signOut()} className='profileScrren_signout'>Sign out</button>
           </div>
         </div>
      </div>
     </div>  
  </div>
  )
}

export default ProfileScreen