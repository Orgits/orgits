import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Solutions',
    description: 'Practical AI implementation for business—ML model development, LLM integration, intelligent automation, predictive analytics and AI-powered customer experiences.',
    url: `${siteUrl}/services/ai-solutions`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'AI Solutions',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'IT & Cloud Services', item: `${siteUrl}/corporate-agency` },
        { '@type': 'ListItem', position: 3, name: 'AI Solutions', item: `${siteUrl}/services/ai-solutions` },
    ],
}

export const metadata = {
    title: 'AI Solutions | Orgits Business Solutions',
    description: 'Practical AI for business—custom ML models, LLM integration, intelligent document processing, predictive analytics and AI-powered automation. Delivered with governance and measurable ROI.',
    keywords: 'AI solutions, machine learning, LLM integration, predictive analytics, intelligent automation, AI consulting, GenAI',
    openGraph: { title: 'AI Solutions | Orgits Business Solutions', description: 'Practical AI implementation—ML models, LLM integration, predictive analytics and intelligent automation.', url: `${siteUrl}/services/ai-solutions`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'AI Solutions - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'AI Solutions | Orgits Business Solutions', description: 'Practical AI for business with measurable ROI.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/ai-solutions` },
}

export default function AISolutionsPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="AI Solutions">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="AI Solutions" /></div>
                                        <div className="content-box">
                                            <h2>AI Solutions</h2>
                                            <p>
                                                Orgits helps businesses move beyond AI experimentation to production-grade implementations. We build and deploy machine learning models, integrate large language models, and design intelligent automation that solves specific business problems—with proper governance, monitoring and measurable outcomes.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom ML model development & MLOps</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>LLM fine-tuning, RAG & agent frameworks</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Intelligent document processing (IDP)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Predictive analytics & forecasting</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>AI chatbots & conversational interfaces</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>AI governance, bias testing & model monitoring</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>AI That Delivers Business Value, Not Just Demos</h3><p>We focus on use cases with clear ROI—reducing manual effort, improving decision accuracy or unlocking new revenue streams—backed by proper data foundations and model lifecycle management.</p></div>
                                        <div className="text"><p>Our approach starts with problem definition and data readiness assessment. We evaluate build vs. buy vs. partner for each use case. For custom models, we establish MLOps pipelines for training, validation, deployment and monitoring. For LLM applications, we implement retrieval-augmented generation (RAG), guardrails, evaluation frameworks and cost controls. All solutions include data privacy compliance, model explainability where required, and handover documentation for internal teams. We measure success by business metrics—cost savings, revenue uplift, efficiency gains—not model accuracy alone.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="AI Implementation" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Production AI requires data pipelines, monitoring, governance and continuous improvement—not just model training.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Feature stores & reproducible pipelines</p></div></li><li><div className="circle-box"></div><div className="text"><p>Automated retraining & drift detection</p></div></li><li><div className="circle-box"></div><div className="text"><p>Human-in-the-loop for critical decisions</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/cloud-services"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/cloud-services">Cloud Services</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/it-infrastructure">IT Infrastructure</Link></h3></div><div className="icon"><Link href="/services/it-infrastructure"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>IT & Cloud Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/app-development">Software Development<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/cloud-services">Cloud Services<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/corporate-agency">IT Consulting<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/ai-solutions">AI Solutions<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/it-infrastructure">IT Infrastructure<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}