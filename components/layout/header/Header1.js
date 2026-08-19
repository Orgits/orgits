import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handleMobileMenu }) {
    return (
        <>
        
        <header className={`main-header main-header-three ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header-three__top">
                <div className="container">
                    <div className="main-header-three__top-inner">
                        <div className="main-header-three__top-left">
                            <div className="welcome-text-one">
                                <p><span className="icon-bell"></span> Technology, AI & Digital Transformation That Moves Your Business Forward
                                </p>
                            </div>
                        </div>
                        <div className="main-header-three__top-right">
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

                    </div>
                </div>
            </div>


            <div className="main-header-three__bottom">
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="main-header-three__bottom-inner">

                            <div className="main-header-three__bottom-left">
                                <div className="logo-box-one">
                                    <Link href="/">
                                        <img src="assets/img/resource/logo-3.svg" alt="Orgits Business Solutions Pvt. Ltd."/>
                                    </Link>
                                </div>
                            </div>

                            <div className="main-header-three__bottom-middle">
                                <div className="menu-area__inner">
                                    <div className="mobile-nav-toggler alt" onClick={handleMobileMenu}>
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

                            <div className="main-header-three__bottom-right">
                                <div className="header-btn-box-one">
                                    <Link className="thm-btn" href="contact">
                                        <span className="txt">
                                            Contact Us
                                            <i className="icon-next"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
