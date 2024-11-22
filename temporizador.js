function calcularTempoDeVida(dataNascimento) {
  setInterval(() => {
      const agora = new Date();
      const diferenca = agora - dataNascimento;

      const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
      const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      const frase = `À ${anos} anos, ${meses} meses, ${dias} dias, ${horas.toString().padStart(2, '0')} horas, ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos que meu coração bate por você!`;

      document.getElementById('timer').innerText = frase;
  }, 1000);
}

// Data de nascimento da criança (exemplo: 1 de janeiro de 2020)
const dataNascimento = new Date(2020, 0, 1);
calcularTempoDeVida(dataNascimento);
