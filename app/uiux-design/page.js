import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="UI/UX Design">
        
        {/*Start Service Details*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-details__content">
                            <div className="service-details__img-box1">
                                <div className="img-box">
                                    <img src="assets/img/service/service-details__img3.jpg" alt="UI/UX Design"/>
                                </div>
                                <div className="content-box">
                                    <h2>UI/UX Design</h2>
                                    <p>
                                        We design clear, intuitive and business-focused digital experiences that connect user needs with product goals.
                                    </p>
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>UX research</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>User flows</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Wireframes</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>UI design</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Responsive interfaces</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Design systems</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="service-details__text">
                                <div className="title">
                                    <h3>From User Research to Interface Design</h3>
                                    <p>
                                        Our design process starts by understanding users and business objectives, then translates those insights into flows, wireframes and polished interfaces ready for development.
                                    </p>
                                </div>
                                <div className="text">
                                    <p>
                                        We believe good design is invisible—it just works. Our approach combines user research, behavioral psychology, and business strategy to create interfaces that drive engagement, conversion and satisfaction. From concept to design system, we deliver design assets that developers love to build.
                                    </p>
                                </div>
                            </div>

                            <div className="service-details__img-box2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="img-box">
                                            <img src="assets/img/service/service-details__img2.jpg" alt="UI/UX Design Process"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="content-box">
                                            <p>
                                                Design is not just what it looks like—it's how it works. We create user-centered designs validated through research and testing.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>User research & persona development</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Information architecture & user flows</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>High-fidelity prototypes & usability testing</p>
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
                                        <Link href="/web-development"><span className="icon-left-arrow"></span></Link>
                                    </div>
                                    <div className="text">
                                        <p>Prev service</p>
                                        <h3><Link href="/web-development">Web Development</Link></h3>
                                    </div>
                                </div>
                                <div className="single-box right">
                                    <div className="text">
                                        <p>Next service</p>
                                        <h3><Link href="/digital-marketing">Digital Marketing</Link></h3>
                                    </div>
                                    <div className="icon">
                                        <Link href="/digital-marketing"><span className="icon-right-arrow-angle"></span></Link>
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
                                        <Link href="/web-development">Web Development<span
                                                className="icon-right-arrow-angle"></span></Link>
                                    </li>
                                    <li>
                                        <div className="cercale-box"></div>
                                        <Link className="active" href="/uiux-design">UI/UX Design<span
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