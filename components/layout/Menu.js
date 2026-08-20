'use client'
import Link from "next/link"
import { useState, useRef, useEffect, useCallback } from "react"

export default function Menu() {
    const [openMenu, setOpenMenu] = useState(null)
    const [activeTab, setActiveTab] = useState({})
    const [hoverTimeout, setHoverTimeout] = useState(null)
    const menuRef = useRef(null)
    const triggerRefs = useRef({})

    const clearHoverTimeout = useCallback(() => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout)
            setHoverTimeout(null)
        }
    }, [hoverTimeout])

    const handleTriggerMouseEnter = useCallback((menuKey) => {
        clearHoverTimeout()
        setOpenMenu(menuKey)
    }, [clearHoverTimeout])

    const handleTriggerMouseLeave = useCallback(() => {
        const timeout = setTimeout(() => {
            if (!menuRef.current || !menuRef.current.matches(':hover')) {
                setOpenMenu(null)
                setActiveTab({})
            }
        }, 150)
        setHoverTimeout(timeout)
    }, [])

    const handleMenuMouseEnter = useCallback(() => {
        clearHoverTimeout()
    }, [clearHoverTimeout])

    const handleMenuMouseLeave = useCallback(() => {
        const timeout = setTimeout(() => {
            if (!menuRef.current || !menuRef.current.matches(':hover')) {
                setOpenMenu(null)
                setActiveTab({})
            }
        }, 150)
        setHoverTimeout(timeout)
    }, [])

    const handleTabMouseEnter = useCallback((menuKey, tabIndex) => {
        clearHoverTimeout()
        setActiveTab(prev => ({ ...prev, [menuKey]: tabIndex }))
    }, [clearHoverTimeout])

    const handleTabClick = useCallback((menuKey, tabIndex, e) => {
        e.preventDefault()
        setActiveTab(prev => ({ ...prev, [menuKey]: tabIndex }))
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null)
                setActiveTab({})
            }
        }
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setOpenMenu(null)
                setActiveTab({})
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEscape)
            clearHoverTimeout()
        }
    }, [clearHoverTimeout])

    const megaMenus = {
        technology: {
            label: "Technology",
            tabs: [
                {
                    label: "Software & Web",
                    heading: "Software & Web Development",
                    groups: [
                        {
                            title: "Web & Applications",
                            items: [
                                { label: "Web Development", href: "/web-development" },
                                { label: "Web Applications", href: "/web-development" },
                                { label: "Next.js Development", href: "/web-development" },
                                { label: "React Development", href: "/web-development" },
                            ]
                        },
                        {
                            title: "Software",
                            items: [
                                { label: "Custom Software Development", href: "/app-development" },
                                { label: "SaaS Development", href: "/app-development" },
                                { label: "API Development & Integration", href: "/app-development" },
                                { label: "Mobile App Development", href: "/app-development" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/app-development" }
                },
                {
                    label: "AI & Automation",
                    heading: "AI & Business Automation",
                    groups: [
                        {
                            title: "AI Solutions",
                            items: [
                                { label: "AI Solutions", href: "/services/ai-solutions" },
                                { label: "AI Automation", href: "/services/ai-solutions" },
                                { label: "AI Agents", href: "/services/ai-solutions" },
                                { label: "AI Chatbots", href: "/services/ai-solutions" },
                                { label: "Generative AI", href: "/services/ai-solutions" },
                            ]
                        },
                        {
                            title: "Automation",
                            items: [
                                { label: "Business Process Automation", href: "/services/zoho-automation" },
                                { label: "Workflow Automation", href: "/services/zoho-automation" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/ai-solutions" }
                },
                {
                    label: "CRM & Business Systems",
                    heading: "CRM & Business Automation",
                    groups: [
                        {
                            title: "Zoho CRM",
                            items: [
                                { label: "Zoho CRM", href: "/services/zoho-crm-implementation" },
                                { label: "Zoho CRM Implementation", href: "/services/zoho-crm-implementation" },
                                { label: "Zoho Automation", href: "/services/zoho-automation" },
                                { label: "CRM Migration", href: "/services/zoho-consulting" },
                            ]
                        },
                        {
                            title: "HubSpot",
                            items: [
                                { label: "HubSpot", href: "/services/hubspot-implementation" },
                                { label: "HubSpot Implementation", href: "/services/hubspot-implementation" },
                                { label: "RevOps", href: "/services/hubspot-automation" },
                                { label: "Sales Automation", href: "/services/hubspot-sales-hub" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/zoho-crm-implementation" }
                },
                {
                    label: "Technology Consulting",
                    heading: "Technology Consulting",
                    groups: [
                        {
                            title: "Consulting Services",
                            items: [
                                { label: "Technology Consulting", href: "/corporate-agency" },
                                { label: "Digital Transformation", href: "/corporate-agency" },
                                { label: "Software Consulting", href: "/corporate-agency" },
                                { label: "System Integration", href: "/corporate-agency" },
                            ]
                        },
                        {
                            title: "Solutions",
                            items: [
                                { label: "Custom Technology Solutions", href: "/app-development" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/corporate-agency" }
                }
            ],
            cta: {
                heading: "Build Your Next Digital Product",
                text: "Software, AI and automation solutions built around your business.",
                href: "/contact",
                label: "Start a Conversation"
            }
        },
        marketing: {
            label: "Marketing",
            tabs: [
                {
                    label: "Performance Marketing",
                    heading: "Performance Marketing",
                    groups: [
                        {
                            title: "Paid Advertising",
                            items: [
                                { label: "Google Ads", href: "/services/performance-marketing" },
                                { label: "Meta Ads", href: "/services/performance-marketing" },
                                { label: "Paid Advertising", href: "/services/performance-marketing" },
                                { label: "Performance Marketing", href: "/services/performance-marketing" },
                                { label: "Retargeting", href: "/services/performance-marketing" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/performance-marketing" }
                },
                {
                    label: "SEO",
                    heading: "Search Engine Optimization",
                    groups: [
                        {
                            title: "SEO Services",
                            items: [
                                { label: "SEO", href: "/services/seo" },
                                { label: "Local SEO", href: "/services/seo" },
                                { label: "Technical SEO", href: "/services/seo" },
                                { label: "SEO Strategy", href: "/services/seo" },
                                { label: "Content SEO", href: "/services/content-marketing" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/seo" }
                },
                {
                    label: "Growth & Lead Generation",
                    heading: "Growth & Lead Generation",
                    groups: [
                        {
                            title: "Growth Services",
                            items: [
                                { label: "Lead Generation", href: "/digital-marketing" },
                                { label: "B2B Marketing", href: "/digital-marketing" },
                                { label: "Conversion Optimization", href: "/services/performance-marketing" },
                                { label: "Marketing Automation", href: "/services/zoho-automation" },
                                { label: "Growth Strategy", href: "/services/marketing-strategy" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/digital-marketing" }
                },
                {
                    label: "Content & Social",
                    heading: "Content & Social Media",
                    groups: [
                        {
                            title: "Content & Social Services",
                            items: [
                                { label: "Content Marketing", href: "/services/content-marketing" },
                                { label: "Social Media Marketing", href: "/digital-marketing" },
                                { label: "Social Media Management", href: "/digital-marketing" },
                                { label: "Email Marketing", href: "/digital-marketing" },
                                { label: "Campaign Management", href: "/digital-marketing" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/digital-marketing" }
                },
                {
                    label: "Analytics & Strategy",
                    heading: "Analytics & Strategy",
                    groups: [
                        {
                            title: "Strategy & Analytics",
                            items: [
                                { label: "Marketing Strategy", href: "/services/marketing-strategy" },
                                { label: "Marketing Analytics", href: "/digital-marketing" },
                                { label: "Conversion Tracking", href: "/digital-marketing" },
                                { label: "Attribution", href: "/digital-marketing" },
                                { label: "Reporting", href: "/digital-marketing" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/marketing-strategy" }
                }
            ],
            cta: {
                heading: "Grow Your Business",
                text: "Build a measurable digital acquisition engine.",
                href: "/contact",
                label: "Start a Conversation"
            }
        },
        "it-cloud": {
            label: "IT & Cloud",
            tabs: [
                {
                    label: "Cloud",
                    heading: "Cloud Services",
                    groups: [
                        {
                            title: "Cloud Solutions",
                            items: [
                                { label: "AWS Cloud Services", href: "/services/cloud-services" },
                                { label: "Cloud Architecture", href: "/services/cloud-services" },
                                { label: "Cloud Migration", href: "/services/cloud-services" },
                                { label: "Cloud Infrastructure", href: "/services/cloud-services" },
                                { label: "Cloud Optimization", href: "/services/cloud-services" },
                                { label: "Cloud Management", href: "/services/cloud-services" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/cloud-services" }
                },
                {
                    label: "Infrastructure & DevOps",
                    heading: "Infrastructure & DevOps",
                    groups: [
                        {
                            title: "DevOps & Infrastructure",
                            items: [
                                { label: "DevOps", href: "/services/it-infrastructure" },
                                { label: "CI/CD", href: "/services/it-infrastructure" },
                                { label: "Server Management", href: "/services/it-infrastructure" },
                                { label: "Infrastructure Management", href: "/services/it-infrastructure" },
                                { label: "Monitoring", href: "/services/it-infrastructure" },
                                { label: "Backup & Disaster Recovery", href: "/services/it-infrastructure" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/it-infrastructure" }
                },
                {
                    label: "IT & Security",
                    heading: "IT & Security",
                    groups: [
                        {
                            title: "IT Consulting & Security",
                            items: [
                                { label: "IT Consulting", href: "/corporate-agency" },
                                { label: "IT Infrastructure", href: "/services/it-infrastructure" },
                                { label: "Cybersecurity", href: "/services/it-infrastructure" },
                                { label: "Information Security", href: "/services/it-infrastructure" },
                                { label: "IT Governance", href: "/corporate-agency" },
                                { label: "IT Audit", href: "/corporate-agency" },
                                { label: "Security Assessment", href: "/services/it-infrastructure" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/corporate-agency" }
                },
                {
                    label: "Managed IT",
                    heading: "Managed IT Services",
                    groups: [
                        {
                            title: "Managed Services",
                            items: [
                                { label: "IT Support", href: "/services/it-infrastructure" },
                                { label: "Infrastructure Support", href: "/services/it-infrastructure" },
                                { label: "Cloud Support", href: "/services/cloud-services" },
                                { label: "Managed Services", href: "/services/it-infrastructure" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/it-infrastructure" }
                }
            ],
            cta: {
                heading: "Build Reliable Infrastructure",
                text: "Secure and scalable cloud and IT solutions.",
                href: "/contact",
                label: "Start a Conversation"
            }
        },
        creative: {
            label: "Creative",
            tabs: [
                {
                    label: "UI/UX & Digital Design",
                    heading: "UI/UX & Digital Design",
                    groups: [
                        {
                            title: "Design Services",
                            items: [
                                { label: "UI/UX Design", href: "/uiux-design" },
                                { label: "Website Design", href: "/services/website-design" },
                                { label: "Landing Page Design", href: "/services/website-design" },
                                { label: "Product Design", href: "/uiux-design" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/uiux-design" }
                },
                {
                    label: "Branding",
                    heading: "Brand Identity & Design",
                    groups: [
                        {
                            title: "Brand Services",
                            items: [
                                { label: "Brand Identity", href: "/services/brand-design" },
                                { label: "Logo Design", href: "/services/brand-design" },
                                { label: "Corporate Branding", href: "/services/brand-design" },
                                { label: "Brand Guidelines", href: "/services/brand-design" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/brand-design" }
                },
                {
                    label: "Creative",
                    heading: "Creative Design Services",
                    groups: [
                        {
                            title: "Creative Services",
                            items: [
                                { label: "Graphic Design", href: "/services/creative-design" },
                                { label: "Social Media Creatives", href: "/services/marketing-creatives" },
                                { label: "Marketing Creatives", href: "/services/marketing-creatives" },
                                { label: "Presentation Design", href: "/services/creative-design" },
                                { label: "Visual Content", href: "/services/marketing-creatives" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/services/creative-design" }
                }
            ],
            cta: {
                heading: "Make Your Brand Stand Out",
                text: "Design experiences that strengthen your brand.",
                href: "/contact",
                label: "Start a Conversation"
            }
        },
        company: {
            label: "Company",
            tabs: [
                {
                    label: "About Orgits",
                    heading: "About Orgits",
                    groups: [
                        {
                            title: "About Us",
                            items: [
                                { label: "About Us", href: "/about" },
                                { label: "Our Approach", href: "/about" },
                                { label: "Our Process", href: "/about" },
                                { label: "Why Choose Us", href: "/about" },
                                { label: "Our Expertise", href: "/about" },
                                { label: "Partners", href: "/about" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/about" }
                },
                {
                    label: "Experience & Trust",
                    heading: "Experience & Trust",
                    groups: [
                        {
                            title: "Our Work",
                            items: [
                                { label: "Case Studies", href: "/project" },
                                { label: "Portfolio / Projects", href: "/project" },
                                { label: "Client Success Stories", href: "/testimonial" },
                                { label: "Testimonials", href: "/testimonial" },
                                { label: "Industries We Serve", href: "/about" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/project" }
                },
                {
                    label: "Information",
                    heading: "Information",
                    groups: [
                        {
                            title: "Company Information",
                            items: [
                                { label: "FAQ", href: "/faq" },
                                { label: "Careers", href: "/careers" },
                                { label: "Privacy Policy", href: "/privacy" },
                                { label: "Terms & Conditions", href: "/terms" },
                            ]
                        }
                    ],
                    cta: { label: "View All →", href: "/faq" }
                }
            ],
            cta: {
                heading: "Get to Know Orgits",
                text: "Explore our expertise, approach and client success.",
                href: "/about",
                label: "Learn More About Orgits"
            }
        }
    }

    const renderMegaMenu = (menu) => {
        const currentTab = activeTab[menu.label] ?? 0
        const tabs = menu.tabs

        return (
            <div
                className="mega-menu"
                role="menu"
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
            >
                <div className="mega-menu__container">
                    <div className="mega-menu__tabs-panel">
                        <nav className="mega-menu__tabs" role="tablist" aria-label={`${menu.label} categories`}>
                            {tabs.map((tab, idx) => (
                                <button
                                    key={tab.label}
                                    role="tab"
                                    aria-selected={currentTab === idx}
                                    aria-controls={`${menu.label}-panel-${idx}`}
                                    id={`${menu.label}-tab-${idx}`}
                                    className={`mega-menu__tab ${currentTab === idx ? 'active' : ''}`}
                                    onMouseEnter={() => handleTabMouseEnter(menu.label, idx)}
                                    onClick={(e) => handleTabClick(menu.label, idx, e)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                        <div className="mega-menu__panels" role="tabpanel">
                            {tabs.map((tab, idx) => (
                                <div
                                    key={tab.label}
                                    role="tabpanel"
                                    aria-labelledby={`${menu.label}-tab-${idx}`}
                                    id={`${menu.label}-panel-${idx}`}
                                    className={`mega-menu__panel ${currentTab === idx ? 'active' : ''}`}
                                    hidden={currentTab !== idx}
                                >
                                    <div className="mega-menu__panel-content">
                                        <h4 className="mega-menu__panel-heading">{tab.heading}</h4>
                                        {tab.groups.map((group, gIdx) => (
                                            <div key={`${idx}-${gIdx}`} className="mega-menu__group">
                                                <h5 className="mega-menu__group-title">{group.title}</h5>
                                                <ul className="mega-menu__group-list" role="list">
                                                    {group.items.map((item, iIdx) => (
                                                        <li key={`${idx}-${gIdx}-${iIdx}`} className="mega-menu__group-item" role="listitem">
                                                            <Link href={item.href} className="mega-menu__group-link">{item.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className="mega-menu__panel-cta">
                                            <Link href={tab.cta.href} className="mega-menu__panel-cta-link">
                                                {tab.cta.label}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mega-menu__cta">
                        <div className="mega-menu__cta-content">
                            <div className="mega-menu__cta-text">
                                <h4 className="mega-menu__cta-heading">{menu.cta.heading}</h4>
                                <p className="mega-menu__cta-text">{menu.cta.text}</p>
                            </div>
                            <Link href={menu.cta.href} className="thm-btn mega-menu__cta-btn">
                                <span className="txt">{menu.cta.label}<i className="icon-next"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <nav className="main-navigation" ref={menuRef} aria-label="Main navigation">
                <ul className="navigation">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item has-mega-menu">
                        <button
                            ref={(el) => { triggerRefs.current.technology = el }}
                            className="nav-link nav-trigger"
                            aria-haspopup="true"
                            aria-expanded={openMenu === "technology"}
                            aria-controls="mega-menu-technology"
                            id="trigger-technology"
                            onMouseEnter={() => handleTriggerMouseEnter("technology")}
                            onMouseLeave={handleTriggerMouseLeave}
                            onClick={(e) => { e.preventDefault(); setOpenMenu(openMenu === "technology" ? null : "technology") }}
                        >
                            Technology <span className="nav-arrow" aria-hidden="true">▼</span>
                        </button>
                        {openMenu === "technology" && (
                            <div
                                id="mega-menu-technology"
                                role="menu"
                                onMouseEnter={handleMenuMouseEnter}
                                onMouseLeave={handleMenuMouseLeave}
                            >
                                {renderMegaMenu(megaMenus.technology)}
                            </div>
                        )}
                    </li>
                    <li className="nav-item has-mega-menu">
                        <button
                            ref={(el) => { triggerRefs.current.marketing = el }}
                            className="nav-link nav-trigger"
                            aria-haspopup="true"
                            aria-expanded={openMenu === "marketing"}
                            aria-controls="mega-menu-marketing"
                            id="trigger-marketing"
                            onMouseEnter={() => handleTriggerMouseEnter("marketing")}
                            onMouseLeave={handleTriggerMouseLeave}
                            onClick={(e) => { e.preventDefault(); setOpenMenu(openMenu === "marketing" ? null : "marketing") }}
                        >
                            Marketing <span className="nav-arrow" aria-hidden="true">▼</span>
                        </button>
                        {openMenu === "marketing" && (
                            <div
                                id="mega-menu-marketing"
                                role="menu"
                                onMouseEnter={handleMenuMouseEnter}
                                onMouseLeave={handleMenuMouseLeave}
                            >
                                {renderMegaMenu(megaMenus.marketing)}
                            </div>
                        )}
                    </li>
                    <li className="nav-item has-mega-menu">
                        <button
                            ref={(el) => { triggerRefs.current["it-cloud"] = el }}
                            className="nav-link nav-trigger"
                            aria-haspopup="true"
                            aria-expanded={openMenu === "it-cloud"}
                            aria-controls="mega-menu-it-cloud"
                            id="trigger-it-cloud"
                            onMouseEnter={() => handleTriggerMouseEnter("it-cloud")}
                            onMouseLeave={handleTriggerMouseLeave}
                            onClick={(e) => { e.preventDefault(); setOpenMenu(openMenu === "it-cloud" ? null : "it-cloud") }}
                        >
                            IT & Cloud <span className="nav-arrow" aria-hidden="true">▼</span>
                        </button>
                        {openMenu === "it-cloud" && (
                            <div
                                id="mega-menu-it-cloud"
                                role="menu"
                                onMouseEnter={handleMenuMouseEnter}
                                onMouseLeave={handleMenuMouseLeave}
                            >
                                {renderMegaMenu(megaMenus["it-cloud"])}
                            </div>
                        )}
                    </li>
                    <li className="nav-item has-mega-menu">
                        <button
                            ref={(el) => { triggerRefs.current.creative = el }}
                            className="nav-link nav-trigger"
                            aria-haspopup="true"
                            aria-expanded={openMenu === "creative"}
                            aria-controls="mega-menu-creative"
                            id="trigger-creative"
                            onMouseEnter={() => handleTriggerMouseEnter("creative")}
                            onMouseLeave={handleTriggerMouseLeave}
                            onClick={(e) => { e.preventDefault(); setOpenMenu(openMenu === "creative" ? null : "creative") }}
                        >
                            Creative <span className="nav-arrow" aria-hidden="true">▼</span>
                        </button>
                        {openMenu === "creative" && (
                            <div
                                id="mega-menu-creative"
                                role="menu"
                                onMouseEnter={handleMenuMouseEnter}
                                onMouseLeave={handleMenuMouseLeave}
                            >
                                {renderMegaMenu(megaMenus.creative)}
                            </div>
                        )}
                    </li>
                    <li className="nav-item has-mega-menu">
                        <button
                            ref={(el) => { triggerRefs.current.company = el }}
                            className="nav-link nav-trigger"
                            aria-haspopup="true"
                            aria-expanded={openMenu === "company"}
                            aria-controls="mega-menu-company"
                            id="trigger-company"
                            onMouseEnter={() => handleTriggerMouseEnter("company")}
                            onMouseLeave={handleTriggerMouseLeave}
                            onClick={(e) => { e.preventDefault(); setOpenMenu(openMenu === "company" ? null : "company") }}
                        >
                            Company <span className="nav-arrow" aria-hidden="true">▼</span>
                        </button>
                        {openMenu === "company" && (
                            <div
                                id="mega-menu-company"
                                role="menu"
                                onMouseEnter={handleMenuMouseEnter}
                                onMouseLeave={handleMenuMouseLeave}
                            >
                                {renderMegaMenu(megaMenus.company)}
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <Link href="/blog" className="nav-link">Blog</Link>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
                .main-navigation {
                    display: flex;
                    align-items: center;
                    gap: 0;
                }
                .navigation {
                    display: flex;
                    align-items: center;
                    gap: 0;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .nav-item {
                    position: relative;
                }
                .nav-link {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 14px 20px;
                    color: var(--thm-black);
                    font-size: 15px;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    white-space: nowrap;
                }
                .nav-link:hover {
                    color: var(--thm-primary);
                }
                .nav-trigger {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-family: inherit;
                    font-size: inherit;
                    font-weight: inherit;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 14px 20px;
                    color: var(--thm-black);
                    transition: color 0.2s ease;
                    white-space: nowrap;
                }
                .nav-trigger:hover {
                    color: var(--thm-primary);
                }
                .nav-arrow {
                    font-size: 10px;
                    transition: transform 0.2s ease;
                }
                .has-mega-menu:hover .nav-arrow,
                .has-mega-menu[aria-expanded="true"] .nav-arrow {
                    transform: rotate(180deg);
                }

                /* Mega Menu - Centered */
                .mega-menu {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    max-width: 1200px;
                    min-width: 100%;
                    background: var(--thm-white);
                    border-top: 1px solid var(--thm-border-color);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    z-index: 1000;
                    padding: 0;
                    animation: megaMenuIn 0.15s ease;
                }
                @keyframes megaMenuIn {
                    from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }

                /* Tabs + Panel Layout */
                .mega-menu__tabs-panel {
                    display: flex;
                    min-height: 420px;
                }
                .mega-menu__tabs {
                    display: flex;
                    flex-direction: column;
                    min-width: 220px;
                    max-width: 220px;
                    padding: 24px 20px;
                    border-right: 1px solid var(--thm-border-color);
                    background: var(--thm-white);
                }
                .mega-menu__tab {
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 12px 16px;
                    margin: 0 0 4px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--thm-body-font-color);
                    background: transparent;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .mega-menu__tab:hover,
                .mega-menu__tab:focus {
                    color: var(--thm-primary);
                    background: var(--thm-primary-lighter);
                }
                .mega-menu__tab.active {
                    color: var(--thm-primary);
                    background: var(--thm-primary-lighter);
                    font-weight: 600;
                }
                .mega-menu__tab:focus-visible {
                    outline: 2px solid var(--thm-primary);
                    outline-offset: 2px;
                }

                .mega-menu__panels {
                    flex: 1;
                    min-width: 0;
                    padding: 24px;
                }
                .mega-menu__panel {
                    display: none;
                    animation: panelFade 0.15s ease;
                }
                @keyframes panelFade {
                    from { opacity: 0; transform: translateX(10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .mega-menu__panel.active {
                    display: block;
                }
                .mega-menu__panel-heading {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--thm-black);
                    margin: 0 0 20px;
                    padding-bottom: 12px;
                    border-bottom: 1px solid var(--thm-border-color);
                }
                .mega-menu__group {
                    margin: 0 0 24px;
                }
                .mega-menu__group-title {
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: var(--thm-text-muted);
                    margin: 0 0 10px;
                }
                .mega-menu__group-list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 8px 24px;
                }
                .mega-menu__group-item {
                    margin: 0;
                }
                .mega-menu__group-link {
                    display: block;
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--thm-body-font-color);
                    text-decoration: none;
                    padding: 6px 0;
                    transition: color 0.15s ease;
                }
                .mega-menu__group-link:hover {
                    color: var(--thm-primary);
                }
                .mega-menu__panel-cta {
                    margin-top: 24px;
                    padding-top: 16px;
                    border-top: 1px solid var(--thm-border-color);
                }
                .mega-menu__panel-cta-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--thm-primary);
                    text-decoration: none;
                }
                .mega-menu__panel-cta-link:hover {
                    text-decoration: underline;
                }

                /* Mega Menu CTA Area */
                .mega-menu__cta {
                    margin-top: 24px;
                    padding: 24px;
                    border-top: 1px solid var(--thm-border-color);
                }
                .mega-menu__cta-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    padding: 20px 24px;
                    background: var(--thm-primary-lighter);
                    border-radius: 8px;
                }
                .mega-menu__cta-text {
                    flex: 1;
                }
                .mega-menu__cta-heading {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--thm-black);
                    margin: 0 0 4px;
                }
                .mega-menu__cta-text {
                    font-size: 13px;
                    color: var(--thm-text-muted);
                    margin: 0;
                }
                .mega-menu__cta-btn {
                    flex-shrink: 0;
                    white-space: nowrap;
                }

                /* Responsive */
                @media (max-width: 1200px) {
                    .mega-menu {
                        min-width: 100vw;
                        left: 0;
                        transform: none;
                        max-width: 100vw;
                    }
                    .mega-menu__tabs-panel {
                        flex-direction: column;
                    }
                    .mega-menu__tabs {
                        flex-direction: row;
                        flex-wrap: wrap;
                        min-width: auto;
                        max-width: none;
                        border-right: none;
                        border-bottom: 1px solid var(--thm-border-color);
                        padding: 12px 16px;
                    }
                    .mega-menu__tab {
                        margin: 0 8px 0 0;
                        padding: 8px 12px;
                    }
                    .mega-menu__panels {
                        padding: 16px;
                    }
                    .mega-menu__group-list {
                        grid-template-columns: 1fr;
                    }
                }
                @media (max-width: 768px) {
                    .mega-menu__tabs {
                        flex-direction: column;
                    }
                    .mega-menu__tab {
                        margin: 0 0 4px;
                    }
                }
            `}</style>
        </>
    )
}