'use client'
import Link from "next/link"
export default function Banner() {
    return (
        <>
        {/*Start Banner One*/}
        <section className="banner-one">
            <div className="banner-one__shape1 float-bob-x">
                <img src="assets/img/shape/banner-one__shape1.png" alt="#"/>
            </div>
            <div className="banner-one__shape2 rotate-me">
                <img src="assets/img/shape/banner-one__shape2.png" alt="#"/>
            </div>
            <div className="banner-one__shape3 float-bob-y">
                <img src="assets/img/shape/banner-one__shape3.png" alt="#"/>
            </div>
            <div className="container">
                <div className="banner-one__inner">
                    <div className="banner-one__content wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="sub-title">
                            <h5>Technology, Automation & Digital Growth</h5>
                        </div>
                        <div className="big-title">
                            <h2>We Build Digital Products,<br/>Automate Operations & Drive Growth</h2>
                        </div>
                        <div className="text">
                            <p>We build digital products, automate business operations, drive digital acquisition and help organizations strengthen their IT governance and security.</p>
                        </div>
                        <div className="btn-box">
                            <Link className="thm-btn" href="/contact">
                                <span className="txt">
                                    Start a Conversation
                                    <i className="icon-next"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="banner-one__img wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner">
                            <img src="assets/img/slider/banner-one__mian-img.jpg" alt="Orgits Solutions"/>
                        </div>
                        <div className="banner-one__img-bg"></div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Banner One*/}

        </>
    )
}