import Link from "next/link"

export default function Footer3() {
    return (
        <>
        {/*Start Footer One*/}
        <footer className="footer-one">
            {/* Start Footer Main */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-one__img1 float-bob-x">
                        <img src="assets/img/footer/footer-one-1.png" alt=""/>
                    </div>
                    <div className="footer-one__img2 float-bob-y">
                        <img src="assets/img/footer/footer-one-2.png" alt=""/>
                    </div>
                    <div className="footer-main__inner text-center">
                        <div className="footer-one__logo-box">
                            <Link href="/"><img src="assets/img/resource/logo-3.svg" alt="Orgits Business Solutions Pvt. Ltd."/></Link>
                        </div>
                        <div className="footer-one__big-title">
                            <h2>Let's Build Something Together!</h2>
                        </div>
                        <div className="footer-one__text-box">
                            <p>Technology, automation, marketing and IT governance solutions for growing businesses.</p>
                        </div>
                        <div className="footer-one__socel-link">
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
                                        <i className="icon-instagram-symbol"></i>
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
                </div>
            </div>
            {/* End Footer Main */}

            {/*Start Footer Middle*/}
            <div className="footer-middle">
                <div className="container">
                    <div className="footer-middle__inner">
                        <div className="copyright-menu">
                            <ul>
                                <li>
                                    <p><Link href="/">Home</Link></p>
                                </li>
                                <li>
                                    <p><Link href="/about">About</Link></p>
                                </li>
                                <li>
                                    <p><Link href="/services">Services</Link></p>
                                </li>
                                <li>
                                    <p><Link href="/project">Solutions</Link></p>
                                </li>
                                <li>
                                    <p><Link href="/blog">Insights</Link></p>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-middle__mail-box">
                            <div className="icon">
                                <span className="icon-mail-inbox-app"></span>
                            </div>
                            <div className="text">
                                <p><Link href="mailto:hello@orgits.in">hello@orgits.in</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/*End Footer Middle*/}

            {/*Start Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__inner">
                    <div className="copyright-text text-center">
                                <p>Copyright © 2026 Orgits Business Solutions Pvt. Ltd.<Link
                                        href="https://orgits.in">|| </Link>
                                    All Rights Reserved</p>
                            </div>
                    </div>
                </div>
            </div>
            {/*End Footer Bottom */}
        </footer>
        {/*Start Footer One*/}


        </>
    )
}