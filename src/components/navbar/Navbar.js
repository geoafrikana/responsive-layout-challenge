import navCSS from './Navbar.module.css'
import { useState } from 'react';

export default function ButtonAppBar() {
  const [isActive, setIsActive] = useState(false)
 const toggleMenu = () => setIsActive(isActive => !isActive)
  
  return (
    <div className={navCSS.container}>
    <nav className={navCSS.navbar}>
        <div className={navCSS.brandTitle}>
        <a href="#">GeoAfrikana</a>
        <a href="#" onClick={toggleMenu} className={navCSS.toggleButton}>
          <span className={navCSS.bar}></span>
          <span className={navCSS.bar}></span>
          <span className={navCSS.bar}></span>
        </a>
        </div>
        <div className={`${navCSS.navbarLinks} ${isActive ? navCSS.active : ''}`}>
          <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">SIGN IN</a></li>
            <li><a href="#">SIGN UP</a></li>
          </ul>
        </div>
      </nav>
      </div>
   
  );
}