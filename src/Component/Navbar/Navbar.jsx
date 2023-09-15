// import React from 'react'


// const Navbar = () => {
//   return (  
//     <div className='ipl_navbar'>
//       <div className="navbar navbar-expand-lg navbar-light bg-light">
//     {/* Container wrapper */}
//     <div className="container-fluid">
//       {/* Toggle button */}
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-mdb-toggle="collapse"
//         data-mdb-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars" />
//       </button>
//       {/* Collapsible wrapper */}
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         {/* Navbar brand */}
//         <link className="navbar-brand mt-2 mt-lg-0" to='/' >
//           <img
//             src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
//             height={15}
//             alt="MDB Logo"
//             loading="lazy"
//           />
//         </link>
//         {/* Left links */}
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <link className="nav-link" to='/'>
//               Dashboard
//             </link>
//           </li>
//           <li className="nav-item">
//             <link className="nav-link" to='/'>
//               Team
//             </link>
//           </li>
//           <li className="nav-item">
//             <link className="nav-link" to='/'>
//               Projects
//             </link>
//           </li>
//         </ul>
//         {/* Left links */}
//       </div>
//       {/* Collapsible wrapper */}
//       {/* Right elements */}
//       <div className="d-flex align-items-center">
//         {/* Icon */}
//         <link className="text-reset me-3" to='/'>
//           <i className="fas fa-shopping-cart" />
//         </link>
//         {/* Notifications */}
//         <div className="dropdown">
//           <link
//             className="text-reset me-3 dropdown-toggle hidden-arrow"
//             to='/'
//             id="navbarDropdownMenuLink"
//             type="button"
//             data-mdb-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <i className="fas fa-bell" />
//             <span className="badge rounded-pill badge-notification bg-danger">
//               1
//             </span>
//           </link>
//           <ul
//             className="dropdown-menu dropdown-menu-end"
//             aria-labelledby="navbarDropdownMenuLink"
//           >
//             <li>
//               <link className="dropdown-item" to='/'>
//                 Some news
//               </link>
//             </li>
//             <li>
//               <link className="dropdown-item" to='/'>
//                 Another news
//               </link>
//             </li>
//             <li>
//               <link className="dropdown-item" to='/'>
//                 Something else here
//               </link>
//             </li>
//           </ul>
//         </div>
//         {/* Avatar */}
//         <div className="dropdown">
//           <link
//             className="dropdown-toggle d-flex align-items-center hidden-arrow"
//             to='/'
//             id="navbarDropdownMenuAvatar"
//             role="button"
//             data-mdb-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <img
//               src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//               className="rounded-circle"
//               height={25}
//               alt="Black and White Portrait of a Man"
//               loading="lazy"
//             />
//           </link>
//           <ul
//             className="dropdown-menu dropdown-menu-end"
//             aria-labelledby="navbarDropdownMenuAvatar"
//           >
//             <li>
//               <link className="dropdown-item" to='/'>
//                 My profile
//               </link>
//             </li>
//             <li>
//               <link className="dropdown-item" to='/'>
//                 Settings
//               </link>
//             </li>
//             <li>
//               <link className="dropdown-item" to='/'>
//                 Logout
//               </link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Right elements */}
//     </div>
//     {/* Container wrapper */}
//   </div>
//     </div>
//   )
// }

// export default Navbar;

import React, { useState } from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './Navbar.css';
const Navbar = () => {
  const[toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='IPL__navbar'>
      <div className='IPL__navbar-links'>
        <div className='IPL__navbar-links_logo'>
          <img src={logo} alt="IPL__logo"/>
        </div>
        <div className='IPL__navbar-links_container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='https://github.com/himanshu8080/IPL_server'>Read More</a></p>
  <p><a href='#What-Is-IPL'>More About Us</a></p>
  
  {/* <p><a href='#features'>Case Studies</a></p> */}
  {/* <p><a href='#blog'>Sources</a></p> */}
        </div>
      </div>
      {/* <div className='IPL__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div> */}
      <div className='IPL__navbar-menu'>
        {toggleMenu
          ?<RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
          :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="IPL__navbar-menu_container scale-up-center">
            <div className='IPL__navbar-menu_container-links'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#What-Is-IPL'>More About Us</a></p>
            {/* <p><a href='#hpossibility'>Library</a></p> */}
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>Sources</a></p>
            </div>
            <div className='IPL__navbar-menu_container-links-sign'>
              <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) 
};
export default Navbar