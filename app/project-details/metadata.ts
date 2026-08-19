import { Metadata } from 'next'

const siteUrl = 'https://www.orgits.in'

export const metadata: Metadata = {
    title: 'Solution Details | Orgits Business Solutions',
    description: 'Explore detailed solution capabilities from Orgits Business Solutions - digital platforms, business systems, IT governance, audit, and compliance services.',
    keywords: 'business technology solutions, digital platforms, business systems, IT governance, audit, compliance, cloud migration, software development',
    openGraph: {
        title: 'Solution Details | Orgits Business Solutions',
        description: 'Explore detailed solution capabilities from Orgits Business Solutions - digital platforms, business systems, IT governance, audit, and compliance services.',
        url: `${siteUrl}/project-details`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-project-details.jpg`,
                width: 1200,
                height: 630,
                alt: 'Orgits Solution Details',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Solution Details | Orgits Business Solutions',
        description: 'Explore detailed solution capabilities from Orgits Business Solutions - digital platforms, business systems, IT governance, audit, and compliance services.',
        images: [`${siteUrl}/assets/img/og-project-details.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/project-details`,
    },
}