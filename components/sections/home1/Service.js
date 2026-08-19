'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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



}

export default function Service() {
    return (
        <>
        {/*Start Service Three*/}
        <section className="service-three">
            <div className="service-three__shape1 float-bob-x">
                <img src="assets/img/shape/service-three__shape1.png" alt="shapes"/>
            </div>
            <div className="service-three__shape2">
                <img src="assets/img/shape/service-three__shape2.png" alt="shapes"/>
            </div>
            <div className="service-three__shape3 float-bob-y">
                <img src="assets/img/shape/service-three__shape3.png" alt="shapes"/>
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
        </>
    )
}
