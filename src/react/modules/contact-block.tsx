import { FaWhatsapp } from "react-icons/fa";

import Button from "@/react/components/button";
import "@/sass/modules/_contact-block.scss";

const ContactBlock = () => {

  return (
    <section className="contact-block">
      <div className="container">
        <div className="contact-block__container">
          <h2>Tem alguma dúvida?</h2>
          <p className="contact-block__text">Se você possui dúvidas e quer falar direto comigo, disponibilizei um Whatsapp Exclusivo. Para acessar clique no botão abaixo.</p>
          <div className="contact-block__button">
            <Button color="whatsapp" href="https://api.whatsapp.com/send?phone=5553999122540&text=Tenho%20uma%20d%C3%BAvida%20sobre%20o%20BellaDermis" startIcon={<FaWhatsapp />}>
              Chamar no Whatsapp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBlock;