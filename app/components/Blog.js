import React from 'react'

const Blog = () => {
  return (
    <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>شرط</span>
            <h2>
            اقرأ أحدث مدونتنا <span className="overlay" />
            </h2>
          </div>
          <div className="blog-slides owl-carousel owl-theme">
            <div
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <a href="single-blog-1.html">
                      <img src="images/blog-1.jpg" alt="image" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-content">
                    <div className="date">9th July, 2024</div>
                    <h3>
                      <a href="single-blog-1.html">
                      كيف تهيمن التكنولوجيا على العالم الجديد عام 2024
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet conset sadipscing elitr sed
                      diam nonumy eir m od tempor invidunt ut labore.
                    </p>
                    <a href="single-blog-1.html" className="blog-btn">
                    عرض المزيد
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={890}
              data-aos-duration={900}
              data-aos-once="true"
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <a href="single-blog-1.html">
                      <img src="images/blog-2.jpg" alt="image" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-content">
                    <div className="date">7th July, 2024</div>
                    <h3>
                      <a href="single-blog-1.html">
                      أهم 10 اتجاهات تكنولوجية مشهورة في عام 2024
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet conset sadipscing elitr sed
                      diam nonumy eir m od tempor invidunt ut labore.
                    </p>
                    <a href="single-blog-1.html" className="blog-btn">
                    عرض المزيد
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <a href="single-blog-1.html">
                      <img src="images/blog-1.jpg" alt="image" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-content">
                    <div className="date">9th July, 2024</div>
                    <h3>
                      <a href="single-blog-1.html">
                      كيف تهيمن التكنولوجيا على العالم الجديد عام 2024
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet conset sadipscing elitr sed
                      diam nonumy eir m od tempor invidunt ut labore.
                    </p>
                    <a href="single-blog-1.html" className="blog-btn">
                    عرض المزيد
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={90}
              data-aos-duration={900}
              data-aos-once="true"
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <a href="single-blog-1.html">
                      <img src="images/blog-2.jpg" alt="image" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-content">
                    <div className="date">7th July, 2024</div>
                    <h3>
                      <a href="single-blog-1.html">
                      أهم 10 اتجاهات تكنولوجية مشهورة في عام 2024
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet conset sadipscing elitr sed
                      diam nonumy eir m od tempor invidunt ut labore.
                    </p>
                    <a href="single-blog-1.html" className="blog-btn">
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

export default Blog
