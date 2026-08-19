'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pricingPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Engagement Models',
    description: 'Explore flexible engagement models from Orgits Business Solutions - Fixed Scope Projects, Time & Material, and Staff Augmentation.',
    url: `${siteUrl}/pricing`,
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'Service',
                name: 'Fixed Scope Projects',
                description: 'Best for clearly defined projects with a known scope and delivery requirements. Includes defined scope, timeline, deliverables, fixed price with milestone-based payments, dedicated project management, and quality assurance.',
                provider: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                    url: siteUrl,
                },
                serviceType: 'Fixed Scope Project',
                areaServed: 'India and globally',
                availableChannel: {
                    '@type': 'ServiceChannel',
                    serviceUrl: `${siteUrl}/contact`,
                    servicePhone: '+91 9289687928',
                    serviceEmail: 'hello@orgits.in',
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'Service',
                name: 'Time & Material',
                description: 'Best for projects where scope evolves through weekly sprints and iterative delivery. Includes flexible scope with sprint-based delivery, transparent weekly reporting, ability to scale team up/down, and pay for actual hours worked.',
                provider: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                    url: siteUrl,
                },
                serviceType: 'Time & Material',
                areaServed: 'India and globally',
                availableChannel: {
                    '@type': 'ServiceChannel',
                    serviceUrl: `${siteUrl}/contact`,
                    servicePhone: '+91 9289687928',
                    serviceEmail: 'hello@orgits.in',
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'Service',
                name: 'Staff Augmentation',
                description: 'Hire pre-vetted developers on a contract basis and build a dedicated extension of your team. Includes pre-vetted skilled professionals, minimum 6-month commitment, direct communication and management, and Orgits handles HR, payroll, and benefits.',
                provider: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                    url: siteUrl,
                },
                serviceType: 'Staff Augmentation',
                areaServed: 'India and globally',
                availableChannel: {
                    '@type': 'ServiceChannel',
                    serviceUrl: `${siteUrl}/contact`,
                    servicePhone: '+91 9289687928',
                    serviceEmail: 'hello@orgits.in',
                },
            },
        },
    ],
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Engagement Models', item: `${siteUrl}/pricing` },
    ],
}

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


}
export default function Home() {

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([pricingPageSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Engagement Models">
                {/*Start Pricing One*/}
                <section className="pricing-one">
                    <div className="container">
                        <div className="sec-title-two text-center sec-title-animation animation-style1">
                            <h1 id="pricing-heading">Choose Your <span>Engagement Model</span></h1>
                            <p>We offer flexible engagement models to suit different project needs and organizational structures.</p>
                        </div>
                        <div className="row">

                            {/*Start Single Pricing One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
<div className="pricing-one__single-title">
                                         <h3>Fixed Scope Projects</h3>
                                         <p>Best for clearly defined projects with a known scope and delivery requirements.</p>
                                     </div>
                                     <div className="pricing-one__single-value">
                                         <div className="pricing-value">Custom Pricing<span>/project</span></div>
                                     </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Defined scope, timeline and deliverables</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Fixed price with milestone-based payments</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Dedicated project management</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Quality assurance and UAT included</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="/contact">
                                            <span className="txt">Discuss Your Project</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Pricing One*/}

                            {/*Start Single Pricing One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
                                    <div className="category-box">
                                        <p>Popular Choice</p>
                                    </div>
<div className="pricing-one__single-title">
                                         <h3>Time & Material</h3>
                                         <p>Best for projects where scope evolves through weekly sprints and iterative delivery.</p>
                                     </div>
                                     <div className="pricing-one__single-value">
                                         <div className="pricing-value">Custom Rates<span>/hour</span></div>
                                     </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Flexible scope with sprint-based delivery</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Transparent weekly reporting</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Scale team up/down as needed</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Pay for actual hours worked</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="/contact">
                                            <span className="txt">Discuss Your Project</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Pricing One*/}

                            {/*Start Single Pricing One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
<div className="pricing-one__single-title">
                                         <h3>Staff Augmentation</h3>
                                         <p>Hire pre-vetted developers on a contract basis and build a dedicated extension of your team.</p>
                                     </div>
                                     <div className="pricing-one__single-value">
                                         <div className="pricing-value">Monthly Rate<span>/resource</span></div>
                                     </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Pre-vetted, skilled professionals</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Minimum 6-month commitment</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Direct communication & management</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Orgits handles HR, payroll, benefits</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="/contact">
                                            <span className="txt">Talk to Our Team</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Pricing One*/}

                        </div>
                        <div className="pricing-one__text text-center" style={{marginTop: '40px'}}>
                            <p>Not sure which model fits your needs? <Link href="/contact">Contact us</Link> for a consultation.</p>
                        </div>
                    </div>
                </section>
                {/*End Pricing One*/}

                {/*Start Cta Two*/}
                <section className="cta-two testmonials">
                    <div className="container">
                        <div className="cta-two__inner">
                            <div className="cta-two__inner-bg"
                                style={{ backgroundImage: 'url(assets/img/pattern/cta-two__parttern1.png)' }} ></div>
                            <div className="cta-two__content sec-title-animation animation-style1">
                                <h2>Have a Project in Mind?</h2>
                                <p>Let's discuss your requirements and find the right engagement model for your goals.</p>
                            </div>
                            <div className="cta-two__btn">
                                <Link className="thm-btn" href="/contact">
                                    <span className="txt">Contact Us</span>
                                    <i className="icon-next"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Cta Two*/}

            </Layout>
        </>
    )
}