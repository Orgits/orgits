import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { interTight, gilroy } from '@/lib/font'
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'
const orgName = 'Orgits Business Solutions Pvt. Ltd.'
const orgDescription = 'Orgits Business Solutions helps enterprises and startups build, automate and scale through software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.'

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Orgits Business Solutions Pvt. Ltd.',
    url: siteUrl,
    logo: `${siteUrl}/assets/img/resource/logo-3.svg`,
    email: 'hello@orgits.in',
    telephone: '+91 9289687928',
    sameAs: [
        'https://www.linkedin.com/company/orgits',
    ],
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'India',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 9289687928',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
    },
}

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: orgName,
    url: siteUrl,
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
}

export const metadata = {
    title: {
        default: 'Orgits Business Solutions | Technology, AI & Digital Transformation',
        template: '%s | Orgits Business Solutions',
    },
    description: orgDescription,
    keywords: [
        'technology solutions',
        'AI solutions',
        'software development',
        'digital transformation',
        'CRM automation',
        'marketing automation',
        'digital marketing',
        'cloud solutions',
        'IT consulting',
        'IS audit',
        'IT compliance',
        'cybersecurity',
        'RBI compliance',
    ],
    authors: [{ name: 'Orgits Business Solutions Pvt. Ltd.' }],
    creator: 'Orgits Business Solutions Pvt. Ltd.',
    publisher: 'Orgits Business Solutions Pvt. Ltd.',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: siteUrl,
        siteName: 'Orgits Business Solutions',
        title: 'Orgits Business Solutions | Technology, AI & Digital Transformation',
        description: orgDescription,
        images: [
            {
                url: `${siteUrl}/assets/img/og-default.jpg`,
                width: 1200,
                height: 630,
                alt: 'Orgits Business Solutions - Technology, AI & Digital Transformation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@orgits',
        creator: '@orgits',
        title: 'Orgits Business Solutions | Technology, AI & Digital Transformation',
        description: orgDescription,
        images: [`${siteUrl}/assets/img/og-default.jpg`],
    },
    alternates: {
        canonical: siteUrl,
    },
    verification: {
        google: 'google-site-verification-code',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${interTight.variable} ${gilroy.variable}`}>
            <head>
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.youtube.com" />
                <link rel="canonical" href={siteUrl} />
                <link rel="sitemap" href={`${siteUrl}/sitemap.xml`} />
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
            </head>
            <body className={`${interTight.variable} ${gilroy.variable}`}>{children}</body>
        </html>
    )
}