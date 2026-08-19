'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function About() {
    return (
        <>
        {/*Start About One*/}
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="about-one__img-box">
                            <div className="about-one__img-box-inner">
                                <img src="assets/img/about/about-one-1.jpg" alt="Orgits Team"/>
                            </div>
                            <div className="about-one__overlay-box text-center">
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <CounterUp end={4} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <h4>Years Of<br/>Track Record</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="about-one__overlay-icon-box1">
                                <img src="assets/img/about/about-one__logo1.png" alt="Zoho Partner"/>
                            </div>
                            <div className="about-one__overlay-icon-box2">
                                <img src="assets/img/about/about-one__logo2.png" alt="Razorpay Partner"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
                        <div className="about-one__content-box">
                            <div className="sec-title sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>About Orgits</h4>
                                </div>
                                <h2>Ready-to-Deploy Business<br/>Technology Solutions</h2>
                            </div>
                            <div className="text">
                                <p>
                                    Orgits brings together software development, CRM and marketing automation, digital marketing, cloud infrastructure and IT audit expertise under one business solutions team.
                                </p>
                            </div>
                            <div className="about-one__content-list-box">
                                <ul>
                                    <li>
                                        <div className="circle-box"></div>
                                        <p>We combine technology, marketing and compliance to solve business problems.</p>
                                    </li>
                                    <li>
                                        <div className="circle-box"></div>
                                        <p>Builders, thinkers, strategists & auditors working as one team.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-one__progress-box">
                                <ul className="clearfix">
                                    <li className="wow slideInUp animated" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <div className="circle-progress-single text-center">
                                            <div className="progress-box">
                                                <div className="graph-outer">
                                                    
                                                    <div className="inner-text count-box">
                                                        
                                                        <span className="count-Parsent">75+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="circle-progress-title">
                                                <h3>Businesses Served</h3>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                                        <div className="circle-progress-single text-center">
                                            <div className="progress-box">
                                                <div className="graph-outer">
                                                   
                                                    <div className="inner-text count-box">
                                                        <span className="count-text" data-stop="50"
                                                            data-speed="2000"></span>
                                                        <span className="count-Parsent">50+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="circle-progress-title">
                                                <h3>Professionals</h3>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow slideInUp animated" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                        <div className="circle-progress-single text-center">
                                            <div className="progress-box">
                                                <div className="graph-outer">
                                                    
                                                    <div className="inner-text count-box">
                                                        <span className="count-Parsent">45+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="circle-progress-title">
                                                <h3>Freelancer Network</h3>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End About One*/}

        </>
    )
}