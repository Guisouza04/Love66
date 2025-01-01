import './styles.css'
import logo from "../../assets/logo.svg";

const Header = () =>{

    return (

        <header className='header'>
            <img src={logo} alt="logo" />
            <h1>Paixão em tela</h1>
        </header>
    );
};

export default Header;