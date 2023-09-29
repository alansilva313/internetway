import Header from "@/components/Header";
import Planos from "@/components/Planos";
import Slider from "@/components/Slider";


export default function Home() {
  return (
  <div className="w-full h-screen">
    <Header />

    <Slider />

    <Planos />

  </div>
  )
}
