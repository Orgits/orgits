import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Error404() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
            
                {/* Error Page Start */}
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner">
                                    <div className="error-page__title-box">
                                        <h2 className="error-page__title">404</h2>
                                    </div>
                                    <h3 className="error-page__tagline">Sorry we can't find that page!</h3>
                                    <p className="error-page__text">The page you are looking for does not exist.</p>
                                    <form className="error-page__form">
                                        <div className="error-page__form-input">
                                            <input type="search" placeholder="Search here" />
                                            <button type="submit"><i className="icon-search"></i></button>
                                        </div>
                                    </form>
                                    <Link href="/" className="thm-btn error-page__btn">Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Error Page End */}

                <section className="cta-one">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__bg"  style={{ backgroundImage: 'url(assets/images/backgrounds/cta-one-bg.jpg)' }} >
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6"></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="cta-one__right">
                                        <h3 className="cta-one__title">Page Not Found</h3>
                                        <p className="cta-one__text">The page you're looking for doesn't exist. Let us help you find what you need.</p>
                                        <Link className="thm-btn" href="/contact">
                                            <span className="txt">Contact Us</span>
                                            <i className="icon-next"></i>
                                        </Link>
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