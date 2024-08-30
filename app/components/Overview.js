import React from 'react'

const Overview = () => {
  return (
    <div className="overview-area pt-100 pb-75">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="overview-card">
            <h3>اتصل بنا</h3>
            <span>
              <a href="tel:9901234567">+990-123-4567</a>
            </span>
            <div className="overview-shape">
              <img src="images/overview-shape.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="overview-card">
            <h3>راسلنا عبر البريد الإلكتروني</h3>
            <span>
              <a href="/cdn-cgi/l/email-protection#0860616b67726d486f65696164266b6765">
                <span
                  className="__cf_email__"
                  data-cfemail="96fefff5f9ecf3d6f1fbf7fffab8f5f9fb"
                >
                  [email�&nbsp;protected]
                </span>
              </a>
            </span>
            <div className="overview-shape">
              <img src="images/overview-shape.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="overview-card">
            <h3>الدعم الفني</h3>
            <span>
              <a href="tel:15143125678">+1 (514) 312-5678</a>
            </span>
            <div className="overview-shape">
              <img src="images/overview-shape.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="overview-card">
            <h3>قم بزيارتنا</h3>
            <span>413 North Las Vegas, NV 89032</span>
            <div className="overview-shape">
              <img src="images/overview-shape.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Overview
