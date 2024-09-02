import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blacklogo from '@/public/images/black-logo.png';

const Navbar1 = () => {
  return (
    <div className="navbar-area">
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <div className="logo">
              <Link href="/">
                <Image src={blacklogo} width={132} height={50} className="black-logo" alt="image" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main-navbar navbar-with-black-color">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light d-flex justify-content-between align-items-center">
            {/* Logo on the left side */}
            <div className="navbar-brand">
              <Link href="/">
                <Image src={blacklogo} width={132} height={50} className="black-logo" alt="image" />
              </Link>
            </div>

            {/* Centered menu items */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link active">
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    من نحن
                    <i className="ri-arrow-down-s-line"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about1" className="nav-link">مَلَفّ</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about2" className="nav-link">عملائنا</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/service" className="nav-link">خدماتنا</Link>
                </li>
                <li className="nav-item">
                  <Link href="/package" className="nav-link">
                    الباقات
                    <i className="ri-arrow-down-s-line"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/package1" className="nav-link">تصميم مواقع</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/package2" className="nav-link">تصميم جرافيك</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/package3" className="nav-link">إدارة صفحات السوشيال ميديا</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/package4" className="nav-link">خدمات السيو</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">اتصل بنا</Link>
                </li>
              </ul>
            </div>

            {/* Search icon on the right side */}
            <div className="others-options d-flex align-items-center">
              <div className="option-item">
                <i className="search-btn ri-search-line"></i>
                <i className="close-btn ri-close-line"></i>
                <div className="search-overlay search-popup">
                  <div className="search-box">
                    <form className="search-form">
                      <input className="search-input" placeholder="Search..." type="text" />
                      <button className="search-button" type="submit">
                        <i className="ri-search-line"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
