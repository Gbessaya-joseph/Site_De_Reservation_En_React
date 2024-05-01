import React from 'react';
import './App.css';
import { Nav } from './components/navBar/navBar';
import { ChangeImage } from './components/corpsAccueil/changeimage';
import { Footer } from './components/footer/footer';
import { Recherche } from './components/corpsAccueil/recherche';
import { Titre } from './components/corpsAccueil/titre';
import { VolS } from './components/corpsAccueil/vols';
import { DestiCarrousel } from './components/corpsAccueil/destinationPhare';
import { HotelCarrousel } from './components/corpsAccueil/hotel';


function App() {
  return <>
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
}

export default App;
