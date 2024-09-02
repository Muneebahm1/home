/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Navbar1 from '../components/Navbar1'
import Custombanner from '../components/Custombanner'
const page = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Navbar1/>
        
        <Custombanner
        src="/images/aboutmain.jpg"
        line1="تسريع التكنولوجيا بثقة"
        line2="تمكين المستقبل: إطلاق العنان لإمكانات التكنولوجيا بثقة"
      />
        {/* <div className="page-banner-area jarallax" >
            <div className="container">
                <div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                    <h2>About Style One</h2>

                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </div> */}
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image" datatilt="">
                            <img src="images/about-2.png" alt="image" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <span>WHO WE ARE</span>
                            <h3>We Are All In One IT Solution &amp; Technology Company <span className="overlay"></span></h3>
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
    
        <div className="partner-area ptb-100">
            <div className="container">
                <div className="partner-slides owl-carousel owl-theme">
                    <div className="partner-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <a href="#">
                            <img src="images/partner-1.png" alt="partner"/>
                            <img src="images/partner-hover-1.png" alt="partner"/>
                        </a>
                    </div>
                    <div className="partner-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <a href="#">
                            <img src="images/partner-2.png" alt="partner"/>
                            <img src="images/partner-hover-2.png" alt="partner"/>
                        </a>
                    </div>
                    <div className="partner-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <a href="#">
                            <img src="images/partner-3.png" alt="partner"/>
                            <img src="images/partner-hover-3.png" alt="partner"/>
                        </a>
                    </div>
                    <div className="partner-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <a href="#">
                            <img src="images/partner-4.png" alt="partner"/>
                            <img src="images/partner-hover-4.png" alt="partner"/>
                        </a>
                    </div>
                    <div className="partner-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <a href="#">
                            <img src="images/partner-5.png" alt="partner"/>
                            <img src="images/partner-hover-5.png" alt="partner"/>
                        </a>
                    </div>
                    <div className="partner-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <a href="#">
                            <img src="images/partner-6.png" alt="partner"/>
                            <img src="images/partner-hover-6.png" alt="partner"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="about-area pt-100 pb-75">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-wrap-image" data-tilt="">
                            <img src="images/about-5.jpg" alt="image" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-wrap-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <span>OUR GOAL</span>
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
                                    <a href="about-style-1.html" className="default-btn">Know More About Us</a>
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
                                <div className="card-image" data-tilt="">
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
 
        <div className="choose-area bg-with-F5F5F5-color pt-100 pb-75">
            <div className="container">
                <div className="section-title">
                    <span>WHY CHOOSE US</span>
                    <h2>We Help You To <b>Increase</b> Your Sale Through Solutions <span className="overlay"></span></h2>
                    <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                            <div className="choose-image" data-tilt="">
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

                    <div className="col-lg-3 col-md-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                            <div className="choose-image" data-tilt="">
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

                    <div className="col-lg-3 col-md-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <div className="choose-image" data-tilt="">
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

                    <div className="col-lg-3 col-md-6">
                        <div className="single-choose-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <div className="choose-image" data-tilt="">
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
                            <img src="images/skill-1.png" alt="image" data-tilt=""/>

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

        <div className="talk-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="talk-image" data-tilt="">
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
    
        <div className="blog-area pt-100 pb-75">
            <div className="container">
                <div className="section-title">
                    <span>ARTICLE</span>
                    <h2>Read Our Blog To Get All Recent Tech <b>News</b> <span className="overlay"></span></h2>
                </div>

                <div className="blog-slides owl-carousel owl-theme">
                    <div className="blog-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="blog-image">
                                    <a href="single-blog-1.html"><img src="images/blog-1.jpg" alt="image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog-content">
                                    <div className="date">9th July, 2024</div>
                                    <h3>
                                        <a href="single-blog-1.html">How Technology Dominate In The new World In 2024</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <a href="single-blog-1.html" className="blog-btn">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="blog-card" data-aos="fade-up" data-aos-delay="890" data-aos-duration="900" data-aos-once="true">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="blog-image">
                                    <a href="single-blog-1.html"><img src="images/blog-2.jpg" alt="image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog-content">
                                    <div className="date">7th July, 2024</div>
                                    <h3>
                                        <a href="single-blog-1.html">Top 10 Most Famous Technology Trend In 2024</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <a href="single-blog-1.html" className="blog-btn">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="blog-image">
                                    <a href="single-blog-1.html"><img src="images/blog-1.jpg" alt="image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog-content">
                                    <div className="date">9th July, 2024</div>
                                    <h3>
                                        <a href="single-blog-1.html">How Technology Dominate In The new World In 2024</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <a href="single-blog-1.html" className="blog-btn">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="blog-card" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="blog-image">
                                    <a href="single-blog-1.html"><img src="images/blog-2.jpg" alt="image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog-content">
                                    <div className="date">7th July, 2024</div>
                                    <h3>
                                        <a href="single-blog-1.html">Top 10 Most Famous Technology Trend In 2024</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <a href="single-blog-1.html" className="blog-btn">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-shape-1">
                <img src="images/blog-shape-1.png" alt="image"/>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default page
