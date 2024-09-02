import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import featuresImg1 from '@/public/images/features-1.png';
import featuresImg2 from '@/public/images/features-2.png';
import featuresImg3 from '@/public/images/features-3.png';

const Feature = () => {
  return (
    <div className="features-area pb-75">
      <div className="container">
        <div className="features-inner-box">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
              <div className="single-features-card" datatilt="">
                <div className="features-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src={featuresImg1}
                      alt="Product Design"
                      width={90} 
                      height={96} 
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="#">تصميم المنتج</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="#">تصميم المنتج</Link>
                  </h3>
                  <Link href="#" className="features-btn">عرض المزيد</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
              <div className="single-features-card" datatilt="">
                <div className="features-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src={featuresImg2}
                      alt="Development"
                      width={90} 
                      height={96} 
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="#">تطوير</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="#">تطوير</Link>
                  </h3>
                  <Link href="#" className="features-btn">عرض المزيد</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
              <div className="single-features-card" datatilt="">
                <div className="features-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src={featuresImg3}
                      alt="Data Analysis"
                      width={90} // Set the appropriate width
                      height={96} // Set the appropriate height
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="#">تحليل البيانات</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="#">تحليل البيانات</Link>
                  </h3>
                  <Link href="#" className="features-btn">عرض المزيد</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;
