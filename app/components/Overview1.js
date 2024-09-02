/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Overvire = () => {
  return (
    <div class="overview-area pt-100 pb-75">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6">
                <div class="overview-card">
                    <h3>اتصل بنا</h3>
                    <span>
                        <a href="tel:9901234567">۰٥٤۹۹٦۹۱٥٦6</a>
                    </span>

                    <div class="overview-shape">
                        <img src="images/overview-shape.png" alt="image"/>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="overview-card">
                    <h3>راسلنا عبر البريد الإلكتروني</h3>
                    <span>
                        <a href="/cdn-cgi/l/email-protection#82eaebe1edf8e7c2e5efe3ebeeace1edef"><span >info@selsla.net</span></a>
                    </span>

                    <div class="overview-shape">
                        <img src="images/overview-shape.png" alt="image"/>
                    </div>
                </div>
            </div>

        
            <div class="col-lg-3 col-md-6">
                <div class="overview-card">
                    <h3>قم بزيارتنا</h3>
                    <span>السعودية الرياض</span>

                    <div class="overview-shape">
                        <img src="images/overview-shape.png" alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Overvire
