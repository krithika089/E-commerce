import React, { useState } from "react";
import './LinkWithIcon.css'
import '../../index.css'
import { NavLink } from "react-router-dom";

const LinkWithIcon = ({title,link,emoji,sidebar}) => {

    return(
        <div>
            <NavLink to={link} className={sidebar ? "align_item sidebar_link" : "align_item"}>
                {title} 
                <img src={emoji} alt="" className="link_emoji"/>
            </NavLink>
        </div>
    );
}

export default LinkWithIcon;