'use client'
import Link from "next/link"
import { useState } from 'react'
import Image from 'next/image'
import CounterUp from "@/components/elements/CounterUp"

export default function About() {
    return (
        <>
        {/*Start About Three*/}
        <section className="about-three">
            <div className="about-three__shape1 float-bob-y">
                <Image
                    src="/assets/img/shape/about-three__shape1.png"
                    alt=""
                    width={33}
                    height={120}
                    loading="lazy"
                />
            </div>
            <div className="about-three__shape2">
                <Image
                    src="/assets/img/shape/about-three__shape2.png"
                    alt=""
                    width={114}
                    height={114}
                    loading="lazy"
                />
            </div>
            <div className="about-three__shape3">
                <Image
                    src="/assets/img/shape/about-three__shape3.png"
                    alt=""
                    width={225}
                    height={225}
                    loading="lazy"
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__content">
                            <div className="sec-title-four sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Who We Are</h4>
                                </div>
                                <h2>
                                    Builders, Thinkers,<br/>Strategists & Auditors
                                </h2>
                            </div>
                            <div className="text">
                                <p>From building digital products and brands to securing IT infrastructure, Orgits provides a complete range of technology, marketing and IT governance solutions tailored to business needs.</p>
                            </div>
                            <div className="about-three__fact-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-three__fact-single">
                                            <div className="count-outer count-box">
                                            <CounterUp end={75} />
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
                                            <CounterUp end={100} />
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
                                    <Image
                                        src="/assets/img/about/about-three__img1.jpg"
                                        alt="Orgits Business Solutions - Technology, Marketing & Compliance Team"
                                        width={300}
                                        height={200}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="title-box">
                                    <h3>Technology, Marketing & Compliance<br/>Under One Roof</h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="/about">
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
                                        <Image
                                            src="/assets/img/about/about-three__img2.jpg"
                                            alt="Orgits Business Solutions team collaboration"
                                            width={290}
                                            height={290}
                                            loading="lazy"
                                        />
                                    </div>
                                    {/*End About Three Img*/}
                                </li>

                                <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Three Img*/}
                                    <div className="single-about-three__img-box">
                                        <Image
                                            src="/assets/img/about/about-three__img3.jpg"
                                            alt="Orgits Business Solutions workplace"
                                            width={220}
                                            height={220}
                                            loading="lazy"
                                        />
                                    </div>
                                    {/*End About Three Img*/}
                                </li>
                            </ul>

                            <div className="about-three__img-box-bottom wow fadeInLeft" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                {/*Single About Three Img*/}
                                <div className="single-about-three__img-box">
                                    <Image
                                        src="/assets/img/about/about-three__img4.jpg"
                                        alt="Orgits Business Solutions - 4 years track record"
                                        width={550}
                                        height={395}
                                        loading="lazy"
                                    />
                                </div>
                                {/*End About Three Img*/}
                            </div>

                            <div className="overlay-box text-center">
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <CounterUp end={4} />
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
        </>
    )
}