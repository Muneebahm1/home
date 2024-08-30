import React from 'react'

const Project = () => {
  return (
    <div className="projects-area style-two-area ptb-100">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div
            className="projects-section-content"
            data-aos="fade-down"
            data-aos-delay={80}
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="projects-bg-text">عمل</div>
            <span>المشاريع</span>
            <h3>
            أحدث مشروع عميلنا المذهل{" "}
              <span className="overlay" />
            </h3>
            <p>
            نحن نقدم الحلول التكنولوجية للشركة في جميع أنحاء
            العالم يفعل أكثر من 40 عاما.
            </p>
            <div className="projects-section-btn">
              <a href="projects.html" className="default-btn">
              استكشاف جميع المشاريع
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="projects-slides-two owl-carousel owl-theme">
            <div
              className="projects-item bg-F2F1F3"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-once="true"
            >
              <div className="projects-image">
                <a href="projects-details.html">
                  <img src="images/projects-1.jpg" alt="image" />
                </a>
              </div>
              <div className="projects-content">
                <h3>
                  <a href="projects-details.html">الرسوم المتحركة ثلاثية الأبعاد</a>
                </h3>
                <a href="projects-details.html" className="projects-btn">
                عرض المزيد
                </a>
              </div>
            </div>
            <div
              className="projects-item bg-F2F1F3"
              data-aos="fade-up"
              data-aos-delay={60}
              data-aos-duration={600}
              data-aos-once="true"
            >
              <div className="projects-image">
                <a href="projects-details.html">
                  <img src="images/projects-2.jpg" alt="image" />
                </a>
              </div>
              <div className="projects-content">
                <h3>
                  <a href="projects-details.html">
                  برامج الخدمات المصرفية عبر الإنترنت
                  </a>
                </h3>
                <a href="projects-details.html" className="projects-btn">
                عرض المزيد
                </a>
              </div>
            </div>
            <div
              className="projects-item bg-F2F1F3"
              data-aos="fade-up"
              data-aos-delay={70}
              data-aos-duration={700}
              data-aos-once="true"
            >
              <div className="projects-image">
                <a href="projects-details.html">
                  <img src="images/projects-3.jpg" alt="image" />
                </a>
              </div>
              <div className="projects-content">
                <h3>
                  <a href="projects-details.html">برنامج الصراف</a>
                </h3>
                <a href="projects-details.html" className="projects-btn">
                عرض المزيد
                </a>
              </div>
            </div>
            <div
              className="projects-item bg-F2F1F3"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="projects-image">
                <a href="projects-details.html">
                  <img src="images/projects-4.jpg" alt="image" />
                </a>
              </div>
              <div className="projects-content">
                <h3>
                  <a href="projects-details.html">برامج التحليلات</a>
                </h3>
                <a href="projects-details.html" className="projects-btn">
                عرض المزيد
                </a>
              </div>
            </div>
            <div
              className="projects-item bg-F2F1F3"
              data-aos="fade-up"
              data-aos-delay={90}
              data-aos-duration={900}
              data-aos-once="true"
            >
              <div className="projects-image">
                <a href="projects-details.html">
                  <img src="images/projects-5.jpg" alt="image" />
                </a>
              </div>
              <div className="projects-content">
                <h3>
                  <a href="projects-details.html">تطبيق المراسلة</a>
                </h3>
                <a href="projects-details.html" className="projects-btn">
                عرض المزيد
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Project
