import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zoho Automation',
    description: 'Zoho workflow automation—Blueprint, CommandCenter, Flow, custom functions and scheduled actions to eliminate manual work across sales, marketing, support and operations.',
    url: `${siteUrl}/services/zoho-automation`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Zoho Automation',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Zoho CRM', item: `${siteUrl}/services/zoho-crm` },
        { '@type': 'ListItem', position: 3, name: 'Zoho Automation', item: `${siteUrl}/services/zoho-automation` },
    ],
}

export const metadata = {
    title: 'Zoho Automation | Orgits Business Solutions',
    description: 'Automate repetitive work across Zoho CRM, Marketing, Desk, Books and Creator with Blueprint, Flow, CommandCenter and custom functions. Reduce manual effort, enforce process consistency.',
    keywords: 'Zoho automation, Blueprint, CommandCenter, Zoho Flow, workflow automation, process automation, Deluge',
    openGraph: { title: 'Zoho Automation | Orgits Business Solutions', description: 'Zoho workflow automation—Blueprint, Flow, CommandCenter and custom functions.', url: `${siteUrl}/services/zoho-automation`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Zoho Automation - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Zoho Automation | Orgits Business Solutions', description: 'Automate repetitive work across the Zoho suite.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/zoho-automation` },
}

export default function ZohoAutomationPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Zoho Automation">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="Zoho Automation" /></div>
                                        <div className="content-box">
                                            <h2>Zoho Automation</h2>
                                            <p>
                                                Orgits designs and implements automation across the Zoho ecosystem—CRM, Marketing, Desk, Books, Creator and Analytics—using native tools (Workflow Rules, Blueprint, Flow, CommandCenter, Functions) and custom Deluge scripting where needed.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Blueprint for guided, stage-based processes</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>CommandCenter for cross-module journey orchestration</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Zoho Flow for iPaaS-style integrations</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom functions for complex logic</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Scheduled actions & macro automation</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Webhook & API-driven event automation</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Automate the Predictable, Empower the Strategic</h3><p>We identify high-volume, low-judgment tasks—lead assignment, data enrichment, status updates, notifications, document generation—and automate them end-to-end with audit trails and exception handling.</p></div>
                                        <div className="text"><p>Our automation discovery workshops map current processes, quantify manual effort and prioritize by ROI. We design automation logic with failure modes, rollback paths and human-in-the-loop checkpoints. Implementation uses native features first (Workflow Rules, Macros, Blueprint), escalating to Flow or custom functions only when necessary. Testing covers happy paths, edge cases and permission boundaries. Deployment includes admin documentation, monitoring dashboards and gradual rollout. Post-launch, we track automation success rates, error patterns and time saved—continuously refining for maximum impact.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="Zoho Flow Integration" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Good automation is invisible—it just works, with visibility when it doesn't.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Visual process maps for stakeholder alignment</p></div></li><li><div className="circle-box"></div><div className="text"><p>Error alerting & dead-letter handling</p></div></li><li><div className="circle-box"></div><div className="text"><p>Governance: who can create/modify automations</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/zoho-crm-customization"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/zoho-crm-customization">Zoho CRM Customization</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/zoho-integration">Zoho Integration</Link></h3></div><div className="icon"><Link href="/services/zoho-integration"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Zoho CRM Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/zoho-crm-implementation">Zoho CRM Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-crm-customization">Zoho CRM Customization<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/zoho-automation">Zoho Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-integration">Zoho Integration<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-consulting">Zoho Consulting<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}