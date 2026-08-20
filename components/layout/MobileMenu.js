'use client'
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'

const MobileMenu = ({ isSidebar, handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            
    {/*Start Mobile Menu  */}
    <div className="mobile-menu">
        <nav className="menu-box">
            <div className="close-btn" onClick={handleMobileMenu}>
                <i className="fas fa-times"></i>
            </div>
            <div className="nav-logo">
                <Link href="/">
                    <Image
                        src="/assets/img/resource/logo-3.svg"
                        alt="Orgits Business Solutions Pvt. Ltd."
                        width={180}
                        height={50}
                        loading="lazy"
                    />
                </Link>
            </div>
            <div className="menu-outer">
            <ul className="navigation">
                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                <li><Link href="/about/" onClick={handleMobileMenu}>About</Link></li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/#">Technology</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>                                 
                        <li><Link href="/app-development" onClick={handleMobileMenu}>Custom Software Development</Link></li>
                        <li><Link href="/web-development" onClick={handleMobileMenu}>Web Development</Link></li>
                        <li><Link href="/web-development" onClick={handleMobileMenu}>Web Application Development</Link></li>
                        <li><Link href="/app-development" onClick={handleMobileMenu}>Mobile App Development</Link></li>
                        <li><Link href="/app-development" onClick={handleMobileMenu}>API Development & Integration</Link></li>
                        <li><Link href="/services/ai-solutions" onClick={handleMobileMenu}>AI Solutions</Link></li>
                        <li><Link href="/services/ai-solutions" onClick={handleMobileMenu}>AI Automation</Link></li>
                        <li><Link href="/services/ai-solutions" onClick={handleMobileMenu}>AI Chatbots</Link></li>
                        <li><Link href="/services/zoho-automation" onClick={handleMobileMenu}>Business Process Automation</Link></li>
                        <li><Link href="/services/zoho-crm-implementation" onClick={handleMobileMenu}>Zoho CRM</Link></li>
                        <li><Link href="/services/zoho-crm-implementation" onClick={handleMobileMenu}>Zoho CRM Implementation</Link></li>
                        <li><Link href="/services/zoho-automation" onClick={handleMobileMenu}>Zoho Automation</Link></li>
                        <li><Link href="/services/hubspot-implementation" onClick={handleMobileMenu}>HubSpot</Link></li>
                        <li><Link href="/services/hubspot-implementation" onClick={handleMobileMenu}>HubSpot Implementation</Link></li>
                        <li><Link href="/corporate-agency" onClick={handleMobileMenu}>Technology Consulting</Link></li>
                        <li><Link href="/corporate-agency" onClick={handleMobileMenu}>Digital Transformation</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Marketing</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                        <li><Link href="/services/performance-marketing" onClick={handleMobileMenu}>Google Ads</Link></li>
                        <li><Link href="/services/performance-marketing" onClick={handleMobileMenu}>Meta Ads</Link></li>
                        <li><Link href="/services/performance-marketing" onClick={handleMobileMenu}>Paid Advertising</Link></li>
                        <li><Link href="/services/performance-marketing" onClick={handleMobileMenu}>Performance Marketing</Link></li>
                        <li><Link href="/services/seo" onClick={handleMobileMenu}>SEO</Link></li>
                        <li><Link href="/services/seo" onClick={handleMobileMenu}>Technical SEO</Link></li>
                        <li><Link href="/services/seo" onClick={handleMobileMenu}>SEO Strategy</Link></li>
                        <li><Link href="/digital-marketing" onClick={handleMobileMenu}>Lead Generation</Link></li>
                        <li><Link href="/digital-marketing" onClick={handleMobileMenu}>B2B Marketing</Link></li>
                        <li><Link href="/services/performance-marketing" onClick={handleMobileMenu}>Conversion Optimization</Link></li>
                        <li><Link href="/services/zoho-automation" onClick={handleMobileMenu}>Marketing Automation</Link></li>
                        <li><Link href="/services/content-marketing" onClick={handleMobileMenu}>Content Marketing</Link></li>
                        <li><Link href="/digital-marketing" onClick={handleMobileMenu}>Social Media Marketing</Link></li>
                        <li><Link href="/services/marketing-strategy" onClick={handleMobileMenu}>Marketing Strategy</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">IT & Cloud</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                        <li><Link href="/services/cloud-services" onClick={handleMobileMenu}>AWS Cloud Services</Link></li>
                        <li><Link href="/services/cloud-services" onClick={handleMobileMenu}>Cloud Architecture</Link></li>
                        <li><Link href="/services/cloud-services" onClick={handleMobileMenu}>Cloud Migration</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>DevOps</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>CI/CD</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>Server Management</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>Monitoring</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>Backup & Disaster Recovery</Link></li>
                        <li><Link href="/corporate-agency" onClick={handleMobileMenu}>IT Consulting</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>IT Infrastructure</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>Cybersecurity</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>IT Governance</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>IT Support</Link></li>
                        <li><Link href="/services/it-infrastructure" onClick={handleMobileMenu}>Managed Services</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Creative</Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                        <li><Link href="/uiux-design" onClick={handleMobileMenu}>UI/UX Design</Link></li>
                        <li><Link href="/services/website-design" onClick={handleMobileMenu}>Website Design</Link></li>
                        <li><Link href="/services/website-design" onClick={handleMobileMenu}>Landing Page Design</Link></li>
                        <li><Link href="/uiux-design" onClick={handleMobileMenu}>Product Design</Link></li>
                        <li><Link href="/services/brand-design" onClick={handleMobileMenu}>Brand Identity</Link></li>
                        <li><Link href="/services/brand-design" onClick={handleMobileMenu}>Logo Design</Link></li>
                        <li><Link href="/services/brand-design" onClick={handleMobileMenu}>Brand Guidelines</Link></li>
                        <li><Link href="/services/creative-design" onClick={handleMobileMenu}>Graphic Design</Link></li>
                        <li><Link href="/services/marketing-creatives" onClick={handleMobileMenu}>Social Media Creatives</Link></li>
                        <li><Link href="/services/marketing-creatives" onClick={handleMobileMenu}>Marketing Creatives</Link></li>
                        <li><Link href="/services/creative-design" onClick={handleMobileMenu}>Presentation Design</Link></li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Company</Link>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>                                 
                        <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
                        <li><Link href="/about" onClick={handleMobileMenu}>Our Approach</Link></li>
                        <li><Link href="/project" onClick={handleMobileMenu}>Case Studies</Link></li>
                        <li><Link href="/project" onClick={handleMobileMenu}>Portfolio / Projects</Link></li>
                        <li><Link href="/testimonial" onClick={handleMobileMenu}>Client Success Stories</Link></li>
                        <li><Link href="/testimonial" onClick={handleMobileMenu}>Testimonials</Link></li>
                        <li><Link href="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Contact Us</Link></li>
                </ul>
            </div>
            <div className="contact-info">
                <div className="icon-box"><span className="icon-phone-call"></span>
                </div>
                <p><Link href="tel:919289687928" onClick={handleMobileMenu}>+91 928-9687-928</Link></p>
            </div>
            <div className="social-links">
                <ul className="clearfix list-wrap">
                    <li><Link href="https://www.linkedin.com/company/orgits" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li><Link href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link href="https://www.facebook.com/orgits" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></Link></li>
                </ul>
            </div>
        </nav>
    </div>
    <div className="menu-backdrop" onClick={handleMobileMenu}></div>
    {/* End Mobile Menu */}


           
    </>
    )
}
export default MobileMenu;