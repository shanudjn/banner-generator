import React from "react";
import '../styles/bannerComponent.css'

export default function BannerComponent() {
    return (
        <div className="drawingboard">
            <p>I am in canvas</p>
            <canvas id='heading' textToShow="Hello" width="800" height="300">I am in Banner</canvas>
        </div>
    )
}