import Layout from "@/components/layout/Layout"
import ServicesContent from "@/components/sections/services/ServicesContent"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const servicesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Technology Services',
    description: 'Explore Orgits services including software development, web and mobile apps, CRM automation, digital marketing, cloud solutions, IT consulting and IS Audit & compliance.',
    url: `${siteUrl}/services`,
    provider: {
        '@type': 'Organization',
        name: 'Orgits Business Solutions Pvt. Ltd.',
        url: siteUrl,
    },
    serviceType: [
        'Product Development',
        'Web & Mobile App Development',
        'Digital Marketing',
        'CRM & Marketing Automation',
        'IS Audit & IT Compliance',
        'Cloud & IT Consulting',
    ],
    areaServed: 'India and globally',
    availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${siteUrl}/contact`,
        servicePhone: '+91 9289687928',
        serviceEmail: 'hello@orgits.in',
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
            name: 'Services',
            item: 'https://www.orgits.in/services',
        },
    ],
}

export const metadata = {
    title: 'Our Services | Orgits Business Solutions',
    description: 'Explore Orgits services including software development, web and mobile apps, CRM automation, digital marketing, cloud solutions, IT consulting and IS Audit & compliance.',
    openGraph: {
        title: 'Our Services | Orgits Business Solutions',
        description: 'Explore Orgits services including software development, web and mobile apps, CRM automation, digital marketing, cloud solutions, IT consulting and IS Audit & compliance.',
        url: 'https://www.orgits.in/services',
        type: 'website',
        images: [
            {
                url: 'https://www.orgits.in/assets/img/og-default.jpg',
                width: 1200,
                height: 630,
                alt: 'Orgits Business Solutions Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Services | Orgits Business Solutions',
        description: 'Explore Orgits services including software development, web and mobile apps, CRM automation, digital marketing, cloud solutions, IT consulting and IS Audit & compliance.',
        images: ['https://www.orgits.in/assets/img/og-default.jpg'],
    },
    alternates: {
        canonical: 'https://www.orgits.in/services',
    },
}

export default function Services() {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([servicesPageSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Services">
                <ServicesContent />
            </Layout>
        </>
    )
}