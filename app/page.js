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

      {/* End Go Top Area */}

      {/* <!-- Links of JS files --> */}

    </>
  );
}
