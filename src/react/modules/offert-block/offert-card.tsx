import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import type { Offert } from "./offert.d.ts";

import Button from "@/react/components/button";

import "@/sass/modules/offert-block/_offert-card.scss";

const OffertCard = (props: Offert) => {
  const  {
    image,
    name,
    price12,
    price1,
    url,
    included
  } = props;
  
  return (
    <Link className="offert-card" href={url}>
      <Image
        src={image}
        width={600}
        height={600}
        alt={name}
        className="offert-card__image"
      />

      <h3 className="offert-card__name">{name}</h3>

      <div className="offert-card__price">
        <span className="offert-card__installments-label">12x</span>
        <span className="offert-card__installments-value">R${price12}</span>
        <span className="offert-card__value">R${price1} à vista</span>
      </div>

      <ul className="offert-card__included">
        {included.map((includedItem) => (
          <li key={includedItem} className="offert-card__included__item">
            <span className="offert-card__included__icon"><FaCheckCircle /></span>
            <span className="offert-card__included__label">{includedItem}</span>
          </li>
        ))}
      </ul>

      <div className="offert-card__button-wrapper">
        <Button animated size="extra-large">
          Comprar agora
        </Button>
      </div>

      <Image
        src="/images/packages/stamp.png"
        width={565}
        height={106}
        alt="secure payment methods"
        className="offert-card__stamp"
      />
    </Link>
  )
}

export default OffertCard;