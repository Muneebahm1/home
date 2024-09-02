/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Overvire from '../components/Overview1'
import Navbar1 from '../components/Navbar1'
import Custombanner from '../components/Custombanner'


const page = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Navbar1/>
    <Custombanner
        src="/images/Team.jpg"
        line1="تواصل مع فريقنا"
        line2="تواصل معنا لأية استفسارات أو مشاكل. نحن هنا للمساعدة وتقديم المساعدة."
      />
           
    {/* <div className="page-banner-area bg-5 jarallax">
            <div className="container">
                <div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                    <h2>اتصال</h2>

                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div> */}
     
      <Overvire/>
      
        <div className="talk-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="talk-image" datatilt="">
                            <img src="images/talk.png" alt="image"/>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="talk-content margin-zero">
                            <span>دعونا نتحدث</span>
                            <h3>تحدث إلى قسم المبيعات والتسويق لدينا <span className="overlay"></span></h3>

                            <form id="contactFormTwo">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required="" data-error="Please enter your name" placeholder="اسمك"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required="" data-error="Please enter your email" placeholder="عنوان بريدك  الإلكتروني"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="email" className="form-control" required="" data-error="Please enter your subject" placeholder="الموضوع الخاص بك"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="number" name="email" className="form-control" required="" data-error="Please enter your phone" placeholder="هاتفك"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required="" data-error="Please enter your message" placeholder="رسالتك..."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">أرسل رسالة<span></span></button>
                                        <div id="msgSubmitTwo" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container ptb-100">
            <div className="map-location">
                <iframe src="https://maps.google.com/maps?q=%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%20-%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D8%AC%D8%A7%D8%A1%20-%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%20-%2014921&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"></iframe>
            </div>
        </div>
      <Footer/>
    </>
  )
}

export default page
