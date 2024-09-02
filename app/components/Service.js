import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import service4 from '@/public/images/services-4.jpg'
const Choose = () => {
  return (
    <div className="services-area margin-zero ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div
              className="services-section-content"
              data-aos="fade-down"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="services-bg-text">خدمات</div>
              <span>خدمات</span>
              <h3>
                الخدمات التي نقدمها{' '}
                <span className="overlay"></span>
              </h3>
              <p>
                ثق بنا لتقديم خدمات استثنائية تلبي متطلباتك الفريدة.
              </p>
              <div className="services-section-btn">
                <Link href="/services-style-1" legacyBehavior>
                  <a className="default-btn">اكتشف جميع الخدمات</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="services-slides owl-carousel owl-theme">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services-details" legacyBehavior>
                    <a>
                      <ExportedImage
                        src="/images/services-1.jpg"
                        alt="Software Development"
                        width={500}
                        height={300}
                      />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="#" legacyBehavior>
                      <a>خدمات التكنولوجيا</a>
                    </Link>
                  </h3>
                  <p>تكون التكنولوجيا الخاصة بك جيدة بقدر جودة البنية التحتية التي تقف خلفها. نحن هنا لنضمن أن البنية التحتية ذات كفاءة عالية .</p>
                  <Link href="#" legacyBehavior>
                    <a className="services-btn">
                      عرض التفاصيل
                    </a>
                  </Link>
                </div>
              </div>

              <div className="services-item">
                <div className="services-image">
                  <Link href="/services-details" legacyBehavior>
                    <a>
                      <ExportedImage
                        src="/images/services-2.jpg"
                        alt="App Development"
                        width={500}
                        height={300}
                      />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="#" legacyBehavior>
                      <a>الخدمات السحابية والتقنية</a>
                    </Link>
                  </h3>
                  <p>نقدم حلول لتطوير الويب وعمليات البيع بالتجزئة للتجارة الإلكترونية الذي يضمن حصول عملائك على تجربة سلسة.</p>
                  <Link href="/" legacyBehavior>
                    <a className="services-btn">
                      عرض التفاصيل
                    </a>
                  </Link>
                </div>
              </div>

              <div className="services-item">
                <div className="services-image">
                  <Link href="#" legacyBehavior>
                    <a>
                      <ExportedImage
                        src="/images/services-3.jpg"
                        alt="Web Development"
                        width={500}
                        height={300}
                      />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="#" legacyBehavior>
                      <a>التنمية المخصصة</a>
                    </Link>
                  </h3>
                  <p>يمكن أن تكون الطرق المختصرة تطوير التطبيقات مكلفة على المدى الطويل. إليك كيفية حصول سلسلا على التطوير المخصص بشكل صحيح من المرة الأولى.</p>
                  <Link href="#" legacyBehavior>
                    <a className="services-btn">
                      عرض التفاصيل
                    </a>
                  </Link>
                </div>
              </div>

              <div className="services-item">
                <div className="services-image">
                  <Link href="#" legacyBehavior>
                    <a>
                      <ExportedImage
                        src={service4}
                        alt="Analytic Solutions"
                        width={500}
                        height={335}
                      />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services-details" legacyBehavior>
                      <a>إدارة البيانات</a>
                    </Link>
                  </h3>
                  <p>تهدف شركة سلسلا إلى إطلاق الإمكانات الكاملة لبيانات عملائها وتحويل أعمالها من خلال رؤى وتحليلات قوية.</p>
                  <Link href="/services-details" legacyBehavior>
                    <a className="services-btn">
                      عرض التفاصيل
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
