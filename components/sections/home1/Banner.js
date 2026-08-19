'use client'
import Link from "next/link"
import { useState, Suspense, lazy } from 'react'
import Image from 'next/image'

const ModalVideo = lazy(() => import('react-modal-video').then(mod => ({ default: mod.default })))

function ModalVideoWrapper({ isOpen, setOpen }) {
    return (
        <Suspense fallback={null}>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </Suspense>
    )
}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/*Start Banner Two*/}
        <section className="banner-three">
            <div className="banner-three__shape1 float-bob-x">
                <Image
                    src="/assets/img/shape/banner-three__shape1.png"
                    alt=""
                    width={48}
                    height={43}
                    loading="lazy"
                />
            </div>
            <div className="banner-three__shape2">
                <Image
                    src="/assets/img/shape/banner-three__shape2.png"
                    alt=""
                    width={411}
                    height={804}
                    loading="lazy"
                />
            </div>
            <div className="banner-three__shape3">
                <Image
                    src="/assets/img/shape/banner-three__shape3.png"
                    alt=""
                    width={804}
                    height={397}
                    loading="lazy"
                />
            </div>
            <div className="banner-three__shape4 float-bob-y">
                <Image
                    src="/assets/img/shape/banner-three__shape4.png"
                    alt=""
                    width={87}
                    height={104}
                    loading="lazy"
                />
            </div>
            <div className="banner-three__shape5">
                <Image
                    src="/assets/img/shape/banner-three__shape5.png"
                    alt=""
                    width={484}
                    height={503}
                    loading="lazy"
                />
            </div>
            <div className="banner-three__shape6 float-bob-y">
                <Image
                    src="/assets/img/shape/banner-three__shape6.png"
                    alt=""
                    width={128}
                    height={92}
                    loading="lazy"
                />
            </div>
            <div className="container">
                <div className="banner-three__content">

                    <div className="banner-three__content-inner">
                        <div className="sec-title-four sec-title-animation animation-style1">
                            <div className="sub-title">
                                <h4>Technology, AI & Digital Transformation</h4>
                            </div>
                            <h1 id="hero-heading" style={{fontSize: '4.5rem'}}>
                                Building Growth<br/>For Business
                            </h1>
                        </div>
                        <div className="text">
                            <p>
                                We help enterprises and startups build, automate and secure their digital operations through software development, CRM automation, digital marketing, cloud solutions, and IT governance & audit.
                            </p>
                        </div>
                        <div className="btn-box">
                            <Link className="thm-btn" href="/contact">
                                <span className="txt">
                                    Start a Conversation
                                    <i className="icon-next"></i>
                                </span>
                            </Link>
                            <div className="video-gallery">
                                <div className="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <a className="video-popup" title="Video Gallery"
                                        onClick={() => setOpen(true)}>
                                        <span className="icon-play"></span>
                                    </a>
                                </div>
                                <div className="text2">
                                    <p>Explore Our</p>
                                    <p>Capabilities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-three__img">
                        <ul>
                            <li>
                                <div className="banner-three__img-single">
                                    <div className="inner">
                                        <Image
                                            src="/assets/img/slider/banner-three__img1.jpg"
                                            alt="Orgits Business Solutions - Technology, AI & Digital Transformation"
                                            width={360}
                                            height={600}
                                            priority
                                            sizes="(max-width: 768px) 100vw, 716px"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="banner-three__img-single instyle--2">
                                    <div className="inner">
                                        <Image
                                            src="/assets/img/slider/banner-three__img2.jpg"
                                            alt="Orgits Business Solutions - Digital Transformation Capabilities"
                                            width={260}
                                            height={400}
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, 716px"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        {/*End Banner Two*/}
        <ModalVideoWrapper isOpen={isOpen} setOpen={setOpen} />
        
        </>
    )
}