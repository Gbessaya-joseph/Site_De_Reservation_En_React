import React from "react"
import './register.css'
import {RegisterLogo} from "./registerlogo"
import { FooterRegister } from "./footerRegister"
import { Avion } from "./logo"
export function Register({children, image, button,titre,children1,children2,children3,children4,paragraph,href}){
    

    return(
        <>

        <div className="con-div">
                <div className="img-div">
                    <img src={image} alt="" className="con-image"/>
                </div>
                <div className="input-div">
                    <Avion className="avion"/>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"none"}}>
                        <h1 className="con-titre">{titre}</h1>
                        <a href={href} className="con-href">{paragraph}</a>
                    </div>
                    {children}
                    {children1}
                    {children2}
                    {children3}
                    {children4}
                    <div className="button-div">
                        {button}
                    </div>
                    <Hr/>
                    <RegisterLogo/>
                    <FooterRegister/>
                </div>
        </div>
        </>
    )
}


export function Hr(){

    const style = {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
    }
    return(
        <>
        <div style={style}>
            <hr style={{background:'#543423', margin:'0px 2px 0px 3px', width:'40%', height: '1px', border: 'none', outline: 'none'}}/>
            <p style={{margin:'0px 5px 0px 5px'}}>Ou</p>
            <hr style={{background:'#543423', margin:'0px 2px 0px 3px', width:'40%', height: '2%', border: 'none', outline: 'none'}}/>
        </div>
        </>
    )
}