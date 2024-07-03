import "./main.modules.scss"
import CardLoja from "./card/card-loja"
import VideoSection from "./video-section/video-section"
import Faq from "./faq/faq"

export default function Main() {
  return (
    <main>

      <VideoSection />

      <h2 className="underline">Loja</h2>
      <section className="cards">
        <CardLoja url="https://img.icons8.com/stickers/512/minecraft-pickaxe.png" altText="Icone de card" text="Lorem"/>
        <CardLoja url="https://img.icons8.com/color/512/badlion.png" altText="Icone de card"  text="Lorem"/>
        <CardLoja url="https://img.icons8.com/bubbles/512/master-craft.png" altText="Icone de card"  text="Lorem"/>
        <CardLoja url="https://img.icons8.com/cute-clipart/512/lunar-client.png" altText="Icone de card"  text="Lorem"/>
        <CardLoja url="https://img.icons8.com/clouds/512/minecraft-grass-cube.png" altText="Icone de card"  text="Lorem"/>
      </section>

      <section className="faq">
        <h2 className="underline">Perguntas Frequentes</h2>
        <Faq question="Lorem" answer="Lorem Lorem Lorem Lorem Lorem" />
        <Faq question="Lorem" answer="Lorem Lorem Lorem Lorem Lorem" />
        <Faq question="Lorem" answer="Lorem Lorem Lorem Lorem Lorem" />
        <Faq question="Lorem" answer="Lorem Lorem Lorem Lorem Lorem" />
      </section>
    </main>
  )
}