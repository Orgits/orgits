import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Marketing Services',
    description: 'Data-driven paid advertising across Google Ads, Meta Ads, LinkedIn and programmatic channels to generate qualified leads and measurable revenue.',
    url: `${siteUrl}/services/performance-marketing`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Performance Marketing',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Marketing', item: `${siteUrl}/digital-marketing` },
        { '@type': 'ListItem', position: 3, name: 'Performance Marketing', item: `${siteUrl}/services/performance-marketing` },
    ],
}

export const metadata = {
    title: 'Performance Marketing | Orgits Business Solutions',
    description: 'Drive qualified leads and revenue with data-driven paid advertising across Google Ads, Meta Ads, LinkedIn and programmatic channels. Transparent reporting, continuous optimization.',
    keywords: 'performance marketing, paid advertising, Google Ads, Meta Ads, PPC, lead generation, ROAS',
    openGraph: { title: 'Performance Marketing | Orgits Business Solutions', description: 'Drive qualified leads and revenue with data-driven paid advertising.', url: `${siteUrl}/services/performance-marketing`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Performance Marketing - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Performance Marketing | Orgits Business Solutions', description: 'Data-driven paid advertising for qualified leads and revenue.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/performance-marketing` },
}

export default function PerformanceMarketingPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Performance Marketing">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="Performance Marketing" /></div>
                                        <div className="content-box">
                                            <h2>Performance Marketing</h2>
                                            <p>
                                                Orgits manages performance advertising campaigns that connect spend directly to business outcomes. We build, launch and optimize paid media across search, social and programmatic channels with a focus on qualified lead generation and measurable return on ad spend.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Google Ads (Search, Display, Shopping, YouTube)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Meta Ads (Facebook, Instagram, Messenger)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>LinkedIn Ads for B2B lead generation</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Programmatic & retargeting</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Landing page optimization & CRO</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Analytics, attribution & dashboard reporting</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Paid Media That Delivers Pipeline, Not Just Clicks</h3><p>We structure campaigns around your unit economics—target CAC, LTV and payback period—then optimize daily toward those constraints.</p></div>
                                        <div className="text"><p>Our process starts with audience research, offer validation and funnel mapping. We build campaign structures that isolate variables for testing, implement conversion tracking with offline import for lead quality feedback, and establish creative testing frameworks. Budget allocation follows performance data, not assumptions. Weekly optimization cycles cover bid strategies, audience expansion, creative refresh and landing page experiments. Reporting ties ad spend to MQLs, SQLs, opportunities and closed revenue.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="Performance Marketing Process" /></div></div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="content-box"><p>Effective performance marketing aligns creative, targeting, landing experience and CRM feedback into a single optimization loop.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Account structure for granular control</p></div></li><li><div className="circle-box"></div><div className="text"><p>Creative testing framework (hook, value prop, format)</p></div></li><li><div className="circle-box"></div><div className="text"><p>Offline conversion import for lead quality</p></div></li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/seo"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/seo">SEO</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/content-marketing">Content Marketing</Link></h3></div><div className="icon"><Link href="/services/content-marketing"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="service-details__sidebar">
                                    <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div>
                                    <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Marketing Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/digital-marketing">Digital Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/seo">SEO<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/performance-marketing">Performance Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/content-marketing">Content Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/marketing-strategy">Marketing Strategy<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-automation">CRM & Marketing Automation<span className="icon-right-arrow-angle"></span></Link></li></ul></div>
                                    <div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div>
                                    <div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}