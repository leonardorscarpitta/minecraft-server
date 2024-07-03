import Header from "@/components/header/header";
import Main from "@/components/main/main";
import "./page.module.css"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}
