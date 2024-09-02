/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar1 from '../components/Navbar1'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar1/>
      <div class="pricing-area with-black-background margin-zero pt-100 pb-75">
            <div class="container">
                <div class="section-title">
                <span>الباقات</span>
                    <h2>الجودة العالية بأفضل الأسعار <span className="overlay"></span></h2>
                    <p>يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة متكاملة تعزز نجاح عملك الرقمي.</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-pricing-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <h3>الباقة الفضية</h3>
                           

                            <ul class="pricing-list">
    <li><i class="ri-check-fill"></i> تهيئة حساب السوشيال ميديا</li>
    <li><i class="ri-check-fill"></i> تهيئة الحساب الإعلاني</li>
    <li><i class="ri-check-fill"></i> إدارة حساب تويتر أو حساب واحد</li>
    <li><i class="ri-check-fill"></i> 4 بوست محتوى + 4 تصميم</li>
    <li><i class="ri-check-fill"></i> خطة للسوشيال ميديا كل شهر</li>
</ul>

                            <div class="pricing-btn">
                                <a href="pricing.html" class="default-btn">طلب الخدمة</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-pricing-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <h3>الباقة الذهبية</h3>
                           
                            <ul class="pricing-list">
    <li><i class="ri-check-fill"></i> تهيئة حسابات السوشيال ميديا</li>
    <li><i class="ri-check-fill"></i> تهيئة الحساب الإعلاني</li>
    <li><i class="ri-check-fill"></i> إدارة حسابين (تويتر - انستجرام)</li>
    <li><i class="ri-check-fill"></i> 8 بوست محتوى + 8 تصميم</li>
    <li><i class="ri-check-fill"></i> ۲ صورة متحركة</li>
    <li><i class="ri-check-fill"></i> خطة للسوشيال ميديا كل شهر</li>
</ul>

                            <div class="pricing-btn">
                                <a href="pricing.html" class="default-btn">طلب الخدمة</a>
                            </div>
                            <div class="most-popular">
                                <span>Most Popular</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-pricing-card" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                            <h3>الباقة البلاتينيه</h3>
                   
                            <ul class="pricing-list">
    <li><i class="ri-check-fill"></i> تهيئة حساب السوشيال ميديا</li>
    <li><i class="ri-check-fill"></i> تهيئة الحساب الإعلاني</li>
    <li><i class="ri-check-fill"></i> إدارة 3 حسابات للسوشيال ميديا</li>
    <li><i class="ri-check-fill"></i> إدارة الحملات الإعلانية</li>
    <li><i class="ri-check-fill"></i> تقرير شهري بالأداء الإعلاني</li>
    <li><i class="ri-check-fill"></i> 15 بوست محتوى + 15 تصميم</li>
    <li><i class="ri-check-fill"></i> المتابعة والرد على العملاء خلال ساعات العمل</li>
    <li><i class="ri-check-fill"></i> خطة للسوشيال ميديا كل 3 شهور</li>
    <li><i class="ri-check-fill"></i> فيديو لمدة 40 ثانية</li>
</ul>

                            <div class="pricing-btn">
                                <a href="pricing.html" class="default-btn">طلب الخدمة</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pricing-bg-shape-1">
                <img src="images/pricing-bg-shape.png" alt="image"/>
            </div>
            <div class="pricing-shape-1">
                <img src="images/pricing-shape-1.png" alt="image"/>
            </div>
            <div class="pricing-shape-2">
                <img src="images/pricing-shape-2.png" alt="image"/>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default page
