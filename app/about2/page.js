/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Navbar1 from '../components/Navbar1'
import Custombanner from '../components/Custombanner'
const page = () => {
  return (
<>

{/* <Navbar/> */}
{/* <div className="page-banner-area bg-3 jarallax" >
            <div className="container">
                <div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                    <h2>About Style Three</h2>

                    <ul>
                        <li>
                            <Link href="index.html">Home</Link>
                        </li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </div> */}
<Navbar1/>
<Custombanner
        src="/images/service.jpg"
        line1="عملاؤنا وشركاء نجاحنا"
        line2="الصعود إلى أبعد الحدود من أجل نجاح أعمالنا مع عملاؤنا"
      />

        <div className="about-area border-none pt-100 pb-75">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-wrap-image" datatilt="">
                            <img src="images/about-3.jpg" alt="image" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-wrap-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <div className="about-bg-text">ABOUT US</div>
                            <span>WHO WE ARE</span>
                            <h3>Your Trusted Partner For All IT Solutions <span className="overlay"></span></h3>
                            <p>We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitre sed diam non umy eirmod tempor invidunt ut labore.</p>
                        </div>
                    </div>
                </div>

                <div className="about-inner-box">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                                <h3>Our Vision</h3>
                                <p>Lorem ipsum dolor sit amet consetetur sadip scing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyamei erat sed diam voluptua at vero eos et accusam et justo duo.</p>
                                
                                <div className="about-btn">
                                    <Link href="#" className="default-btn">Know More About Us</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-about-card" data-aos="fade-down" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                                <h3>Our Mission</h3>
                                <p>Lorem ipsum dolor sit amet consetetur sadip scing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyamei erat sed diam voluptua at vero eos et accusam et justo duo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-about-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                                <div className="card-image" datatilt="">
                                    <img src="images/about-4.jpg" alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-circle-shape">
                <img src="images/about-circle.png" alt="image"/>
            </div>
        </div>
   
        <div className="choose-area border-none pb-75">
            <div className="container">
                <div className="section-title section-style-two">
                    <div className="section-bg-text">PROCESS</div>
                    <span>WORK PROCESS</span>
                    <h2>We Follow Four Simple Steps <span className="overlay"></span></h2>
                    <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link  href="#"><img src="images/choose-1.png" alt="image"/></Link>

                                <div className="number">1</div>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="#">Discussion</Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link  href="#"><img src="images/choose-2.png" alt="image"/></Link>

                                <div className="number">2</div>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="#">Testing &amp; Trying</Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link  href="#"><img src="images/choose-3.png" alt="image"/></Link>

                                <div className="number">3</div>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="#">Ideas &amp; Concept</Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <Link  href="#"><img src="images/choose-4.png" alt="image"/></Link>

                                <div className="number">4</div>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <Link href="#">Execute &amp; Install</Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="video-area-box">
            <div className="container">
                <div className="video-view-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                    <div className="video-image">
                        <img src="images/video.jpg" alt="image"/>
                    </div>

                    <Link href="https://www.youtube.com/watch?v=ODfy2YIKS1M" className="video-btn popup-youtube">
                        <i className="ri-play-mini-fill"></i>
                    </Link>
                </div>
            </div>
        </div>

        <div className="testimonials-area ptb-100">
            <div className="container-fluid">
                <div className="section-title section-style-two">
                    <div className="section-bg-text">FEEDBACK</div>
                    <span>TESTIMONIALS</span>
                    <h2>Our Client&#39;s Feedback <span className="overlay"></span></h2>
                </div>
                
                <div className="testimonials-slides owl-carousel owl-theme">
                    <div className="single-testimonials-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                        <p>We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.</p>

                        <div className="info-item-box">
                            <img src="images/testimonials-4.jpg" className="rounded-circle" alt="image"/>
                            <h4>Bradly Doe, <span>Founder of Medizo</span></h4>
                            <ul className="rating-list">
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-line"></i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="single-testimonials-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <p>The professionalism, collaboration and the design they come up with is pheno-menal. Thanks a lot the Coze Team.</p>

                        <div className="info-item-box">
                            <img src="images/testimonials-5.jpg" className="rounded-circle" alt="image"/>
                            <h4>Daniel John, <span>Solit Team</span></h4>
                            <ul className="rating-list">
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-line"></i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="single-testimonials-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                        <p>We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.</p>

                        <div className="info-item-box">
                            <img src="images/testimonials-6.jpg" className="rounded-circle" alt="image"/>
                            <h4>Jennifer Smith, <span>Spix Team</span></h4>
                            <ul className="rating-list">
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-line"></i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="single-testimonials-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                        <p>The professionalism, collaboration and the design they come up with is pheno-menal. Thanks a lot the Coze Team.</p>

                        <div className="info-item-box">
                            <img src="images/testimonials-7.jpg" className="rounded-circle" alt="image"/>
                            <h4>Sarp Karahan, <span>Benzo Team</span></h4>
                            <ul className="rating-list">
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-line"></i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="single-testimonials-card" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                        <p>We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.</p>

                        <div className="info-item-box">
                            <img src="images/testimonials-8.jpg" className="rounded-circle" alt="image"/>
                            <h4>Jane Ronan, <span>Lebu Team</span></h4>
                            <ul className="rating-list">
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-line"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div className="pricing-area with-black-background margin-zero pt-100 pb-75">
            <div className="container">
                <div className="section-title">
                    <span>PRICING</span>
                    <h2>Our <b>Pricing</b> For All Type Of Technology Services <span className="overlay"></span></h2>
                    <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <h3>Startup</h3>
                            <div className="price">$19 <span>/ month</span></div>
                            <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy eirmod.</p>

                            <ul className="pricing-list">
                                <li><i className="ri-check-fill"></i> Lorem ipsum dolor.</li>
                                <li><i className="ri-check-fill"></i> Sit amet consetetur set a ledip.</li>
                            </ul>
                            <div className="pricing-btn">
                                <Link href="#" className="default-btn">Choose Plan</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <h3>Basic</h3>
                            <div className="price">$49 <span>/ month</span></div>
                            <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy eirmod.</p>

                            <ul className="pricing-list">
                                <li><i className="ri-check-fill"></i> Lorem ipsum dolor.</li>
                                <li><i className="ri-check-fill"></i> Sit amet consetetur set a ledip.</li>
                                <li><i className="ri-check-fill"></i> Lorems Sit ledip ipsum dolor.</li>
                            </ul>
                            <div className="pricing-btn">
                                <Link href="#" className="default-btn">Choose Plan</Link>
                            </div>
                            <div className="most-popular">
                                <span>Most Popular</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                            <h3>Advanced</h3>
                            <div className="price">$79 <span>/ month</span></div>
                            <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy eirmod.</p>

                            <ul className="pricing-list">
                                <li><i className="ri-check-fill"></i> Lorem ipsum dolor.</li>
                                <li><i className="ri-check-fill"></i> Sit amet consetetur set a ledip.</li>
                                <li><i className="ri-check-fill"></i> Lorems Sit ledip ipsum dolor.</li>
                                <li><i className="ri-check-fill"></i> Lorem ipsum dolor.</li>
                            </ul>
                            <div className="pricing-btn">
                                <Link href="#" className="default-btn">Choose Plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing-bg-shape-1">
                <img src="images/pricing-bg-shape.png" alt="image"/>
            </div>
            <div className="pricing-shape-1">
                <img src="images/pricing-shape-1.png" alt="image"/>
            </div>
            <div className="pricing-shape-2">
                <img src="images/pricing-shape-2.png" alt="image"/>
            </div>
        </div>

        <div className="team-area pt-100 pb-75">
            <div className="container">
                <div className="section-title section-style-two">
                    <div className="section-bg-text">TEAM</div>
                    <span>TEAM MEMBER</span>
                    <h2>Our Expert IT Consultants <span className="overlay"></span></h2>
                    <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-team-card">
                            <div className="team-image" datatilt="">
                                <img src="images/team-1.png" alt="image"/>

                                <ul className="team-social">
                                    <li>
                                        <Link href="https://www.facebook.com/EnvyTheme" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://twitter.com/?lang=en" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3>Johny Smith</h3>
                                <span>President &amp; CEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-team-card">
                            <div className="team-image" datatilt="">
                                <img src="images/team-2.png" alt="image"/>

                                <ul className="team-social">
                                    <li>
                                        <Link href="https://www.facebook.com/EnvyTheme" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://twitter.com/?lang=en" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3>Jennifer Walter</h3>
                                <span>Product Manager</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-team-card">
                            <div className="team-image" datatilt="">
                                <img src="images/team-3.png" alt="image"/>

                                <ul className="team-social">
                                    <li>
                                        <Link href="https://www.facebook.com/EnvyTheme" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://twitter.com/?lang=en" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3>Jems Rodrigez</h3>
                                <span>UI UX Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-team-card">
                            <div className="team-image" datatilt="">
                                <img src="images/team-4.png" alt="image"/>

                                <ul className="team-social">
                                    <li>
                                        <Link href="https://www.facebook.com/EnvyTheme" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://twitter.com/?lang=en" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3>Deren Bravoo</h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <div className="talk-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="talk-image" datatilt="">
                            <img src="images/talk.png" alt="image"/>

                            <div className="talk-circle">
                                <img src="images/talk-circle.png" alt="image"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="talk-content">
                            <div className="talk-bg-text">LET&#39;S TALK</div>
                            <span>LET&#39;S TALK</span>
                            <h3>We Would Like To Hear From You Any Question <span className="overlay"></span></h3>
                            <p>Lorem ipsum dolor sit amet consetetur sadipscing elitre sed diam non umy eirmod tempor invidunt ut labore.</p>

                            <form id="contactFormTwo">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required="" data-error="Please enter your name" placeholder="Your name"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required="" data-error="Please enter your email" placeholder="Your email address"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required="" data-error="Please enter your message" placeholder="Write your message..."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">Send Message<span></span></button>
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
<Footer/>
</>
  )
}

export default page
