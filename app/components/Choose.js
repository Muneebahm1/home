import React from 'react'

const Choose = () => {
  return (
    <div className="choose-area pt-100 pb-75">
    <div className="container">
        <div className="section-title section-style-two">
            <div className="section-bg-text">عملية</div>
            <span>عملية العمل</span>
            <h2>نحن نتبع أربع خطوات بسيطة<span className="overlay"></span></h2>
            <p>نحن شركة رائدة في تقديم الحلول التقنية في جميع أنحاء العالم منذ أكثر من 40 عامًا.</p>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
                <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                    <div className="choose-image" datatilt="">
                        <a href="services-details.html"><img src="images/choose-1.png" alt="image"/></a>

                        <div className="number">1</div>
                    </div>
                    <div className="choose-content">
                        <h3>
                            <a href="#">مناقشة</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                    <div className="choose-image" datatilt="">
                        <a href="services-details.html"><img src="images/choose-2.png" alt="image"/></a>

                        <div className="number">2</div>
                    </div>
                    <div className="choose-content">
                        <h3>
                            <a href="#">Testing &amp; Trying</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                    <div className="choose-image" datatilt="">
                        <a href="services-details.html"><img src="images/choose-3.png" alt="image"/></a>

                        <div className="number">3</div>
                    </div>
                    <div className="choose-content">
                        <h3>
                            <a href="#">Ideas &amp; Concept</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="single-choose-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                    <div className="choose-image" datatilt="">
                        <a href="services-details.html"><img src="images/choose-4.png" alt="image"/></a>

                        <div className="number">4</div>
                    </div>
                    <div className="choose-content">
                        <h3>
                            <a href="#">Execute &amp; Install</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Choose
