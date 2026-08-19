'use client'
import Link from "next/link"
export default function Partner() {
    return (
    <>

        {/*Start Partner style1*/}
        <section className="partner-style1">
            <div className="container">
                <div className="row">
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="https://zoho.com" target="_blank" rel="noopener noreferrer">
                                <img src="assets/img/brand/brand-v1-1.png" alt="Zoho Authorized Partner"/>
                                <img className="" src="assets/img/brand/brand-v1-1-overlay.png" alt="Zoho"/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="https://razorpay.com" target="_blank" rel="noopener noreferrer">
                                <img src="assets/img/brand/brand-v1-2.png" alt="Razorpay Authorized Partner"/>
                                <img className="" src="assets/img/brand/brand-v1-2-overlay.png" alt="Razorpay"/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v1-3.png" alt="EzyLife"/>
                                <img className="" src="assets/img/brand/brand-v1-3-overlay.png" alt="EzyLife"/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v1-4.png" alt="Ayaan IFMS"/>
                                <img className="" src="assets/img/brand/brand-v1-4-overlay.png" alt="Ayaan IFMS"/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v1-5.png" alt="SG Rawat & Co."/>
                                <img className="" src="assets/img/brand/brand-v1-5-overlay.png" alt="SG Rawat & Co."/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v1-6.png" alt="One Citizen One Plant"/>
                                <img className="" src="assets/img/brand/brand-v1-6-overlay.png" alt="One Citizen One Plant"/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v1-7.png" alt="LDR"/>
                                <img className="" src="assets/img/brand/brand-v1-7-overlay.png" alt="LDR"/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-partner-logo-box">
                            <Link href="#">
                                <img src="assets/img/brand/brand-v1-8.png" alt="Trusted Client"/>
                                <img className="" src="assets/img/brand/brand-v1-8-overlay.png" alt="Trusted Client"/>
                            </Link>
                        </div>
                    </div>
                    {/*End Single Partner Logo Box*/}
                </div>
            </div>
        </section>
        {/*End Partner style1*/}
        </>
    )
}