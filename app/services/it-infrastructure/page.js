import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Infrastructure Services',
    description: 'End-to-end IT infrastructure design, implementation and management—networks, servers, security, backup, monitoring and support for on-premise, cloud and hybrid environments.',
    url: `${siteUrl}/services/it-infrastructure`,
    provider: { '@type': 'Organization', name: 'Orgits Business Solutions Pvt. Ltd.', url: siteUrl },
    serviceType: 'IT Infrastructure',
    areaServed: 'India and globally',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteUrl}/contact`, servicePhone: '+91 9289687928', serviceEmail: 'hello@orgits.in' },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'IT & Cloud Services', item: `${siteUrl}/corporate-agency` },
        { '@type': 'ListItem', position: 3, name: 'IT Infrastructure', item: `${siteUrl}/services/it-infrastructure` },
    ],
}

export const metadata = {
    title: 'IT Infrastructure Services | Orgits Business Solutions',
    description: 'Reliable IT infrastructure design, implementation and managed services—network, security, servers, backup and monitoring for on-premise, cloud and hybrid environments.',
    keywords: 'IT infrastructure, network design, server management, backup solutions, IT monitoring, managed IT services, hybrid infrastructure',
    openGraph: { title: 'IT Infrastructure Services | Orgits Business Solutions', description: 'End-to-end IT infrastructure design, implementation and management for hybrid environments.', url: `${siteUrl}/services/it-infrastructure`, type: 'website', images: [{ url: `${siteUrl}/assets/img/og-default.jpg`, width: 1200, height: 630, alt: 'IT Infrastructure Services - Orgits Business Solutions' }] },
    twitter: { card: 'summary_large_image', title: 'IT Infrastructure Services | Orgits Business Solutions', description: 'Reliable IT infrastructure for hybrid environments.', images: [`${siteUrl}/assets/img/og-default.jpg`] },
    alternates: { canonical: `${siteUrl}/services/it-infrastructure` },
}

export default function ITInfrastructurePage() {
    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="IT Infrastructure">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box"><img src="assets/img/service/service-details__img3.jpg" alt="IT Infrastructure" /></div>
                                        <div className="content-box">
                                            <h2>IT Infrastructure</h2>
                                            <p>
                                                Orgits designs, implements and manages the foundational technology layer that keeps your business running—networks, compute, storage, security and observability across on-premise, cloud and hybrid environments.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Network architecture & security (firewall, VPN, SD-WAN)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Server & virtualization management (VMware, Hyper-V, Proxmox)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Storage, backup & disaster recovery</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Identity & access management (AD, Azure AD, SSO)</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Monitoring, alerting & incident response</p></div></li>
                                                <li><div className="icon"><span className="icon-check"></span></div><div className="text"><p>Endpoint management & patching</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-details__text">
                                        <div className="title"><h3>Infrastructure You Can Rely On</h3><p>We treat infrastructure as a product—designed for availability, secured by default, monitored continuously and documented for maintainability.</p></div>
                                        <div className="text"><p>Our engagements begin with infrastructure assessment, risk identification and capacity planning. We implement standardized architectures with automation (Ansible, Terraform), centralized logging, backup validation and runbook documentation. For managed services, we provide tiered support with defined SLAs, proactive patching, capacity alerts and quarterly reviews. Security hardening follows CIS benchmarks and industry frameworks. We help clients modernize legacy environments through virtualization, containerization or cloud migration while maintaining business continuity throughout the transition.</p></div>
                                    </div>
                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6"><div className="img-box"><img src="assets/img/service/service-details__img4.jpg" alt="IT Infrastructure Management" /></div></div>
                                            <div className="col-xl-6 col-lg-6"><div className="content-box"><p>Modern infrastructure is code-driven, observable and resilient by design.</p><ul className="list-item clearfix"><li><div className="circle-box"></div><div className="text"><p>Infrastructure as Code for reproducibility</p></div></li><li><div className="circle-box"></div><div className="text"><p>Zero-trust network segmentation</p></div></li><li><div className="circle-box"></div><div className="text"><p>Automated compliance checking</p></div></li></ul></div></div>
                                        </div>
                                    </div>
                                    <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left"><div className="icon"><Link href="/services/ai-solutions"><span className="icon-left-arrow"></span></Link></div><div className="text"><p>Prev service</p><h3><Link href="/services/ai-solutions">AI Solutions</Link></h3></div></div>
                                        <div className="single-box right"><div className="text"><p>Next service</p><h3><Link href="/services/zoho-crm-implementation">Zoho CRM Implementation</Link></h3></div><div className="icon"><Link href="/services/zoho-crm-implementation"><span className="icon-right-arrow-angle"></span></Link></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4"><div className="service-details__sidebar"><div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s"><form action="#" className="sidebar__search-form"><input type="search" placeholder="Search here..."/><button type="submit"><i className="icon-magnifying-glass"></i></button></form></div><div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s"><div className="title-box"><h2>IT & Cloud Services</h2></div><ul className="sidebar__category-list"><li><div className="cercale-box"></div><Link href="/app-development">Software Development<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/cloud-services">Cloud Services<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/corporate-agency">IT Consulting<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link href="/services/ai-solutions">AI Solutions<span className="icon-right-arrow-angle"></span></Link></li><li><div className="cercale-box"></div><Link className="active" href="/services/it-infrastructure">IT Infrastructure<span className="icon-right-arrow-angle"></span></Link></li></ul></div><div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s"><div className="dwonlode-box"><Link href="#">Download Doc <i className="icon-download"></i></Link><Link href="#">Download Pdf <i className="icon-download"></i></Link></div></div><div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s"><div className="sidebar__contact-info-bg" style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }}></div><div className="content-box text-center"><h3>Have a Project<br/>to Discuss?</h3><div className="btn-box"><Link className="thm-btn" href="/contact"><span className="txt">Contact Us</span><i className="icon-next"></i></Link></div></div></div></div></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}