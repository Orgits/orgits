import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing Creatives Services',
    description: 'Performance marketing creatives—ad design, landing page design, email templates, CRO-focused creative testing and creative strategy for paid channels.',
    url: `${siteUrl}/services/marketing-creatives`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Marketing Creatives',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Creative Design', item: `${siteUrl}/uiux-design` },
        { '@type': 'ListItem', position: 3, name: 'Marketing Creatives', item: `${siteUrl}/services/marketing-creatives` },
    ],
}

export const metadata = {
    title: 'Marketing Creatives | Orgits Business Solutions',
    description: 'High-converting marketing creatives—ad design, landing pages, email templates, creative testing frameworks and CRO optimization. Data-driven creative for paid channels.',
    keywords: 'marketing creatives, ad design, landing page design, email templates, creative testing, CRO, conversion optimization, paid media creative',
    openGraph: { title: 'Marketing Creatives | Orgits Business Solutions', description: 'Performance marketing creatives—ad design, landing pages, email templates and creative testing.', url: `${siteUrl}/services/marketing-creatives`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Marketing Creatives - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Marketing Creatives | Orgits Business Solutions', description: 'High-converting marketing creatives for paid channels.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/marketing-creatives` },
}

export default function MarketingCreativesPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Marketing Creatives">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="Marketing Creatives" /></div>
                                        <div className="content-box">
                                            <h2>Marketing Creatives</h2>
                                            <p>
                                                Orgits creates performance marketing creatives that drive clicks, conversions and revenue. We design ad creatives, landing pages, email templates and creative testing frameworks optimized for Meta, Google, LinkedIn and programmatic channels.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Ad creative design (static, carousel, video, collection)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Landing page design & CRO optimization</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Email & newsletter templates</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Creative testing framework & variant management</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Platform-spec compliance (Meta, Google, LinkedIn)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Creative performance reporting & insights</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Creative That Converts, Backed by Data</h3><p>We treat creative as a variable in the performance equation—testing hooks, value propositions, formats and CTAs systematically to maximize ROAS and minimize CAC.</p></div>
                                        <div className="text"><p>Creative strategy begins with audience research, competitor creative audit and performance baseline analysis. We define creative pillars aligned to funnel stages—awareness (brand story), consideration (product demo, social proof), conversion (offer, urgency, guarantee). Ad creative production follows platform specs with safe zones, aspect ratios and technical requirements. Landing pages implement conversion-centered design—clear value prop, trust signals, single CTA, minimal friction. Email templates use modular components for rapid assembly. Testing framework defines hypothesis, variants, sample size, duration and statistical significance thresholds. Reporting ties creative metrics (CTR, CVR, CPA) to business outcomes (ROAS, LTV, payback). Creative fatigue detection triggers refresh cycles. All creative assets version-controlled with performance metadata.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="Landing Page Design" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Best creative wins are found through structured testing, not guesswork.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Hypothesis-driven creative briefs</p></div></li><li><div className="circle-box"></div><div className="text"><p>Statistical significance thresholds</p></div></li><li><div className="circle-box"></div><div className="text"><p>Creative fatigue monitoring & alerts</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/creative-design"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/creative-design">Creative Design</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/digital-marketing">Digital Marketing</Link></h3></div><div className="icon"><Link href="/digital-marketing"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Creative Design Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/uiux-design">UI/UX Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/website-design">Website Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/brand-design">Brand Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/creative-design">Creative Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/marketing-creatives">Marketing Creatives<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}