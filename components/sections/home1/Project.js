'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 20,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }



}

export default function Project() {
    
    return (
        <>
        {/*Start Project Two*/}
        <section className="project-two">
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Solution Areas</h4>
                    </div>
                    <h2>
                        What We Can Build For You
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="project-two__inner">
                            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                                <div className="swiper-wrapper">

                                    {/*Start Single Project Two*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-two__single">
                                            <div className="project-two__single-img">
                                                <img src="assets/img/project/project-two__img1.jpg" alt="image"/>
                                                <div className="overlay-title">
                                                    <h4>Marketing</h4>
                                                    <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*End Single Project Two*/}

{/*Start Single Project Two*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-two__single">
                                            <div className="project-two__single-img">
                                                <img src="assets/img/project/project-two__img1.jpg" alt="Digital Marketing Growth campaign dashboard" width="460" height="600"/>
                                                <div className="overlay-title">
                                                    <h4>Marketing</h4>
                                                    <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*End Single Project Two*/}

                                    {/*Start Single Project Two*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-two__single">
                                            <div className="project-two__single-img">
                                                <img src="assets/img/project/project-two__img3.jpg" alt="image"/>
                                                <div className="overlay-title">
                                                    <h4>Marketing</h4>
                                                    <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*End Single Project Two*/}

                                    {/*Start Single Project Two*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-two__single">
                                            <div className="project-two__single-img">
                                                <img src="assets/img/project/project-two__img4.jpg" alt="E-commerce platform interface design" width="460" height="600"/>
                                                <div className="overlay-title">
                                                    <h4>Digital Commerce</h4>
                                                    <h3><Link href="#">E-commerce Platforms</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*End Single Project Two*/}

                                    {/*Start Single Project Two*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-two__single">
                                            <div className="project-two__single-img">
                                                <img src="assets/img/project/project-two__img3.jpg" alt="image"/>
                                                <div className="overlay-title">
                                                    <h4>Marketing</h4>
                                                    <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*End Single Project Two*/}
                                    
                                    {/*Start Single Project Two*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-two__single">
                                            <div className="project-two__single-img">
                                                <img src="assets/img/project/project-two__img1.jpg" alt="image"/>
                                                <div className="overlay-title">
                                                    <h4>Marketing</h4>
                                                    <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*End Single Project Two*/}

                                </div>
                                {/* If we need navigation buttons */}
                                <div className="swiper-nav-style2 project-two__swiper-nav">
                                    <div className="border1"></div>
                                    <div className="border2"></div>
                                    <div className="swiper-button-prev srp" id="project-two__swiper-button-prev">
                                        <i className="icon-left-arrow right"></i>
                                    </div>
                                    <div className="swiper-button-next srn" id="project-two__swiper-button-next">
                                        <i className="icon-right-arrow-angle left"></i>
                                    </div>
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Project Two*/}
        </>
    )
}
