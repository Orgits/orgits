import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact">
            {/*Start Contact Page*/}
            <section className="contact-page">
                <div className="contact-page__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__top-content">
                                    <div className="contact-page__top-content-top sec-title-animation animation-style1">
                                        <h2>Let's Build Something That Matters</h2>
                                        <p>Tell us about your business, technology, marketing or compliance requirement. Our team will review your needs and help identify the right next step.</p>
                                    </div>

                                    <div className="contact-page__top-content-bottom">
                                        <h2>Contact Info</h2>
                                        <ul>
                                            <li>
                                                <div className="inner">
                                                    <div className="icon-box">
                                                        <span className="icon-pin"></span>
                                                    </div>

                                                    <div className="content-box">
                                                        <h4>Address</h4>
                                                        <p>India / Serving businesses across India and globally</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="inner">
                                                    <div className="icon-box">
                                                        <span className="icon-phone-call"></span>
                                                    </div>

                                                    <div className="content-box">
                                                        <h4>Phone</h4>
                                                        <p><Link href="tel:+919289687928">+91 9289687928</Link></p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="inner">
                                                    <div className="icon-box">
                                                        <span className="icon-email"></span>
                                                    </div>

                                                    <div className="content-box">
                                                        <h4>Email</h4>
                                                        <p><Link href="mailto:hello@orgits.in">hello@orgits.in</Link></p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="inner">
                                                    <div className="icon-box">
                                                        <span className="icon-globe"></span>
                                                    </div>

                                                    <div className="content-box">
                                                        <h4>Website</h4>
                                                        <p><Link href="https://www.orgits.in" target="_blank" rel="noopener noreferrer">www.orgits.in</Link></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__google-map">
                                    <div style={{backgroundColor: '#f0f0f0', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
                                        Map placeholder - No verified physical office location available
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-page__bottom">
                    {/*Start Contact Two*/}
                    <div className="contact-page__bottom-form">
                        <div className="container">
                            <div className="contact-page__bottom-form-inner">
                                <div className="title-box sec-title-animation animation-style1">
                                    <h2>Let's Get in Touch</h2>
                                    <p>Tell us what you are looking to build, automate, improve or secure.</p>
                                </div>
                                <div className="contact-page__bottom-form-inner-box">
                                    <form action="assets/inc/sendemail.php"
                                        className="contact-page__form contact-form-validated">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Your Name*" name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="email" placeholder="Your Email*" name="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Phone*" name="phone"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Subject*" name="subject"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <textarea name="message" placeholder="Write Message*"></textarea>
                                                </div>
                                                <div className="contact-page__btn">
                                                    <button className="thm-btn" type="submit"
                                                        data-loading-text="Please wait...">
                                                        <span className="txt">
                                                            Send Message
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Contact Two*/}
                </div>
            </section>
            {/*End Contact Page*/}
            

        </Layout>
        </>
    )
}