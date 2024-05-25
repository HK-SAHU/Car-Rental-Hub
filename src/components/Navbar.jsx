
// // client/src/components/Navbar.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { IconMenu2, IconX } from "@tabler/icons-react";
// import ModalComponent from "./ModalComponent";
// import Logo from "../images/logo/car_rental_logopng.png";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);

//   const openNav = () => {
//     setNav(!nav);
//   };

//   const openModal = (login) => {
//     setIsLogin(login);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <>
//       <nav>
//         <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
//           <div onClick={openNav} className="mobile-navbar__close">
//             <IconX width={30} height={30} />
//           </div>
//           <ul className="mobile-navbar__links">
//             <li>
//               <Link onClick={openNav} to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link onClick={openNav} to="/about">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link onClick={openNav} to="/models">
//                 Cars
//               </Link>
//             </li>
//             <li>
//               <Link onClick={openNav} to="/contact">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <button onClick={() => openModal(true)}>Sign In</button>
//             </li>
//             <li>
//               <button onClick={() => openModal(false)}>Register</button>
//             </li>
//           </ul>
//         </div>

//         <div className="navbar">
//           <div className="navbar__img">
//             <Link to="/" onClick={() => window.scrollTo(0, 0)}>
//               <img src={Logo} alt="logo-img" />
//             </Link>
//           </div>
//           <ul className="navbar__links">
//             <li>
//               <Link className="home-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="about-link" to="/about">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link className="models-link" to="/models">
//                 Cars
//               </Link>
//             </li>
//             <li>
//               <Link className="contact-link" to="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <div className="navbar__buttons">
//             <button className="navbar__buttons__sign-in" onClick={() => openModal(true)}>
//               Sign In
//             </button>
//             <button className="navbar__buttons__register" onClick={() => openModal(false)}>
//               Register
//             </button>
//           </div>

//           <div className="mobile-hamb" onClick={openNav}>
//             <IconMenu2 width={30} height={30} />
//           </div>
//         </div>
//       </nav>
//       <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} isLogin={isLogin} />
      
//     </>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import ModalComponent from "./ModalComponent";
import Logo from "../images/logo/car_rental_logopng.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
    if (storedCredentials) {
      setIsAuthenticated(true);
    }
  }, []);

  const openNav = () => {
    setNav(!nav);
  };

  const openModal = (login) => {
    setIsLogin(login);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('credentials');
    setIsAuthenticated(false);
    alert('Logged out successfully');
  };

  const handleAuthSuccess = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <>
      <nav>
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Cars
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button className="navbar__buttons__logout" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <button className="navbar__buttons__sign-in" onClick={() => openModal(true)}>Sign In</button>
                </li>
                <li>
                  <button className="navbar__buttons__register" onClick={() => openModal(false)}>Register</button>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="models-link" to="/models">
                Cars
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            {isAuthenticated ? (
              <button className="navbar__buttons__logout" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <button className="navbar__buttons__sign-in" onClick={() => openModal(true)}>
                  Sign In
                </button>
                <button className="navbar__buttons__register" onClick={() => openModal(false)}>
                  Register
                </button>
              </>
            )}
          </div>

          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
      <ModalComponent 
        modalIsOpen={modalIsOpen} 
        closeModal={closeModal} 
        isLogin={isLogin} 
        onAuthSuccess={handleAuthSuccess} 
      />
    </>
  );
}

export default Navbar;


