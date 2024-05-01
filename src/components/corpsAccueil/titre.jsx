import React from "react";
import "./titre.css";

export function Titre({Children}) {
    return (
        <div className="titre">
            <h1 className="titre-Alias">{Children}</h1>
        </div>
    );
}