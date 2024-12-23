import React from 'react'
import './Footer.css'

const Footer = ()=> {
    return(
        <footer>
            <div className='logo-esq'>
            <img src="./public/icons/logo.svg" alt="" />
            <h1>paixao em tela</h1>
            </div>
            <div className='logo-dir'>
                <p>A equipe da paixão está totalmente focada em deixar você satisfeito com a sua experiência conosco</p>
                <h2>Nos acompanhe nas redes sociais</h2>
                <img src="./public/icons/logo.instagram.svg" alt="" />
            </div>
        </footer>
    )
}

export default Footer;