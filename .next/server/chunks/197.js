exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 1057:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9471, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 5875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9435))

/***/ }),

/***/ 3709:
/***/ (() => {



/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 9435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
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
var next_link = __webpack_require__(1440);
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

;// CONCATENATED MODULE: ./components/layout/Menu.js


// import { useRouter } from "next/router"
function Menu() {
    // const router = useRouter()
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "navigation",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "menu-item-has-children current",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Home "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sub-menu",
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
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "about",
                        children: "About"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "menu-item-has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: "Services"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sub-menu",
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
                                        children: "UI/UX Design"
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
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "menu-item-has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: "Pages"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sub-menu",
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
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "menu-item-has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: "Blog"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sub-menu",
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
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "contact",
                        children: "Contact"
                    })
                })
            ]
        })
    });
}

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
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/header/Header1.js




function Header1({ scroll, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header main-header-three ${scroll ? "fixed-header" : ""}`,
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
                                                    href: "contact",
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
                                                                                    href: "mailto:hello@orgits.in",
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
                                                                className: "icon-instagram-symbol"
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
                                                                                        href: "mailto:hello@orgits.in",
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
                                                            className: "icon-instagram-symbol"
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
                                                    href: "mailto:hello@orgits.in",
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
        const WOW = __webpack_require__(2996);
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

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2109);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1676);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2922);
/* harmony import */ var public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6279);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3986);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8368);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5933);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_7__);





// import "swiper/css/navigation"



const metadata = {
    title: "Orgits Business Solutions Pvt. Ltd. | Technology, AI, Marketing & IT Compliance",
    description: "Orgits Business Solutions helps enterprises and startups with software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_7___default().variable)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
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

/***/ 2987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1841);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5124);
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

/***/ 1841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/anubhav/Github/NVIDIA/Orgits/orgits/components/layout/Layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
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

/***/ 2922:
/***/ (() => {



/***/ }),

/***/ 1676:
/***/ (() => {



/***/ })

};
;