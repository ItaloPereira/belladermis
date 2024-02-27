import Image from "next/image";
import Link from "next/link";

import "@/sass/modules/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

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