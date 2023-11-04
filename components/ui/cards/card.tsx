import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  caption: string;
  image: string;
};

export default function Card({
  title,
  subtitle,
  caption,
  image,
  ...props
}: CardProps) {
  return (
    <div>
      <Image src={image} alt={title} />
    </div>
  );
}
