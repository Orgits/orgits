import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot Implementation',
    description: 'Complete HubSpot implementation—CRM setup, Marketing Hub, Sales Hub, Service Hub, CMS, data migration, integrations and team onboarding. HubSpot Solutions Partner expertise.',
    url: `${siteUrl}/services/hubspot-implementation`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'HubSpot Implementation',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'HubSpot', item: `${siteUrl}/services/hubspot` },
        { '@type': 'ListItem', position: 3, name: 'HubSpot Implementation', item: `${siteUrl}/services/hubspot-implementation` },
    ],
}

export const metadata = {
    title: 'HubSpot Implementation | Orgits Business Solutions',
    description: 'HubSpot Solutions Partner delivering full-platform implementation—CRM, Marketing, Sales, Service, CMS and Operations Hub. Setup, migration, integrations and enablement.',
    keywords: 'HubSpot implementation, HubSpot partner, CRM setup, Marketing Hub, Sales Hub, data migration, onboarding',
    openGraph: { title: 'HubSpot Implementation | Orgits Business Solutions', description: 'Complete HubSpot implementation by Solutions Partner—setup, migration, integrations and training.', url: `${siteUrl}/services/hubspot-implementation`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'HubSpot Implementation - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'HubSpot Implementation | Orgits Business Solutions', description: 'HubSpot Solutions Partner for full-platform implementation.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/hubspot-implementation` },
}

export default function HubSpotImplementationPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="HubSpot Implementation">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="HubSpot Implementation" /></div>
                                        <div className="content-box">
                                            <h2>HubSpot Implementation</h2>
                                            <p>
                                                Orgits delivers end-to-end HubSpot implementations across the full platform—CRM, Marketing Hub, Sales Hub, Service Hub, CMS Hub and Operations Hub. We configure the platform around your go-to-market motion, migrate data with integrity and enable your team for self-sufficiency.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Portal setup, teams, permissions & security</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom properties, pipelines & deal stages</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Data migration from legacy CRM/Marketo/Pardot</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Marketing Hub: forms, emails, workflows, lists</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Sales Hub: sequences, meetings, quotes, forecasting</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>CMS Hub: themes, templates, blog, membership</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>HubSpot Configured for How You Grow</h3><p>We align HubSpot's native capabilities to your buyer journey—lead capture, qualification, nurture, sales process, onboarding and expansion—so the platform amplifies your motion instead of constraining it.</p></div>
                                        <div className="text"><p>Our methodology follows assess, design, build, validate and launch phases. Discovery workshops map your current tech stack, processes and data landscape. Configuration prioritizes standard features before custom development. Migration includes deduplication, association preservation and historical activity sync. Marketing Hub setup covers consent management, preference centers, lead scoring and attribution. Sales Hub configures deal pipelines, task queues, playbooks and forecasting categories. CMS Hub implements theme-based templates, blog structure and SEO foundations. Operations Hub enables data quality automation, custom objects and webhook orchestration. Post-launch, we provide admin certification support, super-user workshops and 90-day optimization sprints.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="HubSpot CRM Setup" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Implementation success is measured by adoption, not just configuration completeness.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Role-based dashboards for visibility</p></div></li><li><div className="circle-box"></div><div className="text"><p>Automated data quality monitoring</p></div></li><li><div className="circle-box"></div><div className="text"><p>Enablement plans for each team</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/zoho-consulting"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/zoho-consulting">Zoho Consulting</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/hubspot-crm">HubSpot CRM</Link></h3></div><div className="icon"><Link href="/services/hubspot-crm"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>HubSpot Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link className="active" href="/services/hubspot-implementation">HubSpot Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-crm">HubSpot CRM<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-marketing-hub">HubSpot Marketing Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-sales-hub">HubSpot Sales Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-automation">HubSpot Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-integration">HubSpot Integration<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}