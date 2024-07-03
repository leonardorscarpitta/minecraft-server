import "./main.modules.scss"
import CardLoja from "./loja/card-loja"

export default function Main() {
  return (
    <main>
      <h2>Loja</h2>
      <div className="cards">
        <CardLoja url="https://img.icons8.com/clouds/512/minecraft-grass-cube.png" size={256} altText="Icone de card" text="Compre já!"/>
        <CardLoja url="https://img.icons8.com/clouds/512/minecraft-grass-cube.png" size={256} altText="Icone de card"  text="Compre já!"/>
        <CardLoja url="https://img.icons8.com/clouds/512/minecraft-grass-cube.png" size={256} altText="Icone de card"  text="Compre já!"/>
      </div>
    </main>
  )
}