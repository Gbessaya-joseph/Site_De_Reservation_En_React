import React from "react";
import { FaUser } from 'react-icons/fa';
import { FaMailBulk } from "react-icons/fa";
import { Nav } from "../components/navBar/navBar";
import { Button } from "../components/button";
import { Register } from "../components/register";
import { Input } from "../components/input";
import { Footer } from "../components/footer/footer";
import img from '../components/corpsAccueil/VOYAGE/Monument de la renaissance africaine à Dakar_.jpeg'

export function Connexion() {
    return (
        <>
        <Nav/> 
        <Register image={img}
            titre="Bienvenue"
            paragraph={"Se connecter avec email"}
            children={<Input type="text" icon={<FaMailBulk/>} children="Email"/>}
            children1={<Input type="password" icon={<FaUser/>} children="Mot de passe"/>}
            button={<Button children="Connexion"/>}
            />
        <Footer/>
            </>
    );
}