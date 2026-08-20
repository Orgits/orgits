import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Creative Design Services',
    description: 'Digital creative design—social media graphics, ad creatives, presentation decks, infographics, motion graphics and video editing. On-brand, conversion-focused, delivered at scale.',
    url: `${siteUrl}/services/creative-design`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Creative Design',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Creative Design', item: `${siteUrl}/uiux-design` },
        { '@type': 'ListItem', position: 3, name: 'Creative Design', item: `${siteUrl}/services/creative-design` },
    ],
}

export const metadata = {
    title: 'Creative Design | Orgits Business Solutions',
    description: 'Digital creative design—social media graphics, ad creatives, presentations, infographics, motion graphics and video. On-brand, conversion-focused, delivered at scale.',
    keywords: 'creative design, social media graphics, ad creatives, presentations, infographics, motion graphics, video editing, digital assets',
    openGraph: { title: 'Creative Design | Orgits Business Solutions', description: 'Digital creative design—social graphics, ad creatives, presentations, motion and video.', url: `${siteUrl}/services/creative-design`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Creative Design - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Creative Design | Orgits Business Solutions', description: 'On-brand digital creative design at scale.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/creative-design` },
}

export default function CreativeDesignPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Creative Design">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img5.jpg" alt="Creative Design" /></div>
                                        <div className="content-box">
                                            <h2>Creative Design</h2>
                                            <p>
                                                Orgits produces on-brand digital creative assets at scale—social media graphics, paid ad creatives, presentation decks, infographics, motion graphics and short-form video. Every asset aligns with your brand system and conversion objectives.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Social media graphics & carousel posts</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Paid ad creatives (static, carousel, video)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Presentation decks & pitch designs</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Infographics & data visualization</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Motion graphics & animated explainer videos</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Short-form video editing (Reels, Shorts, TikTok)</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Creative That Performs, Not Just Looks Good</h3><p>We design with the platform and objective in mind—thumb-stopping social posts, high-CTR ad creatives, persuasive pitch decks and shareable infographics.</p></div>
                                        <div className="text"><p>Creative engagements start with brand system review, platform requirements audit and performance benchmarking. We establish creative templates in Figma/After Effects with locked brand components (logo, colors, typography) and flexible content zones. Social media calendars drive batch production—templates for quotes, stats, announcements, testimonials and educational carousels. Ad creative follows platform specs (Meta, Google, LinkedIn, Twitter) with A/B test variants for hook, value prop and CTA. Presentations use master slides, consistent layouts and data visualization best practices. Infographics transform complex data into narrative visuals. Motion graphics use Lottie/After Effects for web/app integration. Video editing optimizes for retention curves—hooks, pacing, captions and CTAs. All assets delivered organized, named and version-controlled.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="Ad Creative Design" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Scalable creative systems enable speed without sacrificing brand integrity.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Template libraries for rapid production</p></div></li><li><div className="circle-box"></div><div className="text"><p>Brand-locked components in Figma</p></div></li><li><div className="circle-box"></div><div className="text"><p>Platform-spec compliance checklist</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/brand-design"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/brand-design">Brand Design</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/marketing-creatives">Marketing Creatives</Link></h3></div><div className="icon"><Link href="/services/marketing-creatives"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>Creative Design Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/uiux-design">UI/UX Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/website-design">Website Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/brand-design">Brand Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/creative-design">Creative Design<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/marketing-creatives">Marketing Creatives<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}