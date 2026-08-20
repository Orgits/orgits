import Link from "next/link"
export default function Cta() {
    return (
        <>
        {/*Start Cta Three*/}
        <section className="cta-three">
            <div className="cta-three__bg" style={{ backgroundImage: 'url(assets/img/background/cta-three__bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="cta-three__inner">
                    <div className="cta-three__content">
                        <div className="sec-title-four sec-title-animation animation-style1">
                            <div className="sub-title">
                                <h3>Let's Build Together</h3>
                            </div>
                            <h2>
                                Let's Build Something<br/>That Moves Your Business Forward
                            </h2>
                        </div>
                    </div>
                    <div className="cta-three__btn">
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
