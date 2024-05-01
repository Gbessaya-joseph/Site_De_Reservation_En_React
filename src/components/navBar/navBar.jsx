import React from "react";
import {NavButton} from './navButton';
import {NavBar} from './navButton';


export function Nav() {
    return (
        <NavBar
                children1={<NavButton children="ACCUEIL" link={"./home"}/>}
                children2={<NavButton children="HOTEL" link={"./hotel"}/>}
                children3={<NavButton children="VOLES" link={"./vol"} />}
                children4={<NavButton children="S'INSCRIRE" link={"./inscription"}/>}
                children5={<NavButton children="LOGIN" link={"./connexion"}/>}
            />  
    )
}