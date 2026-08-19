import { Metadata } from 'next'

const siteUrl = 'https://www.orgits.in'

export const metadata: Metadata = {
    title: 'Client Testimonials | Orgits Business Solutions',
    description: 'Read what clients say about Orgits Business Solutions - technology, marketing, and compliance solutions for businesses.',
    keywords: 'client testimonials, Orgits reviews, technology consulting reviews, digital marketing agency reviews',
    openGraph: {
        title: 'Client Testimonials | Orgits Business Solutions',
        description: 'Read what clients say about Orgits Business Solutions - technology, marketing, and compliance solutions for businesses.',
        url: `${siteUrl}/testimonial`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-testimonial.jpg`,
                width: 1200,
                height: 630,
                alt: 'Orgits Client Testimonials',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Client Testimonials | Orgits Business Solutions',
        description: 'Read what clients say about Orgits Business Solutions - technology, marketing, and compliance solutions for businesses.',
        images: [`${siteUrl}/assets/img/og-testimonial.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/testimonial`,
    },
}