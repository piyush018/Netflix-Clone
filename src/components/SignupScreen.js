import React ,{useRef} from 'react'
import '../styles/Signup.css'
import { auth } from '../firebase/firebaseConfig'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


function SignupScreen() {
  const emailRef= useRef(null)
  const passwordRef = useRef(null)

    const register =(e)=>{
      e.preventDefault();
      const email = emailRef.current.value
      const password = passwordRef.current.value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     console.log(userCredential)

  })
  .catch((error) => {
    alert(error.message)
  });
    };

    const SignIN =(e)=>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(auth , email , password)
        .then((userCredential) =>{
            console.log(userCredential)
        })
        .catch((error)=>{
            alert(error.message)
        })

    }
  return (
    <div className='SignUp'>
        <form >
            <h1>Sign IN</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='password' />
            <button  type="submit" onClick={SignIN}> Sign In</button>
            <h4>
                <span style={{color: "grey"}}>New to Netflix?</span>
                <span className='signUpscreen_link' onClick ={register}> Sign Up Now.</span></h4>
        </form>
    </div>
  )
}

export default SignupScreen