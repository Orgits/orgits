import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const webDevSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development',
    description: 'We build responsive websites and web applications designed around business objectives, user experience, performance and long-term scalability.',
    url: `${siteUrl}/web-development`,
    provider: {
        '@type': 'Organization',
        name: 'Orgits Business Solutions Pvt. Ltd.',
        url: siteUrl,
    },
    serviceType: 'Web Development',
    areaServed: 'India and globally',
    availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${siteUrl}/contact`,
        servicePhone: '+91 9289687928',
        serviceEmail: 'hello@orgits.in',
    },
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
        { '@type': 'ListItem', position: 3, name: 'Web Development', item: `${siteUrl}/web-development` },
    ],
}

export const metadata = {
    title: 'Web Development Services | Orgits Business Solutions',
    description: 'We build responsive websites and web applications designed around business objectives, user experience, performance and long-term scalability.',
    keywords: 'web development services, business website development, web application development, custom web development, e-commerce development, CMS development',
    openGraph: {
        title: 'Web Development Services | Orgits Business Solutions',
        description: 'We build responsive websites and web applications designed around business objectives, user experience, performance and long-term scalability.',
        url: `${siteUrl}/web-development`,
        type: 'website',
        images: [
            {
                url: `${siteUrl}/assets/img/og-web-dev.jpg`,
                width: 1200,
                height: 630,
                alt: 'Web Development Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Web Development Services | Orgits Business Solutions',
        description: 'We build responsive websites and web applications designed around business objectives, user experience, performance and long-term scalability.',
        images: [`${siteUrl}/assets/img/og-web-dev.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/web-development`,
    },
}

export default function Home() {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([webDevSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Web Development">

            {/*Start Service Details*/}
            <section className="service-details" aria-labelledby="web-dev-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-details__content">
                                <div className="service-details__img-box1">
                                    <div className="img-box">
                                        <img src="assets/img/service/service-details__img4.jpg" alt="Web Development"/>
                                    </div>
<div className="content-box">
                                     <h1 id="web-dev-heading">Web Development</h1>
                                        <p>
                                            We build responsive websites and web applications designed around business objectives, user experience, performance and long-term scalability.
                                        </p>
                                        <ul className="list-item clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Business & corporate websites</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Web applications</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Admin panels & CMS</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>API integrations</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>E-commerce platforms</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Cloud deployment</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="service-details__text">
                                    <div className="title">
                                        <h3>Web Experiences Built Around Your Business</h3>
                                        <p>
                                            From a business website to a complex web application, Orgits combines UX, frontend, backend, database and cloud capabilities to deliver practical digital products.
                                        </p>
                                    </div>
                                    <div className="text">
                                        <p>
                                            We work with modern frontend frameworks (React, Next.js, Angular), backend technologies (Node.js, Python, PHP), databases (PostgreSQL, MongoDB, MySQL) and cloud platforms (AWS, Google Cloud, Azure, DigitalOcean) to build web solutions that are fast, secure and maintainable.
                                        </p>
                                    </div>
                                </div>

                                <div className="service-details__img-box2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="img-box">
                                                <img src="assets/img/service/service-details__img2.jpg" alt="Web Development Process"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="content-box">
                                                <p>
                                                    Our web development approach emphasizes clean code, performance optimization, accessibility and SEO-friendly architecture from day one.
                                                </p>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Responsive, mobile-first design</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Performance optimization & Core Web Vitals</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Secure, scalable cloud deployment</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-details__prev-next-option blog-details__prev-next-option">
                                    <div className="single-box left">
                                        <div className="icon">
                                            <Link href="/app-development"><span className="icon-left-arrow"></span></Link>
                                        </div>
                                        <div className="text">
                                            <p>Prev service</p>
                                            <h3><Link href="/app-development">Mobile & Web App Development</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-box right">
                                        <div className="text">
                                            <p>Next service</p>
                                            <h3><Link href="/uiux-design">UI/UX Design</Link></h3>
                                        </div>
                                        <div className="icon">
                                            <Link href="/uiux-design"><span className="icon-right-arrow-angle"></span></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/*Start Sidebar*/}
                        <div className="col-xl-4">
                            <div className="service-details__sidebar">
                                {/*Start Sidebar Single*/}
                                <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Search here..."/>
                                        <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                    </form>
                                </div>
                                {/*End Sidebar Single*/}

                                {/*Start Sidebar Single*/}
                                <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s">
                                    <div className="title-box">
                                        <h2>Related Services</h2>
                                    </div>

                                    <ul className="sidebar__category-list">
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="/app-development">Mobile & Web App Development<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="/uiux-design">UI/UX Design<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link className="active" href="/web-development">Web Development<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="/digital-marketing">Digital Marketing<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="/corporate-agency">IT Consulting & Digital Business Solutions<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                    </ul>
                                </div>
                                {/*End Sidebar Single*/}

                                {/*Start Sidebar Single*/}
                                <div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s">
                                    <div className="dwonlode-box">
                                        <Link href="#">
                                            Download Doc
                                            <i className="icon-download"></i>
                                        </Link>
                                        <Link href="#">
                                            Download Pdf
                                            <i className="icon-download"></i>
                                        </Link>
                                    </div>
                                </div>
                                {/*End Sidebar Single*/}

                                {/*Start Sidebar Single*/}
                                <div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s">
                                    <div className="sidebar__contact-info-bg"
                                        style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }} >
                                    </div>
                                    <div className="content-box text-center">
                                        <h3>Have a Project<br/>to Discuss?</h3>
                                        <div className="btn-box">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Contact Us</span>
                                                <i className="icon-next"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*End Sidebar Single*/}

                            </div>
                        </div>
                        {/*End Sidebar*/}

                    </div>
                </div>
            </section>
            {/*End Blog Details*/}
            </Layout>
        </>
    )
}