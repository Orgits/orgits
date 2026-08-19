import { Metadata } from 'next'

const siteUrl = 'https://www.orgits.in'

export const metadata: Metadata = {
    title: 'FAQ | Orgits Business Solutions',
    description: 'Find answers to common questions about Orgits Business Solutions services, engagement models, pricing, and project delivery.',
    keywords: 'FAQ, Orgits, engagement models, pricing, project delivery, staff augmentation, fixed scope projects',
    openGraph: {
        title: 'FAQ | Orgits Business Solutions',
        description: 'Find answers to common questions about Orgits Business Solutions services, engagement models, pricing, and project delivery.',
        url: `${siteUrl}/faq`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-faq.jpg`,
                width: 1200,
                height: 630,
                alt: 'Orgits Business Solutions FAQ',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ | Orgits Business Solutions',
        description: 'Find answers to common questions about Orgits Business Solutions services, engagement models, pricing, and project delivery.',
        images: [`${siteUrl}/assets/img/og-faq.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/faq`,
    },
}