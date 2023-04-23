import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatgpt3.css";
const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="gpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature />
                <div className="gpt3__whatgpt3-heading">
                    <h2 className="gradient__text">
                        The possibilities are beyond your imagination
                    </h2>
                    <p>Explore The Library</p>
                </div>
                <div className="gpt3__whatgpt3-container">
                    <Feature />
                    <Feature />
                    <Feature />
                </div>
            </div>
        </div>
    );
};

export default WhatGPT3;
