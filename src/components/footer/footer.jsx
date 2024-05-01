import React from "react"
import styled from "styled-components";
import mg1 from "../corpsAccueil/VOYAGE/Facebook Circled.png";
import mg2 from "../corpsAccueil/VOYAGE/Instagram Circle.png";
import mg3 from "../corpsAccueil/VOYAGE/TwitterX.png";
<link href='https://fonts.googleapis.com/css?family=Font+Name' rel='stylesheet'></link>

const Foot1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0px 0px 0px 0px;
    bottom: 0;
    @media screen and (max-width: 768px){
    }
`;


const Link = styled.a` 
    text-decoration: none;
    margin: 0px 0px 0px 0px;
    font-size: 1.2rem;
    font-family: 'Montserrat';
    font-weight: bold;
    color: black;
    bottom: 0;
    @media screen and (max-width: 768px){
    }
`;

function FooterElement({link, child}) {
    return(
        <Link href={link}>{ child}</Link>
    )
}


function Footer1() {
    return (
        <Foot1>
            <FooterElement link={"./"} child="Voir les réservations" />
            <FooterElement link={"./"} child="Nos hotels" />
            <FooterElement link={"./"} child="Nous contacter" />
            <FooterElement link={"./"} child="Politiques de confidentialité" />
        </Foot1>
    )
}

const Foot2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0px 0px 0px 0px;
    `;

const StyledLink = styled.a`
    width: 3%;
    height: 3%;
    margin: 0px 2% 0px 2%;
    text-decoration: none;
    color: inherit; /* Pour hériter de la couleur du texte parent */
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    @media screen and (max-width: 768px){
        width: 10%;
        height: 10%;
    
    }
`;

function Footer2() {
    return (
        <Foot2>
            <FooterElement link={"./"} child="Nos Réseaux: " />
            <StyledLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Img src={mg1} alt="facebook" />
            </StyledLink>
            <StyledLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Img src={mg2} alt="instagram" />
            </StyledLink>
            <StyledLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Img src={mg3} alt="twitter" />
            </StyledLink>
            <FooterElement link={"./"} child="FAQ" styled={{margin: "0px 0px 0px 20%"}}/>
        </Foot2>
    )
}

const Paragraph= styled.p`
    font-size: 0.8rem;
    font-family: 'Montserrat';
    font-weight: bold;
    margin: auto;
    color: black;
    bottom: 0;
    @media screen and (max-width: 768px){
    }
`;

function Paragra(){
    return (
        <Paragraph>
           Avec Karibu Mila, vivez vos plus belles vacances.
        </Paragraph>
    )
}

const Foot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #DCC7BB;
    width: 100%;
    margin: 2% 0px 0px 0px;
    bottom: 0;
    @media screen and (max-width: 768px){
    }
`;
export function Footer() {
    return (
        <Foot>
            <Footer1 />
            <Footer2 />
            <Paragra />
        </Foot>
    )
}