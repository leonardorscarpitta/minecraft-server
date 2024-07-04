import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Footer from "@/components/footer/footer";
import "./page.module.css"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
