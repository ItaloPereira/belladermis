import Image from "next/image";

import "@/sass/modules/_guarantee-block.scss";

const GuaranteeBlock = () => {

  return (
    <section className="guarantee-block">
      <div className="container">
        <div className="guarantee-block__grid">
          <h2>Ou dá certo, ou eu devolvo o seu dinheiro.</h2>
          <div className="guarantee-block__text">
            <p>Investi tanto tempo desenvolvendo e testando o <strong>BELLADEMIRS</strong>, que tenho plena confiança que ele vai te ajudar, caso você faça o tratamento por <strong>90 DIAS</strong> e e não tenha resultados eu <strong>devolvo o seu dinheiro.</strong></p>
            <p><strong>RESULTADOS EM 90 DIAS OU SEU DINHEIRO DE VOLTA!</strong> Basta enviar um email para contato@belladermis.com.br que devolvo seu dinheiro. Sem ressentimentos.</p>
          </div>
          <Image
            className="guarantee-block__image"
            src="/images/guarantee/guarantee.png"
            width={600}
            height={269}
            alt={"Garantia de 90 dias"}
          />
        </div>
      </div>
    </section>
  )
}

export default GuaranteeBlock;