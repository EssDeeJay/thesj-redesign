import Hero from "@/components/Hero";
import Brands from "@/components/Brands";

export const metadata = {
  title: "Shopify Developers & Experts - The SJ Development",
  description: "We are the team of shopify specialist developers and experts who have experience in developing killer website designs."
}

export default function Home() {
  return (
    <main>
        <Hero />
        <Brands />       
    </main>
  )
}
