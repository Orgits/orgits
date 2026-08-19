import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu2"

export default function Header2({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>
        {/*Start Main Header One */}
        <header className={`main-header main-header-two ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header-two__bottom">
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="main-header-two__bottom-inner">

                            <div className="main-header-two__bottom-left">
                                <div className="logo-box-one">
                                    <Link href="/">                                        
                                        <img src="assets/img/resource/logo-3.svg" alt="Orgits Business Solutions Pvt. Ltd."/>
                                    </Link>
                                </div>
                            </div>

                            <div className="main-header-two__bottom-middle">
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

                            <div className="main-header-two__bottom-right">
                                <div className="search-box-one">
                                    <Link href="#" className="main-menu__search search-toggler" onClick={handlePopup}>
                                        <span className="icon-search-interface-symbol"></span>
                                    </Link>
                                </div>
                                <div className="header-btn-box-two">
                                    <Link className="thm-btn" href="contact">
                                        <span className="txt">Contact Us</span><i className="icon-next"></i>
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
