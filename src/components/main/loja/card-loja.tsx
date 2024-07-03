import { ImgHTMLAttributes } from "react"
import "./card-loja.modules.scss"
import Image from "next/image"

interface CardLojaProps {
  text: string,
  altText: string,
  url: string,
  size: number,
}

export default function CardLoja(props: CardLojaProps) {
  return (
    <div className="itemLoja">
      <p>{props.text}</p>
      <Image
      src={props.url}
      width={props.size}
      height={props.size}
      alt={props.altText}
      />
    </div>
  )
}