function calcularTempoDeNamoro(dataNamoro) {
  setInterval(() => {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

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

// Data começo de Namoro (exemplo: 1 de janeiro de 2020)
const dataNamoro = new Date(2020, 0, 1);
calcularTempoDeNamoro(dataNamoro);

const heart = {
  html: '<div class="Heart"></div>',
  css: `
    .Heart {
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  position: relative;
  transform: rotate(-45deg);
  box-shadow: -1rem 1rem 9rem #f20044;
  animation: heart 1s linear infinite alternate;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
@keyframes heart{
  0% {
    transform: rotate(-45deg) scale(1.07);
  }
  80% {
    transform: rotate(-45deg) scale(1.0);
  }
  100% {
    transform: rotate(-45deg) scale(0.8);
  }
}
.Heart::before {
  content: ' ';
  position: absolute;
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  top: -50%;
  border-radius: 5rem;
  box-shadow: -1rem -1rem 9rem #f20044;
}
.Heart::after {
  content: ' ';
  position: absolute;
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  right: -50%;
  border-radius: 5rem;
  box-shadow: 1rem 1rem 9rem #f20044;
}
  `,
  render: function (container) {
    // Adicionar CSS ao cabeçalho
    const style = document.createElement('style');
    style.textContent = this.css;
    document.head.appendChild(style);

    // Adicionar HTML ao contêiner
    document.querySelector(container).innerHTML = this.html;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  heart.render('#Heart'); // Adiciona o componente ao elemento com ID "app"
});

const frameSpotify = {
  html: `
    <div class="frame">
      <img src="../../imagens/WhatsApp Image 2024-11-21 at 20.09.21_103bd39b.jpg" alt="Foto Casal">
      <iframe src="https://open.spotify.com/embed/track/7q3fl9pyPaUOrQ1w6AzveN?utm_source=generator" 
              width="300" 
              height="80" 
              frameborder="0" 
              allowtransparency="true" 
              allow="encrypted-media">
      </iframe>
    </div>
  `,
  css: `
    .frame {
      display: flex;
      flex-flow: column;
      padding: 1rem;
      border: 2px solid #03212b;
      border-radius: 1rem;
      background: #082040ff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      align-items: center;
    }
    .frame img {
      width: 30rem;
      height: 30rem;
      object-fit: cover;
      border-radius: 1rem;
      margin-bottom: 1rem;
    }
  `,
  render: function (container) {
    // Adicionar CSS ao cabeçalho
    const style = document.createElement('style');
    style.textContent = this.css;
    document.head.appendChild(style);

    // Adicionar HTML ao contêiner
    document.querySelector(container).innerHTML = this.html;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Renderiza o componente no contêiner com ID "frameSpotify"
  frameSpotify.render('.FrameSpotify');
});

// Quadro Spotify com playlist
const FrameSpotifyPlaylist = {
  html: `<div class="frame">
      <img src="../../imagens/WhatsApp Image 2024-11-21 at 20.09.21_103bd39b.jpg" alt="Foto Casal">
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7EMvu5Aq7PTApUq7WLjKcn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    `,
    render: function (container) {
      // Adicionar CSS ao cabeçalho
      const style = document.createElement('style');
      style.textContent = this.css;
      document.head.appendChild(style);
  
      // Adicionar HTML ao contêiner
      document.querySelector(container).innerHTML = this.html;
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // Renderiza o componente no contêiner com a Classe "SpotifyFrame"
    FrameSpotifyPlaylist.render('.SpotifyFrame');
  });

  function virarCarta() {
    const card = document.querySelector('.card');
    card.classList.toggle('virada');
  }
  



  // Carrossel 
  const carouselTrack = document.querySelector('.carousel-track');
let startX = 0; // Posição inicial do toque
let currentTranslate = 0; // Posição atual
let prevTranslate = 0; // Posição anterior
let animationID = 0; // ID da animação
let currentIndex = 0; // Índice do item atual

// Eventos de toque
carouselTrack.addEventListener('touchstart', startTouch);
carouselTrack.addEventListener('touchmove', moveTouch);
carouselTrack.addEventListener('touchend', endTouch);

function startTouch(e) {
  startX = e.touches[0].clientX; // Captura a posição inicial do toque
  prevTranslate = currentTranslate; // Salva a posição anterior
  cancelAnimationFrame(animationID); // Cancela animações em andamento
}

function moveTouch(e) {
  const currentX = e.touches[0].clientX; // Captura a posição atual do toque
  const deltaX = currentX - startX; // Diferença entre toque inicial e atual
  currentTranslate = prevTranslate + deltaX; // Atualiza a posição do carrossel
  setCarouselPosition();
}

function endTouch() {
  // Calcula o índice com base na direção do deslizar
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -50 && currentIndex < document.querySelectorAll('.carousel-item').length - 1) {
    currentIndex++; // Próximo slide
  } else if (movedBy > 50 && currentIndex > 0) {
    currentIndex--; // Slide anterior
  }

  // Ajusta para o slide correto
  setPositionByIndex();
}

function setCarouselPosition() {
  carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = -currentIndex * window.innerWidth;
  prevTranslate = currentTranslate;
  carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
}
