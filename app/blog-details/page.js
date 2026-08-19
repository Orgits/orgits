import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog Details">
                {/*Start Blog Details*/}
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-details__content">
                                    <div className="blog-details__img-box1">
                                        <div className="blog-details__img1">
                                            <img src="assets/img/blog/blog-details__img1.jpg" alt="CRM Automation"/>
                                        </div>
                                        <div className="blog-details-img1__content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-tag"></span>
                                                        </div>
                                                        <p>CRM & Marketing Automation</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-time"></span>
                                                        </div>
                                                        <p>8 Min Read</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h2>
                                                    <Link href="#">How CRM Automation Helps Businesses Build a More Efficient Sales Process</Link>
                                                </h2>
                                            </div>
                                            <div className="text-box">
                                                <p>
                                                    Businesses often lose potential opportunities because leads are captured in different places, follow-ups depend on manual work, and customer information is not organized into a consistent process.
                                                </p>
                                            </div>
                                            <div className="list-item">
                                                <ul>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Centralize lead information in one system</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Automate repetitive follow-up tasks</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Connect marketing with sales workflows</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Improve pipeline visibility for management</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-details__img2-box">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="blog-details__img2-single">
                                                    <img src="assets/img/blog/blog-details__img2.jpg" alt="CRM Dashboard"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="blog-details__img2-single">
                                                    <img src="assets/img/blog/blog-details__img3.jpg" alt="Automation Workflow"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details__img2-text">
                                            <h3><Link href="#">Section 1 — Centralize Lead Information</Link></h3>
                                            <p>
                                                CRM systems create a structured place for lead and customer information. Instead of scattered spreadsheets, email threads, and sticky notes, all prospect data lives in one searchable database. This means no more lost contacts, duplicate entries, or confusion about who last spoke to a lead.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-details__text">
                                        <div className="text1">
                                            <div className="quote-box"></div>
                                            <p>"Technology becomes more valuable when it removes operational friction. CRM and marketing automation can help businesses create a more consistent and scalable sales process."</p>
                                        </div>
                                        <div className="text2">
                                            <p>
                                                <strong>Section 2 — Automate Repetitive Work</strong><br/>
                                                Lead assignment, follow-up reminders, email workflows and notifications can all be automated. When a new lead comes in, the system can instantly route it to the right salesperson based on territory, product interest, or workload. Automated email sequences nurture prospects who aren't ready to buy yet, while tasks and reminders keep active deals moving forward.
                                            </p>
                                            <p>
                                                <strong>Section 3 — Connect Marketing With Sales</strong><br/>
                                                Advertising, lead capture, CRM and communication work as one workflow. When a prospect clicks an ad, fills a form, or downloads content, that activity flows directly into the CRM. Sales sees the full context—what campaign brought them in, what pages they viewed, what content they engaged with. This eliminates the "marketing vs sales" disconnect and creates a unified view of the customer journey.
                                            </p>
                                            <p>
                                                <strong>Section 4 — Improve Visibility</strong><br/>
                                                Structured CRM data gives management better visibility into pipeline activity. Dashboards show deal stages, conversion rates, sales cycle length, and forecast accuracy. Leaders can identify bottlenecks, coach reps based on real data, and make informed decisions about resource allocation and strategy.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-details__tag-share">
                                        <div className="tag2">
                                            <div className="text">
                                                <p>Tags:</p>
                                            </div>
                                            <ul className="tag2-list">
                                                <li>
                                                    <Link href="#">CRM</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Marketing Automation</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">RevOps</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Digital Transformation</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Business Automation</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="share-link">
                                            <div className="text">
                                                <p>Share:</p>
                                            </div>
                                            <ul className="share-link-list clearfix">
                                                <li>
                                                    <Link href="www.facebook.com">
                                                        <span className="icon-facebook"></span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="www.twitter.com" className="bg-color1">
                                                        <span className="icon-twitter"></span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="www.linkedin.com" className="bg-color3">
                                                        <span className="icon-linkedin"></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="blog-details__prev-next-option">
                                        <div className="single-box left">
                                            <div className="icon">
                                                <Link href="/blog"><span className="icon-left-arrow"></span></Link>
                                            </div>
                                            <div className="text">
                                                <p>Prev Insight</p>
                                                <h3><Link href="/blog">Orgits Insights</Link></h3>
                                            </div>
                                        </div>
                                        <div className="single-box right">
                                            <div className="text">
                                                <p>Next Insight</p>
                                                <h3><Link href="/blog">Why IT Controls Matter for Growing Businesses</Link></h3>
                                            </div>
                                            <div className="icon">
                                                <Link href="/blog"><span className="icon-right-arrow-angle"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/*Start Sidebar*/}
                            <div className="col-xl-4">
                                <div className="blog-page__sidebar">
                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search here..."/>
                                            <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__latest-blog wow fadeInUp" data-wow-delay=".4s">
                                        <div className="title-box">
                                            <h2>Latest Insights</h2>
                                        </div>

                                        <ul className="sidebar__latest-blog-list">
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img1.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">What Businesses Should Consider Before Building a Web Application</Link></h4>
                                                    <p><span className="icon-tag"></span> Software Development</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img2.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">Why IT Controls Matter for Growing Businesses</Link></h4>
                                                    <p><span className="icon-tag"></span> IS Audit & IT Compliance</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img3.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">Google & Meta Ads: Building a Structured Lead Generation System</Link></h4>
                                                    <p><span className="icon-tag"></span> Digital Marketing</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s">
                                        <div className="title-box">
                                            <h2>Categories</h2>
                                        </div>

                                        <ul className="sidebar__category-list">
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Digital Transformation <span>(3)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Software Development <span>(4)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">CRM & Automation <span>(2)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Digital Marketing <span>(3)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">Cloud & IT <span>(2)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#">IS Audit & Compliance <span>(3)</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__tags wow fadeInUp" data-wow-delay=".5s">
                                        <div className="title-box">
                                            <h2>Popular Tags</h2>
                                        </div>

                                        <ul className="sidebar__tags-list clearfix">
                                            <li> <Link href="#">CRM</Link> </li>
                                            <li> <Link href="#">Marketing Automation</Link> </li>
                                            <li> <Link href="#">RevOps</Link> </li>
                                            <li> <Link href="#">Digital Transformation</Link> </li>
                                            <li> <Link href="#">Business Automation</Link> </li>
                                            <li> <Link href="#">Lead Management</Link> </li>
                                            <li> <Link href="#">Sales Process</Link> </li>
                                            <li> <Link href="#">Workflow Automation</Link> </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}
                                </div>
                            </div>
                            {/*End Sidebar*/}

                        </div>
                    </div>
                </section>
                {/*End Blog Details*/}

            </Layout>
        </>
    )
}