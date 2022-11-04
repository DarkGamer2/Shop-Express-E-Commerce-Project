import React from 'react'
import "../Styles/NavigationBar.css";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "font-awesome";
const NavigationBar = () => {
  return (
        <div className="nav-container">
            <nav className="nav">
                <ul className="nav-list">
                <li>SHOP EXPRESS</li>
                <li>HOME</li>
                <li>ELECTRONICS</li>
                <li>LAPTOPS</li>
                <li>COMPUTER PARTS</li>
                <li className="auth-function"><FontAwesomeIcon icon={faShoppingCart}/></li>
                <li className="auth-function">LOGIN</li>
                </ul>
                </nav>
        </div>
  )
}

export default NavigationBar;