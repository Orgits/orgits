import { Metadata } from 'next'

const siteUrl = 'https://www.orgits.in'

export const metadata: Metadata = {
    title: 'Engagement Models | Orgits Business Solutions',
    description: 'Explore flexible engagement models from Orgits Business Solutions - Fixed Scope Projects, Time & Material, and Staff Augmentation to suit different project needs.',
    keywords: 'engagement models, fixed scope projects, time and material, staff augmentation, software development pricing, IT consulting pricing',
    openGraph: {
        title: 'Engagement Models | Orgits Business Solutions',
        description: 'Explore flexible engagement models from Orgits Business Solutions - Fixed Scope Projects, Time & Material, and Staff Augmentation to suit different project needs.',
        url: `${siteUrl}/pricing`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-pricing.jpg`,
                width: 1200,
                height: 630,
                alt: 'Orgits Engagement Models',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Engagement Models | Orgits Business Solutions',
        description: 'Explore flexible engagement models from Orgits Business Solutions - Fixed Scope Projects, Time & Material, and Staff Augmentation to suit different project needs.',
        images: [`${siteUrl}/assets/img/og-pricing.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/pricing`,
    },
}