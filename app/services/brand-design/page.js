import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Brand Design Services',
    description: 'Brand identity design—logo, visual system, typography, color palette, brand guidelines, voice and tone. Cohesive brand expression across all touchpoints.',
    url: `${siteUrl}/services/brand-design`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Brand Design',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Creative Design', item: `${siteUrl}/uiux-design` },
        { '@type': 'ListItem', position: 3, name: 'Brand Design', item: `${siteUrl}/services/brand-design` },
    ],
}

export const metadata = {
    title: 'Brand Design | Orgits Business Solutions',
    description: 'Strategic brand identity design—logo, visual system, typography, color palette, brand guidelines and voice. Cohesive expression across digital, print and environmental touchpoints.',
    keywords: 'brand design, brand identity, logo design, visual identity, brand guidelines, brand strategy, rebranding',
    openGraph: { title: 'Brand Design | Orgits Business Solutions', description: 'Brand identity design—logo, visual system, guidelines and voice for cohesive brand expression.', url: `${siteUrl}/services/brand-design`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Brand Design - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Brand Design | Orgits Business Solutions', description: 'Strategic brand identity and visual system design.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/brand-design` },
}

export default function BrandDesignPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Brand Design">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="Brand Design" /></div>
                                        <div className="content-box">
                                            <h2>Brand Design</h2>
                                            <p>
                                                Orgits creates brand identities that communicate your unique value proposition at a glance. We design logos, visual systems, typography, color palettes and brand guidelines that ensure consistent, recognizable expression across every touchpoint.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Brand strategy & positioning workshops</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Logo design & variations (primary, secondary, icon)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Typography system & color palette</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Iconography, illustration & photography style</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Brand guidelines (digital & print)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Voice, tone & messaging framework</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Brand That Builds Trust Before the First Conversation</h3><p>We translate your mission, values and differentiation into a visual and verbal language that resonates with your target audience and scales across channels.</p></div>
                                        <div className="text"><p>Brand engagements begin with discovery—stakeholder interviews, competitor visual audits, audience perception surveys and brand attribute mapping. We define brand personality, promise and positioning statements. Logo exploration covers wordmarks, lettermarks, combination marks and icon systems with rationale for each direction. Visual system extends to color psychology, typographic hierarchy, grid systems and icon families. Guidelines document usage rules, clear space, minimum sizing, color codes (Pantone, CMYK, RGB, HEX), typography scales and do/don't examples. Voice and tone framework covers writing principles, vocabulary, channel-specific adaptations and example copy. Deliverables include Figma/Sketch source files, asset exports (SVG, PNG, WebP), brand guideline PDF and design token JSON for digital implementation.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img5.jpg" alt="Brand Guidelines" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>A brand system ensures consistency whether you're designing a billboard or a button.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Design tokens for code implementation</p></div></li><li><div className="circle-box"></div><div className="text"><p>Component library for digital products</p></div></li><li><div className="circle-box"></div><div className="text"><p>Print-ready assets & vendor specs</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/website-design"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/website-design">Website Design</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/creative-design">Creative Design</Link></h3></div><div className="icon"><Link href="/services/creative-design"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Creative Design Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/uiux-design">UI/UX Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/website-design">Website Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/brand-design">Brand Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/creative-design">Creative Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/marketing-creatives">Marketing Creatives<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}