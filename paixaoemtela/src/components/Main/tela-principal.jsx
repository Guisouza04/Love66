import './styles.css'
import Button from '../button/button';

const MenuPrincipal = ()=>{
    return(
        <div className='container-principal-full'>
            <div className='conteudo'>
                <h1>O melhor presente para a pessoa que você ama!</h1>
                <p>Crie um site exclusivo com um contador do seu tempo juntos. Preencha o formulário abaixo e receba seu site personalizado + QR Code para compartilhar essa linda história com seu amor!</p>
                <Button label="Quero criar meu site"/>
            </div>
            <div className='imagem-principal'>
                <img src="./public/icons/logo.svg" alt="foto"/>
            </div>
        </div>
    )
}

export default MenuPrincipal;