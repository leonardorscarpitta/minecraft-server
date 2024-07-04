import { ComponentProps } from "react"
import Link from "next/link"
import styles from "./header-items.module.scss"

interface HeaderItemsProps extends ComponentProps<'a'> {
  pageName: string,
}

export function HeaderItems(props: HeaderItemsProps) {
  return (
    <li>
      <Link className={styles.link} href="./">
        {props.pageName}
      </Link>
    </li>
  )
}