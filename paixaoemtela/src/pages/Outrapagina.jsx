import React from "react";
import { useLocation } from "react-router-dom";
import './Outrapagina.css'

const OutraPagina = () => {
  const { state } = useLocation();
  const formData = state?.formData || {};

  return (
    <div>
      <div className="container-imagem">
        {formData.file && <img src={formData.file} alt="Foto do casal" />}
        <h2>{formData.name}</h2>
        </div>
        <div>
        <p>{formData.data}</p>
        <p>{formData.textarea}</p>
        {formData.url && (
          <p>
           <a href={formData.url} target="_blank" rel="noopener noreferrer">{formData.url}</a>
          </p>
        )}
        </div>
      
    </div>
  );
};

export default OutraPagina;