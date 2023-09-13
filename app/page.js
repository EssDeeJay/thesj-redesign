import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shopify Developers & Experts - The SJ Development",
  description: "We are the team of shopify specialist developers and experts who have experience in developing killer website designs."
}

export default function Home() {
  return (
    <main>
        <Hero />
        <Brands />
        <Features />
        <About />
        <FeaturesTab />   
        <FunFact />  
        <Integration />  
        <CTA />
        <FAQ />
        <Testimonial />
        <Contact />
        <Footer />
    </main>
  )
}
