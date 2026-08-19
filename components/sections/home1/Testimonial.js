'use client'
import Image from 'next/image'
import { SwiperWrapper, SwiperSlideWrapper } from '@/components/ui/SwiperWrapper'


const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        991: { slidesPerView: 1 },
        1199: { slidesPerView: 1 },
        1350: { slidesPerView: 1 },
    }
}


export default function Testimonial() {
    return (
        <>
        {/*Start Testmonials Three*/}
        <section className="testimonials-three">
            <div className="testimonials-three__shape1 rotate-me">
                <Image
                    src="/assets/img/shape/testimonials-three__shape1.png"
                    alt=""
                    width={34}
                    height={32}
                    loading="lazy"
                />
            </div>
            <div className="testimonials-three__shape2 rotate-me">
                <Image
                    src="/assets/img/shape/testimonials-three__shape2.png"
                    alt=""
                    width={33}
                    height={34}
                    loading="lazy"
                />
            </div>
            <div className="testimonials-three__shape3 rotate-me">
                <Image
                    src="/assets/img/shape/testimonials-three__shape3.png"
                    alt=""
                    width={37}
                    height={40}
                    loading="lazy"
                />
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
                                            <Image
                                                src="/assets/img/testimonial/testimonials-three__img1.jpg"
                                                alt="Client testimonial - Mr. Atchuta Rao"
                                                width={170}
                                                height={225}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <div className="inner">
                                            <Image
                                                src="/assets/img/testimonial/testimonials-three__img2.jpg"
                                                alt="Client testimonial - Dr. Anwar Hussain"
                                                width={170}
                                                height={225}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <Image
                                            src="/assets/img/testimonial/testimonials-three__img3.jpg"
                                            alt="Client testimonial"
                                            width={290}
                                            height={480}
                                            loading="lazy"
                                        />
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
                                <h2>
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
                                <SwiperWrapper options={swiperOptions} className="thm-swiper__slider swiper-container">

                                    <div className="swiper-wrapper">
                                        <SwiperSlideWrapper>
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
                                        </SwiperSlideWrapper>
                                        <SwiperSlideWrapper>
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
                                        </SwiperSlideWrapper>
                                    </div>

                                </SwiperWrapper>
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