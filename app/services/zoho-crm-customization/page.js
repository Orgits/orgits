import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zoho CRM Customization',
    description: 'Advanced Zoho CRM customization—custom functions, Deluge scripting, Canvas views, Blueprint designer, SDK extensions and third-party integrations.',
    url: `${siteUrl}/services/zoho-crm-customization`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Zoho CRM Customization',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Zoho CRM', item: `${siteUrl}/services/zoho-crm` },
        { '@type': 'ListItem', position: 3, name: 'Zoho CRM Customization', item: `${siteUrl}/services/zoho-crm-customization` },
    ],
}

export const metadata = {
    title: 'Zoho CRM Customization | Orgits Business Solutions',
    description: 'Advanced Zoho CRM customization by authorized partner—custom functions, Deluge scripts, Canvas, Blueprint, SDK and integrations. Extend Zoho beyond out-of-the-box capabilities.',
    keywords: 'Zoho CRM customization, Deluge scripting, Canvas, Blueprint, Zoho SDK, custom functions, Zoho partner',
    openGraph: { title: 'Zoho CRM Customization | Orgits Business Solutions', description: 'Advanced Zoho CRM customization—Deluge, Canvas, Blueprint, SDK and integrations.', url: `${siteUrl}/services/zoho-crm-customization`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Zoho CRM Customization - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Zoho CRM Customization | Orgits Business Solutions', description: 'Extend Zoho CRM with custom development.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/zoho-crm-customization` },
}

export default function ZohoCRMCustomizationPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Zoho CRM Customization">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="Zoho CRM Customization" /></div>
                                        <div className="content-box">
                                            <h2>Zoho CRM Customization</h2>
                                            <p>
                                                When standard Zoho CRM features don't fit your unique process, Orgits builds custom extensions using Deluge scripting, Canvas, Blueprint, Widgets and the Zoho CRM SDK—maintaining upgradability while solving specific business requirements.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom functions & Deluge scripting</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Canvas record views & related lists</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Blueprint process orchestration</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom widgets & SDK extensions</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Webhooks & API integrations</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Mobile SDK customizations</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Extend Zoho Without Breaking Upgradability</h3><p>We follow Zoho development best practices—modular code, version control, sandbox testing and documentation—so customizations survive platform updates and scale with your team.</p></div>
                                        <div className="text"><p>Customization requests often start with a process gap that standard workflows can't solve. We evaluate whether the need can be met through configuration (fields, layouts, validation rules) before recommending code. Deluge functions handle complex calculations, cross-module logic and scheduled actions. Canvas provides tailored UI for specific roles. Blueprints enforce multi-stage processes with transitions, validations and approvals. Widgets embed external apps or custom interfaces within records. All customizations are developed in sandbox, peer-reviewed, documented and deployed through change management. We provide admin handover including source code, deployment guides and maintenance recommendations.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="Zoho Deluge Scripting" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Custom development should simplify work, not create technical debt.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Sandbox-first development lifecycle</p></div></li><li><div className="circle-box"></div><div className="text"><p>Version-controlled Deluge repositories</p></div></li><li><div className="circle-box"></div><div className="text"><p>Automated regression testing for critical flows</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/zoho-crm-implementation"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/zoho-crm-implementation">Zoho CRM Implementation</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/zoho-automation">Zoho Automation</Link></h3></div><div className="icon"><Link href="/services/zoho-automation"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Zoho CRM Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/services/zoho-crm-implementation">Zoho CRM Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/zoho-crm-customization">Zoho CRM Customization<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-automation">Zoho Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-integration">Zoho Integration<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-consulting">Zoho Consulting<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}