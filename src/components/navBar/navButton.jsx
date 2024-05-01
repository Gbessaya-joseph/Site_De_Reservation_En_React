import React from "react";
import "./myStyle.css";
import logo from "./imageHome/logo.png";
import france from "./imageHome/france.png";

export function NavButton({ children, onClick, link }) {
    return (
        <button className="navButton" onClick={onClick} >

            <a  href={link} className="link">
                {children}
            </a>

        </button>
    );
}

export function NavBar({children1,children2,children3,children4,children5}) {
    return (
        <nav className="navBar">
            <img src={logo} className="logo" alt="" width="60px" height="60px" />
            {children1}
            {children2}
            {children3}
            {children4}
            {children5}
            <nav className="langue">
                <img src={france} className="france" alt="" width={"30px"} height={"30px"}/>
                <h3>FR</h3>
            </nav>
        </nav>
    );

}