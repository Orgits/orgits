import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Service from "@/components/sections/home1/Service"
import Blog from "@/components/sections/home1/Blog"
import Testimonial from "@/components/sections/home1/Testimonial"
import Cta from "@/components/sections/home1/Cta"
import Partner from "@/components/sections/home1/Partner"
import Project from "@/components/sections/home1/Project"
import Team from "@/components/sections/home1/Team"
import Work from "@/components/sections/home1/Work"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Orgits Business Solutions | Technology, AI & Digital Transformation',
    description: 'Orgits Business Solutions helps enterprises and startups build, automate and scale through software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.',
    url: 'https://www.orgits.in/',
    publisher: {
        '@type': 'Organization',
        name: 'Orgits Business Solutions Pvt. Ltd.',
    },
    mainEntity: {
        '@type': 'Organization',
        name: 'Orgits Business Solutions Pvt. Ltd.',
        description: 'Orgits Business Solutions helps enterprises and startups build, automate and scale through software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.',
        url: 'https://www.orgits.in/',
        logo: 'https://www.orgits.in/assets/img/resource/logo-3.svg',
        email: 'hello@orgits.in',
        telephone: '+91 9289687928',
        sameAs: [
            'https://www.linkedin.com/company/orgits',
        ],
    },
}

export const metadata = {
    title: 'Orgits Business Solutions | Technology, AI & Digital Transformation',
    description: 'Orgits Business Solutions helps enterprises and startups build, automate and scale through software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.',
    keywords: 'technology solutions, AI solutions, software development, digital transformation, CRM automation, marketing automation, digital marketing, cloud solutions, IT consulting, IS audit, IT compliance',
    openGraph: {
        title: 'Orgits Business Solutions | Technology, AI & Digital Transformation',
        description: 'Orgits Business Solutions helps enterprises and startups build, automate and scale through software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.',
        url: 'https://www.orgits.in/',
        siteName: 'Orgits Business Solutions',
        type: 'website',
        images: [
            {
                url: 'https://www.orgits.in/assets/img/og-default.jpg',
                width: 1200,
                height: 630,
                alt: 'Orgits Business Solutions - Technology, AI & Digital Transformation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Orgits Business Solutions | Technology, AI & Digital Transformation',
        description: 'Orgits Business Solutions helps enterprises and startups build, automate and scale through software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.',
        images: ['https://www.orgits.in/assets/img/og-default.jpg'],
    },
    alternates: {
        canonical: 'https://www.orgits.in/',
    },
}

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Service />
                <About />
                <Partner />
                <Project />
                <Cta />
                <Team />
                <Work />
                <Testimonial />
                <Blog />
            </Layout>
        </>
    )
}