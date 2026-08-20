import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot Marketing Hub Services',
    description: 'HubSpot Marketing Hub strategy and execution—email marketing, lead nurturing, marketing automation, attribution reporting, ABM and SEO tools.',
    url: `${siteUrl}/services/hubspot-marketing-hub`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'HubSpot Marketing Hub',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'HubSpot', item: `${siteUrl}/services/hubspot` },
        { '@type': 'ListItem', position: 3, name: 'HubSpot Marketing Hub', item: `${siteUrl}/services/hubspot-marketing-hub` },
    ],
}

export const metadata = {
    title: 'HubSpot Marketing Hub | Orgits Business Solutions',
    description: 'Maximize HubSpot Marketing Hub—email automation, lead nurturing, landing pages, forms, attribution, ABM, SEO and analytics. Strategy, setup and ongoing optimization.',
    keywords: 'HubSpot Marketing Hub, email marketing, marketing automation, lead nurturing, attribution, ABM, landing pages, SEO',
    openGraph: { title: 'HubSpot Marketing Hub | Orgits Business Solutions', description: 'HubSpot Marketing Hub strategy and execution—automation, attribution, ABM and analytics.', url: `${siteUrl}/services/hubspot-marketing-hub`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'HubSpot Marketing Hub - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'HubSpot Marketing Hub | Orgits Business Solutions', description: 'HubSpot Marketing Hub optimization and strategy.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/hubspot-marketing-hub` },
}

export default function HubSpotMarketingHubPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="HubSpot Marketing Hub">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="HubSpot Marketing Hub" /></div>
                                        <div className="content-box">
                                            <h2>HubSpot Marketing Hub</h2>
                                            <p>
                                                Orgits helps marketing teams unlock the full power of HubSpot Marketing Hub—from email automation and lead nurturing to attribution reporting, account-based marketing and SEO optimization.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Email marketing & drag-and-drop editor</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Lead nurturing workflows & behavioral triggers</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Landing pages, forms & progressive profiling</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Multi-touch attribution & revenue reporting</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Account-based marketing (ABM) tools</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>SEO recommendations & content strategy tools</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Marketing Automation That Converts, Not Just Sends</h3><p>We build nurture programs aligned to buyer stages, segment by intent signals and measure contribution to pipeline—not just open rates.</p></div>
                                        <div className="text"><p>Our Marketing Hub engagements start with audience segmentation, lifecycle stage definitions and content mapping. We design nurture workflows with branch logic, suppression rules and re-engagement paths. Email templates follow accessibility and deliverability best practices. Forms implement progressive profiling and smart content. Attribution reporting connects marketing touchpoints to deal revenue across first-touch, last-touch and multi-touch models. ABM features enable target account lists, company scoring and personalized content. SEO tools guide content strategy with topic clusters, keyword tracking and technical audits. All programs include dashboard reporting for marketing leadership—MQLs, SQLs, influenced pipeline and ROI by channel.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="HubSpot Marketing Automation" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Effective marketing automation balances personalization at scale with brand consistency.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Smart content for dynamic personalization</p></div></li><li><div className="circle-box"></div><div className="text"><p>Workflow testing & version control</p></div></li><li><div className="circle-box"></div><div className="text"><p>Consent management & preference centers</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/hubspot-crm"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/hubspot-crm">HubSpot CRM</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/hubspot-sales-hub">HubSpot Sales Hub</Link></h3></div><div className="icon"><Link href="/services/hubspot-sales-hub"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>HubSpot Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/hubspot-implementation">HubSpot Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-crm">HubSpot CRM<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/hubspot-marketing-hub">HubSpot Marketing Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-sales-hub">HubSpot Sales Hub<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-automation">HubSpot Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/hubspot-integration">HubSpot Integration<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}