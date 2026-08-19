import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="IT Consulting & Digital Business Solutions">
        {/*Start Service Details*/}
        <section className="service-details">
            <div className="container">
                <div className="row">

                    <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-details__content">
                            <div className="service-details__img-box1">
                                <div className="img-box">
                                    <img src="assets/img/service/service-details__img6.jpg" alt="IT Consulting & Digital Business Solutions"/>
                                </div>
                                <div className="content-box">
                                    <h2>IT Consulting & Digital Business Solutions</h2>
                                    <p>
                                        We help businesses make better technology decisions, improve digital operations and implement solutions across software, cloud, CRM, marketing automation and IT governance.
                                    </p>
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>IT Consulting</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Digital Transformation</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Cloud Application Development</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>CRM & Marketing Automation</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Digital Marketing</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>IT Governance & Audit</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="service-details__text">
                                <div className="title">
                                    <h3>Technology Solutions Aligned With Business Goals</h3>
                                    <p>
                                        We combine technical expertise with business understanding to deliver solutions that solve real problems—from modernizing legacy systems and migrating to cloud, to implementing CRM automation and strengthening IT governance.
                                    </p>
                                </div>
                                <div className="text">
                                    <p>
                                        Our consulting approach starts with understanding your business context, challenges and objectives. We then design practical technology roadmaps, select the right platforms and tools, and oversee implementation through to adoption. Whether you need a fractional CTO, a cloud migration partner, or help building a digital product, we bring the right expertise to the table.
                                    </p>
                                </div>
                            </div>

                            <div className="service-details__img-box2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="img-box">
                                            <img src="assets/img/service/service-details__img2.jpg" alt="IT Consulting Process"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="content-box">
                                            <p>
                                                We work as an extension of your team—providing strategic guidance, technical leadership and hands-on execution across the technology lifecycle.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Technology strategy & roadmap</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Vendor selection & platform evaluation</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Implementation oversight & delivery</p>
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
                                        <Link href="/digital-marketing"><span className="icon-left-arrow"></span></Link>
                                    </div>
                                    <div className="text">
                                        <p>Prev service</p>
                                        <h3><Link href="/digital-marketing">Digital Marketing</Link></h3>
                                    </div>
                                </div>
                                <div className="single-box right">
                                    <div className="text">
                                        <p>Next service</p>
                                        <h3><Link href="/services">All Services</Link></h3>
                                    </div>
                                    <div className="icon">
                                        <Link href="/services"><span className="icon-right-arrow-angle"></span></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Start Sidebar*/}
                    <div className="col-xl-4">
                        <div className="service-details__sidebar">
                            {/*Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search here..."/>
                                    <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                </form>
                            </div>
                            {/*End Sidebar Single*/}

                            {/*Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__category">
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
                                        <Link href="/web-development">Web Development<span
                                                className="icon-right-arrow-angle"></span></Link>
                                    </li>
                                    <li>
                                        <div className="cercale-box"></div>
                                        <Link href="/digital-marketing">Digital Marketing<span
                                                className="icon-right-arrow-angle"></span></Link>
                                    </li>
                                    <li>
                                        <div className="cercale-box"></div>
                                        <Link className="active" href="/corporate-agency">IT Consulting & Digital Business Solutions<span
                                                className="icon-right-arrow-angle"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            {/*End Sidebar Single*/}

                            {/*Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__dwonlode-box">
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
                            <div className="sidebar__contact-info">
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