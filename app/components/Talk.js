import React from 'react'

const Talk = () => {
  return (
    <div className="talk-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="talk-image" datatilt="">
            <img src="images/talk.png" alt="image" />
            <div className="talk-circle">
              <img src="images/talk-circle.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="talk-content">
            <div className="talk-bg-text">دعونا نتحدث</div>
            <span>دعونا نتحدث</span>
            <h3>
            نود أن نسمع منك أي سؤال{" "}
              <span className="overlay" />
            </h3>
            <p>
              Lorem ipsum dolor sit amet consetetur sadipscing elitre sed
              diam non umy eirmod tempor invidunt ut labore.
            </p>
            <form id="contactFormTwo">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required=""
                      data-error="Please enter your name"
                      placeholder="اسمك"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required=""
                      data-error="Please enter your email"
                      placeholder="عنوان بريدك  الإلكتروني"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      cols={30}
                      rows={6}
                      required=""
                      data-error="Please enter your message"
                      placeholder="اكتب رسالتك..."
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn">
                  أرسل رسالة
                    <span />
                  </button>
                  <div
                    id="msgSubmitTwo"
                    className="h3 text-center hidden"
                  />
                  <div className="clearfix" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Talk
