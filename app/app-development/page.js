import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Mobile & Web App Development">
        {/*Start Service Details*/}
        <section className="service-details">
            <div className="container">
                <div className="row">

                    <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-details__content">
                            <div className="service-details__img-box1">
                                <div className="img-box">
                                    <img src="assets/img/service/service-details__img1.jpg" alt="Mobile & Web App Development"/>
                                </div>
                                <div className="content-box">
                                    <h2>Mobile & Web App Development</h2>
                                    <p>
                                        We design and develop business applications that connect user needs with practical business objectives. From customer-facing mobile applications to internal business systems, our approach focuses on usability, scalability, security and maintainability.
                                    </p>
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Business-focused application architecture</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Responsive web and mobile experiences</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>API and third-party integrations</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Scalable backend development</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Quality assurance and deployment</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="service-details__text">
                                <div className="title">
                                    <h3>From Business Requirements to Production</h3>
                                    <p>
                                        We begin with requirements and product understanding, translate them into UX and technical specifications, develop through structured sprints, test thoroughly and prepare the solution for deployment.
                                    </p>
                                </div>
                                <div className="text">
                                    <p>
                                        Our process covers the full application lifecycle: business analysis, PRD creation, UX research, wireframing, UI design, development, QA/UAT and production deployment. We work with modern technology stacks including React, React Native, Flutter, Node.js, Python, and cloud platforms to deliver applications that scale with your business.
                                    </p>
                                </div>
                            </div>

                            <div className="service-details__img-box2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="img-box">
                                            <img src="assets/img/service/service-details__img2.jpg" alt="App Development Process"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="content-box">
                                            <p>
                                                Whether you need a customer-facing mobile app, an internal business tool, or a complex multi-platform solution, we combine technical expertise with business understanding to deliver results.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Cross-platform mobile development (iOS, Android)</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Progressive web applications (PWA)</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Enterprise application integration</p>
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
                                        <Link href="/services"><span className="icon-left-arrow"></span></Link>
                                    </div>
                                    <div className="text">
                                        <p>Prev service</p>
                                        <h3><Link href="/services">Our Services</Link></h3>
                                    </div>
                                </div>
                                <div className="single-box right">
                                    <div className="text">
                                        <p>Next service</p>
                                        <h3><Link href="/web-development">Web Development</Link></h3>
                                    </div>
                                    <div className="icon">
                                        <Link href="/web-development"><span className="icon-right-arrow-angle"></span></Link>
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
                                        <Link className="active" href="/app-development">Mobile & Web App Development<span
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