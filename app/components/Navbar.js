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
                <div className="main-responsive-nav">
                    <div className="container">
                        <div className="main-responsive-menu">
                            <div className="logo">
                                <Link href="/">
                                    <Image src={blacklogo}width={132} height={50} className="black-logo" alt="image"/>
                                    <Image src={logo} width={132} height={50} className="white-logo" alt="image"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-navbar">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand" href="/">
                            <Image src={blacklogo}width={132} height={50} className="black-logo" alt="image"/>
                            <Image src={logo} width={132} height={50} className="white-logo" alt="image"/>
                            </Link>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active">
                                        الصفحة الرئيسية
                                           
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                        من نحن
                                            <i className="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="about-style-1.html" className="nav-link">مَلَفّ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="about-style-2.html" className="nav-link">عملائنا</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                        خدماتنا
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                        الباقات
                                            <i className="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="pricing.html" className="nav-link">تصميم مواقع</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="team.html" className="nav-link">تصميم جرافيك</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="faq.html" className="nav-link">إدارة صفحات السوشيال ميديا</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="faq.html" className="nav-link">خدمات السيو</a>
                                            </li>
                                        </ul>
                                    </li>

        
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link"> اتصل بنا</a>
                                    </li>
                                </ul>

                                <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <i className="search-btn ri-search-line"></i>
                                        <i className="close-btn ri-close-line"></i>
                                        <div className="search-overlay search-popup">
                                            <div className="search-box">
                                                <form className="search-form">
                                                    <input className="search-input" placeholder="Search..." type="text"/>
    
                                                    <button className="search-button" type="submit">
                                                        <i className="ri-search-line"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="option-item">
                                        <div className="side-menu-btn">
                                            <i className="ri-bar-chart-horizontal-line" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="others-option-for-responsive">
                    <div className="container">
                        <div className="dot-menu">
                            <div className="inner">
                                <div className="circle circle-one"></div>
                                <div className="circle circle-two"></div>
                                <div className="circle circle-three"></div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="option-inner">
                                <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <i className="search-btn ri-search-line"></i>
                                        <i className="close-btn ri-close-line"></i>
                                        <div className="search-overlay search-popup">
                                            <div className="search-box">
                                                <form className="search-form">
                                                    <input className="search-input" placeholder="Search..." type="text"/>
    
                                                    <button className="search-button" type="submit">
                                                        <i className="ri-search-line"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="option-item">
                                        <div className="side-menu-btn">
                                            <i className="ri-bar-chart-horizontal-line" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </header>
        </>
  )
}

export default Navbar
