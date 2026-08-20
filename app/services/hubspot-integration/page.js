import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot Integration Services',
    description: 'Connect HubSpot with ERP, e-commerce, analytics, advertising, communication and custom systems via native connectors, Operations Hub, private apps and middleware.',
    url: `${siteUrl}/services/hubspot-integration`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'HubSpot Integration',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'HubSpot', item: `${siteUrl}/services/hubspot` },
        { '@type': 'ListItem', position: 3, name: 'HubSpot Integration', item: `${siteUrl}/services/hubspot-integration` },
    ],
}

export const metadata = {
    title: 'HubSpot Integration | Orgits Business Solutions',
    description: 'Seamless HubSpot integration with ERP (NetSuite, SAP), e-commerce (Shopify, WooCommerce), analytics (GA4, Mixpanel), ads (Google, Meta) and custom APIs via native connectors and middleware.',
    keywords: 'HubSpot integration, ERP integration, e-commerce integration, Shopify, NetSuite, API integration, middleware, data sync',
    openGraph: { title: 'HubSpot Integration | Orgits Business Solutions', description: 'Connect HubSpot with ERP, e-commerce, analytics, ads and custom systems.', url: `${siteUrl}/services/hubspot-integration`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'HubSpot Integration - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'HubSpot Integration | Orgits Business Solutions', description: 'HubSpot integration with ERP, e-commerce and custom systems.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/hubspot-integration` },
}

export default function HubSpotIntegrationPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="HubSpot Integration">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="HubSpot Integration" /></div>
                                        <div className="content-box">
                                            <h2>HubSpot Integration</h2>
                                            <p>
                                                Orgits connects HubSpot with your full technology stack—ERP (NetSuite, SAP, Microsoft Dynamics), e-commerce (Shopify, WooCommerce, Magento), analytics (GA4, Mixpanel, Amplitude), advertising (Google Ads, Meta Ads, LinkedIn) and custom applications—via native connectors, Operations Hub, private apps and purpose-built middleware.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>ERP: NetSuite, SAP, Dynamics, Tally</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>E-commerce: Shopify, WooCommerce, BigCommerce</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Analytics: GA4, Mixpanel, Amplitude, Segment</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Advertising: Google Ads, Meta Ads, LinkedIn Ads</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Communication: Slack, Teams, Zoom, Aircall</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom REST/GraphQL APIs & private apps</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>HubSpot as the Center of Your Revenue Data</h3><p>We design integration architectures that make HubSpot the trusted source of truth for customer, deal and revenue data—synchronizing bidirectionally with conflict resolution, audit trails and governance.</p></div>
                                        <div className="text"><p>Integration projects start with data contract definition—entities, fields, sync frequency, ownership and conflict rules. Native connectors (Shopify, NetSuite, Salesforce, Microsoft Dynamics) handle standard mappings. Operations Hub enables custom property mapping, scheduled syncs and data quality automation. For complex or unsupported systems, we build private apps (Node.js, Python) with OAuth, webhook subscriptions and rate-limit compliance. Patterns include real-time (webhooks), near-real-time (polling) and batch (scheduled ETL). Error handling covers retries, dead-letter queues, alerting and manual reconciliation. All integrations include monitoring dashboards, schema versioning, CI/CD pipelines and runbooks. We conduct knowledge transfer for internal maintenance.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="HubSpot ERP Integration" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Reliable integration handles failure gracefully, not just success paths.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Idempotency for duplicate prevention</p></div></li><li><div className="circle-box"></div><div className="text"><p>Schema validation & transformation layers</p></div></li><li><div className="circle-box"></div><div className="text"><p>Circuit breakers & rate limit compliance</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/hubspot-automation"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/hubspot-automation">HubSpot Automation</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/website-design">Website Design</Link></h3></div><div className="icon"><Link href="/services/website-design"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>HubSpot Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/hubspot-implementation">HubSpot Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-crm">HubSpot CRM<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-marketing-hub">HubSpot Marketing Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-sales-hub">HubSpot Sales Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-automation">HubSpot Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/hubspot-integration">HubSpot Integration<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}