import clsx from "clsx";

import type { ReactNode } from "react";

import "@/sass/components/_icon-button.scss";


type IconButtonProps = {
  children: ReactNode;
  ariaLabel: string;
  animated?: boolean,
  color?: "whatsapp";
  size?: "small" | "medium" | "large" | "extra-large";
  variant?: "contained";
}

const IconButton = (props: IconButtonProps) => {
  const {
    children,
    ariaLabel,
    color = "whatsapp",
    size = "extra-large",
    variant = "contained",
  } = props;

  return (
    <button aria-label={ariaLabel} className={clsx(
      [
        "icon-button",
        `icon-button--size-${size}`,
        `icon-button--color-${color}`,
        `icon-button--variant-${variant}`,
      ]
    )}>
      <span>{children}</span>
    </button>
  )
}

export default IconButton;