import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Navbar.css'

function Navbar() {

    const [show , handleShow] = useState(false)
    const history = useHistory()

    const transitionEffect = ()=>{
        if(window.scrollY > 100){
      handleShow(true)
        }
        else{
      handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll' , transitionEffect)
        return () => window.removeEventListener('scroll' , transitionEffect )
    }, [])

  return (
  <div className={`nav ${show && "nav_black"}`}>
      <div className="nav__container">
         <img onClick={()=>history.push("/")} 
         className='nav-logo'
         src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt="" />
     <img onClick={()=>history.push("/profile")}
     className='nav-avatar'
     src="https://pbs.twimg.com/media/Ev0Fa_MXAAAREWR.jpg" alt="" />
    </div>
    </div>
  )
}

export default Navbar