document.addEventListener('DOMContentLoaded', () => {
  FirstFraseComponent.render('.Frase1');
  Card2ladosComMensagem.render('.CardDetalhado');
  heart.render('#Heart');
  frameSpotify.render('.FrameSpotify');
  FrameSpotifyPlaylist.render('.SpotifyFrame');
});

document.addEventListener('DOMContentLoaded', () => {
  floatingHearts.render('.HeartDinamico');
});

function calcularTempoDeNamoro(dataNamoro) {
  setInterval(() => {
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

    const frase = `À ${anos} anos, ${meses} meses, ${dias} dias, ${horas
      .toString()
      .padStart(2, '0')} horas, ${minutos
      .toString()
      .padStart(2, '0')} minutos e ${segundos
      .toString()
      .padStart(2, '0')} segundos que meu coração bate por você!`;

    document.getElementById('timer').innerText = frase;
  }, 1000);
}

function virarCarta() {
  const card = document.querySelector('.card');
  card.classList.toggle('virada');
}

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
  },
};

const floatingHearts = {
  html: `<div class="Heart" onclick="floatingHearts.spawnHearts()"></div>`,
  css: `
    .Heart {
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  position: relative;
  transform: rotate(-45deg); /* Deixa o coração "em pé" */
  box-shadow: -1rem 1rem 9rem #f20044;
  animation: heart 1s linear infinite alternate;
  margin-top: 5rem;
  margin-bottom: 5rem;
  cursor: pointer;
}

@keyframes heart {
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

.Heart::before,
.Heart::after {
  content: ' ';
  position: absolute;
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  border-radius: 50%;
}

.Heart::before {
  top: -50%;
  left: 0;
}

.Heart::after {
  left: 50%;
  top: 0;
}

.floating-heart {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: #f20044;
  transform: rotate(-45deg);
  border-radius: 0;
  animation: float-up 2s ease-out forwards;
}

.floating-heart::before,
.floating-heart::after {
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: #f20044;
  border-radius: 50%;
}

.floating-heart::before {
  top: -50%;
  left: 0;
}

.floating-heart::after {
  left: 50%;
  top: 0;
}

@keyframes float-up {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(-45deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-150px) scale(0.5) rotate(-45deg);
  }
}

  `,
  render: function (container) {
    // Adicionar CSS ao cabeçalho
    const style = document.createElement('style');
    style.textContent = this.css;
    document.head.appendChild(style);

    // Adicionar HTML ao contêiner
    document.querySelector(container).innerHTML = this.html;
  },
  spawnHearts: function () {
    const container = document.body; // Onde os corações serão adicionados
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${window.innerHeight - 100}px`; // Começa no final da tela
      container.appendChild(heart);

      // Remover o coração após a animação
      setTimeout(() => {
        container.removeChild(heart);
      }, 20000);
    }
  },
};

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
  },
};

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
  },
};

const Card2ladosComMensagem = {
  html: `
    <div class="card">
      <div class="CardInner">
        <div class="CardFront">
          <img src="../../imagens/WhatsApp Image 2024-11-21 at 20.09.21_103bd39b.jpg" alt="Foto Casal" />
        </div>
        <div class="CardBack">
          <p class="CardBack__frase">O amor, esse sentimento tão sublime e complexo, é uma força poderosa que permeia
            nossas vidas de maneiras inimagináveis. Ele se manifesta de inúmeras formas, desde o calor reconfortante de
            um abraço até a paixão avassaladora que nos consome por dentro. No âmago do amor reside a capacidade de
            conectar almas, de transcender barreiras e de nos fazer sentir completos. É a cola que une os
            relacionamentos mais profundos, seja entre pais e filhos, amigos ou amantes. É a força motriz por trás de
            gestos altruístas e sacrifícios desinteressados. O amor é paciente e gentil, como dizem, mas também é
            corajoso e incansável. Ele nos impulsiona a superar obstáculos, a enfrentar nossos medos mais profundos e a
            nos tornarmos melhores versões de nós mesmos. É importante lembrar que o amor não é apenas romântico.</p>
          <div class="CardBack__foto--verso">
            <span id="foto__data">01.03.2020</span>
            <img id="foto__heart" src="./Icons/heart2-svgrepo-com.svg" alt="heart">
            <img id="foto__flower" src="./Icons/rosa.png" alt="flower">
          </div>
        </div>
      </div>
    </div>
  `,
  css: `
.card {
  width: 300px;
  height: 400px;
  perspective: 1000px; Necessário para criar o efeito 3D
  cursor: pointer;
  margin: 20px auto;
}
.CardInner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.CardFront,
.CardBack {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.CardFront img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card.virada .CardInner {
  transform: rotateY(180deg);
}
.CardBack {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-image: url(./imagens/Fundo-Card.jpg);
  transform: rotateY(180deg);
}
.CardBack__frase {
  position: absolute;
  font-size: 1.8rem;
  font-weight: 500;
  color: #1e1e1e;
  font-family: "Dancing Script", cursive;
  text-align: justify;
}
.CardBack__foto--verso {
  position: relative;
  width: 50%;
  height: 50%;
  background-image: url(./imagens/Casal-mãos.jpg);
  background-size: cover;
  z-index: 1;
  border: solid 0.5rem #e9e9e9;
  border-bottom: solid 1.5rem #e9e9e9;
}
#foto__data {
  position: absolute;
  bottom: -1.5rem;
  right: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e1e1e;
}
#foto__heart, #foto__flower {
  position: absolute;
  width: 3rem;
  height: auto;
  transform: rotate(-15deg);
}
#foto__heart {
  top: -1rem;
  left: -1rem;
}
#foto__flower {
  bottom: -2rem;
  right: -1.8rem;
}
  `,
  render: function (container) {
    // Adicionar CSS ao cabeçalho
    const style = document.createElement('style');
    style.textContent = this.css;
    document.head.appendChild(style);

    // Adicionar HTML ao contêiner
    const parent = document.querySelector(container);
    parent.innerHTML = this.html;

    // Adicionar o evento de clique ao card dinamicamente
    const card = parent.querySelector('.card');
    card.addEventListener('click', () => {
      card.classList.toggle('virada');
    });
  },
};

const FirstFraseComponent = {
  html: `
    <div class="First_frase">
      <p>Agradeço a Deus por ter me presenteado com alguém como você, só sabemos o significado da frase “Deus tem planos
      que você nem consegue imaginar para sua vida”, quando ele faz coisas como essas. E com você hoje, vejo que isso
      tudo é verdade.</p>
    </div>
  `,
  css: `
    .First_frase p {
      font-size: 1.8rem;
      text-align: justify;
    }
    .First_frase {
      max-width: 60rem;
      padding-bottom: 2rem;
      border-bottom: solid 0.1rem #f1f1f181;
    }
  `,
  render: function (container) {
    // Adiciona o CSS dinamicamente ao cabeçalho
    const style = document.createElement('style');
    style.textContent = this.css;
    document.head.appendChild(style);

    // Insere o HTML no contêiner especificado
    const parent = document.querySelector(container);
    parent.innerHTML = this.html;
  },
};
