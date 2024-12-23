import './styles.css';


const Button = ({ label, onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      Quero criar meu site
    </button>
  );
};

export default Button;