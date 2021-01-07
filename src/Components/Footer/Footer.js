import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer_b">
            <div className="footer_content">
            <p className="footer_title">Created with <span className="reac_span">React js</span></p>
            <img width="50px" height="50px" src="https://reactscript.com/wp-content/uploads/2016/06/React-Components-For-The-Web-Animations-API.gif" alt=""/>
            </div>
            <p className="autor_text">By Sergey Khachikyan</p>
            </div>
        </div>
    )
}

export default Footer;
