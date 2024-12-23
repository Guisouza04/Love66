import React from "react";
import { useLocation } from "react-router-dom";
import Timer from "../components/Timer/timer.jsx";
import HeartFloating from "../components/Heart/HeartFloating.jsx"; 
import "./Outrapagina.css";

const OutraPagina = () => {
  const { state } = useLocation();
  const formData = state?.formData || {};

  return (
    <div className="main">
      <div className="container-imagem">
        {formData.file && <img id="fotoCasal" src={formData.file} alt="Foto do casal" />}
        <div className="button-retrato">
          <h2 id="nomeCasal">{formData.name}</h2>
          <img id="coracaoRetrato" src="./public/icons/coracao-main.svg" alt="" />
        </div>
      </div>
      <div>
        <div className="container-dados">
          {formData.textarea && <p id="mensagem">{formData.textarea}</p>}
          {formData.data && <Timer startDate={formData.data} />}
          {formData.data && <HeartFloating />}
        </div>
        {formData.url && (
          <p id="link"> 
            <a href={formData.url} target="_blank" rel="noopener noreferrer">
              {formData.url}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default OutraPagina;
