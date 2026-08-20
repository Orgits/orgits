import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zoho Consulting',
    description: 'Strategic Zoho consulting—platform selection, architecture design, governance, admin coaching and optimization reviews. Authorized Zoho Partner expertise.',
    url: `${siteUrl}/services/zoho-consulting`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Zoho Consulting',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Zoho CRM', item: `${siteUrl}/services/zoho-crm` },
        { '@type': 'ListItem', position: 3, name: 'Zoho Consulting', item: `${siteUrl}/services/zoho-consulting` },
    ],
}

export const metadata = {
    title: 'Zoho Consulting | Orgits Business Solutions',
    description: 'Strategic Zoho consulting by Authorized Partner—platform evaluation, architecture, governance, admin enablement and optimization. Maximize your Zoho investment.',
    keywords: 'Zoho consulting, Zoho partner, CRM strategy, Zoho architecture, admin training, platform optimization, digital transformation',
    openGraph: { title: 'Zoho Consulting | Orgits Business Solutions', description: 'Strategic Zoho consulting—platform selection, architecture, governance and optimization.', url: `${siteUrl}/services/zoho-consulting`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Zoho Consulting - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Zoho Consulting | Orgits Business Solutions', description: 'Strategic Zoho consulting by Authorized Partner.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/zoho-consulting` },
}

export default function ZohoConsultingPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Zoho Consulting">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img5.jpg" alt="Zoho Consulting" /></div>
                                        <div className="content-box">
                                            <h2>Zoho Consulting</h2>
                                            <p>
                                                Orgits provides strategic Zoho consulting for organizations evaluating, implementing or optimizing their Zoho stack. As an Authorized Zoho Partner, we bring platform expertise across CRM, Marketing, Desk, Books, Inventory, Creator, Analytics, People and WorkDrive.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Platform evaluation & selection guidance</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Multi-app architecture & data model design</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Governance framework (roles, profiles, audit, compliance)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Admin coaching & capability building</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Optimization audits & technical debt review</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Migration planning (from Salesforce, HubSpot, custom)</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Expert Guidance for Critical Zoho Decisions</h3><p>Whether you're starting fresh, scaling up or cleaning up—we help you make informed choices on licensing, architecture, process design and team enablement to maximize long-term value.</p></div>
                                        <div className="text"><p>Consulting engagements are tailored to your maturity level. For new adopters, we run platform discovery workshops, define MVP scope and create implementation roadmaps. For existing customers, we conduct health checks covering data quality, automation efficiency, security posture and license utilization. Governance frameworks address role design, data access policies, change management and regulatory alignment. Admin coaching builds internal capability through hands-on sessions, documentation and shadow support. Migration projects include data mapping, validation rules, parallel run periods and cutover planning. All engagements deliver actionable artifacts—architecture diagrams, decision logs, runbooks and training materials—not just slide decks.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="Zoho Strategy" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Good consulting transfers capability, not dependency.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Decision frameworks, not just recommendations</p></div></li><li><div className="circle-box"></div><div className="text"><p>Hands-on admin enablement</p></div></li><li><div className="circle-box"></div><div className="text"><p>Measurable optimization outcomes</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/zoho-integration"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/zoho-integration">Zoho Integration</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/hubspot-implementation">HubSpot Implementation</Link></h3></div><div className="icon"><Link href="/services/hubspot-implementation"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Zoho CRM Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/zoho-crm-implementation">Zoho CRM Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-crm-customization">Zoho CRM Customization<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-automation">Zoho Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-integration">Zoho Integration<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/zoho-consulting">Zoho Consulting<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}