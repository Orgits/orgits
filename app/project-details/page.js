'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"


export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Solution Details">
                {/*Project Details Start*/}
                <section className="project-details">
                    <div className="container">
                        <div className="project-details__inner tabs-box">
                            <div className="project-details__tab-box clearfix">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                        <div className="project-details__tab-btn">
                                            <span>Overview</span>
                                        </div>
                                    </li>
                                    <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                        <div className="project-details__tab-btn">
                                            <span>Our Approach</span>
                                        </div>
                                    </li>
                                    <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                        <div className="project-details__tab-btn">
                                            <span>Technology Stack</span>
                                        </div>
                                    </li>
                                    <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                        <div className="project-details__tab-btn">
                                            <span>Engagement Models</span>
                                        </div>
                                    </li>
                                    <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                        <div className="project-details__tab-btn">
                                            <span>Get Started</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="project-details__bottom">
                                <div className="tabs-content">
                                    {/*tab*/}
                                    <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="project-details__img-box">
                                            <div className="project-details__img-1">
                                                <img src="assets/images/project/project-details-img-1.jpg" alt="Business Technology Solutions"/>
                                            </div>
                                            <div className="project-details__list-box">
                                                <h3 className="project-details__list-title">Solution Overview</h3>
                                                <ul className="project-details__list list-unstyled">
                                                    <li>
                                                        <span>Category:</span>
                                                        <p>Digital Transformation</p>
                                                    </li>
                                                    <li>
                                                        <span>Provider:</span>
                                                        <p>Orgits Business Solutions Pvt. Ltd.</p>
                                                    </li>
                                                    <li>
                                                        <span>Focus:</span>
                                                        <p>Technology, Automation, Cloud, Software</p>
                                                    </li>
                                                    <li>
                                                        <span>Engagement:</span>
                                                        <p>Fixed Scope / Time & Material / Staff Augmentation</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-details__content">
                                            <h3 className="project-details__title-1">Business Technology Solutions</h3>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">Orgits Business Solutions helps enterprises and startups build, automate and secure their digital operations through software development, CRM automation, digital marketing, cloud solutions, and IT governance & audit.</p>
                                                        <p className="project-details__text-2">Our solutions span investment & exchange platforms, admin panels & CMS, learning management systems, social media platforms, AI-powered tools, marketplace platforms, hospital management systems, e-commerce platforms, information systems audit, and cloud server deployment.</p>
                                                        <div className="project-details__single-img">
                                                            <img src="assets/images/project/project-details-single-img-1.jpg" alt="Solution Capabilities"/>
                                                        </div>
                                                        <p className="project-details__sub-title">Digital Platforms & Business Systems</p>
                                                        <p className="project-details__text-3">We build scalable digital products around real business goals. From customer-facing applications to internal business systems, our approach focuses on usability, security and maintainability. Each solution is designed to integrate with your existing technology landscape and grow with your organization.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">Our compliance and governance practice helps regulated institutions stay audit-ready and IT-secure. We assess IT controls, cybersecurity, access management, audit trails, business continuity and regulatory compliance requirements including RBI Master Directions.</p>
                                                        <p className="project-details__text-2">We combine technical expertise with business understanding to deliver solutions that solve real problems—from modernizing legacy systems and migrating to cloud, to implementing CRM automation and strengthening IT governance.</p>
                                                        <div className="project-details__single-img">
                                                            <img src="assets/images/project/project-details-single-img-2.jpg" alt="IT Governance & Compliance"/>
                                                        </div>
                                                        <p className="project-details__sub-title">IT Governance, Audit & Compliance</p>
                                                        <p className="project-details__text-3">Whether you need a fractional CTO, a cloud migration partner, or help building a digital product, we bring the right expertise. Our consulting approach starts with understanding your business context, challenges and objectives, then designing practical technology roadmaps.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details__pagination-box">
                                            <ul className="project-details__pagination list-unstyled clearfix">
                                                <li className="previous">
                                                    <Link href="/project" aria-label="Back">Back to Solutions<i className="icon-arrow-right"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="project-details__img-box">
                                            <div className="project-details__img-1">
                                                <img src="assets/images/project/project-details-img-2.jpg" alt="Our Approach"/>
                                            </div>
                                            <div className="project-details__list-box">
                                                <h3 className="project-details__list-title">Our Delivery Approach</h3>
                                                <ul className="project-details__list list-unstyled">
                                                    <li>
                                                        <span>Step 1:</span>
                                                        <p>Understand Requirements</p>
                                                    </li>
                                                    <li>
                                                        <span>Step 2:</span>
                                                        <p>Plan & Design</p>
                                                    </li>
                                                    <li>
                                                        <span>Step 3:</span>
                                                        <p>Build, Test & Deploy</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-details__content">
                                            <h3 className="project-details__title-1">How We Work</h3>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">We understand your business goals, requirements, users and technical needs before defining the solution. This includes stakeholder interviews, current state analysis, and requirements workshops.</p>
                                                        <div className="project-details__single-img">
                                                            <img src="assets/images/project/project-details-single-img-1.jpg" alt="Requirements Analysis"/>
                                                        </div>
                                                        <p className="project-details__sub-title">Understand Requirements</p>
                                                        <p className="project-details__text-3">Our team conducts thorough business analysis, creates detailed PRDs, and validates assumptions with stakeholders before any design or development begins.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">We translate requirements into product direction, UX research, wireframes, UI design and an actionable delivery plan. Architecture decisions, technology selection, and sprint planning happen here.</p>
                                                        <div className="project-details__single-img">
                                                            <img src="assets/images/project/project-details-single-img-2.jpg" alt="Design & Planning"/>
                                                        </div>
                                                        <p className="project-details__sub-title">Plan & Design</p>
                                                        <p className="project-details__text-3">Design systems, technical specifications, and project plans are created with clear milestones, resource allocation, and risk mitigation strategies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{marginTop: '30px'}}>
                                                <div className="col-xl-12 col-lg-12">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">Our team develops in sprints, performs QA and UAT, and prepares the solution for production deployment. CI/CD pipelines, automated testing, and monitoring are configured for ongoing reliability.</p>
                                                        <p className="project-details__sub-title">Build, Test & Deploy</p>
                                                        <p className="project-details__text-3">Post-deployment, we provide knowledge transfer, documentation, and ongoing support options. Our goal is to enable your team to own and evolve the solution confidently.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details__pagination-box">
                                            <ul className="project-details__pagination list-unstyled clearfix">
                                                <li className="previous">
                                                    <Link href="/project" aria-label="Back">Back to Solutions<i className="icon-arrow-right"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="project-details__img-box">
                                            <div className="project-details__img-1">
                                                <img src="assets/images/project/project-details-img-3.jpg" alt="Technology Stack"/>
                                            </div>
                                            <div className="project-details__list-box">
                                                <h3 className="project-details__list-title">Technology Stack</h3>
                                                <ul className="project-details__list list-unstyled">
                                                    <li>
                                                        <span>Backend & Database:</span>
                                                        <p>Node.js, Python, PHP, MySQL, MongoDB, PostgreSQL</p>
                                                    </li>
                                                    <li>
                                                        <span>Frontend:</span>
                                                        <p>React, Angular, Next.js, JavaScript</p>
                                                    </li>
                                                    <li>
                                                        <span>Mobile:</span>
                                                        <p>Android, iOS, Flutter, React Native</p>
                                                    </li>
                                                    <li>
                                                        <span>CRM & Automation:</span>
                                                        <p>Zoho, HubSpot, Salesforce</p>
                                                    </li>
                                                    <li>
                                                        <span>Cloud:</span>
                                                        <p>AWS, Google Cloud, Microsoft Azure, DigitalOcean</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-details__content">
                                            <h3 className="project-details__title-1">Technology Stack Built for Modern Business Applications</h3>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">We select technologies based on project requirements, team expertise, and long-term maintainability. Our stack covers the full application lifecycle from backend APIs to mobile apps, with strong emphasis on cloud-native architectures and DevOps practices.</p>
                                                        <div className="project-details__single-img">
                                                            <img src="assets/images/project/project-details-single-img-1.jpg" alt="Technology Architecture"/>
                                                        </div>
                                                        <p className="project-details__sub-title">Backend & Database</p>
                                                        <p className="project-details__text-3">Node.js for scalable APIs, Python for data-intensive applications, PHP for rapid development. PostgreSQL for relational data, MongoDB for flexible document storage, MySQL for proven reliability.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">Frontend development uses React and Next.js for modern, performant web applications. Mobile development spans native (Android/iOS) and cross-platform (Flutter, React Native) based on project needs. CRM and automation platforms include Zoho, HubSpot, and Salesforce for marketing, sales and service automation.</p>
                                                        <p className="project-details__sub-title">Cloud & DevOps</p>
                                                        <p className="project-details__text-3">AWS, Google Cloud, Microsoft Azure, and DigitalOcean for infrastructure. Container orchestration with Kubernetes, CI/CD with GitHub Actions/GitLab CI, monitoring with Prometheus/Grafana, and infrastructure as code with Terraform.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details__pagination-box">
                                            <ul className="project-details__pagination list-unstyled clearfix">
                                                <li className="previous">
                                                    <Link href="/project" aria-label="Back">Back to Solutions<i className="icon-arrow-right"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="project-details__img-box">
                                            <div className="project-details__img-1">
                                                <img src="assets/images/project/project-details-img-4.jpg" alt="Engagement Models"/>
                                            </div>
                                            <div className="project-details__list-box">
                                                <h3 className="project-details__list-title">Engagement Models</h3>
                                                <ul className="project-details__list list-unstyled">
                                                    <li>
                                                        <span>Fixed Scope:</span>
                                                        <p>Defined deliverables, timeline and price</p>
                                                    </li>
                                                    <li>
                                                        <span>Time & Material:</span>
                                                        <p>Flexible scope, sprint-based delivery</p>
                                                    </li>
                                                    <li>
                                                        <span>Staff Augmentation:</span>
                                                        <p>Dedicated resources, 6-month minimum</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-details__content">
                                            <h3 className="project-details__title-1">Flexible Engagement Models</h3>
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="project-details__single">
                                                        <h4>Fixed Scope Projects</h4>
                                                        <p className="project-details__text-1">Best for clearly defined projects with known scope and delivery requirements. Includes detailed specifications, milestone-based payments, and dedicated project management.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="project-details__single">
                                                        <h4>Time & Material</h4>
                                                        <p className="project-details__text-1">Best for evolving projects where scope is discovered through weekly sprints. Transparent reporting, flexible team scaling, pay for actual hours worked.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="project-details__single">
                                                        <h4>Staff Augmentation</h4>
                                                        <p className="project-details__text-1">Hire pre-vetted developers as a dedicated extension of your team. Minimum 6-month commitment. Orgits handles HR, payroll, benefits. You manage day-to-day work.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details__pagination-box">
                                            <ul className="project-details__pagination list-unstyled clearfix">
                                                <li className="previous">
                                                    <Link href="/project" aria-label="Back">Back to Solutions<i className="icon-arrow-right"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 5 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="project-details__img-box">
                                            <div className="project-details__img-1">
                                                <img src="assets/images/project/project-details-img-5.jpg" alt="Get Started"/>
                                            </div>
                                            <div className="project-details__list-box">
                                                <h3 className="project-details__list-title">Next Steps</h3>
                                                <ul className="project-details__list list-unstyled">
                                                    <li>
                                                        <span>Contact:</span>
                                                        <p>hello@orgits.in / +91 9289687928</p>
                                                    </li>
                                                    <li>
                                                        <span>Website:</span>
                                                        <p>www.orgits.in</p>
                                                    </li>
                                                    <li>
                                                        <span>Process:</span>
                                                        <p>Discovery call → Proposal → Kickoff</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-details__content">
                                            <h3 className="project-details__title-1">Let's Build Something Together</h3>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__text-1">Ready to discuss your technology, marketing or compliance challenge? Our team will review your needs and help identify the right next step—whether that's a fixed-scope project, a time-and-material engagement, or staff augmentation.</p>
                                                        <p className="project-details__text-2">We don't believe in one-size-fits-all proposals. Every engagement starts with understanding your business context, challenges and objectives.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="project-details__single">
                                                        <p className="project-details__sub-title">Contact Us</p>
                                                        <p className="project-details__text-3">Email: hello@orgits.in<br/>Phone: +91 9289687928<br/>Website: www.orgits.in</p>
                                                        <div style={{marginTop: '20px'}}>
                                                            <Link className="thm-btn" href="/contact">
                                                                <span className="txt">Start a Conversation</span>
                                                                <i className="icon-next"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details__pagination-box">
                                            <ul className="project-details__pagination list-unstyled clearfix">
                                                <li className="previous">
                                                    <Link href="/project" aria-label="Back">Back to Solutions<i className="icon-arrow-right"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Project Details End*/}
            </Layout>
        </>
    )
}