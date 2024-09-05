import React, { useState } from "react";
import './navbar.css'
import resume from '../../assets/RESUME (17).pdf';
// import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const toogleMenu = ()=>{
    setIsOpen(!isOpen);
};

    return(
        <header className="header">
        <div className="container">
             <nav className="navbar">
                <ul className={isOpen ? "nav-link active" : "nav-link"}>
                    <li> <a href="/" className="active">Home</a></li>
                    <li> <a href="/">About</a></li>
                    <li> <a href="/">Portfolio</a></li>
                    <li> <a href="/">Contact</a></li>
                </ul>
                <div className="icon" onClick={toogleMenu}>
                {isOpen ? <ImCross /> : <FaBars />}

                </div>  
                <div className="nav-button">
                 <button className="btn">
                     <a href={resume} download="Resume">
                         Download CV <i className="uil uil-file-alt"></i>
                     </a>
                 </button>
             </div>
                
                
            </nav>
            
        </div>
        

        </header>
    )


}
export default Navbar;


// const Navbar = () => {
//     const [active, setActive] = useState(false);
//     const [mobile, setMobile] = useState(false);

//     // Handle scroll event listener setup and cleanup
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) {
//                 setActive(true);
//             } else {
//                 setActive(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []); // Only run on mount and unmount

//     return (
//         <nav className={active ? "activenav" : "navbar"}>
//             <div className="nav-logo">
//                 {/* Logo or brand name */}
//             </div>
//             <div className={mobile ? "nav-menu-mobile" : "nav-menu"} onClick={() => setMobile(false)}>
//                 <li>
//                     <Link to="intro" smooth={true} className="nav-menuListitem active">
//                         Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="about" smooth={true} className="nav-menuListitem">
//                         About
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="portfolio" smooth={true} className="nav-menuListitem">
//                         Portfolio
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="contact" smooth={true} className="nav-menuListitem">
//                         Contact
//                     </Link>
//                 </li>
//             </div>
//             <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
//                 {mobile ? <ImCross /> : <FaBars />}
//             </button>
//             <div className="nav-button">
//                 <button className="btn">
//                     <a href={resume} download="Resume">
//                         Download CV <i className="uil uil-file-alt"></i>
//                     </a>
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
