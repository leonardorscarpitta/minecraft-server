import "./faq.module.scss"
import styles from "./faq.module.scss"

interface FaqProps {
  question: string,
  answer: string
}

export default function Faq(props : FaqProps) {
  return (
    <details className={styles.details}>
      <summary className={styles.question}>{props.question}</summary>
      <p className={styles.answer}>{props.answer}</p>
    </details>
  )
}