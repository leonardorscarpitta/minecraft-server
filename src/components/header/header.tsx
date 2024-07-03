import Image from "next/image"
import { HeaderItems } from "./header-items"
import Login from "./login"
import "./header.modules.scss"

export default function Header() {
  return (
    <header>
      <Image className="header-img"
      src="https://img.icons8.com/doodle/128/minecraft-grass-cube.png"
      alt="Logo do servidor"
      width={60}
      height={60}
      />

      <nav>
        <ul>
          <HeaderItems pageName="Home"/>
          <HeaderItems pageName="Loja"/>
          <HeaderItems pageName="Redes Sociais"/>
          <HeaderItems pageName="Pacerias"/>
          <HeaderItems pageName="IP"/>
        </ul>
      </nav>

      <Login/>
    </header>
  )
}