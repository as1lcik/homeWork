import React from "react";

export default function Navbar() {

   return (
       <nav className="navbar has-background-grey-light" role="navigation" aria-label="main navigation">
           <div className="navbar-brand">
               <a className="navbar-item" href="#">
                   <img src="https://macademy.uz/assets/img/logo-new.svg" width="112" height="28" alt='logo'/>
               </a>

               <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                  data-target="navbarBasicExample">
                   <span aria-hidden="true"/>
                   <span aria-hidden="true"/>
                   <span aria-hidden="true"/>
               </a>
           </div>
       </nav>
   )
}