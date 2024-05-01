import React from "react";
import "./changeImage.css"
import { useState } from "react";
import { useEffect } from "react";
import img1 from "./VOYAGE/Une expérience africaine dans un lodge au design bois.jpeg";
import img2 from "./VOYAGE/pexels-lachcim-kejarko-5819230.jpg";
import img3 from "./VOYAGE/pexels-pixabay-59989.jpg";
import img4 from "./VOYAGE/Savane.jpeg";

/*des images qui changent pour l'accueil */

export function ChangeImage() {
    return <>
        <div className="conteneur">
            <div className="d2">
                <div className="texte-diapo">
                    <h1 className="texte-Accueil">VOS VACANCES INOUBLIABLES </h1>
                    <h4>Se passent avec Karibu Mila</h4>
                    <div className="bouton-reserver">
                        <h3>Reserver Dès maintenant > > ></h3>
                    </div>
                </div>
            </div>
        </div>
    </>;
}