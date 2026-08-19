import Link from "next/link"
import Image from 'next/image'

export default function Team() {
    return (
        <>
        {/*Start Team Two*/}
        <section className="team-two">
            <div className="team-two__shape1">
                <Image
                    src="/assets/img/shape/team-two__shape1.png"
                    alt=""
                    width={505}
                    height={509}
                    loading="lazy"
                />
            </div>
            <div className="team-two__shape2">
                <Image
                    src="/assets/img/shape/team-two__shape2.png"
                    alt=""
                    width={685}
                    height={402}
                    loading="lazy"
                />
            </div>
            <div className="team-two__shape3">
                <Image
                    src="/assets/img/shape/team-two__shape3.png"
                    alt=""
                    width={804}
                    height={740}
                    loading="lazy"
                />
            </div>
            <div className="team-two__shape4">
                <Image
                    src="/assets/img/shape/team-two__shape4.png"
                    alt=""
                    width={693}
                    height={421}
                    loading="lazy"
                />
            </div>
            <div className="team-two__shape5">
                <Image
                    src="/assets/img/shape/team-two__shape5.png"
                    alt=""
                    width={418}
                    height={503}
                    loading="lazy"
                />
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Our Leadership Team</h4>
                    </div>
                    <h2>
                        Technology, Marketing & Compliance Leadership
                    </h2>
                </div>
                <div className="row">
                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <Image
                                    src="/assets/img/team/team-v2-1.jpg"
                                    alt="Anubhav Sharma - CEO & IT Consultant"
                                    width={345}
                                    height={390}
                                    loading="lazy"
                                />
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
                                <h3><Link href="#">Anubhav Sharma</Link></h3>
                                <p>CEO & IT Consultant</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <Image
                                    src="/assets/img/team/team-v2-2.jpg"
                                    alt="CA Sahil Goyal - Managing Director"
                                    width={345}
                                    height={390}
                                    loading="lazy"
                                />
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
                                <h3><Link href="#">CA Sahil Goyal</Link></h3>
                                <p>Managing Director</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <Image
                                    src="/assets/img/team/team-v2-3.jpg"
                                    alt="Sahil Khan - RevOps & Automation Strategist"
                                    width={345}
                                    height={390}
                                    loading="lazy"
                                />
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
                                <h3><Link href="#">Sahil Khan</Link></h3>
                                <p>RevOps & Automation Strategist</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                </div>
            </div>
        </section>
        {/*End Team Two*/}
        </>
    )
}