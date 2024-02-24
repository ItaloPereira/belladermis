import Link from "next/link";
import clsx from "clsx";

import type { ReactNode } from "react";

import "@/sass/components/_button.scss";


interface ButtonProps {
  children: ReactNode;
  startIcon?: ReactNode;
  href: string;
  animated?: boolean,
  color?: "success" | "inherit" | "whatsapp";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
}

const Button = (props: ButtonProps) => {
  const {
    children,
    href,
    animated,
    startIcon,
    color = "success",
    size = "large",
    variant = "contained",
  } = props;

  return (
    <Link href={href} className={clsx(
      [
        "button",
        `button--size-${size}`,
        `button--color-${color}`,
        `button--variant-${variant}`,
      ], {
      "button--animated": animated,
    }
    )}>
      {startIcon && <span className="button__start-icon">{startIcon}</span>}
      <span>{children}</span>
    </Link>
  )
}

export default Button;