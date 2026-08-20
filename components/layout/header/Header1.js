import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import Image from 'next/image'

export default function Header1({ scroll, handleMobileMenu }) {
    return (
        <>
        <header className={`main-header main-header-three ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header-three__bottom">
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="main-header-three__bottom-inner">
                            <div className="main-header-three__bottom-left">
                                <div className="logo-box-one">
                                    <Link href="/">
                                        <Image
                                            src="/assets/img/resource/logo-3.svg"
                                            alt="Orgits Business Solutions Pvt. Ltd."
                                            width={180}
                                            height={50}
                                            priority
                                        />
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
                                    <Link className="thm-btn" href="/contact">
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

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
        </>
    )
}