import React from "react";
import "./recherche.css";
/*importer une bibliothèque <FontAwesome></FontAwesome>*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//importer l'icon de recherche
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
/*importer l'icon d'une ligne verticale*/

/*importer une ligne horizontale*/

import {  } from "react-icons/fa";


export function Recherche() {
    return (
        <div className="recherche">
            <div className="vol">Vol,Destination</div>
            <div className="ligne"></div>
            <div className="vol">Budget</div>
            <div className="ligne"></div>
            <div className="vol">Rechercher une Destination</div>
            <div className="bouton-recherche">
                <FontAwesomeIcon icon={faSearch} className="icon" />
            </div>
        </div>
    );
}