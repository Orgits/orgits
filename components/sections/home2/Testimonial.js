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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }


}


export default function Testimonial() {
    
    return (
        <>
        
        {/*Start Testimonial Two*/}
        <section className="testimonials-two">
            <div className="testimonials-two__shape1">
                <img src="assets/img/shape/testimonials-two__shape1.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape2 rotate-me">
                <img src="assets/img/shape/testimonials-two__shape2.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape3">
                <img src="assets/img/shape/testimonials-two__shape3.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape4">
                <img src="assets/img/shape/testimonials-two__shape4.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape5">
                <img src="assets/img/shape/testimonials-two__shape5.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape6 float-bob-y">
                <img src="assets/img/shape/testimonials-two__shape6.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="testimonials-two__text text-center sec-title-animation animation-style1">
                    <h2>What Our Clients Say<br/>About Orgits</h2>
                </div>
                <div className="testimonials-two__inner">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                        <div className="swiper-wrapper">

                            {/*Start Testimonial Two*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonials-two__single">
                                    <div className="athour-box">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-two__img1.jpg" alt="Mr. Atchuta Rao"/>
                                        </div>
                                        <div className="title">
                                            <h3>Mr. Atchuta Rao</h3>
                                            <p>Director & Founder, Estah Society</p>
                                        </div>
                                    </div>
                                    <div className="testimonials-two__single-content">
                                        <h3>“Outstanding Partnership”</h3>
                                        <p>
                                            "I've worked with several agencies, but Orgits truly stands out. Structured, creative, and always reliable. Anubhav personally stays involved and that makes all the difference."
                                        </p>
                                        <div className="reting-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*End Testimonial Two*/}

                            {/*Start Testimonial Two*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonials-two__single">
                                    <div className="athour-box">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-two__img2.jpg" alt="Dr. Anwar Hussain"/>
                                        </div>
                                        <div className="title">
                                            <h3>Dr. Anwar Hussain</h3>
                                            <p>MD Physician & Member of IMA, Health Tips By Dr. Anwar</p>
                                        </div>
                                    </div>
                                    <div className="testimonials-two__single-content">
                                        <h3>“Exceptional Results”</h3>
                                        <p>
                                            "Very reliable team to work with. You understand our client needs very well and it shows in your work. You've been able to take website from a grade of F to A! that's fantastic!"
                                        </p>
                                        <div className="reting-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*End Testimonial Two*/}

                            {/*Start Testimonial Two*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonials-two__single">
                                    <div className="athour-box">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-two__img3.jpg" alt="Mr. Michael Wong"/>
                                        </div>
                                        <div className="title">
                                            <h3>Mr. Michael Wong</h3>
                                            <p>Executive Director - PPAHS, Former Director Public Affairs - Abbott Laboratories</p>
                                        </div>
                                    </div>
                                    <div className="testimonials-two__single-content">
                                        <h3>“Reliable Delivery”</h3>
                                        <p>
                                            Client feedback from leadership at PPAHS reflects the value of reliable digital delivery and business understanding.
                                        </p>
                                        <div className="reting-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*End Testimonial Two*/}
                        </div>
                    </Swiper>
                </div>
            </div>

            <div className="container">
                {/*Start Fact Two*/}
                <div className="fact-two">
                    <div className="row">
                        {/*Start Single Fact Two*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="fact-two__single text-center">
                                <div className="counter-box count-box">
                                    <h2> 75+</h2>
                                    <i className="icon-plus-symbol-button"></i>
                                </div>
                                <div className="text-box">
                                    <p>Businesses served across<br/>multiple industries.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Fact Two*/}

                        {/*Start Single Fact Two*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="fact-two__single text-center">
                                <div className="counter-box count-box">
                                    <h2>50+</h2>
                                </div>
                                <div className="text-box">
                                    <p>Professionals & specialists in<br/>technology, marketing & compliance.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Fact Two*/}

                        {/*Start Single Fact Two*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="fact-two__single text-center">
                                <div className="counter-box count-box">
                                    <h2>3+</h2>
                                    <span className="m">yrs</span>
                                    <i className="icon-plus-symbol-button"></i>
                                </div>
                                <div className="text-box">
                                    <p>Years of proven track record<br/>delivering business solutions.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Fact Two*/}

                    </div>
                </div>
                {/*End Fact Two*/}
            </div>
        </section>
        {/*End Testimonial Two*/}


        </>
    )
}