import Link from "next/link"
import Image from 'next/image'

export default function Cta() {
    return (
        <>
        {/*Start Cta Three*/}
        <section className="cta-three">
            <div className="cta-three__bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                    src="/assets/img/background/cta-three__bg.jpg"
                    alt=""
                    fill
                    priority={false}
                    sizes="100vw"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    loading="lazy"
                />
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="cta-three__inner">
                    <div className="cta-three__content">
                        <div className="sec-title-four sec-title-animation animation-style1">
                            <div className="sub-title">
                                <h4>Let's Build Together</h4>
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