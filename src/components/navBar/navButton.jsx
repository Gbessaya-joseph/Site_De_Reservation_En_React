import React from "react";
import "./myStyle.css";
import logo from "./imageHome/logo.png";
import france from "./imageHome/france.png";
<link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
crossorigin="anonymous" 
referrerpolicy="no-referrer" />

export function NavButton({ children, onClick, link }) {
    return (
        <>
            <ul className="links">
                <li><a href={link}>{children}</a></li>
            </ul>
        </>
    );
}

export function NavBar({children1,children2,children3,children4,children5}) {
    return (
        <>
        <header>
            <div class="navbar">
                <img src={logo} className="logo" alt="" width="60px" height="60px" />
                <ul class="links">
                    {children1}
                    {children2}
                    {children3}
                    {children4}
                    {children5}
                </ul>
                <div className="langue">
                    <img src={france} className="france" alt="" width={"30px"} height={"30px"}/>
                    <h3>FR</h3>
                </div>
                <div class="toggle_btn">
				    <i class="fa-solid fa-bars"></i>
			    </div>
            </div>
        </header>
        </>
    );

}