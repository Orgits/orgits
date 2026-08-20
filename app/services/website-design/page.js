import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Design Services',
    description: 'Strategic website design—UX research, information architecture, wireframing, UI design, design systems and developer handoff. Conversion-focused, accessible, scalable.',
    url: `${siteUrl}/services/website-design`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Website Design',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Creative Design', item: `${siteUrl}/uiux-design` },
        { '@type': 'ListItem', position: 3, name: 'Website Design', item: `${siteUrl}/services/website-design` },
    ],
}

export const metadata = {
    title: 'Website Design | Orgits Business Solutions',
    description: 'Professional website design—UX research, IA, wireframes, UI design, design systems and developer handoff. Conversion-focused, accessible, built for performance.',
    keywords: 'website design, UX design, UI design, wireframing, design systems, responsive design, conversion optimization',
    openGraph: { title: 'Website Design | Orgits Business Solutions', description: 'Strategic website design—research, wireframes, UI, design systems and developer handoff.', url: `${siteUrl}/services/website-design`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Website Design - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Website Design | Orgits Business Solutions', description: 'Professional website design with UX research and design systems.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/website-design` },
}

export default function WebsiteDesignPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Website Design">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="Website Design" /></div>
                                        <div className="content-box">
                                            <h2>Website Design</h2>
                                            <p>
                                                Orgits designs websites that convert visitors into customers. We combine user research, information architecture, wireframing, high-fidelity UI design and design systems—delivering pixel-perfect assets developers love to build.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>UX research & user interviews</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Information architecture & sitemaps</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Wireframes & interactive prototypes</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>High-fidelity UI design & design systems</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Responsive & mobile-first design</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Accessibility (WCAG 2.1 AA) & developer handoff</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Design That Drives Business Outcomes</h3><p>We don't design for awards—we design for conversion, retention and revenue. Every decision is grounded in user behavior data and business objectives.</p></div>
                                        <div className="text"><p>Our process starts with stakeholder workshops, competitor audits and user research (interviews, surveys, analytics review). We define user personas, journey maps and job-to-be-done frameworks. Information architecture organizes content around user mental models. Wireframes validate layout and flow before visual design. UI design establishes visual language—color, typography, spacing, iconography and motion—codified in a design system (Figma) with component library, tokens and usage guidelines. Prototypes enable usability testing before development. Handoff includes annotated designs, asset exports, specs and design token JSON for engineering. We remain engaged through QA to ensure design fidelity.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="Website Design Process" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Great website design balances brand expression with conversion science.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Conversion-centered design principles</p></div></li><li><div className="circle-box"></div><div className="text"><p>Design tokens for engineering consistency</p></div></li><li><div className="circle-box"></div><div className="text"><p>Component-driven for scalability</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/hubspot-integration"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/hubspot-integration">HubSpot Integration</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/brand-design">Brand Design</Link></h3></div><div className="icon"><Link href="/services/brand-design"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Creative Design Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/uiux-design">UI/UX Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/website-design">Website Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/brand-design">Brand Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/creative-design">Creative Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/marketing-creatives">Marketing Creatives<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}