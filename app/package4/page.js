/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar1 />
      <div class="pricing-area with-black-background margin-zero pt-100 pb-75">
        <div class="container">
          <div class="section-title">
            <span>الباقات</span>
            <h2>
              الجودة العالية بأفضل الأسعار <span className="overlay"></span>
            </h2>
            <p>
              يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة
              متكاملة تعزز نجاح عملك الرقمي.
            </p>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div
                class="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>باقة انشاء الموقع</h3>

                <ul class="pricing-list">
                  <li>
                    <i class="ri-check-fill"></i> تحليل كامل لموقعك
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> تحليل الكلمات الرئيسية
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> تحسين الصور
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> تحسين ميتا
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> رفع خريطة الموقع
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> إنشاء تحليلات الحساب لمتابعة
                    أداء الموقع
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> إنشاء حساب وحدة تحكم البحث
                  </li>
                </ul>

                <div class="pricing-btn">
                  <a href="pricing.html" class="default-btn">
                    طلب الخدمة
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div
                class="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>باقة الأعمال</h3>
                <ul class="pricing-list">
                  <li>
                    <i class="ri-check-fill"></i> تحليل المنافسين وإيجاد نقاط
                    القوة والضعف والإستفادة منها.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> إدارة موقعك في محركات البحث.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> عمل خطة للكلمات المفتاحية.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> إضافة موقعك لمشرفي المواقع
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> رفع خريطة الموقع الخاصة
                    بالموقع.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> إضافة جوجل تاج مانجر إلى
                    موقعك.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> تهيئة الموقع داخليا.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> تهيئة الموقع خارجيا روابط
                    خلفية عالية الجودة ذات صلة بموقعك.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> إضافة محتوى لصفحات الأقسام.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> عدد الكلمات 6/8 كلمات.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> إضافة تحليلات جوجل لموقعك.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> تقديم التقارير شهرياَ بأداء
                    الموقع.
                  </li>
                  <li>
                    <i class="ri-check-fill"></i> خطة عمل كل 3 شهور.
                  </li>
                </ul>

                <div class="pricing-btn">
                  <a href="pricing.html" class="default-btn">
                    طلب الخدمة
                  </a>
                </div>
                <div class="most-popular">
                  <span>Most Popular</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pricing-bg-shape-1">
          <img src="images/pricing-bg-shape.png" alt="image" />
        </div>
        <div class="pricing-shape-1">
          <img src="images/pricing-shape-1.png" alt="image" />
        </div>
        <div class="pricing-shape-2">
          <img src="images/pricing-shape-2.png" alt="image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
