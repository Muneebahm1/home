import React from 'react'
import Image from "next/image";
import blacklogo from '@/public/images/black-logo.png'
import logo from '@/public/images/logo.png'
import Link from "next/link";
const Navbar = () => {
  return (
    <>
<header className="main-header-area">
  <div className="navbar-area navbar-style-two-with-color">
    <div className="main-navbar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light justify-content-between">
          {/* Logo on the left */}
          <Link className="navbar-brand" href="/">
            <Image src={blacklogo} width={132} height={50} className="black-logo" alt="image" />
            <Image src={logo} width={132} height={50} className="white-logo" alt="image" />
          </Link>

          {/* Centered Menu */}
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

          {/* Search bar on the right */}
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
</header>

        </>
  )
}

export default Navbar
