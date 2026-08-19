import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Start Blog One*/}
        <section className="blog-one">
            <div className="container">
                <div className="sec-title text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Orgits Insights</h4>
                    </div>
                    <h2>
                        Technology, Growth & Compliance Insights
                    </h2>
                </div>
                <div className="row">
                    {/*Start Single Blog One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img-box">
                                <img src="assets/img/blog/blog-one-1.jpg" alt="CRM Automation"/>
                            </div>
                            <div className="blog-one__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="line"></div>
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
                                <div className="blog-one__single-content-meta-box-title-box">
                                    <h3><Link href="/blog-details">CRM Automation: From Lead Capture to Follow-Up</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog One*/}
                    {/*Start Single Blog One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img-box">
                                <img src="assets/img/blog/blog-one-2.jpg" alt="Cloud Infrastructure"/>
                            </div>
                            <div className="blog-one__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="line"></div>
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
                                <div className="blog-one__single-content-meta-box-title-box">
                                    <h3><Link href="/blog-details">Why Businesses Need Secure, Scalable Cloud Infrastructure</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog One*/}
                    {/*Start Single Blog One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img-box">
                                <img src="assets/img/blog/blog-one-3.jpg" alt="IT Compliance"/>
                            </div>
                            <div className="blog-one__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="line"></div>
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
                                <div className="blog-one__single-content-meta-box-title-box">
                                    <h3><Link href="/blog-details">Preparing IT Systems for Audit & Regulatory Compliance</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog One*/}
                </div>
            </div>
        </section>
        {/*End Blog One*/}
        </>
    )
}