import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Planos from "@/components/Planos";
import Slider from "@/components/Slider";


export default function Home() {
  return (
  <div className="w-full dark:bg-zinc-950 h-full">
    <Header />

    <Slider />

    <Planos />


    <Beneficios />


   <Footer />
  </div>
  )
}
