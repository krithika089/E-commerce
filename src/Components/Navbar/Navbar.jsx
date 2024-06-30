import React from "react";
import './Navbar.css';
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";

import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import id from '../../assets/id-button.png';
import pack from '../../assets/package.png';
import logout from '../../assets/locked.png';
import memo from '../../assets/memo.png';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <nav className="align_item navbar">
            <div className="align_item">
                <h1 className=" navbar_heading">CartWish</h1>
                <form className="align_item navbar_form">
                    <input type="text" className="navbar_search" placeholder="Search Products" />
                    <button type='submit' className="search_btn"> Search </button>
                </form>
            </div>
            <div className="align_item navbar_links">
                <LinkWithIcon 
                    title="Home" link="/home" emoji ={rocket}/>
                <LinkWithIcon 
                    title="Products" link="/products" emoji ={star}/>
                <LinkWithIcon 
                    title="LogIn" link="/login" emoji ={id}/>
                <LinkWithIcon 
                    title="SignUp" link="/signup" emoji ={memo}/>
                <LinkWithIcon 
                    title="My Orders" link="/order" emoji ={pack}/>
                <LinkWithIcon 
                    title="Logout" link="logout" emoji ={logout}/>
                <NavLink to="/cart" className="align_item cart">
                    Cart <p className="cart_link_count">0</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;