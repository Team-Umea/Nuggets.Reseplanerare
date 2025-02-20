import React from "react";
import "../../styles/Hero.css"; 

const Hero = () => {
return (
    <section className="hero">
    <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
    >
        <source src="..\src\assets\myVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div className="hero-overlay">
        <h1>Välkommen till Reseplaneraren</h1>
        <p>Detta är en sida som kan hjälpa dig att organisera dina framtida drömmar och resor. Samt hitta insperation till potentiella drömresor!</p>
    </div>
    </section>
);
};

export default Hero;
