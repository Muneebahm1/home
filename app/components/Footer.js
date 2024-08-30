import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '@/public/images/logo.png';
import footerShape1 from '@/public/images/footer-shape-1.png';
import footerShape2 from '@/public/images/footer-shape-2.png';
import footerShape3 from '@/public/images/footer-shape-3.png';

const Footer = () => {
  return (
    <footer className="footer-area with-black-background margin-zero pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
              <div className="widget-logo">
                <Link href="/">
                  <Image src={footerLogo} alt="Coze Logo" />
                </Link>
              </div>
              <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy.</p>

              <ul className="widget-social">
                <li>
                  <a href="https://www.facebook.com/EnvyTheme" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-youtube-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://vimeo.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-vimeo-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget ps-5" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
              <h3>روابط</h3>
              <ul className="quick-links">
                <li><Link href="#">معلومات عنا</Link></li>
                <li><Link href="#">خدمات</Link></li>
                <li><Link href="#">أخبار</Link></li>
                <li><Link href="#">التسعير</Link></li>
                <li><Link href="/projects">المشاريع</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget ps-5" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
              <h3>الصفحات</h3>
              <ul className="quick-links">
                <li><Link href="#">اتصل بنا</Link></li>
                <li><Link href="#">دليل الشراء</Link></li>
                <li><Link href="#">الأسئلة الشائعة</Link></li>
                <li><Link href="#">شروط الخدمة</Link></li>
                <li><Link href="#">سياسة الخصوصية</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
              <h3>اشترك في النشرة الإخبارية</h3>
              <form className="newsletter-form" data-bs-toggle="validator">
                <input type="email" className="input-newsletter" placeholder="أدخل بريدك الإلكتروني" name="EMAIL" required autoComplete="off" />
                <button type="submit" className="default-btn">يشترك</button>
                <div id="validator-newsletter" className="form-result"></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>
              {/* Copyright <strong>Coze</strong>  */}
              © ٢٠٢٤ سيلسلا للتكنولوجيا. <a href="#" target="_blank" rel="noopener noreferrer"></a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-shape-1">
        <Image src={footerShape1} alt="Footer Shape 1" />
      </div>
      <div className="footer-shape-2">
        <Image src={footerShape2} alt="Footer Shape 2" />
      </div>
      <div className="footer-shape-3">
        <Image src={footerShape3} alt="Footer Shape 3" />
      </div>
    </footer>
  );
};

export default Footer;
