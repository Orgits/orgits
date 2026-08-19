import Link from "next/link"
import Image from 'next/image'

export default function Partner() {
    return (
        <>
        {/*Start Partner style3*/}
        <section className="partner-style3">
            <div className="container">
                <ul className="row clearfix list-one">
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="https://zoho.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/assets/img/brand/brand-v3-1.png"
                                    alt="Zoho Authorized Partner"
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-9.png"
                                    alt="Zoho"
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="https://razorpay.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/assets/img/brand/brand-v3-2.png"
                                    alt="Razorpay Authorized Partner"
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-10.png"
                                    alt="Razorpay"
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <Image
                                    src="/assets/img/brand/brand-v3-3.png"
                                    alt="EzyLife"
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-11.png"
                                    alt="EzyLife"
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <Image
                                    src="/assets/img/brand/brand-v3-4.png"
                                    alt="Ayaan IFMS"
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-12.png"
                                    alt="Ayaan IFMS"
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                </ul>

                <ul className="row">
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <Image
                                    src="/assets/img/brand/brand-v3-5.png"
                                    alt="SG Rawat & Co."
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-13.png"
                                    alt="SG Rawat & Co."
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <Image
                                    src="/assets/img/brand/brand-v3-6.png"
                                    alt="One Citizen One Plant"
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-14.png"
                                    alt="One Citizen One Plant"
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <Image
                                    src="/assets/img/brand/brand-v3-7.png"
                                    alt="LDR"
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-15.png"
                                    alt="LDR"
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                    {/*Start Single Partner Logo Box*/}
                    <li className="col-xl-3 col-lg-3">
                        <div className="single-partner-style3-logo-box">
                            <Link href="#">
                                <Image
                                    src="/assets/img/brand/brand-v3-8.png"
                                    alt="Trusted Client"
                                    width={322}
                                    height={122}
                                    loading="lazy"
                                />
                                <Image
                                    src="/assets/img/brand/brand-v3-16.png"
                                    alt="Trusted Client"
                                    width={300}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </li>
                    {/*End Single Partner Logo Box*/}
                </ul>
            </div>
        </section>
        {/*End Partner style3*/}
        </>
    )
}