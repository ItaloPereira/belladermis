import Image from "next/image";
import Link from "next/link";

import { FaCcVisa, FaCcMastercard, FaCcDinersClub, FaPix, FaBarcode } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";

import DelayWrapper from "@/react/components/delay-wrapper";
import "@/sass/modules/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <DelayWrapper>
          <div className="footer__top">
            <div className="footer__top__legal">
              <h4>PIRATARIA É CRIME</h4>
              <p>A venda do BELLADERMIS só pode ser realizada através deste site. Qualquer outro site onde você encontre este programa é uma FALSIFICAÇÃO e vai contra as leis. Evite falsificações e recuse conteúdos ilegais ou pirateados. NÃO adquira programas parecidos. Não nos responsabilizamos por compras realizadas em outros sites.</p>
            </div>

            <div className="footer__top__payment">
              <h4>Formas de Pagamento:</h4>
              <div className="footer__top__payment__grid">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcDinersClub />
                <SiAmericanexpress />
                <FaPix />
                <FaBarcode />
              </div>
            </div>

            <div className="footer__top__copyright">
              <Image
                className="footer__top__animals"
                src="/images/footer/no-animals-test.png"
                alt="Não testamos em animais"
                width={200}
                height={63}
              />

              <p className="footer__top__copyright-text">
                <span>Copyright 2024</span>
                <span>Todos os direitos reservados ©</span>
              </p>
            </div>
          </div>
        </DelayWrapper>

        <div className="footer__bottom">
          <Image
            className="footer__logo"
            src="/images/logo-white.svg"
            alt="BellaDermis"
            width={130}
            height={50}
          />
          <p className="footer__text">
            Caro consumidor e usuário: As informações dispostas neste site e em qualquer site da empresa – MST CAPS Ltda, 
            inscrita no CNPJ 53.247.308/0001-00, são publicadas exclusivamente a título informativo e não podem ser consideradas 
            como aconselhamento médico pessoal. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença, 
            os resultados podem variar de pessoa para pessoa e o produto é dispensado da obrigatoriedade de registro conforme RDC 27/2010.
          </p>
          <div className="footer__legal">
            <Link href="/politica-de-privacidade">
              Política de privacidade
            </Link>

            <Link href="/termos-de-uso">
              Termos de uso
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;