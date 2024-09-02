/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar1 from '../components/Navbar1'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Navbar1/>
    <div className="pricing-area with-black-background margin-zero pt-100 pb-75">
            <div className="container">
                <div className="section-title">
                    <span>الباقات</span>
                    <h2>الجودة العالية بأفضل الأسعار <span className="overlay"></span></h2>
                    <p>يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة متكاملة تعزز نجاح عملك الرقمي.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                            <h3>باقة الموقع التعريفي</h3>
                            <ul className="pricing-list">
                                <li><i className="ri-check-fill"></i> موقع متجاوب مع جميع الأجهزة</li>
                                <li><i className="ri-check-fill"></i> استضافة مجانية لمدة عام.</li>
                                <li><i className="ri-check-fill"></i> دعم فني لمدة 3 شهور</li>
                                <li><i className="ri-check-fill"></i> موقع بلغتين اللغة العربية والانجليزية.</li>
                                <li><i className="ri-check-fill"></i> دومين مجاني</li>
                                <li><i className="ri-check-fill"></i> انشاء صفحات الموقع كالآتي : الرئيسية - سياسة الاستخدام - الشروط والأحكام - من نحن - اتصل بنا - مشاريعنا )</li>
                            </ul>
                            <div className="pricing-btn">
                                <a href="pricing.html" className="default-btn">طلب الخدمة</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                            <h3>باقة المتجر الالكتروني</h3>
                          
                            <ul className="pricing-list">
                                <li><i className="ri-check-fill"></i> نموذج عصري ومتجاوب مع جميع الأجهزة.</li>
                                <li><i className="ri-check-fill"></i> متجر بعدد غير محدود من المنتجات.</li>
                                <li><i className="ri-check-fill"></i> استضافة مجانية لمدة عام كامل.</li>
                                <li><i className="ri-check-fill"></i> دعم فني لمدة 3 شهور.</li>
                                <li><i className="ri-check-fill"></i>المتجر بلغتين اللغة العربية والانجليزية.</li>
                                <li><i className="ri-check-fill"></i>الربط مع شركة الشحن وبوابة الدفع.</li>
                                <li><i className="ri-check-fill"></i> دومين مجاني</li>
                                <li><i className="ri-check-fill"></i> رفع 100 منتج ( الوصف – السعر – عدد القطع – صور المنتج)</li>
                                <li><i className="ri-check-fill"></i> اضافة أقسام رئيسية للمنتجات وأقسام فرعية</li>
                                <li><i className="ri-check-fill"></i> تصنيف المنتجات ( الأكثر مبيعاَ – الأحدث – العروض)</li>
                                <li><i className="ri-check-fill"></i> الصفحات ( سياسة الاستخدام – الشروط والأحكام – من نحن – تواصل معنا)</li>
                                <li><i className="ri-check-fill"></i> اضافة الجزء الخاص بالتواصل مع خدمة العملاء من خلال الشات أو الواتساب.</li>
                            </ul>
                            <div className="pricing-btn">
                                <a href="pricing.html" className="default-btn">طلب الخدمة</a>
                            </div>
                            <div className="most-popular">
                                <span>Most Popular</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                            <h3>صفحة الهبوط</h3>
                           
                            <ul className="pricing-list">
                                <li><i className="ri-check-fill"></i> تصميم احترافي للصفحة</li>
                                <li><i className="ri-check-fill"></i> لوجو مجانى</li>
                                <li><i className="ri-check-fill"></i> كتابة المحتوى الخاص بالصفحة</li>
                                <li><i className="ri-check-fill"></i> دومين مجانى</li>
                                <li><i className="ri-check-fill"></i> استضافة لمدة عام مجاناَ</li>
                                <li><i className="ri-check-fill"></i> ۳ إيميلات رسمية</li>
                                <li><i className="ri-check-fill"></i> دعم تصفح الهاتف</li>
                                <li><i className="ri-check-fill"></i> دعم فني لمدة ۳ أشهر.</li>
                            </ul>
                            <div className="pricing-btn">
                                <a href="pricing.html" className="default-btn">طلب الخدمة</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing-bg-shape-1">
                <img src="images/pricing-bg-shape.png" alt="image"/>
            </div>
            <div className="pricing-shape-1">
                <img src="images/pricing-shape-1.png" alt="image"/>
            </div>
            <div className="pricing-shape-2">
                <img src="images/pricing-shape-2.png" alt="image"/>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default page
