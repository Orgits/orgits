import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import AboutContent from "@/components/sections/about/AboutContent"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Orgits Business Solutions',
    description: 'Learn about Orgits Business Solutions, a technology and business solutions company providing software development, automation, digital marketing, cloud and IT governance services.',
    url: `${siteUrl}/about`,
    mainEntity: {
        '@type': 'Organization',
        name: 'Orgits Business Solutions Pvt. Ltd.',
        description: 'Orgits Business Solutions provides software development, automation, digital marketing, cloud and IT governance services.',
        url: siteUrl,
        logo: `${siteUrl}/assets/img/resource/logo-3.svg`,
        email: 'hello@orgits.in',
        telephone: '+91 9289687928',
        foundingDate: '2021',
        numberOfEmployees: '50+',
        areaServed: 'India and globally',
        knowsAbout: [
            'Software Development',
            'Web Development',
            'Mobile App Development',
            'UI/UX Design',
            'Digital Marketing',
            'CRM Automation',
            'Marketing Automation',
            'Cloud Computing',
            'IT Consulting',
            'IS Audit',
            'IT Compliance',
            'Cybersecurity',
            'RBI Regulatory Compliance',
        ],
        employee: [
            {
                '@type': 'Person',
                name: 'Anubhav Sharma',
                jobTitle: 'CEO & IT Consultant',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                },
            },
            {
                '@type': 'Person',
                name: 'CA Sahil Goyal',
                jobTitle: 'Managing Director',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                },
            },
            {
                '@type': 'Person',
                name: 'Sahil Khan',
                jobTitle: 'RevOps & Automation Strategist',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                },
            },
            {
                '@type': 'Person',
                name: 'Mohammad Sahil',
                jobTitle: 'Senior Product Designer',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                },
            },
        ],
    },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.orgits.in/',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://www.orgits.in/about',
        },
    ],
}

export const metadata = {
    title: 'About Orgits Business Solutions | Technology & Business Solutions',
    description: 'Learn about Orgits Business Solutions - a technology and business solutions company providing software development, automation, digital marketing, cloud and IT governance services.',
    openGraph: {
        title: 'About Orgits Business Solutions | Technology & Business Solutions',
        description: 'Learn about Orgits Business Solutions - a technology and business solutions company.',
        url: 'https://www.orgits.in/about',
        type: 'website',
        images: [
            {
                url: 'https://www.orgits.in/assets/img/og-default.jpg',
                width: 1200,
                height: 630,
                alt: 'About Orgits Business Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Orgits Business Solutions | Technology & Business Solutions',
        description: 'Learn about Orgits Business Solutions - a technology and business solutions company.',
        images: ['https://www.orgits.in/assets/img/og-default.jpg'],
    },
    alternates: {
        canonical: 'https://www.orgits.in/about',
    },
}

export default function About() {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutPageSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About Orgits">
                <AboutContent />
            </Layout>
        </>
    )
}