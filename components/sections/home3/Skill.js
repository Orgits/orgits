'use client'
import Link from "next/link"
export default function Skill() {
    return (
        <>
        {/*Start Skills One*/}
        <section className="skills-one">
            <div className="container">
                <div className="sec-title text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Technology Stack</h4>
                    </div>
                    <h2>Built for Modern Business Applications</h2>
                </div>
                <div className="row">
                    {/*Start Single Skills One*/}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="skills-one__single">
                            <div className="skills-one__single-inner">
                                <div className="skills-one__single-left-box">
                                    <div className="skills-one__single-icon">
                                        <span className="icon-database"></span>
                                    </div>
                                    <div className="skills-one__single-title">
                                        <h3>Backend & Database</h3>
                                        <p>Node.js, Python, PHP, MySQL, MongoDB, PostgreSQL</p>
                                    </div>
                                </div>
                                <div className="skills-one__single-right-box">
                                    <div className="skills-one__single-date-box">
                                        <p>Scalable APIs & Data Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Skills One*/}
                    {/*Start Single Skills One*/}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInRight" data-wow-delay="0.1s">
                        <div className="skills-one__single">
                            <div className="skills-one__single-inner">
                                <div className="skills-one__single-left-box">
                                    <div className="skills-one__single-icon">
                                        <span className="icon-code"></span>
                                    </div>
                                    <div className="skills-one__single-title">
                                        <h3>Frontend</h3>
                                        <p>React, Angular, Next.js, JavaScript</p>
                                    </div>
                                </div>
                                <div className="skills-one__single-right-box">
                                    <div className="skills-one__single-date-box">
                                        <p>Modern, Performant Web Applications</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Skills One*/}
                    {/*Start Single Skills One*/}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInLeft" data-wow-delay="0.2s">
                        <div className="skills-one__single">
                            <div className="skills-one__single-inner">
                                <div className="skills-one__single-left-box">
                                    <div className="skills-one__single-icon">
                                        <span className="icon-mobile"></span>
                                    </div>
                                    <div className="skills-one__single-title">
                                        <h3>Mobile</h3>
                                        <p>Android, iOS, Flutter, React Native</p>
                                    </div>
                                </div>
                                <div className="skills-one__single-right-box">
                                    <div className="skills-one__single-date-box">
                                        <p>Native & Cross-Platform Apps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Skills One*/}
                    {/*Start Single Skills One*/}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInRight" data-wow-delay="0.2s">
                        <div className="skills-one__single">
                            <div className="skills-one__single-inner">
                                <div className="skills-one__single-left-box">
                                    <div className="skills-one__single-icon">
                                        <span className="icon-crm"></span>
                                    </div>
                                    <div className="skills-one__single-title">
                                        <h3>CRM & Automation</h3>
                                        <p>Zoho, HubSpot, Salesforce</p>
                                    </div>
                                </div>
                                <div className="skills-one__single-right-box">
                                    <div className="skills-one__single-date-box">
                                        <p>Marketing, Sales & Service Automation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Skills One*/}
                    {/*Start Single Skills One*/}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInLeft" data-wow-delay="0.3s">
                        <div className="skills-one__single">
                            <div className="skills-one__single-inner">
                                <div className="skills-one__single-left-box">
                                    <div className="skills-one__single-icon">
                                        <span className="icon-cloud"></span>
                                    </div>
                                    <div className="skills-one__single-title">
                                        <h3>Cloud</h3>
                                        <p>AWS, Google Cloud, Microsoft Azure, DigitalOcean</p>
                                    </div>
                                </div>
                                <div className="skills-one__single-right-box">
                                    <div className="skills-one__single-date-box">
                                        <p>Cloud-Native Infrastructure & DevOps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Skills One*/}
                </div>
            </div>
        </section>
        {/*End Skills One*/}

        </>
    )
}