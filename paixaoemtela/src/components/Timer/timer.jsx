import React, { useEffect, useState } from "react";
import './timer.css'

const Timer = ({ startDate }) => {
  const [tempoDeNamoro, setTempoDeNamoro] = useState("");
  const [intervalId, setIntervalId] = useState(null); // Armazenar o intervalo

  const calcularTempoDeNamoro = (dataNamoro) => {
    // Limpar o intervalo anterior se existir
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      const agora = new Date();
      const diferenca = agora - dataNamoro;

      const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
      const meses = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const dias = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      let frase = `${dias} dias, ${horas} ${horas === 1 ? "hora" : "horas"}, ${minutos} ${minutos === 1 ? "minuto" : "minutos"} e ${segundos} ${segundos === 1 ? "segundo" : "segundos"} que meu coração bate por você!`;

      // Se houver anos
      if (anos > 0) {
        frase = `À ${anos} ${anos === 1 ? "ano" : "anos"}`;
        // Se houver meses após os anos
        if (meses > 0) {
          frase += `, ${meses} ${meses === 1 ? "mês" : "meses"}`;
        }
        // Adiciona o resto da frase com dias, horas, minutos e segundos
        frase += `, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
      } else if (meses > 0) {
        // Caso não haja anos, mas haja meses
        frase = `${meses} ${meses === 1 ? "mês" : "meses"}`;
      }

      setTempoDeNamoro(frase);
    }, 1000);

    setIntervalId(id); // Armazena o intervalo
  };

  useEffect(() => {
    if (startDate) {
      const dataNamoro = new Date(startDate); // Converte a data recebida
      calcularTempoDeNamoro(dataNamoro);
    }

    // Limpar o intervalo quando o componente for desmontado ou quando a data mudar
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [startDate]);

  return <p id="timer">{tempoDeNamoro}</p>;
};

export default Timer;
