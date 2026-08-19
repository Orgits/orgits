import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'
import ContactForm from './ContactForm'

const siteUrl = 'https://www.orgits.in'

const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Orgits Business Solutions',
    description: 'Contact Orgits Business Solutions for technology, digital transformation, CRM automation, digital marketing, cloud solutions or IT governance requirements.',
    url: `${siteUrl}/contact`,
    mainEntity: {
        '@type': 'Organization',
        name: 'Orgits Business Solutions Pvt. Ltd.',
        url: siteUrl,
        logo: `${siteUrl}/assets/img/resource/logo-3.svg`,
        email: 'hello@orgits.in',
        telephone: '+91 9289687928',
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
    },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
    ],
}

export const metadata = {
    title: 'Contact Orgits Business Solutions | Technology & IT Consulting',
    description: 'Contact Orgits Business Solutions for technology, digital transformation, CRM automation, digital marketing, cloud solutions or IT governance requirements.',
    keywords: 'contact Orgits, technology consulting, IT consulting, digital transformation, software development contact',
    openGraph: {
        title: 'Contact Orgits Business Solutions | Technology & IT Consulting',
        description: 'Contact Orgits Business Solutions for technology, digital transformation, CRM automation, digital marketing, cloud solutions or IT governance requirements.',
        url: `${siteUrl}/contact`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-contact.jpg`,
                width: 1200,
                height: 630,
                alt: 'Contact Orgits Business Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Orgits Business Solutions | Technology & IT Consulting',
        description: 'Contact Orgits Business Solutions for technology, digital transformation, CRM automation, digital marketing, cloud solutions or IT governance requirements.',
        images: [`${siteUrl}/assets/img/og-contact.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/contact`,
    },
}

export default function Home() {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([contactSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact">
                {/*Start Contact Page*/}
                <section className="contact-page" aria-labelledby="contact-heading">
                    <div className="contact-page__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-page__top-content">
<div className="contact-page__top-content-top sec-title-animation animation-style1">
                                             <h1 id="contact-heading">Let's Build Something That Matters</h1>
                                            <p>Tell us about your business, technology, marketing or compliance requirement. Our team will review your needs and help identify the right next step.</p>
                                        </div>

                                        <div className="contact-page__top-content-bottom">
                                            <h2>Contact Info</h2>
                                            <ul>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-pin"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <h4>Address</h4>
                                                            <p>India / Serving businesses across India and globally</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-phone-call"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <h4>Phone</h4>
                                                            <p><Link href="tel:+919289687928">+91 9289687928</Link></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-email"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <h4>Email</h4>
                                                            <p><Link href="mailto:hello@orgits.in">hello@orgits.in</Link></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-globe"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <h4>Website</h4>
                                                            <p><Link href="https://www.orgits.in" target="_blank" rel="noopener noreferrer">www.orgits.in</Link></p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-page__google-map" data-placeholder="No verified physical office location available">
                                        <div style={{backgroundColor: 'var(--thm-gray-bg)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--thm-text-muted)', borderRadius: '8px', border: '1px solid var(--thm-border-color)'}}> </div>
</div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="contact-page__bottom">
                    {/*Start Contact Two*/}
                    <div className="contact-page__bottom-form">
                        <div className="container">
                            <div className="contact-page__bottom-form-inner">
                                <div className="title-box sec-title-animation animation-style1">
                                    <h2>Let's Get in Touch</h2>
                                    <p>Tell us what you are looking to build, automate, improve or secure.</p>
                                </div>
                                <div className="contact-page__bottom-form-inner-box">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Contact Two*/}
                </div>
            </section>
            {/*End Contact Page*/}

            </Layout>
        </>
    )
}