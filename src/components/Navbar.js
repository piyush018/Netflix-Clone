import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import '../styles/Navbar.css'

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
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEJV3cKCbNgHCBPY-66a3YN5NGx-7ZPDdpPbhkFv7Tw&s" alt="" />
    </div>
    </div>
  )
}

export default Navbar