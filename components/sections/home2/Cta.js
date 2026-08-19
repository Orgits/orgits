'use client'
import Link from "next/link"
export default function Cta() {

    return (
        <>
        {/*Start Cta Two*/}
        <section className="cta-two">
            <div className="container">
                <div className="cta-two__inner">
                    <div className="cta-two__inner-bg"
                        style={{ backgroundImage: 'url(assets/img/pattern/cta-two__parttern1.png)' }} ></div>
                    <div className="cta-two__content sec-title-animation animation-style1">
                        <h2>Have a Technology or Growth Challenge?</h2>
                        <p>Let's discuss how technology, automation, marketing or compliance solutions can move your business forward.</p>
                    </div>
                    <div className="cta-two__btn">
                        <Link className="thm-btn" href="/contact">
                            <span className="txt">Talk to Our Team</span>
                            <i className="icon-next"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/*End Cta Two*/}
        
        </>
    )
}