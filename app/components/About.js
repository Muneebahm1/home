import React from 'react';
import ExportedImage from 'next-image-export-optimizer';
import aboutImg from '@/public/images/about-3.jpg';
import aboutCircleImg from '@/public/images/about-circle.png';
import Link from 'next/link';

const About = () => {
  return (
    <div className="about-area pb-75">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-wrap-image" datatilt="">
              <ExportedImage src={aboutImg} alt="About Image" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-wrap-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
              <div className="about-bg-text">معلومات عنا</div>
              <span>من نحن؟</span>
              <h3>شريكك الموثوق به لجميع حلول تكنولوجيا المعلومات<span className="overlay"></span></h3>
              <p>نحن شركة رائدة في تقديم الحلول التقنية في جميع أنحاء العالم منذ أكثر من 40 عامًا. Lorem ipsum dolor sit amet consetetur sadipscing elitre sed diam non umy eirmod tempor invidunt ut labore.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-circle-shape">
        <ExportedImage src={aboutCircleImg} alt="About Circle Image" />
      </div>
    </div>
  )
}

export default About;
