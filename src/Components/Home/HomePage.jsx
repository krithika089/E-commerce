import React from "react";
import HeroSection from './HeroSection';
import iphone from "../../assets/iphone-14-pro.webp"
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedSection from "./FeaturedSection";
import ProductCard from "../Products/ProductCard";

const HomePage = () => {
    return (
        <>
            <HeroSection    
                title="Buy iPhone 14 pro" 
                subtitle="This is a sample" 
                link="/" 
                img={iphone} 
            />
            <FeaturedSection />
            <HeroSection 
                 title="Build the ultimate setup"
                 subtitle="You can add studio display and color-matched accessories after you configure your iPhone."
                 link="/" 
                 img={mac} 
            />
        </>
    );
}

export default HomePage;