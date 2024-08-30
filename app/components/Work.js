import React from 'react'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'

const Work = () => {
  return (
    <div className="choose-area pt-100 pb-75">
      <div className="container">
        <div className="section-title section-style-two">
          <div className="section-bg-text">عملية</div>
          <span>عملية العمل</span>
          <h2>الخدمات التي نقدمها<span className="overlay"></span></h2>
          <p>ثق بنا لتقديم خدمات استثنائية تلبي متطلباتك الفريدة.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-1.png"
                    alt="Customized Development"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">١</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">التنمية المخصصة</Link>
                </h3>
                <p>يمكن أن تكون الطرق المختصرة تطوير التطبيقات مكلفة على المدى الطويل. إليك كيفية حصول سلسلا على التطوير المخصص بشكل صحيح من المرة الأولى.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-2.png"
                    alt="Cloud and Technical Services"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٢</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">الخدمات السحابية والتقنية</Link>
                </h3>
                <p>نقدم حلول لتطوير الويب وعمليات البيع بالتجزئة للتجارة الإلكترونية الذي يضمن حصول عملائك على تجربة سلسة.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-3.png"
                    alt="Technology Services"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٣</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">خدمات التكنولوجيا</Link>
                </h3>
                <p>تكون التكنولوجيا الخاصة بك جيدة بقدر جودة البنية التحتية التي تقف خلفها. نحن هنا لنضمن أن البنية التحتية ذات كفاءة عالية .</p>
              </div>
            </div>
          </div>

        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-1.png"
                    alt="App Solutions"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٤</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">حلول التطبيقات</Link>
                </h3>
                <p>من الإنتاجية إلى المبيعات، يؤثر الهاتف المحمول على كل أعمالك. يمكن أن نقدم لك في سلسلا خدمات تطبيقات الهاتف المحمول وتحسين موقع الويب للحصول على أفضل النتائج .</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-2.png"
                    alt="Social Media Marketing"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٥</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">تسويق وسائل الاعلام الاجتماعية</Link>
                </h3>
                <p>قم بإنشاء محتوى مقنع، واستخدم التسويق الهادف، واستفد من التقارير المستندة على البيانات لتطوير علامتك التجارية وتحقيق أهداف عملك مع سلسلا.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-3.png"
                    alt="Data Management"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٦</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">إدارة البيانات</Link>
                </h3>
                <p>تهدف شركة سلسلا إلى إطلاق الإمكانات الكاملة لبيانات عملائها وتحويل أعمالها من خلال رؤى وتحليلات قوية.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-1.png"
                    alt="SEO"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٧</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">تحسين محرك البحث</Link>
                </h3>
                <p>ابحث عن الكلمات الرئيسية ذات الصلة وقم بدمجها بشكل استراتيجي في محتوى موقع الويب الخاص بك لزيادة ظهور محرك البحث إلى أقصى حد وجذب جمهورك المستهدف.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-2.png"
                    alt="Web and E-commerce"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٨</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">الويب والتجارة الإلكترونية</Link>
                </h3>
                <p>الاستفادة من الخدمات السحابية أمر سهل، ولكن زيادة الفوائد أمر صعب. ما لم يكن لديك الشريك المناسب.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-3.png"
                    alt="Social Media Management"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٩</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">إدارة وسائل التواصل الاجتماعي</Link>
                </h3>
                <p>نحن نقدم لك خدمات إدارة وسائل التواصل الاجتماعي الشاملة. دعنا نعتني بكل جانب من جوانب وجودك على الإنترنت.</p>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  )
}

export default Work
