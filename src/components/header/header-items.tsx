import { ComponentProps } from "react"
import Link from "next/link"

interface HeaderItemsProps extends ComponentProps<'a'> {
  pageName: string,
}

export function HeaderItems(props: HeaderItemsProps) {
  return (
    <li>
      <Link href="./">
        {props.pageName}
      </Link>
    </li>
  )
}