import React from 'react'
import './Footer.css'

const Footer = ()=> {
    return(
        <footer className='footer'>
            <div className='logo-esq'>
            <img src="./public/icons/logo.svg" alt="" />
            <h1>paixao em tela</h1>
            </div>
            <div className='logo-dir'>
                
                <h2>Nos acompanhe nas redes sociais</h2>
                <img src="./public/icons/logo.instagram.svg" alt="" />
            </div>
        </footer>
    )
}

export default Footer;