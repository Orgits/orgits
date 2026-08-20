import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot CRM Services',
    description: 'HubSpot CRM optimization—custom objects, properties, associations, pipelines, permissions, data quality automation and admin enablement.',
    url: `${siteUrl}/services/hubspot-crm`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'HubSpot CRM',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'HubSpot', item: `${siteUrl}/services/hubspot` },
        { '@type': 'ListItem', position: 3, name: 'HubSpot CRM', item: `${siteUrl}/services/hubspot-crm` },
    ],
}

export const metadata = {
    title: 'HubSpot CRM Services | Orgits Business Solutions',
    description: 'Optimize HubSpot CRM with custom objects, advanced pipelines, data quality automation, permission models and admin coaching. Solutions Partner expertise.',
    keywords: 'HubSpot CRM, custom objects, pipelines, data quality, permissions, admin training, CRM optimization',
    openGraph: { title: 'HubSpot CRM Services | Orgits Business Solutions', description: 'HubSpot CRM optimization—custom objects, pipelines, data quality and admin enablement.', url: `${siteUrl}/services/hubspot-crm`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'HubSpot CRM - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'HubSpot CRM Services | Orgits Business Solutions', description: 'HubSpot CRM optimization and admin enablement.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/hubspot-crm` },
}

export default function HubSpotCRMPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="HubSpot CRM">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="HubSpot CRM" /></div>
                                        <div className="content-box">
                                            <h2>HubSpot CRM</h2>
                                            <p>
                                                Orgits helps you get more from HubSpot CRM through advanced configuration, custom objects, data quality automation and permission governance—turning the platform into a true system of record for your revenue operations.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom objects for unique data models</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Advanced pipeline & deal stage configuration</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Calculated properties & rollup fields</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Data quality automation (Ops Hub)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Team permissions, partitions & data privacy</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Audit logging & change management</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>CRM That Models Your Business, Not HubSpot's Defaults</h3><p>We extend HubSpot's data model to capture your unique entities—projects, subscriptions, assets, partners—with proper associations, validation and reporting.</p></div>
                                        <div className="text"><p>HubSpot's standard objects (contacts, companies, deals, tickets) cover many scenarios, but B2B complexity often requires custom objects. We design custom object schemas with appropriate properties, associations to standard objects and calculated fields for rollup reporting. Data quality automation via Operations Hub handles deduplication, formatting, enrichment and validation at scale. Permission models implement least-privilege access through teams, partitions and field-level security. Pipeline automation enforces stage gates, required fields and probability rules. All configurations are documented with admin runbooks, tested in sandbox and deployed through change management. We provide ongoing admin coaching for internal teams to own the platform long-term.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="HubSpot Custom Objects" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Custom objects unlock HubSpot for complex B2B models—without leaving the platform.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Associations to contacts, companies, deals</p></div></li><li><div className="circle-box"></div><div className="text"><p>Unique ID patterns & required properties</p></div></li><li><div className="circle-box"></div><div className="text"><p>Reporting across custom & standard objects</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/hubspot-implementation"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/hubspot-implementation">HubSpot Implementation</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/hubspot-marketing-hub">HubSpot Marketing Hub</Link></h3></div><div className="icon"><Link href="/services/hubspot-marketing-hub"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>HubSpot Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/hubspot-implementation">HubSpot Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/hubspot-crm">HubSpot CRM<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-marketing-hub">HubSpot Marketing Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-sales-hub">HubSpot Sales Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-automation">HubSpot Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-integration">HubSpot Integration<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}