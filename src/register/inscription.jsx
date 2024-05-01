import React from "react";
import { Nav } from "../components/navBar/navBar";
import { Footer } from "../components/footer/footer";
import { Register } from "../components/register";
import Input from "../components/input";
import { Button } from "../components/button";
import { FaUser } from "react-icons/fa";
//icon de mot de passe 
import { FaLock } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import img from '../components/corpsAccueil/VOYAGE/17843349.jpg'

export function Inscription() {
    return (
        <>
        <Nav/>
        <Register image={img} id = "register"
            titre="Bienvenue"
            paragraph={"Se connecter avec email"}
            children={<Input type="text" icon={<FaUser/>} children="Noms"/>}
            children1={<Input type="email" icon={<FaMailBulk/>} children="Email"/>}
            children2={<Input type="password" icon={<FaLock/>} children="Mot de passe"/>}
            children3={<Input type="password" icon={<FaLock/>} children="confimer mot de passe"/>}
            button={<Button children="Connexion"/>}
            />
        <Footer/>
        </>
    )
}




