import Link from "next/link"
import Image from 'next/image'

export default function Work() {
    return (
        <>
        {/*Start Working Process One*/}
        <section className="working-process-one">
            <div className="working-process-one__shape1 float-bob-x">
                <Image
                    src="/assets/img/shape/working-process__shape1.png"
                    alt=""
                    width={48}
                    height={43}
                    loading="lazy"
                />
            </div>
            <div className="working-process-one__shape2">
                <Image
                    src="/assets/img/shape/working-process__shape2.png"
                    alt=""
                    width={63}
                    height={76}
                    loading="lazy"
                />
            </div>
            <div className="working-process-one__shape5 float-bob-y">
                <Image
                    src="/assets/img/shape/working-process__shape5.png"
                    alt=""
                    width={78}
                    height={84}
                    loading="lazy"
                />
            </div>
            <div className="container">
                <div className="sec-title-four text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Our Working Process</h4>
                    </div>
                    <h2>How We Work</h2>
                </div>
                <div className="row">

                    {/*Start Single Working Process One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="working-process-one__single text-center">
                            <div className="icon-box">
                                <i className="icon-problem-analysis"></i>
                                <div className="overlay-list">
                                    <span>01</span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title-box">
                                    <h5>First Step</h5>
                                    <h3><Link href="#">Understand Requirements</Link></h3>
                                </div>
                                <div className="text-box">
                                    <p>We understand your business goals, requirements, users and technical needs before defining the solution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Working Process One*/}

                    {/*Start Single Working Process One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="working-process-one__single text-center">
                            <div className="working-process-one__shape3">
                                <Image
                                    src="/assets/img/shape/working-process__shape3.png"
                                    alt=""
                                    width={215}
                                    height={47}
                                    loading="lazy"
                                />
                            </div>
                            <div className="icon-box">
                                <i className="icon-find-solutions"></i>
                                <div className="overlay-list">
                                    <span>02</span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title-box">
                                    <h5>Second Step</h5>
                                    <h3><Link href="#">Plan & Design</Link></h3>
                                </div>
                                <div className="text-box">
                                    <p>We translate requirements into product direction, UX research, wireframes, UI design and an actionable delivery plan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Working Process One*/}

                    {/*Start Single Working Process One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="working-process-one__single text-center">
                            <div className="working-process-one__shape4">
                                <Image
                                    src="/assets/img/shape/working-process__shape4.png"
                                    alt=""
                                    width={215}
                                    height={47}
                                    loading="lazy"
                                />
                            </div>
                            <div className="icon-box">
                                <i className="icon-build-develop"></i>
                                <div className="overlay-list">
                                    <span>03</span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title-box">
                                    <h5>Third Step</h5>
                                    <h3><Link href="#">Build, Test & Deploy</Link></h3>
                                </div>
                                <div className="text-box">
                                    <p>Our team develops in sprints, performs QA and UAT, and prepares the solution for production deployment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Working Process One*/}

                </div>
            </div>
        </section>
        {/*End Working Process One*/} 
        </>
    )
}