import React from "react";
import "./button.css";

export function Button({children, onClick}) {
    return (
        <div className="button-container">
            <button className="button" onClick={onClick}>
            {children}
            </button>
        </div>
    );

}