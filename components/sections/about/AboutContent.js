'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import CounterUp from "@/components/elements/CounterUp"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function AboutContent() {
    return (
        <>
        {/*Start About Three*/}
        <section className="about-three" aria-labelledby="about-heading">
            <div className="about-three__shape1 float-bob-y">
                <img src="assets/img/shape/about-three__shape1.png" alt=""/>
            </div>
            <div className="about-three__shape2">
                <img src="assets/img/shape/about-three__shape2.png" alt=""/>
            </div>
            <div className="about-three__shape3">
                <img src="assets/img/shape/about-three__shape3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__content">
                            <div className="sec-title-four sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Who We Are</h4>
                                </div>
                                <h1 id="about-heading">
                                    Builders, Thinkers,<br/>Strategists & Auditors
                                </h1>
                            </div>
                            <div className="text">
                                <p>From crafting a brand and building digital products to securing IT infrastructure, Orgits provides technology, digital marketing, cloud, automation and Information Systems Audit & compliance solutions tailored to business needs.</p>
                            </div>
                            <div className="about-three__fact-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-three__fact-single">
                                            <div className="count-outer count-box">
                                            <span className="counter-up" data-end="75">0</span>
                                                <i className="icon-plus-symbol-button"></i>
                                            </div>
                                            <div className="title">
                                                <h3>Businesses Served</h3>
                                            </div>
                                            <div className="text">
                                                <p>Across Industries</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-three__fact-single">
                                            <div className="count-outer count-box">
                                            <span className="counter-up" data-end="100">0</span>
                                                <i className="icon-percentage"></i>
                                            </div>
                                            <div className="title">
                                                <h3>Professionals & Specialists</h3>
                                            </div>
                                            <div className="text">
                                                <p>Technology, Marketing & Compliance</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="about-three__img">
                                <div className="img-box">
                                    <img src="assets/img/about/about-three__img1.jpg" alt="Orgits Team"/>
                                </div>
                                <div className="title-box">
                                    <h3>Technology, Marketing & Compliance<br/>Under One Roof</h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="/about">
                                            <span className="txt">Learn More About Orgits</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__img-box">
                            <ul>
                                <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Three Img*/}
                                    <div className="single-about-three__img-box">
                                        <img src="assets/img/about/about-three__img2.jpg" alt="Orgits Office"/>
                                    </div>
                                    {/*End About Three Img*/}
                                </li>

                                <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Three Img*/}
                                    <div className="single-about-three__img-box">
                                        <img src="assets/img/about/about-three__img3.jpg" alt="Orgits Workspace"/>
                                    </div>
                                    {/*End About Three Img*/}
                                </li>
                            </ul>

                            <div className="about-three__img-box-bottom wow fadeInLeft" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                {/*Single About Three Img*/}
                                <div className="single-about-three__img-box">
                                    <img src="assets/img/about/about-three__img4.jpg" alt="Orgits Collaboration"/>
                                </div>
                                {/*End About Three Img*/}
                            </div>

                            <div className="overlay-box text-center">
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <span className="counter-up" data-end="4">0</span>
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Years Of<br/>Track Record</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End About Three*/}

        {/*Start Partner style3*/}
        <section className="partner-style3 about" aria-labelledby="partners-heading">
            <div className="container">
                <h2 id="partners-heading" className="visually-hidden">Our Partners</h2>
                <ul className="row clearfix list-one">
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="https://zoho.com" target="_blank" rel="noopener noreferrer">
                                <img src="assets/img/brand/brand-v3-1.png" alt="Zoho Authorized Partner"/>
                                <img className="" src="assets/img/brand/brand-v3-9.png" alt="Zoho"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="https://razorpay.com" target="_blank" rel="noopener noreferrer">
                                <img src="assets/img/brand/brand-v3-2.png" alt="Razorpay Authorized Partner"/>
                                <img className="" src="assets/img/brand/brand-v3-10.png" alt="Razorpay"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-3.png" alt="EzyLife"/>
                                <img className="" src="assets/img/brand/brand-v3-11.png" alt="EzyLife"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-4.png" alt="Ayaan IFMS"/>
                                <img className="" src="assets/img/brand/brand-v3-12.png" alt="Ayaan IFMS"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                </ul>

                <ul className="row">
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-5.png" alt="SG Rawat & Co."/>
                                <img className="" src="assets/img/brand/brand-v3-13.png" alt="SG Rawat & Co."/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-6.png" alt="One Citizen One Plant"/>
                                <img className="" src="assets/img/brand/brand-v3-14.png" alt="One Citizen One Plant"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-7.png" alt="LDR"/>
                                <img className="" src="assets/img/brand/brand-v3-15.png" alt="LDR"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-8.png" alt="Trusted Client"/>
                                <img className="" src="assets/img/brand/brand-v3-16.png" alt="Trusted Client"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                </ul>
            </div>
        </section>
        {/*End Partner style3*/}

        {/*Start Service Three*/}
        <section className="service-three" aria-labelledby="services-heading">
            <div className="service-three__shape1 float-bob-x">
                <img src="assets/img/shape/service-three__shape1.png" alt=""/>
            </div>
            <div className="service-three__shape2">
                <img src="assets/img/shape/service-three__shape2.png" alt=""/>
            </div>
            <div className="service-three__shape3 float-bob-y">
                <img src="assets/img/shape/service-three__shape3.png" alt=""/>
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>What We Do</h4>
                    </div>
                    <h2 id="services-heading">
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
                                    <h3><a href="/app-development">Product Development</a></h3>
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
                                    <h3><a href="/web-development">Web & Mobile App Development</a></h3>
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
                                    <h3><a href="/digital-marketing">Digital Marketing</a></h3>
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
                                    <h3><a href="/services">CRM & Marketing Automation</a></h3>
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
                                    <h3><a href="/services">IS Audit & IT Compliance</a></h3>
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
                                    <h3><a href="/services">Cloud & IT Consulting</a></h3>
                                </div>
                                <div className="text">
                                    <p>Plan, deploy and manage cloud application infrastructure with practical IT consulting and secure deployment practices.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Three*/}
                </div>
            </div>
        </section>
        {/*End Service Three*/}

        {/*Start Team Two*/}
        <section className="team-two" aria-labelledby="team-heading">
            <div className="team-two__shape1">
                <img src="assets/img/shape/team-two__shape1.png" alt=""/>
            </div>
            <div className="team-two__shape2">
                <img src="assets/img/shape/team-two__shape2.png" alt=""/>
            </div>
            <div className="team-two__shape3">
                <img src="assets/img/shape/team-two__shape3.png" alt=""/>
            </div>
            <div className="team-two__shape4">
                <img src="assets/img/shape/team-two__shape4.png" alt=""/>
            </div>
            <div className="team-two__shape5">
                <img src="assets/img/shape/team-two__shape5.png" alt=""/>
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Our Leadership Team</h4>
                    </div>
                    <h2 id="team-heading">
                        Technology, Marketing & Compliance Leadership
                    </h2>
                </div>
                <div className="row">
                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-1.jpg" alt="Anubhav Sharma"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <a href="https://www.linkedin.com/in/anubhavsharma" aria-label="Anubhav Sharma on LinkedIn">
                                                <i className="icon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/anubhavsharma" aria-label="Anubhav Sharma on Twitter">
                                                <i className="icon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/anubhavsharma" aria-label="Anubhav Sharma on Facebook">
                                                <i className="icon-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><a href="#">Anubhav Sharma</a></h3>
                                <p>CEO & IT Consultant</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-2.jpg" alt="CA Sahil Goyal"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <a href="#" aria-label="CA Sahil Goyal on LinkedIn">
                                                <i className="icon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="CA Sahil Goyal on Twitter">
                                                <i className="icon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="CA Sahil Goyal on Facebook">
                                                <i className="icon-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><a href="#">CA Sahil Goyal</a></h3>
                                <p>Managing Director</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-3.jpg" alt="Sahil Khan"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <a href="#" aria-label="Sahil Khan on LinkedIn">
                                                <i className="icon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Sahil Khan on Twitter">
                                                <i className="icon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Sahil Khan on Facebook">
                                                <i className="icon-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><a href="#">Sahil Khan</a></h3>
                                <p>RevOps & Automation Strategist</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.7s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-4.jpg" alt="Mohammad Sahil"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <a href="#" aria-label="Mohammad Sahil on LinkedIn">
                                                <i className="icon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Mohammad Sahil on Twitter">
                                                <i className="icon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Mohammad Sahil on Facebook">
                                                <i className="icon-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><a href="#">Mohammad Sahil</a></h3>
                                <p>Senior Product Designer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                </div>
            </div>
        </section>
        {/*End Team Two*/}

        {/*Start Fact Counter One*/}
        <section className="fact-counter-one about" aria-labelledby="stats-heading">
            <div className="shape1"><img src="assets/img/shape/fact-counter-one-about-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/img/shape/fact-counter-one-about-shape2.png" alt=""/></div>
            <div className="shape3"><img src="assets/img/shape/fact-counter-one-about-shape3.png" alt=""/></div>
            <div className="shape4"><img src="assets/img/shape/fact-counter-one-about-shape4.png" alt=""/></div>
            <div className="container">
                <h2 id="stats-heading" className="visually-hidden">Company Statistics</h2>
                <div className="row">
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".1s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-completed-projects"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <span className="counter-up" data-end="75">0</span>
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Businesses Served</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-happy-clients"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <span className="counter-up" data-end="100">0</span>
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Professionals & Specialists</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-winning-award"></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <span className="counter-up" data-end="45">0</span>
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Freelancer Network</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-cup-teas"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <span className="counter-up" data-end="4">0</span>
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Years Track Record</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}
                </div>
            </div>
        </section>
        {/*End Fact Counter One*/}


        {/*Start Testmonials Three*/}
        <section className="testimonials-three about" aria-labelledby="testimonials-heading">
            <div className="testimonials-three__shape1 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape1.png" alt=""/>
            </div>
            <div className="testimonials-three__shape2 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape2.png" alt=""/>
            </div>
            <div className="testimonials-three__shape3 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="testimonials-three__img">
                            <ul>
                                <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <div className="inner">
                                            <img src="assets/img/testimonial/testimonials-three__img1.jpg" alt="Client testimonial"/>
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <div className="inner">
                                            <img src="assets/img/testimonial/testimonials-three__img2.jpg" alt="Client testimonial"/>
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <img src="assets/img/testimonial/testimonials-three__img3.jpg" alt="Client testimonial"/>
                                    </div>
                                    {/*End About Two Img*/}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="testimonials-three__content">
                            <div className="sec-title-four sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Client Feedback</h4>
                                </div>
                                <h2 id="testimonials-heading">
                                    What Our Clients Say About Orgits
                                </h2>
                            </div>

                            {/* If we need navigation buttons */}
                            <div className="swiper-nav-style2 testimonials-three__swiper-nav-style">
                                <div className="swiper-button-prev h1p" id="testimonials-three__swiper-button-prev">
                                    <i className="icon-left-arrow right"></i>
                                </div>
                                <div className="swiper-button-next h1n" id="testimonials-three__swiper-button-next">
                                    <i className="icon-right-arrow-angle left"></i>
                                </div>
                            </div>
                            <div className="testimonials-three__content-inner">
                                <div className="thm-swiper__slider swiper-container">

                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="icon-box">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    "I've worked with several agencies, but Orgits truly stands out. Structured, creative, and always reliable. Anubhav personally stays involved and that makes all the difference."
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Mr. Atchuta Rao</h3>
                                                <p>Director & Founder, Estah Society</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="icon-box">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    "Very reliable team to work with. You understand our client needs very well and it shows in your work. You've been able to take website from a grade of F to A! that's fantastic!"
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Dr. Anwar Hussain</h3>
                                                <p>MD Physician & Member of IMA, Health Tips By Dr. Anwar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Testmonials Three*/}
        </>
    )
}