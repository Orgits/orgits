import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const teamPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Orgits Leadership Team',
    description: 'Meet the leadership team at Orgits Business Solutions - technology, marketing, and compliance experts.',
    url: `${siteUrl}/team`,
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'Person',
                name: 'Anubhav Sharma',
                jobTitle: 'CEO & IT Consultant',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                    url: siteUrl,
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'Person',
                name: 'CA Sahil Goyal',
                jobTitle: 'Managing Director',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                    url: siteUrl,
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'Person',
                name: 'Sahil Khan',
                jobTitle: 'RevOps & Automation Strategist',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                    url: siteUrl,
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 4,
            item: {
                '@type': 'Person',
                name: 'Mohammad Sahil',
                jobTitle: 'Senior Product Designer',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                    url: siteUrl,
                },
            },
        },
    ],
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Team', item: `${siteUrl}/team` },
    ],
}

export const metadata = {
    title: 'Our Leadership Team | Orgits Business Solutions',
    description: 'Meet the leadership team at Orgits Business Solutions - technology consultants, marketing strategists, and compliance experts driving business growth.',
    keywords: 'leadership team, Orgits team, Anubhav Sharma, CA Sahil Goyal, Sahil Khan, Mohammad Sahil, IT consultants, digital marketing experts',
    openGraph: {
        title: 'Our Leadership Team | Orgits Business Solutions',
        description: 'Meet the leadership team at Orgits Business Solutions - technology consultants, marketing strategists, and compliance experts driving business growth.',
        url: `${siteUrl}/team`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-team.jpg`,
                width: 1200,
                height: 630,
                alt: 'Orgits Leadership Team',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Leadership Team | Orgits Business Solutions',
        description: 'Meet the leadership team at Orgits Business Solutions - technology consultants, marketing strategists, and compliance experts driving business growth.',
        images: [`${siteUrl}/assets/img/og-team.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/team`,
    },
}

export default function Home() {

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([teamPageSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Team">
        {/*Start Team One*/}
        <section className="team-one">
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1" style={{marginBottom: '50px'}}>
                    <div className="sub-title">
                        <h4>Our Leadership Team</h4>
                    </div>
                    <h1 id="team-heading">
                        Technology, Marketing & Compliance Leadership
                    </h1>
                </div>
                <div className="row">
                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-1.jpg" alt="Anubhav Sharma"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Anubhav Sharma</Link></h3>
                                <p>CEO & IT Consultant</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-2.jpg" alt="CA Sahil Goyal"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">CA Sahil Goyal</Link></h3>
                                <p>Managing Director</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-3.jpg" alt="Sahil Khan"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Sahil Khan</Link></h3>
                                <p>RevOps & Automation Strategist</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-4.jpg" alt="Mohammad Sahil"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Mohammad Sahil</Link></h3>
                                <p>Senior Product Designer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}

                    {/*Start Single Team One - Organizational*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-5.jpg" alt="Professional Network"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Professional Network</Link></h3>
                                <p>45+ Professionals & Freelancers</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One - Organizational*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-6.jpg" alt="Technology Team"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Technology Team</Link></h3>
                                <p>Software & Cloud Expertise</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One - Organizational*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-7.jpg" alt="Marketing Team"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Marketing Team</Link></h3>
                                <p>Growth & Automation Expertise</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One - Organizational*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-8.jpg" alt="Compliance Team"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Compliance Team</Link></h3>
                                <p>Audit & IT Governance Expertise</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                </div>
            </div>
        </section>
        {/*End Team One*/}

        </Layout>
        </>
    )
}