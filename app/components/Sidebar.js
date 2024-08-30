import React from 'react'
import Image from "next/image";
import blacklogo from '@/public/images/black-logo.png'
import logo from '@/public/images/logo.png'
import Link from "next/link";
const Sidebar = () => {
  return (
<div className="sidebarModal modal right fade" id="sidebarModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal"><i className="ri-close-line"></i></button>

                    <div className="modal-body">
                    <Link href="/">
                                    <Image src={blacklogo}width={132} height={50} className="black-logo" alt="image"/>
                                    <Image src={logo} width={132} height={50} className="white-logo" alt="image"/>
                                </Link>
                        <div className="sidebar-content">
                            <h3>معلومات عنا</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className="sidebar-btn">
                                <a href="contact.html" className="default-btn">دعونا نتحدث</a>
                            </div>
                        </div>
                        <div className="sidebar-contact-info">
                            <h3>معلومات الاتصال</h3>

                            <ul className="info-list">
                                <li><i className="ri-phone-fill"></i> <a href="tel:9901234567">+990-123-4567</a></li>
                                
                                <li><i className="ri-mail-line"></i> <a href="/cdn-cgi/l/email-protection#94f7fbeef1d4f3f9f5fdf8baf7fbf9"><span className="__cf_email__" data-cfemail="c3a0acb9a683a4aea2aaafeda0acae">[email�&nbsp;protected]</span></a></li>

                                <li><i className="ri-map-pin-line"></i> 413 North Las Vegas, NV 89032</li>
                            </ul>
                        </div>
                        <ul className="sidebar-social-list">
                            <li><a href="#" target="_blank"><i className="ri-facebook-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i className="ri-twitter-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i className="ri-linkedin-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i className="ri-instagram-fill"></i></a></li>
                        </ul>
                        <div className="contact-form">
                            <h3>هل أنت مستعد للبدء؟</h3>

                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required="" data-error="الرجاء إدخال اسمك" placeholder="اسمك"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required="" data-error="Please enter your email" placeholder="عنوان بريدك  الإلكتروني"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" required="" data-error="Please enter your phone number" placeholder="رقم هاتفك"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required="" data-error="Please enter your message" placeholder="اكتب رسالتك..."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">أرسل رسالة<span></span></button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
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

export default Sidebar
