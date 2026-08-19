import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Orgits Insights">
                {/*Start Blog Page*/}
                <section className="blog-page">
                    <div className="container">
                        <div className="sec-title-three text-center sec-title-animation animation-style1" style={{marginBottom: '50px'}}>
                            <div className="sub-title">
                                <h4>Orgits Insights</h4>
                            </div>
                            <h2>
                                Technology, Growth & Compliance Insights
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-page__content">
                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img1.jpg" alt="CRM Automation"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tag"></span>
                                                        </div>
                                                        <p>CRM & Marketing Automation</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-time"></span>
                                                        </div>
                                                        <p>8 Min Read</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">CRM Automation: From Lead Capture to Follow-Up</Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img2.jpg" alt="Web Application Development"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tag"></span>
                                                        </div>
                                                        <p>Software Development</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-time"></span>
                                                        </div>
                                                        <p>7 Min Read</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">What Businesses Should Consider Before Building a Web Application</Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img3.jpg" alt="IT Controls"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tag"></span>
                                                        </div>
                                                        <p>IS Audit & IT Compliance</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-time"></span>
                                                        </div>
                                                        <p>6 Min Read</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Why IT Controls Matter for Growing Businesses</Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img4.jpg" alt="Information Systems Audit"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tag"></span>
                                                        </div>
                                                        <p>IS Audit & IT Compliance</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-time"></span>
                                                        </div>
                                                        <p>7 Min Read</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Preparing for an Information Systems Audit</Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img5.jpg" alt="Digital Marketing"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tag"></span>
                                                        </div>
                                                        <p>Digital Marketing</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-time"></span>
                                                        </div>
                                                        <p>6 Min Read</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Google & Meta Ads: Building a Structured Lead Generation System</Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img6.jpg" alt="Cloud Infrastructure"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tag"></span>
                                                        </div>
                                                        <p>Cloud & IT Consulting</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-time"></span>
                                                        </div>
                                                        <p>5 Min Read</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Cloud Infrastructure for Scalable Business Applications</Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                </div>
                            </div>

                            {/*Start Sidebar*/}
                            <div className="col-xl-4">
                                <div className="blog-page__sidebar">
                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search here..."/>
                                            <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__latest-blog wow fadeInUp" data-wow-delay=".4s">
                                        <div className="title-box">
                                            <h2>Latest Insights</h2>
                                        </div>

                                        <ul className="sidebar__latest-blog-list">
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img1.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">CRM Automation: From Lead Capture to Follow-Up</Link></h4>
                                                    <p><span className="icon-tag"></span> CRM & Marketing Automation</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img2.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">What Businesses Should Consider Before Building a Web Application</Link></h4>
                                                    <p><span className="icon-tag"></span> Software Development</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img3.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">Why IT Controls Matter for Growing Businesses</Link></h4>
                                                    <p><span className="icon-tag"></span> IS Audit & IT Compliance</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s">
                                        <div className="title-box">
                                            <h2>Categories</h2>
                                        </div>

                                        <ul className="sidebar__category-list">
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Digital Transformation <span>(3)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Software Development <span>(4)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">CRM & Automation <span>(2)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Digital Marketing <span>(3)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Cloud & IT <span>(2)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">IS Audit & Compliance <span>(3)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Cybersecurity <span>(2)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Business Technology <span>(4)</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__tags wow fadeInUp" data-wow-delay=".5s">
                                        <div className="title-box">
                                            <h2>Popular Tags</h2>
                                        </div>

                                        <ul className="sidebar__tags-list clearfix">
                                            <li> <Link href="#">Digital Transformation</Link> </li>
                                            <li> <Link href="#">Software Development</Link> </li>
                                            <li> <Link href="#">CRM Automation</Link> </li>
                                            <li> <Link href="#">Digital Marketing</Link> </li>
                                            <li> <Link href="#">Cloud Infrastructure</Link> </li>
                                            <li> <Link href="#">IS Audit</Link> </li>
                                            <li> <Link href="#">Cybersecurity</Link> </li>
                                            <li> <Link href="#">Business Technology</Link> </li>
                                            <li> <Link href="#">Lead Generation</Link> </li>
                                            <li> <Link href="#">Scalability</Link> </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}
                                </div>
                            </div>
                            {/*End Sidebar*/}

                        </div>
                        <ul className="styled-pagination text-center clearfix">
                            <li><Link href="#">1</Link></li>
                            <li><Link href="#">2</Link></li>
                            <li><Link href="#">3</Link></li>
                            <li><Link href="#">4</Link></li>
                            <li>
                                <Link href="#"><span className="icon-right-arrow-angle right"></span></Link>
                            </li>
                        </ul>
                    </div>
                </section>
                {/*End Blog Three*/}

            </Layout>
        </>
    )
}