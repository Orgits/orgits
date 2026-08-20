import Link from "next/link"

export default function Footer1() {
    return (
        <>
           {/*Start Footer Three*/}
        <footer className="footer-three">
            {/* Start Footer Main */}
            <div className="footer-main footer-main__three">
                <div className="footer-three__shape1">
                    <img src="assets/img/shape/footer-three__shape1.png" alt="shapes"/>
                </div>
                <div className="footer-three__shape2">
                    <img src="assets/img/shape/footer-three__shape2.png" alt="shapes"/>
                </div>
                <div className="container">
                    {/* Start Footer Main Two Top*/}
                    <div className="footer-main__three-top">
                        <div className="footer-three__logo-box">
                            <Link href="/">
                                <img src="assets/img/resource/logo-3.svg" alt="Orgits Business Solutions Pvt. Ltd."/>
                            </Link>
                        </div>

                        <div className="footer-three__get-quote-form">
                            <div className="title-box">
                                <h2>Let's Build Something Together</h2>
                                <p>Technology, automation, marketing and IT governance solutions for growing businesses.</p>
                            </div>

                            <form method="post">
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email Address"/>
                                    <button className="submit thm-btn">
                                        <span className="txt">Start a Conversation</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End Footer Main Two Top*/}

                    <div className="footer-main__inner footer-main-two__inner footer-main-three__inner">
                        <div className="row">
                            {/*Start Single Footer Widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                                <div className="single-footer-widget single-footer-widget-style2">
                                    <div className="title">
                                        <h3>Help & Support</h3>
                                    </div>
                                    <div
                                        className="single-footer-widget-box single-footer-widget__about single-footer-widget__about--2">
                                        <div className="text">
                                            <p>Need support with a technology, automation, marketing or IT compliance requirement? Let's talk.</p>
                                        </div>
                                        <ul className="clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <p>India / Serving businesses across India and globally</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-mail-inbox-app"></span>
                                                </div>
                                                <p><Link href="/contact">hello@orgits.in</Link></p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-phone-call"></span>
                                                </div>
                                                <p><Link href="tel:+919289687928">+91 9289687928</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}

                            {/*Start Single Footer Widget*/}
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget  single-footer-widget-style2 ml55">
                                    <div className="title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div
                                        className="single-footer-widget-box single-footer-widget__links single-footer-widget__links-style2">
                                        <ul className="clearfix">
                                            <li>
                                                <p><Link href="/about">About Us</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/services">Our Services</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/team">Team</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/blog">Insights</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/contact">Contact Us</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}

                            {/*Start Single Footer Widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget single-footer-widget-style2 ml50">
                                    <div className="title">
                                        <h3>Our Services</h3>
                                    </div>
                                    <div
                                        className="single-footer-widget-box single-footer-widget__links single-footer-widget__links-style2">
                                        <ul className="clearfix">
                                            <li>
                                                <p><Link href="/app-development">Product Development</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/web-development">Web & Mobile App Development</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/services">CRM & Marketing Automation</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/digital-marketing">Digital Marketing</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="/services">IS Audit & IT Compliance</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}

                            {/*Strat Single Footer Widget*/}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget single-footer-widget-style2">
                                    <div className="title">
                                        <h3>Latest Insights</h3>
                                    </div>
                                    <div
                                        className="single-footer-widget-box single-footer-widget__blog-list single-footer-widget__blog-list-style2">
                                        <ul className="clearfix">

                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/footer/footer-two__img1.jpg" alt="CRM Automation"/>
                                                    <Link href="/blog-details"><i className="fa-solid fa-link"></i></Link>
                                                </div>
                                                <div className="title-box">
                                                    <h5>
                                                        <Link href="/blog-details">CRM Automation: From Lead Capture to Follow-Up</Link>
                                                    </h5>
                                                    <div className="date-box">
                                                        <ul className="clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-tag"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>CRM & Marketing Automation</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/footer/footer-two__img2.jpg" alt="Cloud Infrastructure"/>
                                                    <Link href="/blog-details"><i className="fa-solid fa-link"></i></Link>
                                                </div>
                                                <div className="title-box">
                                                    <h5>
                                                        <Link href="/blog-details">Why Businesses Need Secure, Scalable Cloud Infrastructure</Link>
                                                    </h5>
                                                    <div className="date-box">
                                                        <ul className="clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-tag"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Cloud & IT Consulting</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}

                        </div>
                    </div>
                </div>
                {/* End Footer Main */}

                {/*Start Footer Bottom */}
                <div className="footer-bottom footer-bottom-two footer-bottom-three">
                    <div className="container">
                        <div className="footer-bottom__inner footer-bottom__two-inner footer-bottom__three-inner">
                            <div className="copyright-text text-center">
                                <p>Copyright © 2026 Orgits Business Solutions Pvt. Ltd. <Link
                                        href="https://orgits.in"> || </Link>
                                    All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer Bottom */}
            </div>
        </footer>
        {/*End Footer Three*/}

        </>
    )
}