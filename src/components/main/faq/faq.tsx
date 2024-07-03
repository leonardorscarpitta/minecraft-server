import "./faq.modules.scss"

interface FaqProps {
  question: string,
  answer: string
}

export default function Faq(props : FaqProps) {
  return (
    <details>
      <summary>{props.question}</summary>
      <p>{props.answer}</p>
    </details>
  )
}