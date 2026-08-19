import { Metadata } from 'next'

const siteUrl = 'https://www.orgits.in'

export const metadata: Metadata = {
    title: 'Business Technology Services | Orgits Business Solutions',
    description: 'Explore Orgits services including software development, web and mobile apps, CRM automation, digital marketing, cloud solutions, IT consulting and IS Audit & compliance.',
    keywords: 'software development services, web development services, mobile app development, digital marketing services, CRM automation, IT consulting, IS audit, cloud consulting',
    openGraph: {
        title: 'Business Technology Services | Orgits Business Solutions',
        description: 'Explore Orgits services including software development, web and mobile apps, CRM automation, digital marketing, cloud solutions, IT consulting and IS Audit & compliance.',
        url: 'https://www.orgits.in/services',
        type: 'website',
        images: [
            {
                url: 'https://www.orgits.in/assets/img/og-services.jpg',
                width: 1200,
                height: 630,
                alt: 'Orgits Business Technology Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Business Technology Services | Orgits Business Solutions',
        description: 'Explore Orgits services including software development, web and mobile apps, CRM automation, digital marketing, cloud solutions, IT consulting and IS Audit & compliance.',
        images: ['https://www.orgits.in/assets/img/og-services.jpg'],
    },
    alternates: {
        canonical: 'https://www.orgits.in/services',
    },
}