import Link from "next/link"
export default function Team() {
    return (
        <>
        {/*Start Team Two*/}
        <section className="team-two">
            <div className="team-two__shape1">
                <img src="assets/img/shape/team-two__shape1.png" alt="" width="505" height="509"/>
            </div>
            <div className="team-two__shape2">
                <img src="assets/img/shape/team-two__shape2.png" alt="" width="685" height="402"/>
            </div>
            <div className="team-two__shape3">
                <img src="assets/img/shape/team-two__shape3.png" alt="" width="804" height="740"/>
            </div>
            <div className="team-two__shape4">
                <img src="assets/img/shape/team-two__shape4.png" alt="" width="693" height="421"/>
            </div>
            <div className="team-two__shape5">
                <img src="assets/img/shape/team-two__shape5.png" alt="" width="418" height="503"/>
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h3>Our Leadership Team</h3>
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
                                <img src="assets/img/team/team-v2-1.jpg" alt="Anubhav Sharma" width="345" height="390"/>
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
                                <img src="assets/img/team/team-v2-2.jpg" alt="CA Sahil Goyal" width="345" height="390"/>
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
                                <img src="assets/img/team/team-v2-3.jpg" alt="Sahil Khan" width="345" height="390"/>
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
