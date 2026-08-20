import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Services',
    description: 'Search engine optimization services to improve organic visibility, traffic and qualified leads through technical SEO, content strategy and authority building.',
    url: `${siteUrl}/services/seo`,
    provider: {
        '@type': 'Organization',
        name: 'Orgits Business Solutions Pvt. Ltd.',
        url: siteUrl,
    },
    serviceType: 'Search Engine Optimization',
    areaServed: 'India and globally',
    availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${siteUrl}/contact`,
        servicePhone: '+91 9289687928',
        serviceEmail: 'hello@orgits.in',
    },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Marketing', item: `${siteUrl}/digital-marketing` },
        { '@type': 'ListItem', position: 3, name: 'SEO', item: `${siteUrl}/services/seo` },
    ],
}

export const metadata = {
    title: 'SEO Services | Orgits Business Solutions',
    description: 'Improve organic search visibility and drive qualified traffic with technical SEO, content strategy, link building and ongoing optimization. Orgits delivers measurable SEO results.',
    keywords: 'SEO services, search engine optimization, organic traffic, technical SEO, link building, keyword research',
    openGraph: {
        title: 'SEO Services | Orgits Business Solutions',
        description: 'Improve organic search visibility and drive qualified traffic with technical SEO, content strategy and authority building.',
        url: `${siteUrl}/services/seo`,
        type: 'website',
        images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'SEO Services - Orgits Business Solutions' }],
    },
    twitter: { card: 'summary_large_image', title: 'SEO Services | Orgits Business Solutions', description: 'Improve organic search visibility and drive qualified traffic.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/seo` },
}

export default function SEOPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="SEO">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box">
                                            <img src="assets/img/service/service-details__img1.jpg" alt="SEO Services" />
                                        </div>
                                        <div className="content-box">
                                            <h2>Search Engine Optimization (SEO)</h2>
                                            <p>
                                                Orgits helps businesses improve organic search visibility, attract qualified traffic and convert visitors into leads through comprehensive SEO strategies built on technical excellence, content relevance and authority building.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Technical SEO audits & fixes</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Keyword research & content strategy</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>On-page optimization</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Link building & authority development</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Local SEO & Google Business Profile</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Analytics, reporting & continuous improvement</p></div></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-details__text">
                                        <div className="title">
                                            <h3>Turn Search Visibility Into Business Growth</h3>
                                            <p>
                                                SEO is not about rankings alone—it's about connecting with the right audience at the right moment in their buying journey. We align technical optimization, content creation and authority signals to drive measurable organic growth.
                                            </p>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Our approach begins with a comprehensive audit covering crawlability, indexation, site speed, mobile usability, structured data and core web vitals. We then build a prioritized roadmap addressing quick wins and foundational improvements. Content strategy focuses on search intent, topic clusters and E-E-A-T principles. Authority building emphasizes relevant, high-quality link acquisition through digital PR, partnerships and valuable resources. All efforts are tracked in transparent dashboards tying organic performance to business outcomes—leads, pipeline and revenue.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="img-box">
                                                    <img src="assets/img/service/service-details__img2.jpg" alt="SEO Strategy" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="content-box">
                                                    <p>
                                                        Sustainable SEO requires aligning technical health, content relevance and authority signals into a cohesive system.
                                                    </p>
                                                    <ul className="list-item clearfix">
                                                        <li><div className="circle-box"></div><div className="text"><p>Site architecture & crawl optimization</p></div></li>
                                                        <li><div className="circle-box"></div><div className="text"><p>Content gap analysis & topic clustering</p></div></li>
                                                        <li><div className="circle-box"></div><div className="text"><p>Competitor benchmarking & opportunity mapping</p></div></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left">
                                            <div className="icon"><Link href="/digital-marketing"><span className="icon-left-arrow"></span></Link></div>
                                            <div className="text"><p>Prev service</p><h3><Link href="/digital-marketing">Digital Marketing</Link></h3></div>
                                        </div>
                                        <div className="single-box right">
                                            <div className="text"><p>Next service</p><h3><Link href="/services/performance-marketing">Performance Marketing</Link></h3></div>
                                            <div className="icon"><Link href="/services/performance-marketing"><span className="icon-right-arrow-angle"></span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="service-details__sidebar">
                                    <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                        <form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form>
                                    </div>
                                    <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s">
                                        <div className="title-box"><h2>Marketing Services</h2></div>
                                        <ul className="sidebar__category-list">
                                            <li><div className="cercale-box"></div><Link href="/digital-marketing">Digital Marketing<span className="icon-right-arrow-angle"></span></Link></li>
                                            <li><div className="cercale-box"></div><Link className="active" href="/services/seo">SEO<span className="icon-right-arrow-angle"></span></Link></li>
                                            <li><div className="cercale-box"></div><Link href="/services/performance-marketing">Performance Marketing<span className="icon-right-arrow-angle"></span></Link></li>
                                            <li><div className="cercale-box"></div><Link href="/services/content-marketing">Content Marketing<span className="icon-right-arrow-angle"></span></Link></li>
                                            <li><div className="cercale-box"></div><Link href="/services/marketing-strategy">Marketing Strategy<span className="icon-right-arrow-angle"></span></Link></li>
                                            <li><div className="cercale-box"></div><Link href="/services/zoho-automation">CRM & Marketing Automation<span className="icon-right-arrow-angle"></span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s">
                                        <div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div>
                                    </div>
                                    <div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s">
                                        <div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div>
                                        <div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}