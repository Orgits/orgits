import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot Automation Services',
    description: 'HubSpot workflow automation—marketing, sales and service workflows, custom code actions, webhooks, data operations and Operations Hub for scalable process automation.',
    url: `${siteUrl}/services/hubspot-automation`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'HubSpot Automation',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'HubSpot', item: `${siteUrl}/services/hubspot` },
        { '@type': 'ListItem', position: 3, name: 'HubSpot Automation', item: `${siteUrl}/services/hubspot-automation` },
    ],
}

export const metadata = {
    title: 'HubSpot Automation | Orgits Business Solutions',
    description: 'Automate revenue operations with HubSpot workflows, custom code actions, Operations Hub data quality and webhook orchestration. Reduce manual work, enforce process consistency.',
    keywords: 'HubSpot automation, workflows, Operations Hub, custom code actions, webhooks, data quality, process automation',
    openGraph: { title: 'HubSpot Automation | Orgits Business Solutions', description: 'HubSpot workflow automation—marketing, sales, service workflows and Operations Hub.', url: `${siteUrl}/services/hubspot-automation`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'HubSpot Automation - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'HubSpot Automation | Orgits Business Solutions', description: 'HubSpot workflow automation for revenue operations.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/hubspot-automation` },
}

export default function HubSpotAutomationPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="HubSpot Automation">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img5.jpg" alt="HubSpot Automation" /></div>
                                        <div className="content-box">
                                            <h2>HubSpot Automation</h2>
                                            <p>
                                                Orgits designs and implements automation across HubSpot's Marketing, Sales, Service and Operations Hubs—using native workflows, custom code actions (Node.js/Python), webhooks and Operations Hub data quality tools to eliminate manual RevOps work.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Marketing workflows (nurture, scoring, lifecycle)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Sales workflows (task creation, deal updates, alerts)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Service workflows (ticket routing, SLA, escalation)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom code actions (Node.js, Python, secrets)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Operations Hub: data quality, deduplication, formatting</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Webhook & API orchestration</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Automate the Revenue Engine, Not Just Tasks</h3><p>We target high-impact RevOps processes—lead handoff, deal stage enforcement, territory assignment, contract generation, renewal tracking—building workflows with error handling, audit trails and governance.</p></div>
                                        <div className="text"><p>Automation discovery maps current RevOps processes, identifies manual handoffs and quantifies time savings. Workflow design follows trigger-condition-action patterns with branch logic, delay actions and re-enrollment rules. Custom code actions extend native capabilities—external API calls, complex calculations, data transformations and AI-powered enrichment. Operations Hub data quality automation handles deduplication, property standardization, association fixes and calculated properties at scale. Webhook orchestration connects HubSpot to external systems bidirectionally. All automations include sandbox testing, version control, monitoring dashboards and rollback procedures. We provide admin documentation, runbook creation and quarterly optimization reviews.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="HubSpot Workflows" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Good automation is maintainable, observable and governed.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Workflow folders & naming conventions</p></div></li><li><div className="circle-box"></div><div className="text"><p>Execution history & error alerting</p></div></li><li><div className="circle-box"></div><div className="text"><p>Change management & approval gates</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/hubspot-sales-hub"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/hubspot-sales-hub">HubSpot Sales Hub</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/hubspot-integration">HubSpot Integration</Link></h3></div><div className="icon"><Link href="/services/hubspot-integration"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>HubSpot Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/hubspot-implementation">HubSpot Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-crm">HubSpot CRM<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-marketing-hub">HubSpot Marketing Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-sales-hub">HubSpot Sales Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/hubspot-automation">HubSpot Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-integration">HubSpot Integration<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}