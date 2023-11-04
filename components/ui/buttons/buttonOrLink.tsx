import { ComponentProps } from "react";
import Link from "next/link";

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export interface Props extends ButtonOrLinkProps {}

export function ButtonOrLink({ href, ...props }: Props) {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "a" : "button";

  let content = <ButtonOrLink {...props} />;

  if (typeof href === "string") {
    return (
      <Link href={href} className={props.className}>
        {props.children}
      </Link>
    );
  }

  return content;
}
