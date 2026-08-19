import Link from "next/link"
export default function Features() {
    return (
        <>
        {/*Start Features One*/}
        <section className="features-one">
            <div className="features-one__shape1">
                <img src="assets/img/shape/features-one__shape1.png" alt="shape"/>
            </div>
            <div className="features-one__shape3">
                <img src="assets/img/shape/features-one__shape3.png" alt="shape"/>
            </div>
            <div className="features-one__shape4 float-bob-y">
                <img src="assets/img/shape/features-one__shape4.png" alt="shape"/>
            </div>
            <div className="features-one__shape5">
                <img src="assets/img/shape/features-one__shape5.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="sec-title-two text-center sec-title-animation animation-style1" style={{marginBottom: '50px'}}>
                    <h2>Technology Stack<br/><span>Built for Modern Business Applications</span></h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6">
                        <div className="features-one__logo">
                            <h4>Backend & Database</h4>
                            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="features-one__logo">
                            <h4>Frontend</h4>
                            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
                                <li>React</li>
                                <li>Angular</li>
                                <li>Next.js</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="features-one__logo">
                            <h4>Mobile</h4>
                            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
                                <li>Android</li>
                                <li>iOS</li>
                                <li>Flutter</li>
                                <li>React Native</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="features-one__logo">
                            <h4>CRM & Automation</h4>
                            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
                                <li>Zoho</li>
                                <li>HubSpot</li>
                                <li>Salesforce</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-12" style={{marginTop: '30px'}}>
                        <div className="features-one__logo">
                            <h4>Cloud</h4>
                            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
                                <li>AWS</li>
                                <li>Google Cloud</li>
                                <li>Microsoft Azure</li>
                                <li>DigitalOcean</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Features One*/}
        </>
    )
}