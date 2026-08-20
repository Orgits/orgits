import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Content Marketing Services',
    description: 'Strategic content creation and distribution to attract, educate and convert target audiences through SEO-optimized articles, guides, case studies and thought leadership.',
    url: `${siteUrl}/services/content-marketing`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Content Marketing',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Marketing', item: `${siteUrl}/digital-marketing` },
        { '@type': 'ListItem', position: 3, name: 'Content Marketing', item: `${siteUrl}/services/content-marketing` },
    ],
}

export const metadata = {
    title: 'Content Marketing | Orgits Business Solutions',
    description: 'Attract and convert your ideal customers with strategic content marketing—SEO-optimized articles, buyer guides, case studies and thought leadership that builds authority and drives organic growth.',
    keywords: 'content marketing, content strategy, SEO content, thought leadership, case studies, content distribution',
    openGraph: { title: 'Content Marketing | Orgits Business Solutions', description: 'Strategic content creation and distribution to attract, educate and convert target audiences.', url: `${siteUrl}/services/content-marketing`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Content Marketing - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Content Marketing | Orgits Business Solutions', description: 'Strategic content creation to attract, educate and convert.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/content-marketing` },
}

export default function ContentMarketingPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Content Marketing">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="Content Marketing" /></div>
                                        <div className="content-box">
                                            <h2>Content Marketing</h2>
                                            <p>
                                                Orgits creates content that serves both search engines and human readers. We develop topic clusters, pillar pages, buyer guides and thought leadership pieces that rank, engage and convert—supporting the full funnel from awareness to decision.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Content strategy & topic clustering</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>SEO-optimized blog articles & pillar pages</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Buyer guides, whitepapers & ebooks</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Case studies & customer success stories</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Thought leadership & executive ghostwriting</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Content distribution & repurposing</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Content That Ranks, Resonates and Converts</h3><p>We don't produce content for content's sake. Every piece serves a strategic purpose—answering a buyer question, overcoming an objection or demonstrating expertise.</p></div>
                                        <div className="text"><p>Our process begins with keyword and intent research, competitor content gap analysis and interviews with your subject matter experts. We build content calendars aligned to your sales funnel stages. Writers with domain knowledge produce technically accurate, brand-aligned drafts. Editors optimize for readability, SEO and conversion. Distribution extends reach through owned channels, email nurture, social amplification and strategic partnerships. Performance is measured by rankings, engagement, assisted conversions and influenced pipeline.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="Content Marketing Strategy" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Great content marketing bridges the gap between what your audience searches for and what your business solves.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Topic clusters for topical authority</p></div></li><li><div className="circle-box"></div><div className="text"><p>Expert interviews for original insights</p></div></li><li><div className="circle-box"></div><div className="text"><p>Multi-format repurposing (video, infographic, audio)</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/performance-marketing"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/performance-marketing">Performance Marketing</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/marketing-strategy">Marketing Strategy</Link></h3></div><div className="icon"><Link href="/services/marketing-strategy"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Marketing Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/digital-marketing">Digital Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/seo">SEO<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/performance-marketing">Performance Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/content-marketing">Content Marketing<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/marketing-strategy">Marketing Strategy<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-automation">CRM & Marketing Automation<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}