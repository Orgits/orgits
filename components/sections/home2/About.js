'use client'
import Link from "next/link"
export default function About() {
    return (
        <>
        {/*Start About Two*/}
        <section className="about-two">
            <div className="about-two__shape1">
                <img src="assets/img/shape/about-two__shape1.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-two__content">
                            <div className="sec-title-two  sec-title-animation animation-style1">
                                <h2>Technology Built Around<br/> <span>Business Goals</span></h2>
                                <p>
                                    We combine technology, marketing and compliance expertise to help businesses solve operational problems, improve digital experiences and build scalable systems.
                                </p>
                            </div>
                            <div className="about-two__content-list">
                                <ul className="clearfix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>Software development & product engineering</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>CRM & marketing automation</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>Digital marketing & lead generation</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>Cloud infrastructure & IT consulting</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>IS audit & IT compliance</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__btn-box">
                                <Link className="thm-btn" href="/about">
                                    <span className="txt">Learn More</span>
                                    <i className="icon-next"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="about-two__img float-bob-y">
                            <img src="assets/img/about/about-two__img1.png" alt="Orgits Solutions"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/*End About Two*/}

        </>
    )
}