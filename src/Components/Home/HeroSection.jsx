import React from "react";
import "./HeroSection.css";



const HeroSection = ({title,subtitle,link,img}) => {
    return (
        <section className="hero_section">
            <div className="align_item">
                <h2 className="hero_title">
                    {title}
                </h2>
                <p className="hero_subtitle">
                 {subtitle}
                </p>
                <a href={link} alt="iphone image" className="hero_img">
                    Buy Now
                </a>
            </div>
            <div className="align_item">
                <img src={img} className="iphone_img"></img>
            </div>
        </section>
    );
}

export default HeroSection;