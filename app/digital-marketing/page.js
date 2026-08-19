'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {
    
    return (
        <>
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Digital Marketing">      
        {/*Start Service Details*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-details__content">
                            <div className="service-details__img-box1">
                                <div className="img-box">
                                    <img src="assets/img/service/service-details__img5.jpg" alt="Digital Marketing"/>
                                </div>
                                <div className="content-box">
                                    <h2>Digital Marketing</h2>
                                    <p>
                                        Orgits helps businesses build measurable digital acquisition through strategy, paid advertising, lead generation, marketing automation and conversion-focused digital experiences.
                                    </p>
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Google Ads</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Meta Ads</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Lead Generation</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>CRM Lead Automation</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Email Marketing Automation</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>AI Chatbots Automation</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="service-details__text">
                                <div className="title">
                                    <h3>Turn Digital Reach Into Business Growth</h3>
                                    <p>
                                        We connect advertising, landing experiences, CRM workflows and follow-up automation to create a more structured path from first interaction to qualified opportunity.
                                    </p>
                                </div>
                                <div className="text">
                                    <p>
                                        Our digital marketing approach is built on data, not assumptions. We design campaigns around your business objectives—whether that's lead generation, e-commerce sales, or brand awareness. From keyword strategy and ad creative to landing page optimization and CRM integration, we manage the full funnel so your marketing spend delivers measurable returns.
                                    </p>
                                </div>
                            </div>

                            <div className="service-details__img-box2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="img-box">
                                            <img src="assets/img/service/service-details__img2.jpg" alt="Digital Marketing Strategy"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="content-box">
                                            <p>
                                                Effective digital marketing requires aligning paid media, owned experiences and automation into a cohesive system.
                                            </p>
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Search & display advertising (Google Ads)</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Social advertising (Meta, LinkedIn)</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="circle-box"></div>
                                                    <div className="text">
                                                        <p>Landing page optimization & CRO</p>
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
                                        <Link href="/uiux-design"><span className="icon-left-arrow"></span></Link>
                                    </div>
                                    <div className="text">
                                        <p>Prev service</p>
                                        <h3><Link href="/uiux-design">UI/UX Design</Link></h3>
                                    </div>
                                </div>
                                <div className="single-box right">
                                    <div className="text">
                                        <p>Next service</p>
                                        <h3><Link href="/corporate-agency">IT Consulting & Digital Business Solutions</Link></h3>
                                    </div>
                                    <div className="icon">
                                        <Link href="/corporate-agency"><span className="icon-right-arrow-angle"></span></Link>
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
                                        <Link href="/web-development">Web Development<span
                                                className="icon-right-arrow-angle"></span></Link>
                                    </li>
                                    <li>
                                        <div className="cercale-box"></div>
                                        <Link className="active" href="/digital-marketing">Digital Marketing<span
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