'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import { useState } from 'react'
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
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function About() {
    return (
        <>
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About company">
        

        {/*Start About Three*/}
        <section className="about-three">
            <div className="about-three__shape1 float-bob-y">
                <img src="assets/img/shape/about-three__shape1.png" alt="shapes"/>
            </div>
            <div className="about-three__shape2">
                <img src="assets/img/shape/about-three__shape2.png" alt="shapes"/>
            </div>
            <div className="about-three__shape3">
                <img src="assets/img/shape/about-three__shape3.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__content">
                            <div className="sec-title-four sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Get To Know About Us</h4>
                                </div>
                                <h2>
                                    We Are Here to Give You<br/>Effective Ideas
                                </h2>
                            </div>
                            <div className="text">
                                <p>Creative design slogans can help people connect more to the<br/>
                                    scenario that the accounts for making available.</p>
                            </div>
                            <div className="about-three__fact-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-three__fact-single">
                                            <div className="count-outer count-box">
                                                <h2>256</h2>
                                                <i className="icon-plus-symbol-button"></i>
                                            </div>
                                            <div className="title">
                                                <h3>Completed Projects</h3>
                                            </div>
                                            <div className="text">
                                                <p>With 100% Satisfaction</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-three__fact-single">
                                            <div className="count-outer count-box">
                                                <h2>89</h2>
                                                <i className="icon-percentage"></i>
                                            </div>
                                            <div className="title">
                                                <h3>Company Growth</h3>
                                            </div>
                                            <div className="text">
                                                <p>Avg. Every Year</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="about-three__img">
                                <div className="img-box">
                                    <img src="assets/img/about/about-three__img1.jpg" alt="image"/>
                                </div>
                                <div className="title-box">
                                    <h3>We Are The Best Digital<br/>Agencies In The City</h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="#">
                                            <span className="txt">Learn More</span>
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
                                        <img src="assets/img/about/about-three__img2.jpg" alt="image"/>
                                    </div>
                                    {/*End About Three Img*/}
                                </li>

                                <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Three Img*/}
                                    <div className="single-about-three__img-box">
                                        <img src="assets/img/about/about-three__img3.jpg" alt="image"/>
                                    </div>
                                    {/*End About Three Img*/}
                                </li>
                            </ul>

                            <div className="about-three__img-box-bottom wow fadeInLeft" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                {/*Single About Three Img*/}
                                <div className="single-about-three__img-box">
                                    <img src="assets/img/about/about-three__img4.jpg" alt="image"/>
                                </div>
                                {/*End About Three Img*/}
                            </div>

                            <div className="overlay-box text-center">
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                        <h2>15</h2>
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Years Of<br/>Experiences</p>
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
        <section className="partner-style3 about">
            <div className="container">
                <ul className="row clearfix list-one">
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-1.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-9.png" alt="#"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-2.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-10.png" alt="#"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-3.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-11.png" alt="#"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-4.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-12.png" alt="#"/>
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
                                <img src="assets/img/brand/brand-v3-5.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-13.png" alt="#"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-6.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-14.png" alt="#"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-7.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-15.png" alt="#"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v3-8.png" alt="#"/>
                                <img className="" src="assets/img/brand/brand-v3-16.png" alt="#"/>
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                </ul>
            </div>
        </section>
        {/*End Partner style3*/}

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
                        <h4>Featured Services</h4>
                    </div>
                    <h2>
                        What We Offer For You
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
                                    <h3><Link href="web-development">Design Strategy</Link></h3>
                                </div>
                                <div className="text">
                                    <p>All trials are our Pro planed by default you
                                        can try out all the features available.</p>
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
                                    <h3><Link href="web-development">Web Development</Link></h3>
                                </div>
                                <div className="text">
                                    <p>All trials are our Pro planed by default you
                                        can try out all the features available.</p>
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
                                    <h3><Link href="web-development">Digital Marketing</Link></h3>
                                </div>
                                <div className="text">
                                    <p>All trials are our Pro planed by default you
                                        can try out all the features available.</p>
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
                                    <h3><Link href="web-development">Email Marketing</Link></h3>
                                </div>
                                <div className="text">
                                    <p>All trials are our Pro planed by default you
                                        can try out all the features available.</p>
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
                                    <h3><Link href="web-development">Product Development</Link></h3>
                                </div>
                                <div className="text">
                                    <p>All trials are our Pro planed by default you
                                        can try out all the features available.</p>
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
                                    <h3><Link href="web-development">Business Strategy</Link></h3>
                                </div>
                                <div className="text">
                                    <p>All trials are our Pro planed by default you
                                        can try out all the features available.</p>
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
        <section className="team-two">
            <div className="team-two__shape1">
                <img src="assets/img/shape/team-two__shape1.png" alt="shapes"/>
            </div>
            <div className="team-two__shape2">
                <img src="assets/img/shape/team-two__shape2.png" alt="shapes"/>
            </div>
            <div className="team-two__shape3">
                <img src="assets/img/shape/team-two__shape3.png" alt="shapes"/>
            </div>
            <div className="team-two__shape4">
                <img src="assets/img/shape/team-two__shape4.png" alt="shapes"/>
            </div>
            <div className="team-two__shape5">
                <img src="assets/img/shape/team-two__shape5.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Team Members</h4>
                    </div>
                    <h2>
                        Creative Team Leaders
                    </h2>
                </div>
                <div className="row">
                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-1.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><Link href="#">Daniel Stiphen</Link></h3>
                                <p>Web Developerr</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-2.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><Link href="#">Jenifer M. Florita</Link></h3>
                                <p>Website Developer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-3.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><Link href="#">Jhonshon Borison</Link></h3>
                                <p>UI/UX Designer & Developer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                </div>
            </div>
        </section>
        {/*End Team Two*/}

        {/*Start Fact Counter One*/}
        <section className="fact-counter-one about">
            <div className="shape1"><img src="assets/img/shape/fact-counter-one-about-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/img/shape/fact-counter-one-about-shape2.png" alt=""/></div>
            <div className="shape3"><img src="assets/img/shape/fact-counter-one-about-shape3.png" alt=""/></div>
            <div className="shape4"><img src="assets/img/shape/fact-counter-one-about-shape4.png" alt=""/></div>
            <div className="container">
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
                                    <CounterUp end={484} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Completed Projects</p>
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
                                    <CounterUp end={209} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Happy Clients</p>
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
                                    <CounterUp end={123} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Winning Award</p>
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
                                    <CounterUp end={245} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Cup of Teas</p>
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
        <section className="testimonials-three about">
            <div className="testimonials-three__shape1 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape1.png" alt="shapes"/>
            </div>
            <div className="testimonials-three__shape2 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape2.png" alt="shapes"/>
            </div>
            <div className="testimonials-three__shape3 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape3.png" alt="shapes"/>
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
                                            <img src="assets/img/testimonial/testimonials-three__img1.jpg" alt="image"/>
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <div className="inner">
                                            <img src="assets/img/testimonial/testimonials-three__img2.jpg" alt="image"/>
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <img src="assets/img/testimonial/testimonials-three__img3.jpg" alt="image"/>
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
                                    <h4>Customers Feedback</h4>
                                </div>
                                <h2>
                                    What Says Our Client’s<br/>About Orgits
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
                                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="icon-box">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    “ Concor delivers sectors concor delivers world className infrastructure
                                                    the is a world className infrastructure solutions across a broad
                                                    industry start and end of creativity to customers and the
                                                    stakeholders across the world broad ...”
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="icon-box">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    “ Concor delivers sectors concor delivers world className infrastructure
                                                    the is a world className infrastructure solutions across a broad
                                                    industry start and end of creativity to customers and the
                                                    stakeholders across the world broad ...”
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Testmonials Three*/}

            </Layout>
        </>
    )
}


