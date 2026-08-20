import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zoho Integration',
    description: 'Connect Zoho CRM, Books, Inventory, Desk, Marketing and third-party applications via native connectors, Zoho Flow, REST APIs and custom middleware.',
    url: `${siteUrl}/services/zoho-integration`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Zoho Integration',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Zoho CRM', item: `${siteUrl}/services/zoho-crm` },
        { '@type': 'ListItem', position: 3, name: 'Zoho Integration', item: `${siteUrl}/services/zoho-integration` },
    ],
}

export const metadata = {
    title: 'Zoho Integration | Orgits Business Solutions',
    description: 'Seamless integration between Zoho apps (CRM, Books, Inventory, Desk, Marketing) and external systems—ERP, e-commerce, telephony, email, payment gateways and custom APIs.',
    keywords: 'Zoho integration, Zoho Flow, API integration, ERP integration, e-commerce integration, telephony integration, middleware',
    openGraph: { title: 'Zoho Integration | Orgits Business Solutions', description: 'Connect Zoho apps with ERP, e-commerce, telephony and custom systems via native connectors and APIs.', url: `${siteUrl}/services/zoho-integration`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Zoho Integration - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Zoho Integration | Orgits Business Solutions', description: 'Seamless Zoho integration with external systems.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/zoho-integration` },
}

export default function ZohoIntegrationPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Zoho Integration">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="Zoho Integration" /></div>
                                        <div className="content-box">
                                            <h2>Zoho Integration</h2>
                                            <p>
                                                Orgits connects Zoho applications with your broader technology stack—ERP, e-commerce, telephony, payment gateways, email, marketing platforms and custom databases—using native connectors, Zoho Flow, REST APIs and purpose-built middleware.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Zoho CRM ↔ ERP (Tally, SAP, Oracle, custom)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Zoho Books ↔ Payment gateways & banks</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Zoho Desk ↔ Communication channels</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Zoho Marketing ↔ Lead sources & analytics</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Telephony (Exotel, Knowlarity, Twilio)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom REST/SOAP API integrations</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>One Customer View Across Every System</h3><p>We design integration architectures that synchronize the right data, at the right frequency, with the right conflict resolution—maintaining data integrity and auditability across systems.</p></div>
                                        <div className="text"><p>Integration projects begin with data mapping workshops—identifying entities, fields, transformation rules and ownership. We evaluate native connectors first, then Zoho Flow for low-code orchestration, and custom middleware (Node.js, Python) for complex logic, high volume or legacy protocols. Patterns include real-time sync (webhooks), scheduled batch (ETL), and event-driven (message queues). Error handling covers retries, dead-letter queues, alerting and manual reconciliation workflows. All integrations include monitoring dashboards, schema versioning and change management procedures. We provide runbooks for operations teams and conduct knowledge transfer for internal maintenance.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img5.jpg" alt="Zoho API Integration" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Reliable integration is about handling failure gracefully, not just success paths.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Idempotency keys for duplicate prevention</p></div></li><li><div className="circle-box"></div><div className="text"><p>Schema validation & transformation layers</p></div></li><li><div className="circle-box"></div><div className="text"><p>Circuit breakers & rate limit compliance</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/zoho-automation"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/zoho-automation">Zoho Automation</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/zoho-consulting">Zoho Consulting</Link></h3></div><div className="icon"><Link href="/services/zoho-consulting"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Zoho CRM Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/zoho-crm-implementation">Zoho CRM Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-crm-customization">Zoho CRM Customization<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-automation">Zoho Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/zoho-integration">Zoho Integration<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-consulting">Zoho Consulting<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}