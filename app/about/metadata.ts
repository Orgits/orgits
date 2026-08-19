import { Metadata } from 'next'

const siteUrl = 'https://www.orgits.in'

export const metadata: Metadata = {
    title: 'About Orgits Business Solutions | Technology & IT Consulting',
    description: 'Learn about Orgits Business Solutions, a technology and business solutions company providing software development, automation, digital marketing, cloud and IT governance services.',
    keywords: 'about Orgits, technology company, IT consulting, software development company, digital transformation company',
    openGraph: {
        title: 'About Orgits Business Solutions | Technology & IT Consulting',
        description: 'Learn about Orgits Business Solutions, a technology and business solutions company providing software development, automation, digital marketing, cloud and IT governance services.',
        url: 'https://www.orgits.in/about',
        type: 'website',
        images: [
            {
                url: 'https://www.orgits.in/assets/img/og-about.jpg',
                width: 1200,
                height: 630,
                alt: 'About Orgits Business Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Orgits Business Solutions | Technology & IT Consulting',
        description: 'Learn about Orgits Business Solutions, a technology and business solutions company providing software development, automation, digital marketing, cloud and IT governance services.',
        images: ['https://www.orgits.in/assets/img/og-about.jpg'],
    },
    alternates: {
        canonical: 'https://www.orgits.in/about',
    },
}