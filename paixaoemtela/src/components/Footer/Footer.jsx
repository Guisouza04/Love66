import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.svg";
import logoinstagram from "../../assets/logo.instagram.svg";

const Footer = ()=> {
    return(
        <footer className='footer'>
            <div className='logo-esq'>
            <img src={logo} alt="" />
            <h1>paixao em tela</h1>
            </div>
            <div className='logo-dir'>
                
                <h2>Nos acompanhe nas redes sociais</h2>
                <img src={logoinstagram} alt="" />
            </div>
        </footer>
    )
}

export default Footer;