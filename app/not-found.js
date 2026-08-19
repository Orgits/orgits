import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Script from 'next/script'

export const metadata = {
    title: 'Page Not Found | Orgits Business Solutions',
    description: 'The page you are looking for does not exist. Let us help you find what you need.',
    robots: {
        index: false,
        follow: true,
    },
}

export default function Error404() {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    name: 'Page Not Found',
                    description: 'The page you are looking for does not exist.',
                    url: 'https://www.orgits.in/404',
                }) }}
            />
<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">

            {/* Error Page Start */}
            <section className="error-page" aria-labelledby="error-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__inner" style={{textAlign: 'center', padding: '80px 0'}}>
                                <div className="error-page__title-box">
                                    <h1 id="error-heading" className="error-page__title" style={{fontSize: '12rem', color: 'var(--thm-primary)', lineHeight: 1, marginBottom: '20px'}}>404</h1>
                                </div>
                                <h2 className="error-page__tagline" style={{marginBottom: '20px', color: 'var(--thm-white)'}}>Sorry, we can&apos;t find that page!</h2>
                                <p className="error-page__text" style={{marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px', color: 'var(--thm-text-muted)'}}>The page you are looking for doesn&apos;t exist or has been moved.</p>
                                <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px'}}>
                                    <Link href="/" className="thm-btn error-page__btn">Back to Home</Link>
                                    <Link href="/services" className="thm-btn" style={{backgroundColor: 'transparent', borderColor: 'var(--thm-primary)', color: 'var(--thm-primary)'}}>Our Services</Link>
                                    <Link href="/contact" className="thm-btn" style={{backgroundColor: 'transparent', borderColor: 'var(--thm-primary)', color: 'var(--thm-primary)'}}>Contact Us</Link>
                                </div>
                                <form className="error-page__form" style={{maxWidth: '400px', margin: '0 auto'}}>
                                    <div className="error-page__form-input" style={{display: 'flex', gap: '10px'}}>
                                        <input type="search" placeholder="Search our site..." style={{flex: 1, padding: '12px 20px', borderRadius: '4px', border: '1px solid var(--thm-border-color)', backgroundColor: 'var(--thm-gray-bg)', color: 'var(--thm-white)'}} />
                                        <button type="submit" className="thm-btn" style={{padding: '12px 24px'}}><i className="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Error Page End */}

            <section className="cta-one" style={{backgroundColor: 'var(--thm-gray-bg)', padding: '80px 0'}}>
                <div className="container">
                    <div className="cta-one__inner" style={{textAlign: 'center'}}>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="cta-one__right">
                                    <h2 className="cta-one__title" style={{color: 'var(--thm-white)', marginBottom: '20px'}}>Let&apos;s Get You Back on Track</h2>
                                    <p className="cta-one__text" style={{color: 'var(--thm-text-muted)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>Explore our services or contact our team directly for technology, marketing, and compliance solutions.</p>
                                    <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
                                        <Link className="thm-btn" href="/services">
                                            <span className="txt">View Services</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                        <Link className="thm-btn" href="/contact" style={{backgroundColor: 'transparent', borderColor: 'var(--thm-primary)', color: 'var(--thm-primary)'}}>
                                            <span className="txt">Contact Us</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>

        </>
    )
}