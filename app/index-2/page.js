
import Layout from "@/components/layout/Layout"
import Cases from "@/components/sections/home2/Cases"
import Partner from "@/components/sections/home2/Partner"
import Service from "@/components/sections/home2/Service"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Cta from "@/components/sections/home2/Cta"
import Features from "@/components/sections/home2/Features"
import Pricing from "@/components/sections/home2/Service"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"

export const metadata = {
    robots: {
        index: false,
        follow: true,
    },
}


export default function Home() {

    return (
        <>
            <div className="homestyle2">
                <Layout headerStyle={2} footerStyle={2}>
                    <Banner />
                    <Service />
                    <Partner />
                    <About />
                    <Cases />
                    <Pricing />
                    <Testimonial />
                    <Team />
                    <Features />
                    <Blog />
                    <Cta />                
                </Layout>
            </div>
        </>
    )
}