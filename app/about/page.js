import TextGenerate from "@/components/TextGenerate";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Story from "@/components/Story";

export const metadata = {
    title: "About Us - The SJ Development | Professional Shopify Developers",
    description: "We are the team of expert shopify developers and designers who have experience in developing killer website designs.We also offer services regarding Google Analytics and Store Consultation."
}

export default function AboutUs(){
    return(
        <main>
            <TextGenerate />
            <Stats />
            <Team />
            <Story />
        </main>
    )
}