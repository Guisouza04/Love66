import React from 'react'
import './Perguntas.css'

function Perguntas() {
  return (
    <div className='container-perguntas-frequentes'>
        <h1>Perguntas frequentes</h1>
        <div className='container-perguntas'>
          <div className='box-perguntas'><h2>O que é o Paixão em tela</h2>
          <p>Paixão em Tela é uma plataforma que permite criar páginas personalizadas para celebrar seu relacionamento. Adicione fotos, uma mensagem especial e um contador que registra o tempo exato da sua história juntos</p></div>
          
          <div className='box-perguntas'><h2>O que está incluído na minha página personalizada?</h2>
          <p>Sua página personalizada contará com um contador em tempo real mostrando o tempo do seu relacionamento, um slideshow com suas fotos mais especiais, uma mensagem personalizada de declaração e uma música dedicada à pessoa que você ama.</p></div>
          
          <div className='box-perguntas'><h2>Qual é o custo para criar uma página no Paixão em tela?</h2>
          <p>Por apenas R$ 19,99 no plano básico, você pode criar uma página única no Paixão em Tela para eternizar seu amor com estilo e emoção!</p></div>
          
          <div className='box-perguntas'><h2>Como posso entrar em contato com o suporte ao cliente?</h2>
          <p>Nossa equipe de suporte está pronta para atender você! Entre em contato conosco pelo e-mail paixaemtela@gmail.com.</p></div>
          
          <div className='box-perguntas'><h2>Como recebo minha página personalizada após o pagamento?</h2>
          <p>Após a confirmação do pagamento, você receberá um código QR para compartilhar com seu parceiro e um e-mail com o link exclusivo para acessar sua página personalizada.</p></div>
        </div>
    </div>
  )
}

export default Perguntas