'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const testimonialPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Client Testimonials',
    description: 'Read what clients say about Orgits Business Solutions - technology, marketing, and compliance solutions.',
    url: `${siteUrl}/testimonial`,
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Mr. Atchuta Rao',
                },
                reviewBody: 'I\'ve worked with several agencies, but Orgits truly stands out. Structured, creative, and always reliable. Anubhav personally stays involved and that makes all the difference.',
                publisher: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Dr. Anwar Hussain',
                },
                reviewBody: 'Very reliable team to work with. You understand our client needs very well and it shows in your work. You\'ve been able to take website from a grade of F to A! that\'s fantastic!',
                publisher: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Mr. Michael Wong',
                },
                reviewBody: 'Client feedback from leadership at PPAHS reflects the value of reliable digital delivery and business understanding.',
                publisher: {
                    '@type': 'Organization',
                    name: 'Orgits Business Solutions Pvt. Ltd.',
                },
            },
        },
    ],
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Testimonials', item: `${siteUrl}/testimonial` },
    ],
}

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([testimonialPageSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Testimonials">

        {/*Start Testmonials Three*/}
        <section className="testimonials-three testimonials">
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
                                     <h4>Client Feedback</h4>
                                 </div>
                                 <h1 id="testimonial-heading">
                                     What Our Clients Say About Orgits
                                 </h1>
                             </div>

                            {/* If we need navigation buttons */}
                            <div className="swiper-nav-style2 testimonials-three__swiper-nav-style">
                                <div className="swiper-button-prev srp" id="testimonials-three__swiper-button-prev">
                                    <i className="icon-left-arrow right"></i>
                                </div>
                                <div className="swiper-button-next srn" id="testimonials-three__swiper-button-next">
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
                                                    "I've worked with several agencies, but Orgits truly stands out. Structured, creative, and always reliable. Anubhav personally stays involved and that makes all the difference."
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Mr. Atchuta Rao</h3>
                                                <p>Director & Founder, Estah Society</p>
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
                                                    "Very reliable team to work with. You understand our client needs very well and it shows in your work. You've been able to take website from a grade of F to A! that's fantastic!"
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Dr. Anwar Hussain</h3>
                                                <p>MD Physician & Member of IMA, Health Tips By Dr. Anwar</p>
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
                                                    Client feedback from leadership at PPAHS reflects the value of reliable digital delivery and business understanding.
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Mr. Michael Wong</h3>
                                                <p>Executive Director - PPAHS, Former Director Public Affairs - Abbott Laboratories</p>
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

        {/*Start Cta Two*/}
        <section className="cta-two testmonials">
            <div className="container">
                <div className="cta-two__inner">
                    <div className="cta-two__inner-bg"
                         style={{ backgroundImage: 'url(assets/img/pattern/cta-two__parttern1.png)' }} ></div>
                    <div className="cta-two__content sec-title-animation animation-style1">
                        <h2>Ready to Start Your Project?</h2>
                        <p>Join the businesses that trust Orgits for technology, marketing and compliance solutions.</p>
                    </div>
                    <div className="cta-two__btn">
                        <Link className="thm-btn" href="/contact">
                            <span className="txt">Talk to Our Team</span>
                            <i className="icon-next"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/*End Cta Two*/}

        </Layout>
        </>
    )
}