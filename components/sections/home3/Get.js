'use client'
import Link from "next/link"
export default function Get() {
    return (
        <>
        {/*Start Get In Touch One*/}
        <section className="get-in-touch-one">
            <div className="container">
                <div className="row">
                    {/*Start Get In Touch One Content*/}
                    <div className="col-xl-6 col-lg-6">
                        <div className="get-in-touch-one__content">
                            <div className="sec-title sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Contact Us</h4>
                                </div>
                                <h2>Let's Build Something<br/>That Matters</h2>
                            </div>
                            <ul className="get-in-touch-one__content-list-box">
                                <li>
                                    <div className="icon">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>India / Serving businesses across India and globally</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            <Link href="tel:+919289687928">+91 9289687928</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-email"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            <Link href="mailto:hello@orgits.in">hello@orgits.in</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-globe"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            <Link href="https://www.orgits.in" target="_blank" rel="noopener noreferrer">www.orgits.in</Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*End Get In Touch One Content*/}

                    {/*Start Get In Touch One Form Box*/}
                    <div className="col-xl-6 col-lg-6">
                        <div className="get-in-touch-one__form">
                            <form id="get-in-touch-one__form" name="contact_form" className="default-form2"
                                action="assets/inc/sendmail.php" method="post">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_name" id="formName"
                                                    placeholder="Your Name"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_subject"id="formSubject"
                                                    placeholder="Subject"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="email" name="form_email" id="formEmail"
                                                    placeholder="Email Address"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_phone" id="formPhone"
                                                    placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <textarea name="form_message" id="formMessage"
                                                    placeholder="Enter your message..." ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="button-box">
                                            <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                type="hidden"/>
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                <span className="txt">
                                                    Send Message
                                                    <i className="icon-next"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    {/*End Get In Touch One Form Box*/}
                </div>
            </div>
        </section>
        {/*End Get In Touch One*/}

        </>
    )
}