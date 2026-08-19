'use client'
import Link from "next/link"
export default function Project() {
    return (
        <>
        {/*Start Project One*/}
        <section className="project-one">
            <div className="container">
                <div className="sec-title text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Solution Areas</h4>
                    </div>
                    <h2>What We Can Build For You</h2>
                </div>

                {/*Start Single Project One*/}
                <div className="project-one__single wow animated fadeInLeft" data-wow-delay="0.1s">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="project-one__single-img-box">
                                <img src="assets/img/project/project-one-1.jpg" alt="Investment & Exchange Platforms"/>
                                <div className="overlay-icon">
                                    <Link href="/project-details" className="img-popup">
                                        <span className="icon-plus"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="project-one__single-content-box">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tag"></span>
                                            </div>
                                            <p>Digital Platforms</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h2><Link href="/project-details">Investment & Exchange Platforms</Link></h2>
                                </div>
                                <div className="btn-box">
                                    <Link className="thm-btn" href="/project-details">
                                        <span className="txt">View Details</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Single Project One*/}

                {/*Start Single Project One*/}
                <div className="project-one__single wow animated fadeInRight" data-wow-delay="0.2s">
                    <div className="row">
                        <div className="col-xl-5 order-22">
                            <div className="project-one__single-content-box project-one__single-content-box--style2">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tag"></span>
                                            </div>
                                            <p>Business Systems</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h2><Link href="/project-details">Admin Panels & CMS</Link></h2>
                                </div>
                                <div className="btn-box">
                                    <Link className="thm-btn" href="/project-details">
                                        <span className="txt">View Details</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 order-11">
                            <div className="project-one__single-img-box">
                                <img src="assets/img/project/project-one-2.jpg" alt="Admin Panels & CMS"/>
                                <div className="overlay-icon">
                                    <Link href="/project-details" className="img-popup">
                                        <span className="icon-plus"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*End Single Project One*/}
                {/*Start Single Project One*/}
                <div className="project-one__single project-one__single--style2 wow animated fadeInLeft"
                    data-wow-delay="0.3s">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="project-one__single-img-box">
                                <img src="assets/img/project/project-one-3.jpg" alt="Learning Management Solutions"/>
                                <div className="overlay-icon">
                                    <Link href="/project-details" className="img-popup">
                                        <span className="icon-plus"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="project-one__single-content-box">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tag"></span>
                                            </div>
                                            <p>Education Technology</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h2><Link href="/project-details">Learning Management Solutions</Link></h2>
                                </div>
                                <div className="btn-box">
                                    <Link className="thm-btn" href="/project-details">
                                        <span className="txt">View Details</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Single Project One*/}

                <div className="project-one__btn-box">
                    <Link className="thm-btn" href="/project">
                        <span className="txt">View All Solutions</span>
                        <i className="icon-next"></i>
                    </Link>
                </div>

            </div>
        </section>
        {/*End Project One*/}
        </>
    )
}