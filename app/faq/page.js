'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Script from 'next/script'

const siteUrl = 'https://www.orgits.in'

const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'Frequently Asked Questions',
    description: 'Find answers to common questions about Orgits Business Solutions services, engagement models, pricing, and project delivery.',
    url: `${siteUrl}/faq`,
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What if the developer leaves?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Even if a developer leaves mid-project, Orgits has leadership support across key domains and access to a wider professional network. We can work to identify and onboard a suitable replacement so project continuity is maintained.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the billing cycle?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For ongoing engagements, invoices are raised at the beginning of each month to keep operations and financial planning predictable.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the minimum contract period?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For staff augmentation engagements, the current minimum contract period is six months.'
            }
        },
        {
            '@type': 'Question',
            name: 'What happens if a developer gets stuck?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Orgits has expertise across multiple domains. When an engineer encounters a difficult issue, the leadership and wider technical team can support the engineer in resolving it.'
            }
        },
        {
            '@type': 'Question',
            name: 'How much does Orgits charge?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pricing depends on the expertise, skills, scope and engagement model required for the project. We recommend discussing the requirement first so the right model can be proposed.'
            }
        }
    ]
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${siteUrl}/faq` },
    ],
}

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([faqPageSchema, breadcrumbSchema]) }}
            />
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="FAQ">
            {/*Search Field Start*/}
            <section className="search-field">
                <div className="container">
                    <div className="search-field__inner">
                        <div className="search-field__img">
                            <img src="assets/images/resources/search-field-img.jpg" alt=""/>
                        </div>
                        <div className="search-field__search-box">
                            <h3 className="search-field__search-title">How can we help you</h3>
                            <form action="#" className="search-field__search-form">
                                <input type="search" placeholder="Search your query*"/>
                                <button type="submit"><i className="icon-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*Search Field End*/}

                {/*FAQ Page Start*/}
                <section className="faq-page">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">general questions</span>
                            </div>
                            <h1 id="faq-heading" className="section-title__title">Frequently Asked Questions</h1>
                        </div>
                        <div className="faq-page__inner">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What if the developer leaves?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Even if a developer leaves mid-project, Orgits has leadership support across key domains and access to a wider professional network. We can work to identify and onboard a suitable replacement so project continuity is maintained.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                    <div className="faq-page__count"></div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>What is the billing cycle?</h4>
                                    </div>
                                    <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                        <div className="inner">
                                            <p>For ongoing engagements, invoices are raised at the beginning of each month to keep operations and financial planning predictable.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                    <div className="faq-page__count"></div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What is the minimum contract period?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>For staff augmentation engagements, the current minimum contract period is six months.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                    <div className="faq-page__count"></div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>What happens if a developer gets stuck?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Orgits has expertise across multiple domains. When an engineer encounters a difficult issue, the leadership and wider technical team can support the engineer in resolving it.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                    <div className="faq-page__count"></div>
                                </div>
                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                    <div className="accrodion-title">
                                        <h4>How much does Orgits charge?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Pricing depends on the expertise, skills, scope and engagement model required for the project. We recommend discussing the requirement first so the right model can be proposed.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                    <div className="faq-page__count"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*FAQ Page End*/}

            </Layout>
        </>
    )
}