import Image from "next/image"
import { HeaderItems } from "./header-items/header-items"
import Login from "./login/login"
import styles from "./header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.headerimg}
      src="https://img.icons8.com/doodle/128/minecraft-grass-cube.png"
      alt="Logo do servidor"
      width={60}
      height={60}
      />

      <nav>
        <ul className={styles.itemsList}>
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