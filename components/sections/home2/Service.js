import Link from "next/link"
export default function Service() {
    return (
        <>
        
        {/*Start Service Two*/}
        <section className="service-two">
            <div className="service-two__shape1">
                <img src="assets/img/shape/service-two__shape1.png" alt="shape"/>
            </div>
            <div className="service-two__shape2">
                <img src="assets/img/shape/service-two__shape2.png" alt="shape"/>
            </div>
            <div className="service-two__shape3">
                <img src="assets/img/shape/service-two__shape3.png" alt="shape"/>
            </div>
            <div className="service-two__shape4 float-bob-y">
                <img src="assets/img/shape/service-two__shape4.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="sec-title-two text-center sec-title-animation animation-style1">
                    <h2>What We Do <span>For You</span></h2>
                    <p>Technology, Marketing & Compliance Solutions</p>
                </div>
                <div className="row">

                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color1">
                                <span className="icon-website-design"><span className="path1"></span><span
                                        className="path2"></span></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="/app-development">Product Development</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>From business requirements to production, we design and develop scalable digital products around real business goals.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="/app-development">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color2">
                                <span className="icon-design-strategy"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span><span
                                        className="path4"></span></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="/web-development">Web & Mobile App Development</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>We build responsive web and mobile applications using modern technologies for business, customer and operational use cases.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="/web-development">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box">
                                <span className="icon-free-consultation"></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="/digital-marketing">Digital Marketing</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>Drive measurable growth through Google and Meta Ads, marketing strategy, lead generation and digital acquisition.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="/digital-marketing">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color3">
                                <span className="icon-web-development1"></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="/services">CRM & Marketing Automation</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>Automate lead management, customer journeys, communication and marketing workflows to improve operational efficiency.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="/services">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color1">
                                <span className="icon-website-design"><span className="path1"></span><span
                                        className="path2"></span></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="/services">IS Audit & IT Compliance</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>Assess IT controls, cybersecurity, access management, audit trails, business continuity and regulatory compliance requirements.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="/services">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.6s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color2">
                                <span className="icon-design-strategy"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span><span
                                        className="path4"></span></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="/services">Cloud & IT Consulting</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>Plan, deploy and manage cloud application infrastructure with practical IT consulting and secure deployment practices.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="/services">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                </div>
            </div>
        </section>
        {/*End Service Two*/}
        </>
    )
}