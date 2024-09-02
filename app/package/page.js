/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar1 from '../components/Navbar1'
import Footer from '../components/Footer'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <Navbar1/>
      <div className="choose-area pt-100 pb-75">
            <div className="container">
                <div className="section-title">
                    <span>الباقات</span>
                    <h2>الجودة العالية بأفضل الأسعار <span className="overlay"></span></h2>
                    <p>يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة متكاملة تعزز نجاح عملك الرقمي.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link href="/package1"><img src="images/choose-1.png" 
alt="image"/></Link>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="/package1">تصميم مواقع</Link>
                                </h3>
                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link href="/package2"><img src="images/choose-2.png" 
alt="image"/></Link>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="/package2">تصميم جرافيك</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link href="/package3"><img src="images/choose-4.png" 
alt="image"/></Link>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="/package3">إدارة صفحات السوشيال ميديا
</Link>
                                </h3>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link href="/package4"><img src="images/choose-3.png" 
alt="image"/></Link>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="/package4">خدمات السيو
                                    </Link>
                                </h3>
                             
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="choose-shape-1">
                <img src="images/choose-shape.png" 
alt="image"/>
            </div>
            <div className="choose-shape-2">
                <img src="images/choose-shape-2.png" 
alt="image"/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page
