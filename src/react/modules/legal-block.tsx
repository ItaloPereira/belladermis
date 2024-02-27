import type { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

import Button from "@/react/components/button";

import "@/sass/modules/_legal-block.scss";

interface LegalBlockProps {
  children: ReactNode;
  title: string;
}

const LegalBlock = (props: LegalBlockProps) => {
  const { title, children } = props

  return (
    <section className="legal-block">
      <div className="container">
        <div className="legal-block__back">
          <Button
            href="/inicio"
            size="small"
            variant="outlined"
            color="inherit"
            startIcon={<FaArrowLeft />}
          >
            Voltar para o início
          </Button>
        </div>
        <h1 className="legal-block__title">{title}</h1>
        <p className="legal-block__text">{children}</p>
      </div>
    </section>
  )
}

export default LegalBlock;