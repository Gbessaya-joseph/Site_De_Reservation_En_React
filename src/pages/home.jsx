import React from 'react';
import { Nav } from '../components/navBar/navBar';
import {ChangeImage} from '../components/corpsAccueil/changeimage';
import {Recherche} from "../components/corpsAccueil/recherche";
import { Titre } from '../components/corpsAccueil/titre';
import { DestiCarrousel } from '../components/corpsAccueil/destinationPhare';
import { HotelCarrousel } from '../components/corpsAccueil/hotel';
import { Footer } from '../components/footer/footer';
import { VolS } from '../components/corpsAccueil/vols';

import'./hotel';

export function Home() {
    return (
        <>
            <Nav/>

            <ChangeImage/>
            <Recherche/>
            <Titre
                Children="NOS DESTINATIONS PHARES"/>
            <DestiCarrousel/>  
            <Titre
                Children="NOS HOTELS"/>
            <HotelCarrousel/>
            <Titre
                Children="NOS VOLS"/>
            <VolS/>
            <Footer/>
        </>
    )

}