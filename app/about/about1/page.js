/* eslint-disable @next/next/no-img-element */
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="page-banner-area bg-2 jarallax" >
            <div className="container">
                <div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                    <h2>About Style Two</h2>

                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="about-area border-none pt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image" datatilt="">
                            <img src="images/about.png" alt="image" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <span>WHO WE ARE</span>
                            <h3>We Are <b>All In One</b> IT Solution &amp; Technology Company <span className="overlay"></span></h3>
                            <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                            <p>We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam non umy eirmod tempor invidunt ut labore.</p>
                            <div className="about-btn">
                                <a href="about-style-1.html" className="default-btn">Know More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape-1">
                <img src="images/about-shape.png" alt="image"/>
            </div>
        </div>
     
        <div className="choose-area border-none pt-100 pb-75">
            <div className="container">
                <div className="section-title">
                    <span>WHY CHOOSE US</span>
                    <h2>We Help You To <b>Increase</b> Your Sale Through Solutions <span className="overlay"></span></h2>
                    <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <a href="services-details.html"><img src="images/choose-1.png" alt="image"/></a>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <a href="services-details.html">Mobile Apps</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <a href="services-details.html"><img src="images/choose-2.png" alt="image"/></a>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <a href="services-details.html">Branding Strategy</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <a href="services-details.html"><img src="images/choose-3.png" alt="image"/></a>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <a href="services-details.html">Graphic Design</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <div className="choose-image" datatilt="">
                                <a href="services-details.html"><img src="images/choose-4.png" alt="image"/></a>
                            </div>
                            <div className="choose-content">
                                <h3>
                                    <a href="services-details.html">Search Optimization</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="choose-shape-1">
                <img src="images/choose-shape.png" alt="image"/>
            </div>
            <div className="choose-shape-2">
                <img src="images/choose-shape-2.png" alt="image"/>
            </div>
        </div>
   
        <div className="video-area-box">
            <div className="container">
                <div className="video-view-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                    <div className="video-image">
                        <img src="images/video.jpg" alt="image"/>
                    </div>

                    <a href="https://www.youtube.com/watch?v=ODfy2YIKS1M" className="video-btn popup-youtube">
                        <i className="ri-play-mini-fill"></i>
                    </a>
                </div>
            </div>
        </div>
  
        <div className="skill-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="skill-content">
                            <span>SKILLSET</span>
                            <h3>We Have A Set Of Skill With High Quality <span className="overlay"></span></h3>
                        </div>

                        <div className="skill-bar" data-percentage="92%" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                            <p className="progress-title-holder">
                                <span className="progress-title">Software Development</span>
                                <span className="progress-number-wrapper">
                                    <span className="progress-number-mark">
                                        <span className="percent"></span>
                                        <span className="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div className="progress-content-outter">
                                <div className="progress-content"></div>
                            </div>
                        </div>

                        <div className="skill-bar" data-percentage="80%" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                            <p className="progress-title-holder">
                                <span className="progress-title">App Development</span>
                                <span className="progress-number-wrapper">
                                    <span className="progress-number-mark">
                                        <span className="percent"></span>
                                        <span className="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div className="progress-content-outter bg-D5158F">
                                <div className="progress-content bg-D5158F"></div>
                            </div>
                        </div>

                        <div className="skill-bar" data-percentage="70%" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <p className="progress-title-holder">
                                <span className="progress-title">Artificial Intelligence</span>
                                <span className="progress-number-wrapper">
                                    <span className="progress-number-mark">
                                        <span className="percent"></span>
                                        <span className="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div className="progress-content-outter bg-FEB302">
                                <div className="progress-content bg-FEB302"></div>
                            </div>
                        </div>

                        <div className="skill-bar" data-percentage="45%" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <p className="progress-title-holder">
                                <span className="progress-title">Cyber Security</span>
                                <span className="progress-number-wrapper">
                                    <span className="progress-number-mark">
                                        <span className="percent"></span>
                                        <span className="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div className="progress-content-outter bg-A66BFF">
                                <div className="progress-content bg-A66BFF"></div>
                            </div>
                        </div>

                        <div className="skill-bar-btn" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                            <a href="#" className="default-btn">Explore More</a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="skill-image" data-aos="fade-left" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <img src="images/skill-1.png" alt="image" datatilt=""/>

                            <div className="skill-shape-1">
                                <img src="images/skill-shape-1.png" alt="image"/>
                            </div>
                            <div className="skill-shape-2">
                                <img src="images/skill-shape-2.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-bg-shape">
                <img src="images/skill-bg-shape.png" alt="image"/>
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
                                <a href="pricing.html" className="default-btn">Choose Plan</a>
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
                                <a href="pricing.html" className="default-btn">Choose Plan</a>
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
                                <a href="pricing.html" className="default-btn">Choose Plan</a>
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

        <div className="testimonials-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="testimonials-section-content" data-aos="fade-right" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <span>TESTIMONIALS</span>
                            <h3>Some <b>Sweet Talk</b> Of Our Happy Clients <span className="overlay"></span></h3>
                            <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                            <p>We are leading technology solutions providing company all over the world doing over 40 years. lorem ipsum dolor sit amet consetetur.</p>
                            
                            <div className="testimonials-btn">
                                <a href="about-style-1.html" className="default-btn">Know More About Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="testimonials-item" data-aos="fade-left" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <div className="item-box" datatilt="">
                                <img src="images/testimonials-1.jpg" className="rounded-circle" alt="image"/>
                                <p>Lorem ipsum dolor sit amet consetetur sadips cin go elitr sed diam nonumy eirmod.</p>
                                <h4>Herry Hopper, <span>Solit Team</span></h4>
                            </div>

                            <div className="item-box" datatilt="">
                                <img src="images/testimonials-2.jpg" className="rounded-circle" alt="image"/>
                                <p>Lorem ipsum dolor sit amet consetetur sadips cin go elitr sed diam nonumy eirmod.</p>
                                <h4>Daniel John, <span>Spix Team</span></h4>
                            </div>

                            <div className="item-box" datatilt="">
                                <img src="images/testimonials-3.jpg" className="rounded-circle" alt="image"/>
                                <p>Lorem ipsum dolor sit amet consetetur sadips cin go elitr sed diam nonumy eirmod.</p>
                                <h4>Zinnia, <span>Coze Team</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonialsbg-shape">
                <img src="images/testimonials-shape.png" alt="image"/>
            </div>
   
        <div className="talk-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="talk-image" datatilt="">
                            <img src="images/talk-2.png" alt="image"/>

                            <div className="talk-circle">
                                <img src="images/talk-circle.png" alt="image"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="talk-content margin-zero">
                            <span>LET'S TALK</span>
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
    </div>
    </div>
  )
}

export default page
