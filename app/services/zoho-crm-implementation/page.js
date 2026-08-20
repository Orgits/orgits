import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zoho CRM Implementation',
    description: 'End-to-end Zoho CRM implementation—setup, customization, data migration, user training and ongoing support. Authorized Zoho Partner.',
    url: `${siteUrl}/services/zoho-crm-implementation`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Zoho CRM Implementation',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Zoho CRM', item: `${siteUrl}/services/zoho-crm` },
        { '@type': 'ListItem', position: 3, name: 'Zoho CRM Implementation', item: `${siteUrl}/services/zoho-crm-implementation` },
    ],
}

export const metadata = {
    title: 'Zoho CRM Implementation | Orgits Business Solutions',
    description: 'Authorized Zoho Partner delivering complete Zoho CRM implementation—configuration, customization, data migration, integrations and user adoption. Tailored to your sales process.',
    keywords: 'Zoho CRM implementation, Zoho partner, CRM setup, data migration, sales automation, Zoho customization',
    openGraph: { title: 'Zoho CRM Implementation | Orgits Business Solutions', description: 'Complete Zoho CRM implementation by authorized partner—setup, migration, training and support.', url: `${siteUrl}/services/zoho-crm-implementation`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Zoho CRM Implementation - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Zoho CRM Implementation | Orgits Business Solutions', description: 'Authorized Zoho Partner for CRM implementation and customization.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/zoho-crm-implementation` },
}

export default function ZohoCRMImplementationPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Zoho CRM Implementation">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="Zoho CRM Implementation" /></div>
                                        <div className="content-box">
                                            <h2>Zoho CRM Implementation</h2>
                                            <p>
                                                As an Authorized Zoho Partner, Orgits delivers end-to-end Zoho CRM implementations—from initial setup and process mapping to custom modules, workflows, integrations and user adoption. We align the platform to your sales methodology, not the other way around.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Sales process analysis & CRM design</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Account setup, roles, profiles & security</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Custom modules, fields & layouts</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Data migration from legacy systems</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Workflow rules, blueprints & approvals</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>User training & change management</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>CRM That Matches How You Sell</h3><p>We start by understanding your buyer journey, sales stages and team rituals—then configure Zoho to accelerate each step with automation, visibility and actionable insights.</p></div>
                                        <div className="text"><p>Our implementation methodology follows discover, design, build, validate and deploy phases. We map your existing sales process to Zoho's capabilities, identifying gaps and opportunities for automation. Custom functions and Deluge scripts extend native functionality where needed. Data migration includes deduplication, normalization and validation. Integration with email, telephony, marketing automation and ERP systems creates a unified customer view. Post-launch, we provide admin training, super-user enablement and 90-day hypercare support. Ongoing optimization retains alignment as your sales motion evolves.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="Zoho CRM Customization" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Successful CRM adoption comes from fitting the tool to the process, not forcing the process into the tool.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Blueprint designer for guided selling</p></div></li><li><div className="circle-box"></div><div className="text"><p>Canvas for custom record views</p></div></li><li><div className="circle-box"></div><div className="text"><p>CommandCenter for journey orchestration</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/it-infrastructure"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/it-infrastructure">IT Infrastructure</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/zoho-crm-customization">Zoho CRM Customization</Link></h3></div><div className="icon"><Link href="/services/zoho-crm-customization"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Zoho CRM Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link className="active" href="/services/zoho-crm-implementation">Zoho CRM Implementation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-crm-customization">Zoho CRM Customization<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-automation">Zoho Automation<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-integration">Zoho Integration<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/zoho-consulting">Zoho Consulting<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}