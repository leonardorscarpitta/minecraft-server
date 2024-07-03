import { ImgHTMLAttributes } from "react"
import "./card-loja.modules.scss"
import Image from "next/image"

interface CardLojaProps {
  text: string,
  altText: string,
  url: string,
}

export default function CardLoja(props: CardLojaProps) {
  return (
    <div className="itemLoja">
      <p>{props.text}</p>
      <Image
      className="item-pic"
      src={props.url}
      width={160}
      height={160}
      alt={props.altText}
      />
    </div>
  )
}