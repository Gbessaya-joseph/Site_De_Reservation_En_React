import React from "react";
import mg1 from "../components/corpsAccueil/VOYAGE/Vector.jpg";
import mg2 from "../components/corpsAccueil/VOYAGE/Group 688.jpg";
import 'styled-components';

import styled from 'styled-components';

const FootLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 10% 0px 0px 0px;
    bottom: 0; 
    @media screen and (max-width: 768px){
    }
`;
/*appliquer les media screen pour le responsive */

const Img = styled.img`
    width: 20%;
    height: 100%;
    margin: 0px 0px 0px 0px;
    border: 2px solid black
    @media screen and (max-width: 768px){
        width: 20%;
        height: 100%;
    
    }
`;
export function FooterRegister(){

    return (
        <FootLink >
            <Img src={mg1} style={
                {
                    margin: "0px 50% 0px 0px"
                }
            }></Img>
            <Img src={mg2} style={
                {
                    margin: "0px 0px 0px 0px"
                }
            }></Img>
        </FootLink>
    )
}