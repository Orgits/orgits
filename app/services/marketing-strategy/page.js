import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing Strategy Services',
    description: 'Comprehensive marketing strategy development including market research, positioning, go-to-market planning, channel strategy and measurement frameworks.',
    url: `${siteUrl}/services/marketing-strategy`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Marketing Strategy',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Marketing', item: `${siteUrl}/digital-marketing` },
        { '@type': 'ListItem', position: 3, name: 'Marketing Strategy', item: `${siteUrl}/services/marketing-strategy` },
    ],
}

export const metadata = {
    title: 'Marketing Strategy | Orgits Business Solutions',
    description: 'Build a clear, executable marketing strategy grounded in market research, buyer insights and business objectives. From positioning to channel planning to measurement frameworks.',
    keywords: 'marketing strategy, go-to-market, positioning, channel strategy, marketing planning, buyer personas',
    openGraph: { title: 'Marketing Strategy | Orgits Business Solutions', description: 'Comprehensive marketing strategy development including research, positioning and measurement.', url: `${siteUrl}/services/marketing-strategy`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Marketing Strategy - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Marketing Strategy | Orgits Business Solutions', description: 'Build a clear, executable marketing strategy.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/marketing-strategy` },
}

export default function MarketingStrategyPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Marketing Strategy">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="Marketing Strategy" /></div>
                                        <div className="content-box">
                                            <h2>Marketing Strategy</h2>
                                            <p>
                                                Orgits helps businesses define where to play and how to win. We combine market research, buyer intelligence and competitive analysis to build actionable marketing strategies that align with revenue goals and resource constraints.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Market sizing & opportunity assessment</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Buyer persona development & journey mapping</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Positioning & messaging frameworks</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Channel strategy & budget allocation</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Go-to-market planning for new products</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Measurement frameworks & KPI dashboards</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Strategy Before Tactics</h3><p>Effective marketing starts with clarity on who you serve, why they choose you and where they make decisions. We turn that clarity into a prioritized, resourced plan.</p></div>
                                        <div className="text"><p>Our engagements typically begin with stakeholder workshops, customer interviews and competitive audits. We synthesize findings into a strategic brief covering target segments, value propositions, differentiators and priority channels. The output includes a 12-month marketing plan with quarterly objectives, budget recommendations by channel, team structure guidance and a measurement framework connecting activities to revenue. We remain engaged through execution—reviewing performance monthly, adjusting tactics quarterly and evolving strategy annually.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img5.jpg" alt="Marketing Strategy Process" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>A marketing strategy connects business objectives to daily execution through clear choices and measurable milestones.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Research-driven, not assumption-based</p></div></li><li><div className="circle-box"></div><div className="text"><p>Channel priorities tied to buyer behavior</p></div></li><li><div className="circle-box"></div><div className="text"><p>Built for execution, not slide decks</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/content-marketing"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/content-marketing">Content Marketing</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/cloud-services">Cloud Services</Link></h3></div><div className="icon"><Link href="/services/cloud-services"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Marketing Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/digital-marketing">Digital Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/seo">SEO<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/performance-marketing">Performance Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/content-marketing">Content Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/marketing-strategy">Marketing Strategy<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-automation">CRM & Marketing Automation<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}