import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud Services',
    description: 'Cloud strategy, migration, architecture and managed services across AWS, Google Cloud, Azure and DigitalOcean. Secure, scalable infrastructure for modern applications.',
    url: `${siteUrl}/services/cloud-services`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'Cloud Services',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'IT & Cloud Services', item: `${siteUrl}/corporate-agency` },
        { '@type': 'ListItem', position: 3, name: 'Cloud Services', item: `${siteUrl}/services/cloud-services` },
    ],
}

export const metadata = {
    title: 'Cloud Services | Orgits Business Solutions',
    description: 'Secure, scalable cloud infrastructure on AWS, Google Cloud, Azure and DigitalOcean. Strategy, migration, architecture and managed services for business applications.',
    keywords: 'cloud services, cloud migration, AWS, Google Cloud, Azure, cloud architecture, managed cloud, DevOps',
    openGraph: { title: 'Cloud Services | Orgits Business Solutions', description: 'Cloud strategy, migration and managed services across major providers.', url: `${siteUrl}/services/cloud-services`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'Cloud Services - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'Cloud Services | Orgits Business Solutions', description: 'Secure, scalable cloud infrastructure and managed services.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/cloud-services` },
}

export default function CloudServicesPage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Cloud Services">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img1.jpg" alt="Cloud Services" /></div>
                                        <div className="content-box">
                                            <h2>Cloud Services</h2>
                                            <p>
                                                Orgits designs, migrates and manages cloud infrastructure that scales with your business. We work across AWS, Google Cloud, Azure and DigitalOcean—selecting the right platform for your workloads, compliance requirements and budget.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Cloud strategy & provider selection</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Migration planning & execution</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Architecture design (HA, DR, multi-region)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Infrastructure as Code (Terraform, CloudFormation)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Cost optimization & FinOps</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Managed cloud operations & monitoring</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Cloud That Works for Your Business, Not Against It</h3><p>We approach cloud as an enabler of business agility—right-sizing resources, automating operations and building in resilience from day one.</p></div>
                                        <div className="text"><p>Our engagements start with workload assessment, dependency mapping and TCO modeling. Migration follows a phased approach—pilot, validate, scale—with rollback plans at each stage. Architecture emphasizes security (IAM, encryption, network segmentation), observability (logging, metrics, tracing) and operational excellence (CI/CD, backup, disaster recovery). Post-migration, we provide ongoing optimization, security patching and 24/7 monitoring with defined SLAs. For regulated industries, we align architectures with compliance frameworks including RBI, ISO 27001 and data residency requirements.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img2.jpg" alt="Cloud Architecture" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Modern cloud architecture balances performance, cost, security and operational simplicity.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Container orchestration (ECS, EKS, GKE, AKS)</p></div></li><li><div className="circle-box"></div><div className="text"><p>Serverless for event-driven workloads</p></div></li><li><div className="circle-box"></div><div className="text"><p>GitOps for infrastructure deployment</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/marketing-strategy"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/marketing-strategy">Marketing Strategy</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/ai-solutions">AI Solutions</Link></h3></div><div className="icon"><Link href="/services/ai-solutions"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>IT & Cloud Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/app-development">Software Development<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/cloud-services">Cloud Services<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/corporate-agency">IT Consulting<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/ai-solutions">AI Solutions<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/it-infrastructure">IT Infrastructure<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}