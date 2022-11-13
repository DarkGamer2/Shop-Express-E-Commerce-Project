import React from 'react'
import "../Styles/NavigationBar.css";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "font-awesome";
import { NavLink } from 'react-router-dom';
const NavigationBar = () => {
  return (
        <div className="nav-container">
            <nav className="nav">
                <ul className="nav-list">
                <li>SHOP EXPRESS</li>
                <li><NavLink to={"/"} style={{textDecoration:"none", color:"white"}}>HOME</NavLink></li>
                <li><NavLink to={"electronics"} style={{textDecoration:"none", color:"white"}}>ELECTRONICS</NavLink></li>
                <li><NavLink to={"laptops"} style={{textDecoration:"none", color:"white"}}>LAPTOPS</NavLink></li>
                <li><NavLink to={"computerparts"} style={{textDecoration:"none", color:"white"}}>COMPUTER PARTS</NavLink></li>
                <li className="auth-function"><FontAwesomeIcon icon={faShoppingCart}/></li>
                <li className="auth-function"><NavLink to={"login"} style={{textDecoration:"none", color:"white"}}>LOGIN</NavLink></li>
                </ul>
                </nav>
        </div>
  )
}

export default NavigationBar;