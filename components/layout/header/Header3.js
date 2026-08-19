import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu3"
export default function Header3({ scroll, handlePopup, handleMobileMenu  }) {
    return (
        <>
        {/*Start Main Header One */}
        <header className={`main-header main-header-one ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header-one__top">
                <div className="container">
                    <div className="main-header-one__top-inner">
                        <div className="main-header-one__top-left">
                            <div className="header-contact-info-one">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <p><Link href="tel:+919289687928">+91 9289687928</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-email"></span>
                                        </div>
                                        <p><Link href="mailto:hello@orgits.in">hello@orgits.in</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-header-one__top-right">
                            <div className="header-social-link-one">
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
                                    <li>
                                        <Link href="#">
                                            <i className="icon-vimeo"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-header-one__bottom">
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="main-header-one__bottom-inner">

                            <div className="main-header-one__bottom-left">
                                <div className="logo-box-one">
                                    <Link href="/">
                                        <img src="assets/img/resource/logo-3.svg" alt="Orgits Business Solutions Pvt. Ltd."/>
                                    </Link>
                                </div>
                            </div>

                            <div className="main-header-one__bottom-middle">
                                <div className="menu-area__inner">
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                        <i className="fas fa-bars"></i>
                                    </div>
                                    <div className="menu-wrap">
                                        <nav className="menu-nav">
                                            <div className="navbar-wrap main-menu">
                                                <Menu/>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="main-header-one__bottom-right">
                                <div className="search-box-one">
                                    <Link href="#" className="main-menu__search search-toggler" onClick={handlePopup}>
                                        <span className="icon-search-interface-symbol"></span>
                                    </Link>
                                </div>
                                <div className="header-btn-box-one">
                                    <Link className="thm-btn" href="/contact">
                                        <span className="txt">Contact Us</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </header>
        {/*End Main Header One */}


        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}