import React from 'react'
import { Scroll } from "./scroll";

import img1 from "./VOYAGE/Visages Du Maroc, Trek Désert Maroc, VTT Maroc, Circuit 4x4 Maroc.jfif";
import img2 from "./VOYAGE/17843349.jpg"

const data = [
    {
        id: 1,
        title: "Slider1",
        image: img1,
        texte: "Un voyage inoubliable",
    },
    {
        id: 2,
        title: "Slider2",
        image: img1,
        texte: "Un voyage inoubliable",
    },
    {
        id: 3,
        title: "Slider3",
        image: img1,
        texte: "Un voyage inoubliable",
    },
    {
        id: 4,
        title: "Slider3",
        image: img2,
        texte: "Un voyage inoubliable",
    },
    {
        id: 5,
        title: "Slider3",
        image: 'https://i.pinimg.com/564x/24/0c/06/240c064605a7f5f7d33900bef7b66a3f.jpg',
        texte: "Un voyage inoubliable",
    },
    {
        id: 6,
        title: "Slider3",
        image: img1,
        texte: "Un voyage inoubliable",
    },
];

export function DestiCarrousel(){
    return(
        <Scroll
        data={data}></Scroll>
    )
}