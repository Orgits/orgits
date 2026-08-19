import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const projectPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Solution Areas',
    description: 'Explore solution areas from Orgits Business Solutions including investment platforms, admin panels, learning management, social platforms, AI tools, marketplaces, hospital systems, e-commerce, IS audit, and cloud deployment.',
    url: `${siteUrl}/project`,
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Investment & Exchange Platforms', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 2, name: 'Admin Panels & CMS', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 3, name: 'Learning Management Solutions', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 4, name: 'Social Media Platforms', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 5, name: 'AI PR Reviewers', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 6, name: 'Marketplace Platforms', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 7, name: 'Hospital Management Systems', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 8, name: 'E-commerce Platforms', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 9, name: 'Information Systems Audit', item: `${siteUrl}/project-details` },
        { '@type': 'ListItem', position: 10, name: 'Cloud Server Deployment', item: `${siteUrl}/project-details` },
    ],
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Solution Areas', item: `${siteUrl}/project` },
    ],
}

export const metadata = {
    title: 'Solution Areas | Orgits Business Solutions',
    description: 'Explore solution areas from Orgits Business Solutions including investment platforms, admin panels, learning management, social platforms, AI tools, marketplaces, hospital systems, e-commerce, IS audit, and cloud deployment.',
    keywords: 'solution areas, investment platforms, admin panels, learning management, social platforms, AI tools, marketplaces, hospital systems, e-commerce, IS audit, cloud deployment',
    openGraph: {
        title: 'Solution Areas | Orgits Business Solutions',
        description: 'Explore solution areas from Orgits Business Solutions including investment platforms, admin panels, learning management, social platforms, AI tools, marketplaces, hospital systems, e-commerce, IS audit, and cloud deployment.',
        url: `${siteUrl}/project`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-project.jpg`,
                width: 1200,
                height: 630,
                alt: 'Orgits Solution Areas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Solution Areas | Orgits Business Solutions',
        description: 'Explore solution areas from Orgits Business Solutions including investment platforms, admin panels, learning management, social platforms, AI tools, marketplaces, hospital systems, e-commerce, IS audit, and cloud deployment.',
        images: [`${siteUrl}/assets/img/og-project.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/project`,
    },
}

export default function Home() {

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([projectPageSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Solution Areas">
               
                {/*Project Page Start*/}
                <section className="project-page">
                    <div className="container">
                        <div className="sec-title-three text-center sec-title-animation animation-style1" style={{marginBottom: '50px'}}>
                            <div className="sub-title">
                                <h4>Solution Areas</h4>
                            </div>
                            <h1 id="project-heading">
                                What We Can Build For You
                            </h1>
                        </div>
                        <div className="row">
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-1.jpg" alt="Investment & Exchange Platforms"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Investment & Exchange Platforms</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-1.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-2.jpg" alt="Admin Panels & CMS"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Admin Panels & CMS</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-2.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-3.jpg" alt="Learning Management Solutions"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Learning Management Solutions</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-3.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-4.jpg" alt="Social Media Platforms"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Social Media Platforms</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-4.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-5.jpg" alt="AI PR Reviewers"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">AI PR Reviewers</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-5.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-6.jpg" alt="Marketplace Platforms"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Marketplace Platforms</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-6.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-7.jpg" alt="Hospital Management Systems"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Hospital Management Systems</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-7.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-8.jpg" alt="E-commerce Platforms"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">E-commerce Platforms</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-8.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-9.jpg" alt="Information Systems Audit"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Information Systems Audit</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-9.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-10.jpg" alt="Cloud Server Deployment"/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="/project-details">Cloud Server Deployment</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-10.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                        </div>
                    </div>
                </section>
                {/*Project Page End*/}


            </Layout>
        </>
    )
}