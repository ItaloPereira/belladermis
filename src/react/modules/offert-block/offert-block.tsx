import "@/sass/modules/offert-block/_offert-block.scss";

import type { Offert } from "./offert.d.ts";

import OffertCard from "./offert-card";

const OffertBlock = () => {
  const offerts: Offert[] = [
    {
      image: "/images/packages/package12.png",
      name: "tratamento para 12 meses",
      price12: "69,98",
      price1: "697,00",
      url: "https://ev.braip.com/checkout/pla8gd9m/chekj55l",
      included: ["12 Frascos", "Garantia de 90 dias", "Frete Grátis"]
    },
    {
      image: "/images/packages/package5.png",
      name: "tratamento para 5 meses",
      price12: "39,86",
      price1: "397,00",
      url: "https://ev.braip.com/checkout/pla6z0p1/chekj55l",
      included: ["5 Frascos", "Garantia de 90 dias", "Frete Grátis"]
    },
    {
      image: "/images/packages/package3.png",
      name: "tratamento para 3 meses",
      price12: "29,82",
      price1: "297,00",
      url: "https://ev.braip.com/checkout/pla2w0v0/chekj55l",
      included: ["3 Frascos", "Garantia de 90 dias", "Frete Grátis"]
    },
    {
      image: "/images/packages/package1.png",
      name: "tratamento para 1 mês",
      price12: "19,78",
      price1: "197,00",
      url: "https://ev.braip.com/checkout/plagolmx/chekj55l",
      included: ["1 Frasco", "Garantia de 90 dias", "Frete Grátis"]
    },
  ]

  return (
    <section className="offert-block" id="offert">
      <div className="container">
        <div className="offert-block__header">
          <h2 className="offert-block__title">Conheça sua mais nova companhia do dia a dia!</h2>
          <p className="offert-block__description">Adquira o BELLADEMIS hoje a preço acessível, antes de possíveis aumentos e riscos de esgotamento de estoque.</p>
          <span className="offert-block__warning">Recomendamos de 3 a 8 Frascos para melhores resultados!</span>
        </div>

        <div className="offert-block__grid">
          {offerts.map((item: Offert) => (
            <OffertCard
              key={item.url}
              image={item.image}
              name={item.name}
              price12={item.price12}
              price1={item.price1}
              url={item.url}
              included={item.included}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OffertBlock;