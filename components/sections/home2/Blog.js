import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Start Blog Two*/}
        <section className="blog-two">
            <div className="container">
                <div className="sec-title-two text-center sec-title-animation animation-style1">
                    <h2>Orgits <span>Insights</span></h2>
                    <p>Technology, Growth & Compliance Insights</p>
                </div>
                <ul className="row">
                    {/*Start Single Blog Two*/}
                    <li className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".1s">
                        <div className="blog-two__single">
                            <div className="blog-two__single-img">
                                <img src="assets/img/blog/blog-two__img1.jpg" alt="CRM Automation"/>
                            </div>
                            <div className="blog-two__single-content">
                                <div className="date-box">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tag"></span>
                                            </div>
                                            <p>CRM & Marketing Automation</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-two__single-content-title">
                                    <h3><Link href="/blog-details">CRM Automation: From Lead Capture to Follow-Up</Link></h3>
                                    <p>How structured CRM workflows improve sales operations and customer follow-up.</p>
                                </div>
                                <div className="blog-two__single-content-btn-box">
                                    <Link className="thm-btn" href="/blog-details">
                                        <span className="txt">Read More</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*End Single Blog Two*/}

                    {/*Start Single Blog Two*/}
                    <li className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-two__single">
                            <div className="blog-two__single-img">
                                <img src="assets/img/blog/blog-two__img2.jpg" alt="Cloud Infrastructure"/>
                            </div>
                            <div className="blog-two__single-content">
                                <div className="date-box">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tag"></span>
                                            </div>
                                            <p>Cloud & IT Consulting</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-two__single-content-title">
                                    <h3><Link href="/blog-details">Why Businesses Need Secure, Scalable Cloud Infrastructure</Link></h3>
                                    <p>Key considerations for building reliable cloud applications and secure infrastructure.</p>
                                </div>
                                <div className="blog-two__single-content-btn-box">
                                    <Link className="thm-btn" href="/blog-details">
                                        <span className="txt">Read More</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*End Single Blog Two*/}

                    {/*Start Single Blog Two*/}
                    <li className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                        <div className="blog-two__single">
                            <div className="blog-two__single-img">
                                <img src="assets/img/blog/blog-two__img3.jpg" alt="IT Compliance"/>
                            </div>
                            <div className="blog-two__single-content">
                                <div className="date-box">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tag"></span>
                                            </div>
                                            <p>IS Audit & IT Compliance</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-two__single-content-title">
                                    <h3><Link href="/blog-details">Preparing IT Systems for Audit & Regulatory Compliance</Link></h3>
                                    <p>A practical overview of IT controls, access management, cybersecurity and business continuity readiness.</p>
                                </div>
                                <div className="blog-two__single-content-btn-box">
                                    <Link className="thm-btn" href="/blog-details">
                                        <span className="txt">Read More</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*End Single Blog Two*/}
                </ul>
            </div>
        </section>
        {/*End Blog Two*/}
        </>
    )
}