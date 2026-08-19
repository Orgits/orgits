'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }


}
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Services">
                <div>
                    {/*Start Service Three*/}
                    <section className="service-three service">
                        <div className="service-three__shape1 float-bob-x">
                            <img src="assets/img/shape/service-three__shape4.png" alt="shapes"/>
                        </div>
                        <div className="service-three__shape2">
                            <img src="assets/img/shape/service-three__shape2.png" alt="shapes"/>
                        </div>
                        <div className="service-three__shape3 float-bob-y">
                            <img src="assets/img/shape/service-three__shape5.png" alt="shapes"/>
                        </div>
                        <div className="container">
                            <div className="sec-title-three text-center sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>What We Do</h4>
                                </div>
                                <h2>
                                    Technology, Marketing & Compliance Solutions
                                </h2>
                            </div>
                            <div className="row">

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-design-strategy1">
                                                <span className="path1"></span><span className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="/app-development">Product Development</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>From business requirements to production, we design and develop scalable digital products around real business goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-web-development2"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span><span
                                                    className="path5"></span><span className="path6"></span><span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="/web-development">Web & Mobile App Development</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>We build responsive web and mobile applications using modern technologies for business, customer and operational use cases.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-digital-marketing"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="/digital-marketing">Digital Marketing</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>Drive measurable growth through Google and Meta Ads, marketing strategy, lead generation and digital acquisition.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-email-marketing"><span className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="/services">CRM & Marketing Automation</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>Automate lead management, customer journeys, communication and marketing workflows to improve operational efficiency.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-product-development"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="/services">IS Audit & IT Compliance</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>Assess IT controls, cybersecurity, access management, audit trails, business continuity and regulatory compliance requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-business-strategy"></span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="/services">Cloud & IT Consulting</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>Plan, deploy and manage cloud application infrastructure with practical IT consulting and secure deployment practices.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}
                            </div>
                        </div>
                    </section>
                    {/*End Service Three*/}

                    {/* IS Audit & IT Compliance Section */}
                    <section className="service-three" style={{backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="sec-title-three text-center sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Specialized Compliance</h4>
                                </div>
                                <h2>
                                    IS Audit & IT Compliance Services
                                </h2>
                                <p style={{maxWidth: '700px', margin: '20px auto 0', color: '#666'}}>
                                    Helping institutions stay audit-ready, regulator-compliant and IT-secure.
                                </p>
                            </div>
                            <div className="row" style={{marginTop: '50px'}}>

                                {/* Service 1 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-product-development"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>IT Controls & Risk Assessment</h3>
                                            </div>
                                            <div className="text">
                                                <p>Evaluate IT controls and identify vulnerabilities across systems, applications and operational processes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 2 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-web-development2"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span><span
                                                    className="path5"></span><span className="path6"></span><span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>RBI Regulatory Compliance</h3>
                                            </div>
                                            <div className="text">
                                                <p>Support alignment with applicable RBI Master Directions and IT framework requirements for regulated institutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 3 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-digital-marketing"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>Data Security & Cybersecurity Audit</h3>
                                            </div>
                                            <div className="text">
                                                <p>Review encryption, access controls and cybersecurity practices to identify weaknesses and improve protection.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 4 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-email-marketing"><span className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>Business Continuity & Disaster Recovery Review</h3>
                                            </div>
                                            <div className="text">
                                                <p>Assess BCP and disaster recovery arrangements against operational and regulatory expectations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 5 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-business-strategy"></span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>Access Management & Audit Trail</h3>
                                            </div>
                                            <div className="text">
                                                <p>Assess user access, privilege management and system audit logs to strengthen accountability and control.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Marketing Automation Section */}
                    <section className="service-three" style={{paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="sec-title-three text-center sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Automation</h4>
                                </div>
                                <h2>
                                    Marketing Automation
                                </h2>
                            </div>
                            <div className="row" style={{marginTop: '50px'}}>

                                {/* Service 1 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-design-strategy1">
                                                <span className="path1"></span><span className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>CRM Lead Automation</h3>
                                            </div>
                                            <div className="text">
                                                <p>Automate lead capture, scoring, routing and follow-up workflows to accelerate sales cycles.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 2 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-web-development2"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span><span
                                                    className="path5"></span><span className="path6"></span><span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>Email Marketing Automation</h3>
                                            </div>
                                            <div className="text">
                                                <p>Design automated email sequences for nurture, onboarding, re-engagement and transactional communication.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 3 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-digital-marketing"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>Paid Ads Automation</h3>
                                            </div>
                                            <div className="text">
                                                <p>Automate campaign management, budget optimization and performance reporting across Google and Meta platforms.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 4 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-email-marketing"><span className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>Google & Meta Ads</h3>
                                            </div>
                                            <div className="text">
                                                <p>Strategic paid advertising campaigns that drive qualified traffic, leads and measurable business outcomes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 5 */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-business-strategy"></span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3>AI Chatbots Automation</h3>
                                            </div>
                                            <div className="text">
                                                <p>Deploy intelligent conversational agents for lead qualification, customer support and engagement automation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        </>
    )
}