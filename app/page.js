import Image from "next/image";
// import styles from "@/pu/page.module.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainbanner from "./components/Mainbanner";
import Feature from "./components/Feature";
import About from "./components/About";
// import HeaderSection from "./components/Header";
import Service from './components/Service'
import Choose from "./components/Service";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Talk from "./components/Talk";
import Project from "./components/Project";
import Partner from "./components/Partner";
import Team from "./components/Team";
import Overview from "./components/Overview";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Work from "./components/Work";
export default function Home() {
  return (
    <>
      <Navbar/>
    <Sidebar/>
 
  <Mainbanner/>

      {/* Start Features Area */}
    <Feature/>
      {/* End Features Area */}
      {/* Start About Area */}
      <About/>
      {/* End About Area */}
      {/* Start Services Area */}
      {/* <Service/> */}
      {/* End Services Area */}
      {/* Start Choose Area */}
      <Choose/>
      <Work/>




      
      {/* End Choose Area */}
      {/* Start Video Area */}
      {/* <Video/> */}
      {/* End Video Area */}
      {/* Start Testimonials Area */}
     <Testimonials/>
      {/* End Testimonials Area */}
      {/* Start Talk Area */}
      <Talk/>
      {/* End Talk Area */}
      {/* Start Projects Area */}
    <Project/>     {/* End Projects Area */}
      {/* Start Partner Area */}
    <Partner/>
      {/* End Partner Area */}
      {/* Start Team Area */}
      <Team/>
      {/* End Team Area */}
      {/* Start Overview Area */}
      <Overview/>
      {/* End Overview Area */}
      {/* Start Blog Area */}
      <Blog/>
      {/* End Blog Area */}
      {/* End Footer Area */}
      <Footer/>
      {/* End Footer Area */}
      {/* Start Go Top Area */}
      <div className="go-top">
        <i className="ri-arrow-up-s-line" />
      </div>
      {/* End Go Top Area */}

      {/* <!-- Links of JS files --> */}
        <Script data-cfasync="false" src="js/email-decode.min.js"></Script>
	      <Script src="js/jquery.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/jquery.meanmenu.js"></Script> 
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/jquery.appear.js"></Script>
        <Script src="js/odometer.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/fancybox.min.js"></Script>
        <Script src="js/tweenmax.min.js"></Script>
        <Script src="js/ScrollMagic.min.js"></Script>
        <Script src="js/animation.gsap.min.js"></Script>
        <Script src="js/debug.addIndicators.min.js"></Script>
        <Script src="js/mixitup.min.js"></Script>
        <Script src="js/nice-select.min.js"></Script>
        <Script src="js/tilt.jquery.min.js"></Script>
        <Script src="js/parallax.min.js"></Script>
	      <Script src="js/jquery.ajaxchimp.min.js"></Script>
	      <Script src="js/form-validator.min.js"></Script>
        <Script src="js/contact-form-script.js"></Script>
        <Script src="js/aos.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/main.js"></Script>
    </>
  );
}
