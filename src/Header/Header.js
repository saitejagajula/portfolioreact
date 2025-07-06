import React from 'react'
import './Header.css';
import { useState,useEffect } from 'react';
export const Header = () => {
  const Headcomponents=["Home","About","Experince","Skills","Contact"]
  const [scrolled,setscrolled]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const yscrolled=window.scrollY>0;
      setscrolled(yscrolled)
    })
    return ()=>window.removeEventListener("scroll",()=>{
      const yscrolled=window.screenY>0;
      setscrolled(yscrolled)
    });

  },[])


  return (<>
  <nav className={`navbar d-flex flex-now mainNavbar  container-fluid navbar-expand-lg sticky-top mb-3 ${scrolled ? "bg-white":"bg-light" }`}>
    <div className="container-fluid d-flex flex-nowwrap ">
      <a className="navbar-brand    fw-bolder fs-6 " href="#">SAITEJA</a>

     <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>
      
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav gap-4 text-center"style={{marginLeft:"50%"}}>
           {Headcomponents.map((items,index)=>( 
          <li key={index} className="nav-item px-2 py-2 custom-hover bg-ark">
            <a className="nav-link fw-bold  "  href={`${items.toLowerCase()}`}>{items}</a>
          </li>
          ))}
          
         
        </ul>
      </div>
    </div>
  </nav>
 </> )
}
export default Header;
