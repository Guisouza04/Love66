import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forms.css";
import Button from "../button/button";
import Timer from "../Timer/timer.jsx";
import HeartFloating from "../Heart/HeartFloating.jsx"; 

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    data: "",
    textarea: "",
    file: null,
    url: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, file: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/outra-pagina", { state: { formData } });
  };

  return (
    <div className="container-forms">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome do casal:</span>
          <input type="text" name="name" placeholder="Nome do casal" onChange={handleChange} />
        </label>
        <label>
          <span>Data do ínicio do namoro:</span>
          <input type="date" name="data" onChange={handleChange} />
        </label>
        <label>
          <span>Mensagem:</span>
          <textarea
            name="textarea"
            placeholder="Faça sua declaração de amor! Capricha hein hehe"
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          <span>Fotos do casal:</span>
          <label htmlFor="file-upload" className="file-label">
              <img src="./public/icons/logo.camera.svg" alt="" />
          </label>
          <input type="file" name="file" id="file-upload" onChange={handleFile} />
        </label>
        <label>
          <span>URL:</span>
          <input type="url" name="url" placeholder="URL" onChange={handleChange} />
        </label>
        <div className="Button-forms">
        <Button type="submit">Enviar</Button>
        </div>
      </form>
      {/* Simulador ao vivo */}
      <div className="container-como-fica">
        <h2>Pré-visualização ao vivo</h2>

        <div className="container-ao-vivo">
          <h3>Paixão em Tela</h3>
          <div>
            {/* Foto */}
            <div className="container-foto">
              <div className="foto">
                {formData.file && (
                  <img
                    src={formData.file}
                    alt="Foto do casal"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </div>

              <div className="footer-img">
                <img src="./public/icons/coracao-main.svg" alt="Logo" />
                <p id="nomeCasal">{formData.name}</p>
              </div>
            </div>

            {/* Mensagem */}
            <div className="mensagem">
              <p id="mensagem">{formData.textarea}</p>
            </div>

            {/* Contador */}
            <div className="container-contador">
              <div className="contador">
                <Timer startDate={formData.data} />
                <HeartFloating />
              </div>
            </div>

            {/* Música */}
            <div className="container-musica">
              <h2>Nossa Música</h2>
              {formData.url && (
                <iframe
                  src={formData.url}
                  title="Nossa Música"
                  width="100%"
                  height="80"
                  allow="autoplay"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Forms;