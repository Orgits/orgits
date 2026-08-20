import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot Sales Hub Services',
    description: 'HubSpot Sales Hub optimization—sequences, meeting scheduling, quotes, forecasting, conversation intelligence and pipeline management.',
    url: `${siteUrl}/services/hubspot-sales-hub`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'HubSpot Sales Hub',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'HubSpot', item: `${siteUrl}/services/hubspot` },
        { '@type': 'ListItem', position: 3, name: 'HubSpot Sales Hub', item: `${siteUrl}/services/hubspot-sales-hub` },
    ],
}

export const metadata = {
    title: 'HubSpot Sales Hub | Orgits Business Solutions',
    description: 'Accelerate sales with HubSpot Sales Hub—sequences, meeting scheduling, quote generation, forecasting, conversation intelligence and pipeline automation.',
    keywords: 'HubSpot Sales Hub, sales sequences, meeting scheduler, quotes, forecasting, conversation intelligence, pipeline management',
    openGraph: { title: 'HubSpot Sales Hub | Orgits Business Solutions', description: 'HubSpot Sales Hub optimization—sequences, meetings, quotes, forecasting and conversation intelligence.', url: `${siteUrl}/services/hubspot-sales-hub`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'HubSpot Sales Hub - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'HubSpot Sales Hub | Orgits Business Solutions', description: 'HubSpot Sales Hub for sales acceleration.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/hubspot-sales-hub` },
}

export default function HubSpotSalesHubPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="HubSpot Sales Hub">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="HubSpot Sales Hub" /></div>
                                        <div className="content-box">
                                            <h2>HubSpot Sales Hub</h2>
                                            <p>
                                                Orgits configures HubSpot Sales Hub to accelerate your sales motion—automated outreach sequences, frictionless meeting scheduling, professional quotes, accurate forecasting and conversation intelligence for coaching.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Sales sequences & task automation</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Meeting scheduler & calendar integration</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Quote generation & e-signature</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Forecasting & pipeline management</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Conversation intelligence (call recording, AI insights)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Sales workspace & productivity tools</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Less Admin, More Selling</h3><p>We eliminate manual CRM work through automation—contact enrichment, activity logging, task creation and deal updates—so reps focus on conversations that advance deals.</p></div>
                                        <div className="text"><p>Sales Hub implementation aligns tooling to your sales methodology. Sequences are built for each persona and stage with A/B tested templates, optimal timing rules and reply detection. Meeting links embed availability, routing rules and buffer times. Quote templates pull from product library, apply discount rules and integrate e-signature. Forecasting categories map to your sales process with weighted probabilities. Conversation intelligence records, transcribes and analyzes calls for coaching moments, competitor mentions and objection patterns. Pipeline automation updates deal stages, creates follow-up tasks and alerts stakeholders on risk signals. All configurations include rep onboarding, manager enablement and adoption dashboards.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img5.jpg" alt="HubSpot Sales Sequences" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Sales tools should reduce friction, not add clicks.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Mobile app for field reps</p></div></li><li><div className="circle-box"></div><div className="text"><p>Mobile app for field reps</p></div></li><li><div className="circle-box"></div><div className="text"><p>Mobile app for field reps</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/hubspot-marketing-hub"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/hubspot-marketing-hub">HubSpot Marketing Hub</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/hubspot-automation">HubSpot Automation</Link></h3></div><div className="icon"><Link href="/services/hubspot-automation"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>HubSpot Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/hubspot-implementation">HubSpot Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-crm">HubSpot CRM<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-marketing-hub">HubSpot Marketing Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/hubspot-sales-hub">HubSpot Sales Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-automation">HubSpot Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-integration">HubSpot Integration<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}