'use client'
import Link from "next/link"
import Image from 'next/image'
import { SwiperWrapper, SwiperSlideWrapper } from '@/components/ui/SwiperWrapper'


const swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1199: { slidesPerView: 3 },
        1350: { slidesPerView: 4 },
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
                            <SwiperWrapper options={swiperOptions} className="thm-swiper__slider swiper-container">

                                <div className="swiper-wrapper">

                                    {/*Start Single Project Two*/}
                                    <SwiperSlideWrapper>
                                        <div className="swiper-slide">
                                            <div className="project-two__single">
                                                <div className="project-two__single-img">
                                                    <Image
                                                        src="/assets/img/project/project-two__img1.jpg"
                                                        alt="Digital Marketing Growth"
                                                        width={460}
                                                        height={600}
                                                        loading="lazy"
                                                    />
                                                    <div className="overlay-title">
                                                        <h4>Marketing</h4>
                                                        <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlideWrapper>
                                    {/*End Single Project Two*/}

{/*Start Single Project Two*/}
                                    <SwiperSlideWrapper>
                                        <div className="swiper-slide">
                                            <div className="project-two__single">
                                                <div className="project-two__single-img">
                                                    <Image
                                                        src="/assets/img/project/project-two__img2.jpg"
                                                        alt="Cloud Server Deployment"
                                                        width={460}
                                                        height={600}
                                                        loading="lazy"
                                                    />
                                                    <div className="overlay-title">
                                                        <h4>Cloud & Infrastructure</h4>
                                                        <h3><Link href="#">Cloud Server Deployment</Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlideWrapper>
                                    {/*End Single Project Two*/}

                                    {/*Start Single Project Two*/}
                                    <SwiperSlideWrapper>
                                        <div className="swiper-slide">
                                            <div className="project-two__single">
                                                <div className="project-two__single-img">
                                                    <Image
                                                        src="/assets/img/project/project-two__img3.jpg"
                                                        alt="Digital Marketing Growth"
                                                        width={460}
                                                        height={600}
                                                        loading="lazy"
                                                    />
                                                    <div className="overlay-title">
                                                        <h4>Marketing</h4>
                                                        <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlideWrapper>
                                    {/*End Single Project Two*/}

                                    {/*Start Single Project Two*/}
                                    <SwiperSlideWrapper>
                                        <div className="swiper-slide">
                                            <div className="project-two__single">
                                                <div className="project-two__single-img">
                                                    <Image
                                                        src="/assets/img/project/project-two__img4.jpg"
                                                        alt="E-commerce Platforms"
                                                        width={460}
                                                        height={600}
                                                        loading="lazy"
                                                    />
                                                    <div className="overlay-title">
                                                        <h4>Digital Commerce</h4>
                                                        <h3><Link href="#">E-commerce Platforms</Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlideWrapper>
                                    {/*End Single Project Two*/}

                                    {/*Start Single Project Two*/}
                                    <SwiperSlideWrapper>
                                        <div className="swiper-slide">
                                            <div className="project-two__single">
                                                <div className="project-two__single-img">
                                                    <Image
                                                        src="/assets/img/project/project-two__img3.jpg"
                                                        alt="Digital Marketing Growth"
                                                        width={460}
                                                        height={600}
                                                        loading="lazy"
                                                    />
                                                    <div className="overlay-title">
                                                        <h4>Marketing</h4>
                                                        <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlideWrapper>
                                    {/*End Single Project Two*/}

                                    {/*Start Single Project Two*/}
                                    <SwiperSlideWrapper>
                                        <div className="swiper-slide">
                                            <div className="project-two__single">
                                                <div className="project-two__single-img">
                                                    <Image
                                                        src="/assets/img/project/project-two__img1.jpg"
                                                        alt="Digital Marketing Growth"
                                                        width={460}
                                                        height={600}
                                                        loading="lazy"
                                                    />
                                                    <div className="overlay-title">
                                                        <h4>Marketing</h4>
                                                        <h3><Link href="#">Digital Marketing Growth</Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlideWrapper>
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

                            </SwiperWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Project Two*/}
        </>
    )
}