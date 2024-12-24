import React from 'react'

function Pagamento() {
  return (
    <div>
        <h1>Efetue o pagamento</h1>
            <p>Escaneie o QR Code abaixo para efetuar o pagamento:</p>
            <img src="{{ qrcode_path }}" alt="QR Code de Pagamento" />
        <p>Aguarde a confirmação do pagamento.</p>

    </div>
  )
}

export default Pagamento