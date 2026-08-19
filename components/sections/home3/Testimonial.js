'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


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

export default function Testimonial() {
    
    return (
        <>
        {/*Start Testimonials One*/}
        <section className="testimonials-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="testimonials-one__img-box">
                            <img src="assets/img/testimonial/testimonials-one__img1.jpg" alt="Client Testimonials"/>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="testimonials-one__content-box">
                            <div className="sec-title sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Client Feedback</h4>
                                </div>
                                <h2>What Our Clients Say<br/>About Orgits</h2>
                            </div>

                            <div className="testimonials-one__inner">
                                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                                    <div className="swiper-wrapper">

                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    "I've worked with several agencies, but Orgits truly stands out. Structured, creative, and always reliable. Anubhav personally stays involved and that makes all the difference."
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Mr. Atchuta Rao</h3>
                                                <p>Director & Founder, Estah Society</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}
                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    "Very reliable team to work with. You understand our client needs very well and it shows in your work. You've been able to take website from a grade of F to A! that's fantastic!"
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Dr. Anwar Hussain</h3>
                                                <p>MD Physician & Member of IMA, Health Tips By Dr. Anwar</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}
                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    Client feedback from leadership at PPAHS reflects the value of reliable digital delivery and business understanding.
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Mr. Michael Wong</h3>
                                                <p>Executive Director - PPAHS, Former Director Public Affairs - Abbott Laboratories</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}

                                    </div>

                                        {/* If we need navigation buttons */}
                                        <div className="swiper-nav-style2 testimonials-one__swiper-nav-style2">
                                            <div className="swiper-button-prev srp" id="testimonial-one__swiper-button-prev">
                                                <i className="icon-left-arrow right"></i>
                                            </div>
                                            <div className="swiper-button-next srn" id="testimonial-one__swiper-button-next">
                                                <i className="icon-right-arrow-angle left"></i>
                                            </div>
                                        </div>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Testimonials One*/}


        </>
    )
}