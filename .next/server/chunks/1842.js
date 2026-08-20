exports.id = 1842;
exports.ids = [1842];
exports.modules = {

/***/ 53077:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 99471, 23))

/***/ }),

/***/ 85875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29435))

/***/ }),

/***/ 19567:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16173, 23))

/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 29435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js

function BackToTop({ scroll }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: scroll && /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "scroll-to-top scroll-to-target d-block",
            href: "#top"
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js


function DataBg() {
    (0,react_.useEffect)(()=>{
        const elements = document.querySelectorAll("[data-bg]");
        elements.forEach((element)=>{
            element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


function Breadcrumb({ breadcrumbTitle }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "page-header",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "shape1 rotate-me",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/img/shape/page-header-shape1.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "shape2 float-bob-x",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/img/shape/page-header-shape2.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "page-header__inner",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: breadcrumbTitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "thm-breadcrumb",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: "/",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-home"
                                                }),
                                                " Home"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-right-arrow-angle"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "color-base",
                                        children: breadcrumbTitle
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/SearchPopup.js

function SearchPopup({ isPopup, handlePopup }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `search-popup ${isPopup ? "active" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search-popup__overlay search-toggler",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "search-close-btn",
                        onClick: handlePopup,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon-plus"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search-popup__content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        action: "#",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "sr-only",
                                children: "search here"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "search",
                                placeholder: "Search Here..."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                "aria-label": "search submit",
                                className: "btn-one",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon-search-interface-symbol"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Sidebar.js


function Sidebar({ isSidebar, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(86369);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
;// CONCATENATED MODULE: ./components/layout/Menu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Menu() {
    const [openMenu, setOpenMenu] = (0,react_.useState)(null);
    const [activeTab, setActiveTab] = (0,react_.useState)({});
    const [hoverTimeout, setHoverTimeout] = (0,react_.useState)(null);
    const menuRef = (0,react_.useRef)(null);
    const triggerRefs = (0,react_.useRef)({});
    const clearHoverTimeout = (0,react_.useCallback)(()=>{
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
    }, [
        hoverTimeout
    ]);
    const handleTriggerMouseEnter = (0,react_.useCallback)((menuKey)=>{
        clearHoverTimeout();
        setOpenMenu(menuKey);
    }, [
        clearHoverTimeout
    ]);
    const handleTriggerMouseLeave = (0,react_.useCallback)(()=>{
        const timeout = setTimeout(()=>{
            if (!menuRef.current || !menuRef.current.matches(":hover")) {
                setOpenMenu(null);
                setActiveTab({});
            }
        }, 150);
        setHoverTimeout(timeout);
    }, []);
    const handleMenuMouseEnter = (0,react_.useCallback)(()=>{
        clearHoverTimeout();
    }, [
        clearHoverTimeout
    ]);
    const handleMenuMouseLeave = (0,react_.useCallback)(()=>{
        const timeout = setTimeout(()=>{
            if (!menuRef.current || !menuRef.current.matches(":hover")) {
                setOpenMenu(null);
                setActiveTab({});
            }
        }, 150);
        setHoverTimeout(timeout);
    }, []);
    const handleTabMouseEnter = (0,react_.useCallback)((menuKey, tabIndex)=>{
        clearHoverTimeout();
        setActiveTab((prev)=>({
                ...prev,
                [menuKey]: tabIndex
            }));
    }, [
        clearHoverTimeout
    ]);
    const handleTabClick = (0,react_.useCallback)((menuKey, tabIndex, e)=>{
        e.preventDefault();
        setActiveTab((prev)=>({
                ...prev,
                [menuKey]: tabIndex
            }));
    }, []);
    (0,react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
                setActiveTab({});
            }
        };
        const handleEscape = (event)=>{
            if (event.key === "Escape") {
                setOpenMenu(null);
                setActiveTab({});
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
            clearHoverTimeout();
        };
    }, [
        clearHoverTimeout
    ]);
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
                                {
                                    label: "Web Development",
                                    href: "/web-development"
                                },
                                {
                                    label: "Web Applications",
                                    href: "/web-development"
                                },
                                {
                                    label: "Next.js Development",
                                    href: "/web-development"
                                },
                                {
                                    label: "React Development",
                                    href: "/web-development"
                                }
                            ]
                        },
                        {
                            title: "Software",
                            items: [
                                {
                                    label: "Custom Software Development",
                                    href: "/app-development"
                                },
                                {
                                    label: "SaaS Development",
                                    href: "/app-development"
                                },
                                {
                                    label: "API Development & Integration",
                                    href: "/app-development"
                                },
                                {
                                    label: "Mobile App Development",
                                    href: "/app-development"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/app-development"
                    }
                },
                {
                    label: "AI & Automation",
                    heading: "AI & Business Automation",
                    groups: [
                        {
                            title: "AI Solutions",
                            items: [
                                {
                                    label: "AI Solutions",
                                    href: "/services/ai-solutions"
                                },
                                {
                                    label: "AI Automation",
                                    href: "/services/ai-solutions"
                                },
                                {
                                    label: "AI Agents",
                                    href: "/services/ai-solutions"
                                },
                                {
                                    label: "AI Chatbots",
                                    href: "/services/ai-solutions"
                                },
                                {
                                    label: "Generative AI",
                                    href: "/services/ai-solutions"
                                }
                            ]
                        },
                        {
                            title: "Automation",
                            items: [
                                {
                                    label: "Business Process Automation",
                                    href: "/services/zoho-automation"
                                },
                                {
                                    label: "Workflow Automation",
                                    href: "/services/zoho-automation"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/ai-solutions"
                    }
                },
                {
                    label: "CRM & Business Systems",
                    heading: "CRM & Business Automation",
                    groups: [
                        {
                            title: "Zoho CRM",
                            items: [
                                {
                                    label: "Zoho CRM",
                                    href: "/services/zoho-crm-implementation"
                                },
                                {
                                    label: "Zoho CRM Implementation",
                                    href: "/services/zoho-crm-implementation"
                                },
                                {
                                    label: "Zoho Automation",
                                    href: "/services/zoho-automation"
                                },
                                {
                                    label: "CRM Migration",
                                    href: "/services/zoho-consulting"
                                }
                            ]
                        },
                        {
                            title: "HubSpot",
                            items: [
                                {
                                    label: "HubSpot",
                                    href: "/services/hubspot-implementation"
                                },
                                {
                                    label: "HubSpot Implementation",
                                    href: "/services/hubspot-implementation"
                                },
                                {
                                    label: "RevOps",
                                    href: "/services/hubspot-automation"
                                },
                                {
                                    label: "Sales Automation",
                                    href: "/services/hubspot-sales-hub"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/zoho-crm-implementation"
                    }
                },
                {
                    label: "Technology Consulting",
                    heading: "Technology Consulting",
                    groups: [
                        {
                            title: "Consulting Services",
                            items: [
                                {
                                    label: "Technology Consulting",
                                    href: "/corporate-agency"
                                },
                                {
                                    label: "Digital Transformation",
                                    href: "/corporate-agency"
                                },
                                {
                                    label: "Software Consulting",
                                    href: "/corporate-agency"
                                },
                                {
                                    label: "System Integration",
                                    href: "/corporate-agency"
                                }
                            ]
                        },
                        {
                            title: "Solutions",
                            items: [
                                {
                                    label: "Custom Technology Solutions",
                                    href: "/app-development"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/corporate-agency"
                    }
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
                                {
                                    label: "Google Ads",
                                    href: "/services/performance-marketing"
                                },
                                {
                                    label: "Meta Ads",
                                    href: "/services/performance-marketing"
                                },
                                {
                                    label: "Paid Advertising",
                                    href: "/services/performance-marketing"
                                },
                                {
                                    label: "Performance Marketing",
                                    href: "/services/performance-marketing"
                                },
                                {
                                    label: "Retargeting",
                                    href: "/services/performance-marketing"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/performance-marketing"
                    }
                },
                {
                    label: "SEO",
                    heading: "Search Engine Optimization",
                    groups: [
                        {
                            title: "SEO Services",
                            items: [
                                {
                                    label: "SEO",
                                    href: "/services/seo"
                                },
                                {
                                    label: "Local SEO",
                                    href: "/services/seo"
                                },
                                {
                                    label: "Technical SEO",
                                    href: "/services/seo"
                                },
                                {
                                    label: "SEO Strategy",
                                    href: "/services/seo"
                                },
                                {
                                    label: "Content SEO",
                                    href: "/services/content-marketing"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/seo"
                    }
                },
                {
                    label: "Growth & Lead Generation",
                    heading: "Growth & Lead Generation",
                    groups: [
                        {
                            title: "Growth Services",
                            items: [
                                {
                                    label: "Lead Generation",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "B2B Marketing",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "Conversion Optimization",
                                    href: "/services/performance-marketing"
                                },
                                {
                                    label: "Marketing Automation",
                                    href: "/services/zoho-automation"
                                },
                                {
                                    label: "Growth Strategy",
                                    href: "/services/marketing-strategy"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/digital-marketing"
                    }
                },
                {
                    label: "Content & Social",
                    heading: "Content & Social Media",
                    groups: [
                        {
                            title: "Content & Social Services",
                            items: [
                                {
                                    label: "Content Marketing",
                                    href: "/services/content-marketing"
                                },
                                {
                                    label: "Social Media Marketing",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "Social Media Management",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "Email Marketing",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "Campaign Management",
                                    href: "/digital-marketing"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/digital-marketing"
                    }
                },
                {
                    label: "Analytics & Strategy",
                    heading: "Analytics & Strategy",
                    groups: [
                        {
                            title: "Strategy & Analytics",
                            items: [
                                {
                                    label: "Marketing Strategy",
                                    href: "/services/marketing-strategy"
                                },
                                {
                                    label: "Marketing Analytics",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "Conversion Tracking",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "Attribution",
                                    href: "/digital-marketing"
                                },
                                {
                                    label: "Reporting",
                                    href: "/digital-marketing"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/marketing-strategy"
                    }
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
                                {
                                    label: "AWS Cloud Services",
                                    href: "/services/cloud-services"
                                },
                                {
                                    label: "Cloud Architecture",
                                    href: "/services/cloud-services"
                                },
                                {
                                    label: "Cloud Migration",
                                    href: "/services/cloud-services"
                                },
                                {
                                    label: "Cloud Infrastructure",
                                    href: "/services/cloud-services"
                                },
                                {
                                    label: "Cloud Optimization",
                                    href: "/services/cloud-services"
                                },
                                {
                                    label: "Cloud Management",
                                    href: "/services/cloud-services"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/cloud-services"
                    }
                },
                {
                    label: "Infrastructure & DevOps",
                    heading: "Infrastructure & DevOps",
                    groups: [
                        {
                            title: "DevOps & Infrastructure",
                            items: [
                                {
                                    label: "DevOps",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "CI/CD",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Server Management",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Infrastructure Management",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Monitoring",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Backup & Disaster Recovery",
                                    href: "/services/it-infrastructure"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/it-infrastructure"
                    }
                },
                {
                    label: "IT & Security",
                    heading: "IT & Security",
                    groups: [
                        {
                            title: "IT Consulting & Security",
                            items: [
                                {
                                    label: "IT Consulting",
                                    href: "/corporate-agency"
                                },
                                {
                                    label: "IT Infrastructure",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Cybersecurity",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Information Security",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "IT Governance",
                                    href: "/corporate-agency"
                                },
                                {
                                    label: "IT Audit",
                                    href: "/corporate-agency"
                                },
                                {
                                    label: "Security Assessment",
                                    href: "/services/it-infrastructure"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/corporate-agency"
                    }
                },
                {
                    label: "Managed IT",
                    heading: "Managed IT Services",
                    groups: [
                        {
                            title: "Managed Services",
                            items: [
                                {
                                    label: "IT Support",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Infrastructure Support",
                                    href: "/services/it-infrastructure"
                                },
                                {
                                    label: "Cloud Support",
                                    href: "/services/cloud-services"
                                },
                                {
                                    label: "Managed Services",
                                    href: "/services/it-infrastructure"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/it-infrastructure"
                    }
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
                                {
                                    label: "UI/UX Design",
                                    href: "/uiux-design"
                                },
                                {
                                    label: "Website Design",
                                    href: "/services/website-design"
                                },
                                {
                                    label: "Landing Page Design",
                                    href: "/services/website-design"
                                },
                                {
                                    label: "Product Design",
                                    href: "/uiux-design"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/uiux-design"
                    }
                },
                {
                    label: "Branding",
                    heading: "Brand Identity & Design",
                    groups: [
                        {
                            title: "Brand Services",
                            items: [
                                {
                                    label: "Brand Identity",
                                    href: "/services/brand-design"
                                },
                                {
                                    label: "Logo Design",
                                    href: "/services/brand-design"
                                },
                                {
                                    label: "Corporate Branding",
                                    href: "/services/brand-design"
                                },
                                {
                                    label: "Brand Guidelines",
                                    href: "/services/brand-design"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/brand-design"
                    }
                },
                {
                    label: "Creative",
                    heading: "Creative Design Services",
                    groups: [
                        {
                            title: "Creative Services",
                            items: [
                                {
                                    label: "Graphic Design",
                                    href: "/services/creative-design"
                                },
                                {
                                    label: "Social Media Creatives",
                                    href: "/services/marketing-creatives"
                                },
                                {
                                    label: "Marketing Creatives",
                                    href: "/services/marketing-creatives"
                                },
                                {
                                    label: "Presentation Design",
                                    href: "/services/creative-design"
                                },
                                {
                                    label: "Visual Content",
                                    href: "/services/marketing-creatives"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/services/creative-design"
                    }
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
                                {
                                    label: "About Us",
                                    href: "/about"
                                },
                                {
                                    label: "Our Approach",
                                    href: "/about"
                                },
                                {
                                    label: "Our Process",
                                    href: "/about"
                                },
                                {
                                    label: "Why Choose Us",
                                    href: "/about"
                                },
                                {
                                    label: "Our Expertise",
                                    href: "/about"
                                },
                                {
                                    label: "Partners",
                                    href: "/about"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/about"
                    }
                },
                {
                    label: "Experience & Trust",
                    heading: "Experience & Trust",
                    groups: [
                        {
                            title: "Our Work",
                            items: [
                                {
                                    label: "Case Studies",
                                    href: "/project"
                                },
                                {
                                    label: "Portfolio / Projects",
                                    href: "/project"
                                },
                                {
                                    label: "Client Success Stories",
                                    href: "/testimonial"
                                },
                                {
                                    label: "Testimonials",
                                    href: "/testimonial"
                                },
                                {
                                    label: "Industries We Serve",
                                    href: "/about"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/project"
                    }
                },
                {
                    label: "Information",
                    heading: "Information",
                    groups: [
                        {
                            title: "Company Information",
                            items: [
                                {
                                    label: "FAQ",
                                    href: "/faq"
                                },
                                {
                                    label: "Careers",
                                    href: "/careers"
                                },
                                {
                                    label: "Privacy Policy",
                                    href: "/privacy"
                                },
                                {
                                    label: "Terms & Conditions",
                                    href: "/terms"
                                }
                            ]
                        }
                    ],
                    cta: {
                        label: "View All →",
                        href: "/faq"
                    }
                }
            ],
            cta: {
                heading: "Get to Know Orgits",
                text: "Explore our expertise, approach and client success.",
                href: "/about",
                label: "Learn More"
            }
        }
    };
    const renderMegaMenu = (menu)=>{
        const currentTab = activeTab[menu.label] ?? 0;
        const tabs = menu.tabs;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mega-menu",
            role: "menu",
            onMouseEnter: handleMenuMouseEnter,
            onMouseLeave: handleMenuMouseLeave,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mega-menu__container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mega-menu__tabs-panel",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "mega-menu__tabs",
                                role: "tablist",
                                "aria-label": `${menu.label} categories`,
                                children: tabs.map((tab, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        role: "tab",
                                        "aria-selected": currentTab === idx,
                                        "aria-controls": `${menu.label}-panel-${idx}`,
                                        id: `${menu.label}-tab-${idx}`,
                                        className: `mega-menu__tab ${currentTab === idx ? "active" : ""}`,
                                        onMouseEnter: ()=>handleTabMouseEnter(menu.label, idx),
                                        onClick: (e)=>handleTabClick(menu.label, idx, e),
                                        children: tab.label
                                    }, tab.label))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mega-menu__panels",
                                role: "tabpanel",
                                children: tabs.map((tab, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        role: "tabpanel",
                                        "aria-labelledby": `${menu.label}-tab-${idx}`,
                                        id: `${menu.label}-panel-${idx}`,
                                        className: `mega-menu__panel ${currentTab === idx ? "active" : ""}`,
                                        hidden: currentTab !== idx,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mega-menu__panel-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "mega-menu__panel-heading",
                                                    children: tab.heading
                                                }),
                                                tab.groups.map((group, gIdx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mega-menu__group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "mega-menu__group-title",
                                                                children: group.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                className: "mega-menu__group-list",
                                                                role: "list",
                                                                children: group.items.map((item, iIdx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "mega-menu__group-item",
                                                                        role: "listitem",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: item.href,
                                                                            className: "mega-menu__group-link",
                                                                            children: item.label
                                                                        })
                                                                    }, `${idx}-${gIdx}-${iIdx}`))
                                                            })
                                                        ]
                                                    }, `${idx}-${gIdx}`)),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mega-menu__panel-cta",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: tab.cta.href,
                                                        className: "mega-menu__panel-cta-link",
                                                        children: tab.cta.label
                                                    })
                                                })
                                            ]
                                        })
                                    }, tab.label))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mega-menu__cta",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mega-menu__cta-content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mega-menu__cta-text",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mega-menu__cta-heading",
                                            children: menu.cta.heading
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mega-menu__cta-text",
                                            children: menu.cta.text
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: menu.cta.href,
                                    className: "thm-btn mega-menu__cta-btn",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "txt",
                                        children: [
                                            menu.cta.label,
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "icon-next"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                ref: menuRef,
                "aria-label": "Main navigation",
                className: "jsx-67ee4355c2b981fd" + " " + "main-navigation",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "jsx-67ee4355c2b981fd" + " " + "navigation",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "jsx-67ee4355c2b981fd" + " " + "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "nav-link",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "jsx-67ee4355c2b981fd" + " " + "nav-item has-mega-menu",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    ref: (el)=>{
                                        triggerRefs.current.technology = el;
                                    },
                                    "aria-haspopup": "true",
                                    "aria-expanded": openMenu === "technology",
                                    "aria-controls": "mega-menu-technology",
                                    id: "trigger-technology",
                                    onMouseEnter: ()=>handleTriggerMouseEnter("technology"),
                                    onMouseLeave: handleTriggerMouseLeave,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setOpenMenu(openMenu === "technology" ? null : "technology");
                                    },
                                    className: "jsx-67ee4355c2b981fd" + " " + "nav-link nav-trigger",
                                    children: [
                                        "Technology ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "jsx-67ee4355c2b981fd" + " " + "nav-arrow",
                                            children: "▼"
                                        })
                                    ]
                                }),
                                openMenu === "technology" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "mega-menu-technology",
                                    role: "menu",
                                    onMouseEnter: handleMenuMouseEnter,
                                    onMouseLeave: handleMenuMouseLeave,
                                    className: "jsx-67ee4355c2b981fd",
                                    children: renderMegaMenu(megaMenus.technology)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "jsx-67ee4355c2b981fd" + " " + "nav-item has-mega-menu",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    ref: (el)=>{
                                        triggerRefs.current.marketing = el;
                                    },
                                    "aria-haspopup": "true",
                                    "aria-expanded": openMenu === "marketing",
                                    "aria-controls": "mega-menu-marketing",
                                    id: "trigger-marketing",
                                    onMouseEnter: ()=>handleTriggerMouseEnter("marketing"),
                                    onMouseLeave: handleTriggerMouseLeave,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setOpenMenu(openMenu === "marketing" ? null : "marketing");
                                    },
                                    className: "jsx-67ee4355c2b981fd" + " " + "nav-link nav-trigger",
                                    children: [
                                        "Marketing ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "jsx-67ee4355c2b981fd" + " " + "nav-arrow",
                                            children: "▼"
                                        })
                                    ]
                                }),
                                openMenu === "marketing" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "mega-menu-marketing",
                                    role: "menu",
                                    onMouseEnter: handleMenuMouseEnter,
                                    onMouseLeave: handleMenuMouseLeave,
                                    className: "jsx-67ee4355c2b981fd",
                                    children: renderMegaMenu(megaMenus.marketing)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "jsx-67ee4355c2b981fd" + " " + "nav-item has-mega-menu",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    ref: (el)=>{
                                        triggerRefs.current["it-cloud"] = el;
                                    },
                                    "aria-haspopup": "true",
                                    "aria-expanded": openMenu === "it-cloud",
                                    "aria-controls": "mega-menu-it-cloud",
                                    id: "trigger-it-cloud",
                                    onMouseEnter: ()=>handleTriggerMouseEnter("it-cloud"),
                                    onMouseLeave: handleTriggerMouseLeave,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setOpenMenu(openMenu === "it-cloud" ? null : "it-cloud");
                                    },
                                    className: "jsx-67ee4355c2b981fd" + " " + "nav-link nav-trigger",
                                    children: [
                                        "IT & Cloud ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "jsx-67ee4355c2b981fd" + " " + "nav-arrow",
                                            children: "▼"
                                        })
                                    ]
                                }),
                                openMenu === "it-cloud" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "mega-menu-it-cloud",
                                    role: "menu",
                                    onMouseEnter: handleMenuMouseEnter,
                                    onMouseLeave: handleMenuMouseLeave,
                                    className: "jsx-67ee4355c2b981fd",
                                    children: renderMegaMenu(megaMenus["it-cloud"])
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "jsx-67ee4355c2b981fd" + " " + "nav-item has-mega-menu",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    ref: (el)=>{
                                        triggerRefs.current.creative = el;
                                    },
                                    "aria-haspopup": "true",
                                    "aria-expanded": openMenu === "creative",
                                    "aria-controls": "mega-menu-creative",
                                    id: "trigger-creative",
                                    onMouseEnter: ()=>handleTriggerMouseEnter("creative"),
                                    onMouseLeave: handleTriggerMouseLeave,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setOpenMenu(openMenu === "creative" ? null : "creative");
                                    },
                                    className: "jsx-67ee4355c2b981fd" + " " + "nav-link nav-trigger",
                                    children: [
                                        "Creative ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "jsx-67ee4355c2b981fd" + " " + "nav-arrow",
                                            children: "▼"
                                        })
                                    ]
                                }),
                                openMenu === "creative" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "mega-menu-creative",
                                    role: "menu",
                                    onMouseEnter: handleMenuMouseEnter,
                                    onMouseLeave: handleMenuMouseLeave,
                                    className: "jsx-67ee4355c2b981fd",
                                    children: renderMegaMenu(megaMenus.creative)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "jsx-67ee4355c2b981fd" + " " + "nav-item has-mega-menu",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    ref: (el)=>{
                                        triggerRefs.current.company = el;
                                    },
                                    "aria-haspopup": "true",
                                    "aria-expanded": openMenu === "company",
                                    "aria-controls": "mega-menu-company",
                                    id: "trigger-company",
                                    onMouseEnter: ()=>handleTriggerMouseEnter("company"),
                                    onMouseLeave: handleTriggerMouseLeave,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setOpenMenu(openMenu === "company" ? null : "company");
                                    },
                                    className: "jsx-67ee4355c2b981fd" + " " + "nav-link nav-trigger",
                                    children: [
                                        "Company ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "jsx-67ee4355c2b981fd" + " " + "nav-arrow",
                                            children: "▼"
                                        })
                                    ]
                                }),
                                openMenu === "company" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "mega-menu-company",
                                    role: "menu",
                                    onMouseEnter: handleMenuMouseEnter,
                                    onMouseLeave: handleMenuMouseLeave,
                                    className: "jsx-67ee4355c2b981fd",
                                    children: renderMegaMenu(megaMenus.company)
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "jsx-67ee4355c2b981fd" + " " + "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog",
                                className: "nav-link",
                                children: "Blog"
                            })
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "67ee4355c2b981fd",
                children: '.main-navigation.jsx-67ee4355c2b981fd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:0}.navigation.jsx-67ee4355c2b981fd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:0;list-style:none;margin:0;padding:0}.nav-item.jsx-67ee4355c2b981fd{position:relative}.nav-link.jsx-67ee4355c2b981fd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:14px 20px;color:var(--thm-black);font-size:15px;font-weight:500;text-decoration:none;-webkit-transition:color.2s ease;-moz-transition:color.2s ease;-o-transition:color.2s ease;transition:color.2s ease;white-space:nowrap}.nav-link.jsx-67ee4355c2b981fd:hover{color:var(--thm-primary)}.nav-trigger.jsx-67ee4355c2b981fd{background:none;border:none;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:14px 20px;color:var(--thm-black);-webkit-transition:color.2s ease;-moz-transition:color.2s ease;-o-transition:color.2s ease;transition:color.2s ease;white-space:nowrap}.nav-trigger.jsx-67ee4355c2b981fd:hover{color:var(--thm-primary)}.nav-arrow.jsx-67ee4355c2b981fd{font-size:10px;-webkit-transition:-webkit-transform.2s ease;-moz-transition:-moz-transform.2s ease;-o-transition:-o-transform.2s ease;transition:-webkit-transform.2s ease;transition:-moz-transform.2s ease;transition:-o-transform.2s ease;transition:transform.2s ease}.has-mega-menu.jsx-67ee4355c2b981fd:hover .nav-arrow.jsx-67ee4355c2b981fd,.has-mega-menu[aria-expanded="true"].jsx-67ee4355c2b981fd .nav-arrow.jsx-67ee4355c2b981fd{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.mega-menu.jsx-67ee4355c2b981fd{position:absolute;top:100%;left:50%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);width:100%;max-width:1200px;min-width:100%;background:var(--thm-white);border-top:1px solid var(--thm-border-color);-webkit-box-shadow:0 20px 40px rgba(0,0,0,.1);-moz-box-shadow:0 20px 40px rgba(0,0,0,.1);box-shadow:0 20px 40px rgba(0,0,0,.1);z-index:1000;padding:0;-webkit-animation:megaMenuIn.15s ease;-moz-animation:megaMenuIn.15s ease;-o-animation:megaMenuIn.15s ease;animation:megaMenuIn.15s ease}@-webkit-keyframes megaMenuIn{from{opacity:0;-webkit-transform:translatex(-50%)translatey(-8px);transform:translatex(-50%)translatey(-8px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(0);transform:translatex(-50%)translatey(0)}}@-moz-keyframes megaMenuIn{from{opacity:0;-moz-transform:translatex(-50%)translatey(-8px);transform:translatex(-50%)translatey(-8px)}to{opacity:1;-moz-transform:translatex(-50%)translatey(0);transform:translatex(-50%)translatey(0)}}@-o-keyframes megaMenuIn{from{opacity:0;-o-transform:translatex(-50%)translatey(-8px);transform:translatex(-50%)translatey(-8px)}to{opacity:1;-o-transform:translatex(-50%)translatey(0);transform:translatex(-50%)translatey(0)}}@keyframes megaMenuIn{from{opacity:0;-webkit-transform:translatex(-50%)translatey(-8px);-moz-transform:translatex(-50%)translatey(-8px);-o-transform:translatex(-50%)translatey(-8px);transform:translatex(-50%)translatey(-8px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(0);-moz-transform:translatex(-50%)translatey(0);-o-transform:translatex(-50%)translatey(0);transform:translatex(-50%)translatey(0)}}.mega-menu__tabs-panel.jsx-67ee4355c2b981fd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;min-height:420px}.mega-menu__tabs.jsx-67ee4355c2b981fd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:220px;max-width:220px;padding:24px 20px;border-right:1px solid var(--thm-border-color);background:var(--thm-white)}.mega-menu__tab.jsx-67ee4355c2b981fd{display:block;width:100%;text-align:left;padding:12px 16px;margin:0 0 4px;font-size:14px;font-weight:500;color:var(--thm-body-font-color);background:transparent;border:none;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;cursor:pointer;-webkit-transition:all.15s ease;-moz-transition:all.15s ease;-o-transition:all.15s ease;transition:all.15s ease}.mega-menu__tab.jsx-67ee4355c2b981fd:hover,.mega-menu__tab.jsx-67ee4355c2b981fd:focus{color:var(--thm-primary);background:var(--thm-primary-lighter)}.mega-menu__tab.active.jsx-67ee4355c2b981fd{color:var(--thm-primary);background:var(--thm-primary-lighter);font-weight:600}.mega-menu__tab.jsx-67ee4355c2b981fd:focus-visible{outline:2px solid var(--thm-primary);outline-offset:2px}.mega-menu__panels.jsx-67ee4355c2b981fd{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0;padding:24px}.mega-menu__panel.jsx-67ee4355c2b981fd{display:none;-webkit-animation:panelFade.15s ease;-moz-animation:panelFade.15s ease;-o-animation:panelFade.15s ease;animation:panelFade.15s ease}@-webkit-keyframes panelFade{from{opacity:0;-webkit-transform:translatex(10px);transform:translatex(10px)}to{opacity:1;-webkit-transform:translatex(0);transform:translatex(0)}}@-moz-keyframes panelFade{from{opacity:0;-moz-transform:translatex(10px);transform:translatex(10px)}to{opacity:1;-moz-transform:translatex(0);transform:translatex(0)}}@-o-keyframes panelFade{from{opacity:0;-o-transform:translatex(10px);transform:translatex(10px)}to{opacity:1;-o-transform:translatex(0);transform:translatex(0)}}@keyframes panelFade{from{opacity:0;-webkit-transform:translatex(10px);-moz-transform:translatex(10px);-o-transform:translatex(10px);transform:translatex(10px)}to{opacity:1;-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}}.mega-menu__panel.active.jsx-67ee4355c2b981fd{display:block}.mega-menu__panel-heading.jsx-67ee4355c2b981fd{font-size:18px;font-weight:600;color:var(--thm-black);margin:0 0 20px;padding-bottom:12px;border-bottom:1px solid var(--thm-border-color)}.mega-menu__group.jsx-67ee4355c2b981fd{margin:0 0 24px}.mega-menu__group-title.jsx-67ee4355c2b981fd{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--thm-text-muted);margin:0 0 10px}.mega-menu__group-list.jsx-67ee4355c2b981fd{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,1fr);gap:8px 24px}.mega-menu__group-item.jsx-67ee4355c2b981fd{margin:0}.mega-menu__group-link.jsx-67ee4355c2b981fd{display:block;font-size:14px;font-weight:400;color:var(--thm-body-font-color);text-decoration:none;padding:6px 0;-webkit-transition:color.15s ease;-moz-transition:color.15s ease;-o-transition:color.15s ease;transition:color.15s ease}.mega-menu__group-link.jsx-67ee4355c2b981fd:hover{color:var(--thm-primary)}.mega-menu__panel-cta.jsx-67ee4355c2b981fd{margin-top:24px;padding-top:16px;border-top:1px solid var(--thm-border-color)}.mega-menu__panel-cta-link.jsx-67ee4355c2b981fd{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;font-size:14px;font-weight:500;color:var(--thm-primary);text-decoration:none}.mega-menu__panel-cta-link.jsx-67ee4355c2b981fd:hover{text-decoration:underline}.mega-menu__cta.jsx-67ee4355c2b981fd{margin-top:24px;padding:24px;border-top:1px solid var(--thm-border-color)}.mega-menu__cta-content.jsx-67ee4355c2b981fd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:24px;padding:20px 24px;background:var(--thm-primary-lighter);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.mega-menu__cta-text.jsx-67ee4355c2b981fd{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.mega-menu__cta-heading.jsx-67ee4355c2b981fd{font-size:16px;font-weight:600;color:var(--thm-black);margin:0 0 4px}.mega-menu__cta-text.jsx-67ee4355c2b981fd{font-size:13px;color:var(--thm-text-muted);margin:0}.mega-menu__cta-btn.jsx-67ee4355c2b981fd{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;white-space:nowrap}@media(max-width:1200px){.mega-menu.jsx-67ee4355c2b981fd{min-width:100vw;left:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none;max-width:100vw}.mega-menu__tabs-panel.jsx-67ee4355c2b981fd{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mega-menu__tabs.jsx-67ee4355c2b981fd{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;min-width:auto;max-width:none;border-right:none;border-bottom:1px solid var(--thm-border-color);padding:12px 16px}.mega-menu__tab.jsx-67ee4355c2b981fd{margin:0 8px 0 0;padding:8px 12px}.mega-menu__panels.jsx-67ee4355c2b981fd{padding:16px}.mega-menu__group-list.jsx-67ee4355c2b981fd{grid-template-columns:1fr}}@media(max-width:768px){.mega-menu__tabs.jsx-67ee4355c2b981fd{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mega-menu__tab.jsx-67ee4355c2b981fd{margin:0 0 4px}}'
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/layout/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const MobileMenu = ({ isSidebar, handleMobileMenu })=>{
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subMenuKey: ""
    });
    const handleToggle = (key, subMenuKey = "")=>{
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mobile-menu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "close-btn",
                            onClick: handleMobileMenu,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/assets/img/resource/logo-3.svg",
                                    alt: "Orgits Business Solutions Pvt. Ltd.",
                                    width: 180,
                                    height: 50,
                                    loading: "lazy"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-outer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "navigation",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            onClick: handleMobileMenu,
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about/",
                                            onClick: handleMobileMenu,
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 1 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Technology"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 1 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/app-development",
                                                            onClick: handleMobileMenu,
                                                            children: "Custom Software Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/web-development",
                                                            onClick: handleMobileMenu,
                                                            children: "Web Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/web-development",
                                                            onClick: handleMobileMenu,
                                                            children: "Web Application Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/app-development",
                                                            onClick: handleMobileMenu,
                                                            children: "Mobile App Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/app-development",
                                                            onClick: handleMobileMenu,
                                                            children: "API Development & Integration"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/ai-solutions",
                                                            onClick: handleMobileMenu,
                                                            children: "AI Solutions"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/ai-solutions",
                                                            onClick: handleMobileMenu,
                                                            children: "AI Automation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/ai-solutions",
                                                            onClick: handleMobileMenu,
                                                            children: "AI Chatbots"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/zoho-automation",
                                                            onClick: handleMobileMenu,
                                                            children: "Business Process Automation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/zoho-crm-implementation",
                                                            onClick: handleMobileMenu,
                                                            children: "Zoho CRM"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/zoho-crm-implementation",
                                                            onClick: handleMobileMenu,
                                                            children: "Zoho CRM Implementation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/zoho-automation",
                                                            onClick: handleMobileMenu,
                                                            children: "Zoho Automation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/hubspot-implementation",
                                                            onClick: handleMobileMenu,
                                                            children: "HubSpot"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/hubspot-implementation",
                                                            onClick: handleMobileMenu,
                                                            children: "HubSpot Implementation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/corporate-agency",
                                                            onClick: handleMobileMenu,
                                                            children: "Technology Consulting"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/corporate-agency",
                                                            onClick: handleMobileMenu,
                                                            children: "Digital Transformation"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(1),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 2 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Marketing"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 2 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/performance-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Google Ads"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/performance-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Meta Ads"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/performance-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Paid Advertising"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/performance-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Performance Marketing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/seo",
                                                            onClick: handleMobileMenu,
                                                            children: "SEO"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/seo",
                                                            onClick: handleMobileMenu,
                                                            children: "Technical SEO"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/seo",
                                                            onClick: handleMobileMenu,
                                                            children: "SEO Strategy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/digital-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Lead Generation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/digital-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "B2B Marketing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/performance-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Conversion Optimization"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/zoho-automation",
                                                            onClick: handleMobileMenu,
                                                            children: "Marketing Automation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/content-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Content Marketing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/digital-marketing",
                                                            onClick: handleMobileMenu,
                                                            children: "Social Media Marketing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/marketing-strategy",
                                                            onClick: handleMobileMenu,
                                                            children: "Marketing Strategy"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(2),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 3 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "IT & Cloud"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 3 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/cloud-services",
                                                            onClick: handleMobileMenu,
                                                            children: "AWS Cloud Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/cloud-services",
                                                            onClick: handleMobileMenu,
                                                            children: "Cloud Architecture"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/cloud-services",
                                                            onClick: handleMobileMenu,
                                                            children: "Cloud Migration"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "DevOps"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "CI/CD"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "Server Management"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "Monitoring"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "Backup & Disaster Recovery"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/corporate-agency",
                                                            onClick: handleMobileMenu,
                                                            children: "IT Consulting"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "IT Infrastructure"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "Cybersecurity"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "IT Governance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "IT Support"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/it-infrastructure",
                                                            onClick: handleMobileMenu,
                                                            children: "Managed Services"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(3),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 4 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Creative"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 4 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/uiux-design",
                                                            onClick: handleMobileMenu,
                                                            children: "UI/UX Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/website-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Website Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/website-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Landing Page Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/uiux-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Product Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/brand-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Brand Identity"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/brand-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Logo Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/brand-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Brand Guidelines"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/creative-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Graphic Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/marketing-creatives",
                                                            onClick: handleMobileMenu,
                                                            children: "Social Media Creatives"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/marketing-creatives",
                                                            onClick: handleMobileMenu,
                                                            children: "Marketing Creatives"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services/creative-design",
                                                            onClick: handleMobileMenu,
                                                            children: "Presentation Design"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(4),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 5 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Company"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 5 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/about",
                                                            onClick: handleMobileMenu,
                                                            children: "About Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/about",
                                                            onClick: handleMobileMenu,
                                                            children: "Our Approach"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/project",
                                                            onClick: handleMobileMenu,
                                                            children: "Case Studies"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/project",
                                                            onClick: handleMobileMenu,
                                                            children: "Portfolio / Projects"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/testimonial",
                                                            onClick: handleMobileMenu,
                                                            children: "Client Success Stories"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/testimonial",
                                                            onClick: handleMobileMenu,
                                                            children: "Testimonials"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/faq",
                                                            onClick: handleMobileMenu,
                                                            children: "FAQ"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(5),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/blog",
                                            onClick: handleMobileMenu,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
                                            onClick: handleMobileMenu,
                                            children: "Contact Us"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-info",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-phone-call"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "tel:919289687928",
                                        onClick: handleMobileMenu,
                                        children: "+91 928-9687-928"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "social-links",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "clearfix list-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://www.linkedin.com/company/orgits",
                                            "aria-label": "LinkedIn",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            "aria-label": "Twitter",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            "aria-label": "Instagram",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://www.facebook.com/orgits",
                                            "aria-label": "Facebook",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            "aria-label": "YouTube",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu-backdrop",
                onClick: handleMobileMenu
            })
        ]
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/header/Header1.js





function Header1({ scroll, handleMobileMenu }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: `main-header main-header-three ${scroll ? "fixed-header" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main-header-three__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "sticky-header",
                        className: `menu-area ${scroll ? "sticky-menu" : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-header-three__bottom-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-three__bottom-left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo-box-one",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/assets/img/resource/logo-3.svg",
                                                    alt: "Orgits Business Solutions Pvt. Ltd.",
                                                    width: 180,
                                                    height: 50,
                                                    priority: true
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-three__bottom-middle",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "menu-area__inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-nav-toggler alt",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "menu-wrap",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                        className: "menu-nav",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "navbar-wrap main-menu",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-three__bottom-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-btn-box-one",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                className: "thm-btn",
                                                href: "/contact",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "txt",
                                                    children: [
                                                        "Contact Us",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-next"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                    handleMobileMenu: handleMobileMenu
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu2.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MobileMenu2_MobileMenu = ({ isSidebar, handleMobileMenu })=>{
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subMenuKey: ""
    });
    const handleToggle = (key, subMenuKey = "")=>{
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mobile-menu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "close-btn",
                            onClick: handleMobileMenu,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/img/resource/logo-3.svg",
                                    alt: "Orgits Business Solutions Pvt. Ltd."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-outer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "navigation",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 1 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: "Home"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 1 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: "Home One"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "index-2",
                                                            children: "Home Two"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "index-3",
                                                            children: "Home Three"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(1),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about/",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 2 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Services"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 2 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "services",
                                                            children: "Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "app-development",
                                                            children: "App Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "uiux-design",
                                                            children: "Uiux Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "web-development",
                                                            children: "Web Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "digital-marketing",
                                                            children: "Digital Marketing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "corporate-agency",
                                                            children: "Corporate Agency"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(2),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 3 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Pages"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 3 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "testimonial",
                                                            children: "testimonial"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "pricing",
                                                            children: "Pricing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "team",
                                                            children: "Team"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(3),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 4 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Blog"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 4 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "blog",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "blog-details",
                                                            children: "Blog Details"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(4),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-info",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-phone-call"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "tel:919289687928",
                                        children: "+91 928-9687-928"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "social-links",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "clearfix list-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu-backdrop",
                onClick: handleMobileMenu
            })
        ]
    });
};
/* harmony default export */ const MobileMenu2 = (MobileMenu2_MobileMenu);

;// CONCATENATED MODULE: ./components/layout/header/Header2.js




function Header2({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `main-header main-header-two ${scroll ? "fixed-header" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main-header-two__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "sticky-header",
                        className: `menu-area ${scroll ? "sticky-menu" : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-header-two__bottom-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-two__bottom-left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo-box-one",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/img/resource/logo-3.svg",
                                                    alt: "Orgits Business Solutions Pvt. Ltd."
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-two__bottom-middle",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "menu-area__inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-nav-toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "menu-wrap",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                        className: "menu-nav",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "navbar-wrap main-menu",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-header-two__bottom-right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "search-box-one",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "main-menu__search search-toggler",
                                                    onClick: handlePopup,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-search-interface-symbol"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "header-btn-box-two",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    className: "thm-btn",
                                                    href: "contact",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "txt",
                                                            children: "Contact Us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-next"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu2, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu3.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MobileMenu3_MobileMenu = ({ isSidebar, handleMobileMenu })=>{
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subMenuKey: ""
    });
    const handleToggle = (key, subMenuKey = "")=>{
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mobile-menu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "close-btn",
                            onClick: handleMobileMenu,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/img/resource/logo-3.svg",
                                    alt: "Orgits Business Solutions Pvt. Ltd."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-outer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "navigation",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 1 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: "Home"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 1 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: "Home One"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "index-2",
                                                            children: "Home Two"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "index-3",
                                                            children: "Home Three"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(1),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about/",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 2 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Services"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 2 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "services",
                                                            children: "Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "app-development",
                                                            children: "App Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "uiux-design",
                                                            children: "Uiux Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "web-development",
                                                            children: "Web Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "digital-marketing",
                                                            children: "Digital Marketing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "corporate-agency",
                                                            children: "Corporate Agency"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(2),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 3 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Pages"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 3 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "testimonial",
                                                            children: "testimonial"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "pricing",
                                                            children: "Pricing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "team",
                                                            children: "Team"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(3),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: isActive.key == 4 ? "dropdown current" : "dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: "Blog"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                style: {
                                                    display: `${isActive.key == 4 ? "block" : "none"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "blog",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "blog-details",
                                                            children: "Blog Details"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn",
                                                onClick: ()=>handleToggle(4),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-info",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-phone-call"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "tel:919289687928",
                                        children: "+91 928-9687-928"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "social-links",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "clearfix list-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu-backdrop",
                onClick: handleMobileMenu
            })
        ]
    });
};
/* harmony default export */ const MobileMenu3 = (MobileMenu3_MobileMenu);

;// CONCATENATED MODULE: ./components/layout/header/Header3.js




function Header3({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header main-header-one ${scroll ? "fixed-header" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-header-one__top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-header-one__top-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-one__top-left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-contact-info-one",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-phone-call"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "tel:+919289687928",
                                                                    children: "+91 9289687928"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-email"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "mailto:hello@orgits.in",
                                                                    children: "hello@orgits.in"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-one__top-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-social-link-one",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "clearfix",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-linkedin"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-vimeo"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-header-one__bottom",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "sticky-header",
                            className: `menu-area ${scroll ? "sticky-menu" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-header-one__bottom-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header-one__bottom-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "logo-box-one",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/img/resource/logo-3.svg",
                                                        alt: "Orgits Business Solutions Pvt. Ltd."
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header-one__bottom-middle",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "menu-area__inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-nav-toggler",
                                                        onClick: handleMobileMenu,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-bars"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "menu-wrap",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                            className: "menu-nav",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "navbar-wrap main-menu",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-header-one__bottom-right",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "search-box-one",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu__search search-toggler",
                                                        onClick: handlePopup,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-search-interface-symbol"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "header-btn-box-one",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        className: "thm-btn",
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "txt",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu3, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header4.js




function Header4({ scroll, isMobileMenu, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header main-header-three about ${scroll ? "fixed-header" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-header-three__top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-header-three__top-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-three__top-left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "welcome-text-one",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bell"
                                                    }),
                                                    " Technology, AI & Digital Transformation That Moves Your Business Forward"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-three__top-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-contact-info-one",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-phone-call"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "tel:+919289687928",
                                                                    children: "+91 9289687928"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-email"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "mailto:hello@orgits.in",
                                                                    children: "hello@orgits.in"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-header-three__bottom",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "sticky-header",
                            className: `menu-area ${scroll ? "sticky-menu" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-header-three__bottom-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header-three__bottom-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "logo-box-one",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/img/resource/logo-3.svg",
                                                        alt: "Orgits Business Solutions Pvt. Ltd."
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header-three__bottom-middle",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "menu-area__inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-nav-toggler",
                                                        onClick: handleMobileMenu,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-bars"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "menu-wrap",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                            className: "menu-nav",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "navbar-wrap main-menu",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header-three__bottom-right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "header-btn-box-one",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "thm-btn",
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "txt",
                                                        children: [
                                                            "Contact Us",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-next"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js


function Footer1() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "footer-three",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer-main footer-main__three",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-three__shape1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "assets/img/shape/footer-three__shape1.png",
                            alt: "shapes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-three__shape2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "assets/img/shape/footer-three__shape2.png",
                            alt: "shapes"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-main__three-top",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-three__logo-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/img/resource/logo-3.svg",
                                                alt: "Orgits Business Solutions Pvt. Ltd."
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-three__get-quote-form",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "title-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Let's Build Something Together"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Technology, automation, marketing and IT governance solutions for growing businesses."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                method: "post",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            name: "email",
                                                            placeholder: "Email Address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "submit thm-btn",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "txt",
                                                                children: "Start a Conversation"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-main__inner footer-main-two__inner footer-main-three__inner",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": ".1s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "single-footer-widget single-footer-widget-style2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Help & Support"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "single-footer-widget-box single-footer-widget__about single-footer-widget__about--2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Need support with a technology, automation, marketing or IT compliance requirement? Let's talk."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "clearfix",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "icon-pin"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                children: "India / Serving businesses across India and globally"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "icon-mail-inbox-app"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/contact",
                                                                                    children: "hello@orgits.in"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "icon-phone-call"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "tel:+919289687928",
                                                                                    children: "+91 9289687928"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": ".2s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "single-footer-widget  single-footer-widget-style2 ml55",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Quick Links"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "single-footer-widget-box single-footer-widget__links single-footer-widget__links-style2",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "clearfix",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/about",
                                                                            children: "About Us"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/services",
                                                                            children: "Our Services"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/team",
                                                                            children: "Team"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/blog",
                                                                            children: "Insights"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/contact",
                                                                            children: "Contact Us"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "single-footer-widget single-footer-widget-style2 ml50",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Our Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "single-footer-widget-box single-footer-widget__links single-footer-widget__links-style2",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "clearfix",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/app-development",
                                                                            children: "Product Development"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/web-development",
                                                                            children: "Web & Mobile App Development"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/services",
                                                                            children: "CRM & Marketing Automation"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/digital-marketing",
                                                                            children: "Digital Marketing"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/services",
                                                                            children: "IS Audit & IT Compliance"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": ".4s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "single-footer-widget single-footer-widget-style2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Latest Insights"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "single-footer-widget-box single-footer-widget__blog-list single-footer-widget__blog-list-style2",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "clearfix",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "img-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "assets/img/footer/footer-two__img1.jpg",
                                                                                    alt: "CRM Automation"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/blog-details",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fa-solid fa-link"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "title-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/blog-details",
                                                                                        children: "CRM Automation: From Lead Capture to Follow-Up"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "date-box",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                        className: "clearfix",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "icon",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "icon-tag"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "text",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                        children: "CRM & Marketing Automation"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "img-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "assets/img/footer/footer-two__img2.jpg",
                                                                                    alt: "Cloud Infrastructure"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/blog-details",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fa-solid fa-link"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "title-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/blog-details",
                                                                                        children: "Why Businesses Need Secure, Scalable Cloud Infrastructure"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "date-box",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                        className: "clearfix",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "icon",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "icon-tag"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "text",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                        children: "Cloud & IT Consulting"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-bottom footer-bottom-two footer-bottom-three",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-bottom__inner footer-bottom__two-inner footer-bottom__three-inner",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyright-text text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Copyright \xa9 2026 Orgits Business Solutions Pvt. Ltd. ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://orgits.in",
                                                children: " || "
                                            }),
                                            "All Rights Reserved"
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer2.js


function Footer2() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "footer-two",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-two__shape1 rotate-me",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/img/shape/footer-two__shape1.png",
                        alt: "shape"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-two__shape2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/img/shape/footer-two__shape2.png",
                        alt: "shape"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-two__shape3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/img/shape/footer-two__shape3.png",
                        alt: "shape"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-two__shape4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/img/shape/footer-two__shape4.png",
                        alt: "shape"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-two__shape5 float-bob-y",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/img/shape/footer-two__shape5.png",
                        alt: "shape"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-main footer-main__two",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-main__two-top",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-two__logo-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/img/resource/logo-3.svg",
                                                    alt: "Orgits Business Solutions Pvt. Ltd."
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-two__socel-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "clearfix",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://www.facebook.com/orgits",
                                                            "aria-label": "Facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://twitter.com/orgits",
                                                            "aria-label": "Twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://www.instagram.com/orgits",
                                                            "aria-label": "Instagram",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-instagram-symbol"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://www.linkedin.com/company/orgits",
                                                            "aria-label": "LinkedIn",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-linkedin"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-main__inner footer-main-two__inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": ".1s",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "single-footer-widget",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: "Help & Support"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "single-footer-widget-box single-footer-widget__about",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: "Need support with a technology, automation, marketing or IT compliance requirement? Let's talk."
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "clearfix",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "icon",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "icon-pin"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: "India / Serving businesses across India and globally"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "icon",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "icon-mail-inbox-app"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/contact",
                                                                                        children: "hello@orgits.in"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "icon",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "icon-phone-call"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "tel:+919289687928",
                                                                                        children: "+91 9289687928"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": ".2s",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "single-footer-widget ml55",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: "Quick Links"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "single-footer-widget-box single-footer-widget__links",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "clearfix",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/about",
                                                                                children: "About Us"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/services",
                                                                                children: "Our Services"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/team",
                                                                                children: "Team"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/blog",
                                                                                children: "Insights"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/contact",
                                                                                children: "Contact Us"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "single-footer-widget ml50",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: "Our Services"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "single-footer-widget-box single-footer-widget__links",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "clearfix",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/app-development",
                                                                                children: "Product Development"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/web-development",
                                                                                children: "Web & Mobile App Development"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/services",
                                                                                children: "CRM & Marketing Automation"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/digital-marketing",
                                                                                children: "Digital Marketing"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/services",
                                                                                children: "IS Audit & IT Compliance"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": ".4s",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "single-footer-widget",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: "Latest Insights"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "single-footer-widget-box single-footer-widget__blog-list",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "clearfix",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "img-box",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "assets/img/footer/footer-two__img1.jpg",
                                                                                        alt: "CRM Automation"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/blog-details",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "fa-solid fa-link"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "title-box",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            href: "/blog-details",
                                                                                            children: "CRM Automation: From Lead Capture to Follow-Up"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "date-box",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                            className: "clearfix",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                        className: "icon",
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "icon-tag"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                        className: "text",
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                            children: "CRM & Marketing Automation"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "img-box",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "assets/img/footer/footer-two__img2.jpg",
                                                                                        alt: "Cloud Infrastructure"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/blog-details",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "fa-solid fa-link"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "title-box",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            href: "/blog-details",
                                                                                            children: "Why Businesses Need Secure, Scalable Cloud Infrastructure"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "date-box",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                            className: "clearfix",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                        className: "icon",
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "icon-tag"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                        className: "text",
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                            children: "Cloud & IT Consulting"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-bottom footer-bottom-two",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom__inner footer-bottom__two-inner",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "copyright-text text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Copyright \xa9 2026 Orgits Business Solutions Pvt. Ltd.",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "https://orgits.in",
                                                    children: "|| "
                                                }),
                                                "All Rights Reserved"
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer3.js


function Footer3() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "footer-one",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-main",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-one__img1 float-bob-x",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/img/footer/footer-one-1.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-one__img2 float-bob-y",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/img/footer/footer-one-2.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-main__inner text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-one__logo-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/img/resource/logo-3.svg",
                                                alt: "Orgits Business Solutions Pvt. Ltd."
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-one__big-title",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Let's Build Something Together!"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-one__text-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Technology, automation, marketing and IT governance solutions for growing businesses."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-one__socel-link",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "clearfix",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "https://www.facebook.com/orgits",
                                                        "aria-label": "Facebook",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-facebook"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "https://twitter.com/orgits",
                                                        "aria-label": "Twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "https://www.instagram.com/orgits",
                                                        "aria-label": "Instagram",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-instagram-symbol"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "https://www.linkedin.com/company/orgits",
                                                        "aria-label": "LinkedIn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-linkedin"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-middle",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-middle__inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyright-menu",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: "Home"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/about",
                                                        children: "About"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/services",
                                                        children: "Services"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/project",
                                                        children: "Solutions"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog",
                                                        children: "Insights"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-middle__mail-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon-mail-inbox-app"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    children: "hello@orgits.in"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-bottom__inner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copyright-text text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Copyright \xa9 2026 Orgits Business Solutions Pvt. Ltd.",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://orgits.in",
                                            children: "|| "
                                        }),
                                        "All Rights Reserved"
                                    ]
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 













function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = (0,react_.useState)(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const handleMobileMenu = ()=>{
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Popup
    const [isPopup, setPopup] = (0,react_.useState)(false);
    const handlePopup = ()=>setPopup(!isPopup);
    // Sidebar
    const [isSidebar, setSidebar] = (0,react_.useState)(false);
    const handleSidebar = ()=>setSidebar(!isSidebar);
    (0,react_.useEffect)(()=>{
        const WOW = __webpack_require__(72996);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DataBg, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page-wrapper ${wrapperCls ? wrapperCls : ""}`,
                id: "#top",
                children: [
                    !headerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    headerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Header2, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 4 ? /*#__PURE__*/ jsx_runtime_.jsx(Header4, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchPopup, {
                        isPopup: isPopup,
                        handlePopup: handlePopup
                    }),
                    breadcrumbTitle && /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children,
                    !footerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}),
                    footerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}) : null,
                    footerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer2, {}) : null,
                    footerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer3, {}) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {
                scroll: scroll
            })
        ]
    });
}


/***/ }),

/***/ 95764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62109);
/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61676);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52922);
/* harmony import */ var _public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56279);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43986);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88368);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12279);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63625);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34862);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_7__);









const siteUrl = "https://www.orgits.in";
const orgName = "Orgits Business Solutions Pvt. Ltd.";
const orgDescription = "Orgits Business Solutions helps enterprises and startups build, automate and scale through software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.";
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Orgits Business Solutions Pvt. Ltd.",
    url: siteUrl,
    logo: `${siteUrl}/assets/img/resource/logo-3.svg`,
    email: "hello@orgits.in",
    telephone: "+91 9289687928",
    sameAs: [
        "https://www.linkedin.com/company/orgits"
    ],
    address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "India"
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9289687928",
        contactType: "customer service",
        availableLanguage: [
            "English",
            "Hindi"
        ]
    }
};
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: orgName,
    url: siteUrl,
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
    }
};
const metadata = {
    title: {
        default: "Orgits Business Solutions | Technology, AI & Digital Transformation",
        template: "%s | Orgits Business Solutions"
    },
    description: orgDescription,
    keywords: [
        "technology solutions",
        "AI solutions",
        "software development",
        "digital transformation",
        "CRM automation",
        "marketing automation",
        "digital marketing",
        "cloud solutions",
        "IT consulting",
        "IS audit",
        "IT compliance",
        "cybersecurity",
        "RBI compliance"
    ],
    authors: [
        {
            name: "Orgits Business Solutions Pvt. Ltd."
        }
    ],
    creator: "Orgits Business Solutions Pvt. Ltd.",
    publisher: "Orgits Business Solutions Pvt. Ltd.",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteUrl,
        siteName: "Orgits Business Solutions",
        title: "Orgits Business Solutions | Technology, AI & Digital Transformation",
        description: orgDescription,
        images: [
            {
                url: `${siteUrl}/assets/img/og-default.jpg`,
                width: 1200,
                height: 630,
                alt: "Orgits Business Solutions - Technology, AI & Digital Transformation"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        site: "@orgits",
        creator: "@orgits",
        title: "Orgits Business Solutions | Technology, AI & Digital Transformation",
        description: orgDescription,
        images: [
            `${siteUrl}/assets/img/og-default.jpg`
        ]
    },
    alternates: {
        canonical: siteUrl
    },
    verification: {
        google: "google-site-verification-code"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_8___default().variable)} ${(_lib_font__WEBPACK_IMPORTED_MODULE_9___default().variable)}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "dns-prefetch",
                        href: "https://www.google-analytics.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "dns-prefetch",
                        href: "https://www.googletagmanager.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: siteUrl
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "sitemap",
                        href: `${siteUrl}/sitemap.xml`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_7___default()), {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(organizationSchema)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_7___default()), {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(websiteSchema)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_8___default().variable)} ${(_lib_font__WEBPACK_IMPORTED_MODULE_9___default().variable)}`,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 40537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "loader-wrap",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "preloader",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "handle-preloader",
                    className: "handle-preloader",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "animation-preloader",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "spinner"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "txt-loading",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-text-preloader": "d",
                                        className: "letters-loading",
                                        children: "O"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-text-preloader": "i",
                                        className: "letters-loading",
                                        children: "r"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-text-preloader": "l",
                                        className: "letters-loading",
                                        children: "g"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-text-preloader": "i",
                                        className: "letters-loading",
                                        children: "i"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-text-preloader": "g",
                                        className: "letters-loading",
                                        children: "t"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-text-preloader": "e",
                                        className: "letters-loading",
                                        children: "s"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./app/loading.js


function loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Preloader, {})
    });
}


/***/ }),

/***/ 52987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31841);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Error404() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            headerStyle: 1,
            footerStyle: 1,
            breadcrumbTitle: "404 Error",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "error-page",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "error-page__inner",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "error-page__title-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "error-page__title",
                                                children: "404"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "error-page__tagline",
                                            children: "Sorry we can't find that page!"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "error-page__text",
                                            children: "The page you are looking for does not exist."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            className: "error-page__form",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "error-page__form-input",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "search",
                                                        placeholder: "Search here"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-search"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            className: "thm-btn error-page__btn",
                                            children: "Back to home"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "cta-one",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cta-one__inner",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cta-one__bg",
                                    style: {
                                        backgroundImage: "url(assets/images/backgrounds/cta-one-bg.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xl-6 col-lg-6"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xl-6 col-lg-6",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "cta-one__right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "cta-one__title",
                                                        children: "Page Not Found"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "cta-one__text",
                                                        children: "The page you're looking for doesn't exist. Let us help you find what you need."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        className: "thm-btn",
                                                        href: "/contact",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "txt",
                                                                children: "Contact Us"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-next"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 31841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/anubhav/Github/NVIDIA/Orgits/orgits/components/layout/Layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"31x31"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 52922:
/***/ (() => {



/***/ }),

/***/ 61676:
/***/ (() => {



/***/ })

};
;