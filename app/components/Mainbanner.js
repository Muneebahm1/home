import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer'; 
import banner1 from '@/public/images/banner.png';
import bannerCircle from '@/public/images/banner-circle.png';
import bannerShape1 from '@/public/images/banner-shape-1.png';
import bannerShape2 from '@/public/images/banner-shape-2.png';
import dot1 from '@/public/images/dot-1.png';
import dot2 from '@/public/images/dot-2.png';
import dot3 from '@/public/images/dot-3.png';
import dot4 from '@/public/images/dot-4.png';
import dot5 from '@/public/images/dot-5.png';
const Mainbanner = () => {
  return (
    <div className="main-banner-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="main-banner-content">
              <span data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                {/* نحن شركة رائدة في تقديم الحلول التكنولوجية */}
              </span>
              <h1 data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                أفضل شركة تقنية تتمحور حول البرمجة والتسويق<span className="overlay"></span>
              </h1>
              <p data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                نقوم بتطوير وتنفيذ ودعم حلول البرمجيات الهامة للأعمال.
              </p>

              <div className="banner-btn" data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                <Link className="default-btn" href="#">
                  ابدأ الآن
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="main-banner-image">
              <ExportedImage
                unoptimized={true}
                src={banner1}
                alt="Main Banner"
                width={650} 
                height={750} 
                style={{ marginRight: '20px' }}
                data-aos="fade-down"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              />

              <div className="banner-circle">
                <ExportedImage
                  unoptimized={true}
                  src={bannerCircle}
                  alt="Banner Circle"
                  width={100} 
                  height={100} 
                  style={{ marginRight: '20px' }}
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-shape-1">
        <ExportedImage
          unoptimized={true}
          src={bannerShape1}
          alt="Banner Shape 1"
          width={400} 
          height={400} 
          style={{ marginRight: '20px' }}
        />
      </div>
      <div className="banner-shape-2">
        <ExportedImage
          unoptimized={true}
          src={bannerShape2}
          alt="Banner Shape 2"
          width={100} 
          height={100}
          style={{ marginRight: '20px' }}
        />
      </div>
      <div className="banner-dot-shape-1">
        <ExportedImage
          unoptimized={true}
          src={dot1}
          alt="Dot Shape 1"
          width={20} 
          height={20}
          style={{ marginRight: '20px' }}
        />
      </div>
      <div className="banner-dot-shape-2">
        <ExportedImage
          unoptimized={true}
          src={dot2}
          alt="Dot Shape 2"
          width={30} 
          height={30}
          style={{ marginRight: '20px' }}
        />
      </div>
      <div className="banner-dot-shape-3">
        <ExportedImage
          unoptimized={true}
          src={dot3}
          alt="Dot Shape 3"
          width={30} 
          height={30} 
          style={{ marginRight: '20px' }}
        />
      </div>
      <div className="banner-dot-shape-4">
        <ExportedImage
          unoptimized={true}
          src={dot4}
          alt="Dot Shape 4"
          width={20} 
          height={20} 
          style={{ marginRight: '20px' }}
        />
      </div>
      <div className="banner-dot-shape-5">
        <ExportedImage
          unoptimized={true}
          src={dot5}
          alt="Dot Shape 5"
          width={10} 
          height={10} 
          style={{ marginRight: '20px' }}
        />
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Mainbanner;
