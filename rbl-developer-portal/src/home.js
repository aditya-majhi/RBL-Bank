
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import APIDetails from './api_details'
import { Link } from 'react-router-dom';


import React, { useState } from 'react'


export default function(props) {

  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: "slider-dots"
    
  };
  const [toggle, setToggle] = useState(false)
  const [expand, setExpand] = useState(false);

return (
<>
  <meta charSet="utf-8" />
  <link rel="canonical" href="https://www.rblbank.com/" />
  <link rel="shortlink" href="https://www.rblbank.com/" />
  <meta
    name="description"
    content="Wide range of Online Banking, Personal Banking services including Credit cards, personal loans, fixed deposits, savings account & insurance for all your personal needs."
  />
  <meta property="og:site_name" content="RBL Bank" />
  <meta property="og:url" content="https://www.rblbank.com/" />
  <meta
    property="og:title"
    content="Personal Banking, Online Banking Services | RBL Bank"
  />
  <meta
    property="og:description"
    content="Wide range of Online Banking, Personal Banking services including Credit cards, personal loans, fixed deposits, savings account & insurance for all your personal needs."
  />
  <meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <link
    rel="icon"
    href="pages/core/misc/favicon.ico"
    type="image/vnd.microsoft.icon"
  />
  <title>RBL Bank</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <link
    rel="stylesheet"
    media="all"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.bootstrap.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.base.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.default.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.compatibility.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/font-awesome-4.7.0/css/font-awesome.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/bootstrap/css/bootstrap.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/menu.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/slick-1.8.1/slick/slick.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/style.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/colors.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/aos/aos.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/owl/owl.carousel.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/owl/owl.theme.default.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/newcss.css"
  />
  
 
  <a href="#main-content" className="visually-hidden focusable skip-link">
    Skip to main content
  </a>
  <div className="common-header-wrap">
    <div className="credit-carousel d-sm-block d-md-none"></div>
    <div className="navbar-common-wrap">
      <nav className="navbar navbar-expand-md navbar-light fixed-top hide-xs d-md-block rbl-nav-header-bg">
        <div className="container rbl-nav-header">
          <div className="navbar-brand">
            <a className="navbar-brand-a" href="http://localhost:3000/">
              <img
                src="img/API-Developer-Portal-RBL-Bank.png"
                className="img-fluid mainlogo"
                alt="Logo"
              
              />
            </a>
          </div>
          <div id="block-mainnavigation" className="collapse navbar-collapse">
            <div className="content">
              <div
                className="tb-megamenu tb-megamenu-main"
                role="navigation"
                aria-label="Main navigation"
              >
                <div className="nav-collapse  always-show">
                  <ul
                    className="tb-megamenu-nav nav level-0 items-4"
                    role="list"
                  >
                    <li
                      className="tb-megamenu-item level-1 mega products-menu dropdown"
                      data-id="menu_link_content:9f2259e5-c492-4611-ae4e-1845e2693020"
                      data-level={1}
                      data-type="menu_item"
                      data-class="products-menu"
                      data-xicon=""
                      data-caption=""
                      data-alignsub=""
                      data-group={0}
                      data-hidewcol={0}
                      data-hidesub={0}
                      data-label=""
                      aria-level={1}
                    >
                      <span
                        className="dropdown-toggle tb-megamenu-no-link"
                        aria-expanded="false"
                        tabIndex={0}
                      >
                      

                        <Link to="/products"  className="linkcolorwhite">  API Products </Link>
                      
                      </span>
                    </li>
                    <li
                      className="tb-megamenu-item level-1 mega Payments-menu dropdown"
                      data-id="menu_link_content:adf69e6a-7713-4131-a639-e3426736a68b"
                      data-level={1}
                      data-type="menu_item"
                      data-class="Payments-menu"
                      data-xicon=""
                      data-caption=""
                      data-alignsub=""
                      data-group={0}
                      data-hidewcol={0}
                      data-hidesub={0}
                      data-label=""
                      aria-level={1}
                    >
                      <span
                        className="dropdown-toggle tb-megamenu-no-link"
                        aria-expanded="false"
                        tabIndex={0}
                      >
                        <Link to="/howitworks"  className="linkcolorwhite"> How it works </Link>
                      </span>
                    </li>
                    <li
                      className="tb-megamenu-item level-1 mega Payments-menu dropdown"
                      data-id="menu_link_content:adf69e6a-7713-4131-a639-e3426736a68b"
                      data-level={1}
                      data-type="menu_item"
                      data-class="Payments-menu"
                      data-xicon=""
                      data-caption=""
                      data-alignsub=""
                      data-group={0}
                      data-hidewcol={0}
                      data-hidesub={0}
                      data-label=""
                      aria-level={1}
                    >
                      <span
                        className="dropdown-toggle tb-megamenu-no-link"
                        aria-expanded="false"
                        tabIndex={0}
                      >
                      
                      <Link to="/faq"  className="linkcolorwhite"> FAQs </Link>
                      </span>
                    </li>
                    <li
                      className="tb-megamenu-item level-1 mega Payments-menu dropdown"
                      data-id="menu_link_content:adf69e6a-7713-4131-a639-e3426736a68b"
                      data-level={1}
                      data-type="menu_item"
                      data-class="Payments-menu"
                      data-xicon=""
                      data-caption=""
                      data-alignsub=""
                      data-group={0}
                      data-hidewcol={0}
                      data-hidesub={0}
                      data-label=""
                      aria-level={1}
                    >
                      <span
                        className="dropdown-toggle tb-megamenu-no-link"
                        aria-expanded="false"
                        tabIndex={0}
                      >
                        

                        <Link to="/quickassistance"   className="linkcolorwhite">  Quick Assistance </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="block-headermobile"
            className="block block-block-content block-block-content6d0e4fdd-1d22-429d-86b7-b8b92e4ca66b"
          >
            <div className="content"></div>
          </div>
          <div className="form-inline my-2 my-lg-0 mr-1 dropdown noti-but mr22">
            <button
              className="circle-btn nav-link serach-btn-header"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#g-search-modal"
            >
              <img
                src="pages/themes/custom/rbl_bank/images/search.svg"
                className="img-fluid img-blue"
                alt="search"
              />
            </button>
          </div>
          <div className="form-inline my-2 my-lg-0 dropdown logindd-show mr22">
            <a
              className="btn common-btn-yellow  login-btn-adj buttonreg"
             
              href="https://developer.rblbank.com/register"
            >
              Register
            </a>
          </div>
          <div className="form-inline my-2 my-lg-0 dropdown logindd-show">
            <a
              href="https://developer.rblbank.com/login"
              className="btn common-btn-yellow  login-btn-adj"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top d-sm-block d-md-none mobile-menu-header-adj">
        <div className="container-xs">
          <div className="row marginbottom2">
            <div className="col-7 col-md-5 ps-0">
              <div className="mobile-more-logo-wrap">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#modal-products"
                  href="#modal-products"
                  className="mobile-more-a"
                  id="mob-header-hamb-menu"
                >
                  <img
                    src="pages/themes/custom/rbl_bank/images/mobile-more.svg"
                    alt="mobile-more"
                  />
                </a>
                <a
                  href="http://localhost:3000/"
                  className="logo-mobile-a"
                >
                  <img
                    src="img/API-Developer-Portal-RBL-Bank.png"
                    alt="RBL Bank"
                    className="logo-mob1"
                    
                  />
                </a>
              </div>
            </div>
            <div className="col-5 col-md-7">
              <div className="form-inline d-flex justify-content-end">
                <button
                  className="circle-btn nav-link serach-btn-header"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#g-search-modal"
                >
                  <img
                    src="pages/themes/custom/rbl_bank/images/search.svg"
                    className="img-fluid img-blue"
                    alt="search"
                  />
                </button>
                <a
                  href="https://developer.rblbank.com/login"
                  target="_blank"
                  id="header-whatsapp"
                  className="circle-btn nav-link me-3 whatsapp-header-link"
                >
                  <i
                    className="fa fa-sign-in img-fluid img-blue"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div
    className="modal fade right menumodal"
    id="mobile-noti-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="mobile-noti-modal"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <span className="mobile-overlay-modal" data-bs-dismiss="modal" />
    <div className="modal-dialog" role="document">
      <div className="modal-content ">
        <div className="modal-header">
          <h5 className="modal-title title-center justify-content-center">
            Notifications
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body common-header-wrap">
          <ul className="no-dropbox ml-0">
          </ul>
        </div>
      </div>
    </div>
  </div>
  <a href="https://www.rblbank.com/chatbot">
    <div className="chat-wrap2 hide-mobile">
      <div className="chat-wrap2-inner">
        <img
          src="pages/themes/custom/rbl_bank/images/chat.svg"
          alt="chat"
          className="chat-icon"
        />
        <span>Chat</span>
      </div>
    </div>
  </a>
  <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
    <div id="page-wrapper">
    <div>

      <Slider {...settings}>
        <div>
          <h3> <div className="field__item">
      
      <section
        className="common-section banner-section home-page-banner"
        id="data-section1"
      >
        <div
          className="banner-img banner-img-wrap w-100"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-anchor="#data-section1"
        >
          <div
            className="banner-img-desktop imgback1"
          
          />
          <div
            className="banner-img-mobile imgback1"
           
          />
          <video width={320} height={240} controls="">
            <source src="" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center banner-row">
            <div className="col-12">
              <div
                className="banner-info left-wrap"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-anchor="#data-section1"
            
              >
                <h2 className="mb">
 
                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                   




                    <div className="banner-info-inner xs-text-center">
                      <h2 className="text-white">
                        Partner with us to create <br />
                        Incredible customer experiencess
                      </h2>
                      <div
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor="#data-section1"
                        data-aos-delay={900}
                      >
                        <a
                       
                          className="btn common-btn-blue"
                          href="https://digital.rblbank.com/fe-dsa/savings/go-
account?utm_source=website&utm_medium=website-hp-go-a
ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                          id="hp-hero-banner-go-ac
count"
                          target="_blank"
                        >
                          Explore API
                        </a>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></h3>


        </div>
        <div>
          <h3> <div className="field__item">
      
                      <section
                        className="common-section banner-section home-page-banner"
                        id="data-section1"
                      >
                        <div
                          className="banner-img banner-img-wrap w-100"
                          data-aos="fade-up"
                          data-aos-delay={300}
                          data-aos-anchor="#data-section1"
                        >
                          <div
                            className="banner-img-desktop imgback2"
                           
                          />
                          <div
                            className="banner-img-mobile imgback2"
                           
                          />
                          <video width={320} height={240} controls="">
                            <source src="" type="video/mp4" />
                          </video>
                        </div>
                        <div className="container">
                          <div className="row align-items-center banner-row">
                            <div className="col-12">
                              <div
                                className="banner-info left-wrap"
                                data-aos="fade-up"
                                data-aos-delay={600}
                                data-aos-anchor="#data-section1"
                              
                              >
                                <h2 className="mb">
                 
                                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                                 




                                    <div className="banner-info-inner xs-text-center">
                                      <h2 className="text-white">
                                     Go Account
                                      </h2>
                                      <div
                                        className="aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-anchor="#data-section1"
                                        data-aos-delay={900}
                                      >
                                        <a
                                        
                                          className="btn common-btn-blue"
                                          href="https://digital.rblbank.com/fe-dsa/savings/go-
 account?utm_source=website&utm_medium=website-hp-go-a
 ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                                          id="hp-hero-banner-go-ac
 count"
                                          target="_blank"
                                        >
                                          Explore API
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div></h3>
        </div>
        <div>
         <h3> <div className="field__item">
      
                      <section
                        className="common-section banner-section home-page-banner"
                        id="data-section1"
                      >
                        <div
                          className="banner-img banner-img-wrap w-100"
                          data-aos="fade-up"
                          data-aos-delay={300}
                          data-aos-anchor="#data-section1"
                        >
                          <div
                            className="banner-img-desktop imgback3"
                          
                          />
                          <div
                            className="banner-img-mobile imgback3"
                           
                          />
                          <video width={320} height={240} controls="">
                            <source src="" type="video/mp4" />
                          </video>
                        </div>
                        <div className="container">
                          <div className="row align-items-center banner-row">
                            <div className="col-12">
                              <div
                                className="banner-info left-wrap"
                                data-aos="fade-up"
                                data-aos-delay={600}
                                data-aos-anchor="#data-section1"
                               
                              >
                                <h2 className="mb">
                 
                                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                                   




                                    <div className="banner-info-inner xs-text-center">
                                      <h2 className="text-white">
                                      Credit Card Bill Payment Options
                                      </h2>
                                      <div
                                        className="aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-anchor="#data-section1"
                                        data-aos-delay={900}
                                      >
                                        <a
                                          
                                          className="btn common-btn-blue"
                                          href="https://digital.rblbank.com/fe-dsa/savings/go-
 account?utm_source=website&utm_medium=website-hp-go-a
 ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                                          id="hp-hero-banner-go-ac
 count"
                                          target="_blank"
                                        >
                                          Explore API
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div></h3>
        </div>
        <div>
        <h3> <div className="field__item">
      
      <section
        className="common-section banner-section home-page-banner"
        id="data-section1"
      >
        <div
          className="banner-img banner-img-wrap w-100"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-anchor="#data-section1"
        >
          <div
            className="banner-img-desktop imgback2"
           
          />
          <div
            className="banner-img-mobile imgback2"
            
          />
          <video width={320} height={240} controls="">
            <source src="" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center banner-row">
            <div className="col-12">
              <div
                className="banner-info left-wrap"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-anchor="#data-section1"
               
              >
                <h2 className="mb">
 
                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                 




                    <div className="banner-info-inner xs-text-center">
                      <h2 className="text-white">
                      Hurry! Pay your Advance Tax
                      </h2>
                      <div
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor="#data-section1"
                        data-aos-delay={900}
                      >
                        <a
                          
                          className="btn common-btn-blue"
                          href="https://digital.rblbank.com/fe-dsa/savings/go-
account?utm_source=website&utm_medium=website-hp-go-a
ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                          id="hp-hero-banner-go-ac
count"
                          target="_blank"
                        >
                          Explore API
                        </a>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></h3>
        </div>
      </Slider>
    </div>



      <div id="page">
        <div className="highlighted">
          <aside className="container section clearfix" role="complementary">
          </aside>
        </div>
        <div id="main-wrapper" className="layout-main-wrapper clearfix">
          <div id="main">
            <div className="row-offcanvas row-offcanvas-left clearfix">
              <main className="main-content col" id="content" role="main">
                <section className="section">
                  <a id="main-content" tabIndex={-1} />
             
                 <div data-drupal-messages-fallback="" className="hidden" />
            
               


                  
                  <div className="home-banner-wrapper ">
             
                   
                   
                   
                  </div>
                </section>
              </main>
            </div>
          </div>
       
          <div
            id="block-cardoffers"
            className="block block-block-content block-block-content5bcaf945-d833-4c9a-876f-6f0703fb1564"
          >
            <div className="content"></div>
          </div>
          <div
            id="block-rblmobileapp"
            className="block block-block-content block-block-content39d3403e-81eb-4d01-ba8c-e150ab085d80"
          >
            <div className="content">
              <section
                className=""
                id="data-mobank-app"
                
              >
              </section>
              <div className="block block-block-content block-block-content1d752ca4-2ff5-4def-8d8a-ed70563765f0">
                <div className="content">
                  <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item a3">
                    <section
                      className=" related-blog-section bg-gray-c"
                      id="data-related-blog"
                      
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="rbl-myapp-card"
                            
                              data-aos-anchor="#data-mobank-app"
                            >
                              <div className="rbl-myapp-left">
                            
                                <img
                                  src="img/Exceed_Global_Elite.png"
                                  alt="RBL MoBank App"
                                  className="img-fluid-width"
                                 
                                />
                              </div>
                              <div className="clearfix text-formatted field field--name-field-rbl-mobank-app field--type-text-long field--label-hidden field__item a3">
                                <div className="div-width" >
                                  <h3
                                    className="h3"
                                   
                                  >
                                    Why choose RBL Bank API?
                                  </h3>
                                  <h5
                                    className="h5"
                                   
                                  >
                                    Accuracy and reliability are core to
                                    everything we do.
                                  </h5>
                                  <div className=" p20">
                                    <div className="product-list row">
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                        
                                      >
                                        <div
                                          className="remove-border"
                                         
                                        >
                                          <div className="fa fa-user"
                                            
                                          />
                                          <h4
                                           
                                          >
                                            Extensive product range
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            With more than 200+ APIs of diverse
                                            banking products, we enable you to
                                            create advanced solutions for
                                            customer needs.{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                       
                                      >
                                        <div
                                          className="remove-border"
                                         
                                        >
                                          <div
                                           className="fa fa-user"
                                         
                                          />
                                          <h4
                                            
                                          >
                                            Higher Security
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            Give your customers a seamless
                                            experienc with latest security
                                            standards and OAuth 2.0.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-list row">
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                        
                                      >
                                        <div
                                          className="remove-border"
                                         
                                        >
                                          <div
                                          className="fa fa-user"
                                         
                                          />
                                          <h4
                                           
                                          >
                                            Value-added APIs
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            Value-added APIs like eKYC, PAN
                                            verification API, currency rates
                                            API, and credit score API create
                                            aone-shop solution for APIs.
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                       
                                      >
                                        <div
                                         className="remove-border"
                                         
                                        >
                                          <div
                                         className="fa fa-user"
                                        
                                          />
                                          <h4
                                          
                                          >
                                            Fully Automated
                                          </h4>
                                          <div
                                            className="title-block-text"
                                          
                                          >
                                            A fully-automated banking service
                                            platform for enterprise use.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <div>
                                <h2
                                  className="reg-text-center"
                                 
                                >
                                  How to get started?
                                </h2>
                                <h5
                                  className="reg-sub-text-center"
                                 
                                >
                                  Incorporate RBL Bank APIs in just 3 easy
                                  steps!
                                </h5>
                                <div>&nbsp;</div>
                                <div className="category_landing">
                                  <div className="with-buttons offers-page">
                                    <div className="product-list row">
                                      <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 remove-padding-left">
                                        <div
                                          className="product-wrapper"
                                         
                                        >
                                          <div className="img-holder">
                                            <img
                                              alt="samsung pay"
                                              src="img/Frame1.png"
                                            />
                                          </div>
                                          <h4 
                                            
                                             
                                          >
                                            Register
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            Register with simple steps to start
                                            your API journey with us. Complete
                                            online application form with
                                            necessary details and submit.{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 remove-padding-left">
                                        <div
                                          className="product-wrapper"
                                          
                                        >
                                          <div className="img-holder">
                                            <img
                                              alt="samsung pay"
                                              src="img/Frame2.png"
                                            />
                                          </div>
                                          <h4
                                           
                                          >
                                            Subscribe &amp; Test
                                          </h4>
                                          <div
                                            className="title-block-text"
                                          
                                          >
                                            After your sign up request is
                                            approved, you will receive an
                                            activation link on your registered
                                            email address. You need to select
                                            APIs you want to try an understand
                                            more about it{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 remove-padding-left">
                                        <div
                                          className="product-wrapper"
                                         
                                        >
                                          <div className="img-holder">
                                            <img
                                              alt="samsung pay"
                                              src="img/Frame3.png"
                                            />
                                          </div>
                                          <h4
                                           
                                          >
                                           Subscribe & Go Live
                                          </h4>
                                          <div
                                            className="title-block-text"
                                            
                                          >
                                            Create your application (APPS) with
                                            Client ID &amp; Client Secret. Post
                                            your NDA with us, you can Go-live
                                            with production environment.{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <p
                                        className="partner-text-center"
                                       
                                      >
                                        <a
                                          className="btn common-btn-blue a-attention-link-add-script"
                                          href="https://developer.rblbank.com/products"
                                          id="hp-cc-banner-slot"
                                          target="_blank"
                                        
                                        >
                                          Become Partner
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <section
                        className="common-section  saving-acc-adv-section blue_back"
                        id="data-section2"
                      
                      >
                        <br />
                        <br />
                        <h2
                          className="main-text-center"
                          
                        >
                          API Products
                        </h2>
                        <h5
                          className="API-text-center"
                         
                        >
                          Features that set us apart
                        </h5>
                        <br />
                        <div className="tab-wrap-outer-height ">
                          <div
                            className="productmain-tabs"
                           
                          >
                            <div className="container">
                              <div className="row align-items-center">
                                <div className="col-12">
                                  <div className="common-tab-wrap">
                                    <nav>
                                      <div
                                        className="nav nav-tabs hide-after text-center fixed-nav-adj producttabs"
                                        id="nav-tab"
                                        role="tablist"
                                       
                                      >
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script active producttabs-div"
                                         
                                          id="nav-Whyus-tab"
                                          data-bs-toggle="tab"
                                          href="#nav-Whyus"
                                          role="tab"
                                          aria-controls="nav-Whyus"
                                          aria-selected="true"
                                        >
                                          All Products
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                         
                                          id="nav-quicklink-tab"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink"
                                          role="tab"
                                          aria-controls="nav-quicklink"
                                          aria-selected="false"
                                          tabIndex={-1}
                                        >
                                          Deposits
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                        
                                          id="nav-quicklink-tab1"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink1"
                                          role="tab"
                                          aria-controls="nav-quicklink1"
                                          aria-selected="false"
                                          tabIndex={2}
                                        >
                                          Payments
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                          
                                          id="nav-quicklink-tab2"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink2"
                                          role="tab"
                                          aria-controls="nav-quicklink2"
                                          aria-selected="false"
                                          tabIndex={3}
                                        >
                                          Accounts
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                           
                                          id="nav-quicklink-tab3"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink3"
                                          role="tab"
                                          aria-controls="nav-quicklink3"
                                          aria-selected="false"
                                          tabIndex={4}
                                        >
                                          Shared Services
                                        </a>
                                      </div>
                                    </nav>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container" >
                          <div className="row align-items-center">
                            <div className="col-12">
                              <div className="common-tab-wrap">
                                <div
                                  className="tab-content"
                                  id="nav-tabContent"
                                >
                                  <div
                                    className="tab-pane fade active show"
                                    id="nav-Whyus"
                                    role="tabpanel"
                                    aria-labelledby="nav-Careers-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div className="row">
                                        <div className="col-lg-4 padding9">
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className=" card-main-div  "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                    
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        Upi-collection-of-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                        UPI Collections API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-
	up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_
	campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 padding9">
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="card-main-div  "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                  
                                                  >
                                                    <div className="cards-body_align"
                                                   
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                       Jocata-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                        AML Check API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 padding9">
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="  card-main-div "
                                                  
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                     
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        Ekyc-requery-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                        eKYC Requery API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-lg-4 padding9"
                                         
                                        >
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="  card-main-div "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                  
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        upi-payment-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                       Payment through VPA
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-lg-4 padding9"
                                         
                                        >
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="  card-main-div "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                  
                                                  >
                                                    <div className="cards-body_align"
                                                     
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        Account-statement-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                        
                                                      >
                                                        Account Statement API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-lg-4 padding9"
                                         
                                        >
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className=" card-main-div  "
                                                
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                     
                                                    >
                                                      <h6 className="cards-body-h6"
                                                        
                                                      >
                                                       Agent-consent-status-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                      Agent Consent API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-
	up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_
	campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                
                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                            
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={1}
                                              aria-hidden="false"
                                              tabIndex={1}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan42
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />             <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink1"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                         
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={1}
                                              aria-hidden="false"
                                              tabIndex={1}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />             <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan33
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink2"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                           
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={2}
                                              aria-hidden="false"
                                              tabIndex={2}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />             <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink3"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                           
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={3}
                                              aria-hidden="false"
                                              tabIndex={3}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                      <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                      <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className="card-main-div"
                                                            
                                                          >
                                                            <div
                                                              className="cards-body"
                                                              
                                                            >
                                                              <div className="cards-body_align"
                                                              
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                  
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                  
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <br />
                              <div className="view_all_div"
                               
                              >
                                <a
                                 
                                  className="btn common-btn-blue a-attention-link-add-script view_all"
                                  href="https://developer.rblbank.com/products"
                                  id="hp-cc-banner-slot"
                                  target="_blank"
                                >
                                  View All
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="block block-block-content block-block-content1d752ca4-2ff5-4def-8d8a-ed70563765f0">
                        <div className="content">
                          <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item a3">
                            <section
                              className="common-section related-blog-section bg-gray-c"
                              id="data-related-blog"
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div>
                                      <h2 className="common-section-heading">
                                        Blogs
                                      </h2>
                                      <div className="related-blog-slick mb30">
                                        {/* 1 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg1"
                                             
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/manage-money-on-the-go-bank-smart-for-your-next-trip/"
                                                  id="hp-blog-know-spot1"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/manage-money-on-the-go-bank-smart-for-your-next-trip/"
                                                  id="hp-blog-manage-money-on-the-go"
                                                  target="_blank"
                                                >
                                                  Features and Benefits of API
                                                  banking
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 2 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg2"
                                              
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/open-zero-balance-savings-account-and-experience-seamless-digital-banking/"
                                                  id="hp-blog-know-spot2"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/open-zero-balance-savings-account-and-experience-seamless-digital-banking/"
                                                  id="hp-blog-open-zero-balance-savings-account"
                                                  target="_blank"
                                                >
                                                  How to apply for API banking
                                                  services
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 3 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg3"
                                              
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/what-is-voice-cloning-fraud-how-to-safeguard-yourself-from-voice-cloning-fraud/"
                                                  id="hp-blog-know-spot3"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/what-is-voice-cloning-fraud-how-to-safeguard-yourself-from-voice-cloning-fraud/"
                                                  id="hp-blog-what-is-voice-cloning-fraud"
                                                  target="_blank"
                                                >
                                                  What is API Banking Services
                                                  and how it works
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 4 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg4"
                                             
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/how-to-make-the-best-use-of-credit-cards-this-festive-season/"
                                                  id="hp-blog-know-spot4"
                                                  target="_blank"
                                                >
                                                  Nov 02, 2023
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/how-to-make-the-best-use-of-credit-cards-this-festive-season/"
                                                  id="hp-blog-best-use-of-credit-cards-festive"
                                                  target="_blank"
                                                >
                                                  Five types of cash
                                                  transactions that may land you
                                                  in trouble.
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 5 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg5"
                                            
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/safeguarding-your-identity-a-roadmap-to-theft-prevention/"
                                                  id="hp-blog-safeguarding-your-identity"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/safeguarding-your-identity-a-roadmap-to-theft-prevention/"
                                                  id="hp-blog-know-spot5"
                                                  target="_blank"
                                                >
                                                  Safeguarding Your Identity: A
                                                  Roadmap to Theft Prevention
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                     
                                      <div className="text-center">
                                        <a
                                          className="btn common-btn-outline"
                                          href="https://blog.rblbank.com/"
                                          id="hp-blog-read-more"
                                          target="_blank"
                                        >
                                          Read More
                                        </a>
                                       
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <footer className="site-footer">
      <div className="footer-common-wrap">
        <footer className="footerStyle">
          <div className="container">
            <div className="site-footer__top clearfix row row1">
              <section className="row col-md-3 footer-col">
                <nav
                  role="navigation"
                  aria-labelledby="block-footerfirst-menu"
                  id="block-footerfirst"
                  className="block block-menu navigation menu--footer-first"
                >
                  <h2 className="visually-hidden" id="block-footerfirst-menu">
                    Footer First
                  </h2>
                  <div className="">
                    <h6 className="footer-head">
                      About
                      <span className="underline" />
                      <i aria-hidden="true" className="fa fa-plus footerIcons">
                        ‌
                      </i>
                    </h6>
                    <ul className="clearfix nav list-unstyled">
                      <li>
                        <a
                          href="https://www.rblbank.com/about-us"
                          className="nav-link nav-link--about-us"
                          data-drupal-link-system-path="node/6"
                        >
                          The Bank
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/about-us/board-of-directors"
                          className="nav-link nav-link--about-us-board-of-directors"
                          data-drupal-link-system-path="node/4"
                        >
                          Board of Directors
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/about-us/management-team"
                          className="nav-link nav-link--about-us-management-team"
                          data-drupal-link-system-path="node/40"
                        >
                          Management Team
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/careers"
                          className="nav-link nav-link--careers"
                          data-drupal-link-system-path="node/2"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/IR - QIP 2019"
                          className="nav-link nav-link--careers"
                          data-drupal-link-system-path="node/2"
                        >
                          IR - QIP 2019
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/social-responsibility"
                          className="nav-link nav-link--social-responsibility"
                          data-drupal-link-system-path="node/10"
                        >
                          Social Responsibility
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </section>
              <section className="row col-md-3 footer-col">
                <nav
                  role="navigation"
                  aria-labelledby="block-footersecond-menu"
                  id="block-footersecond"
                  className="block block-menu navigation menu--footer-second"
                >
                  <h2 className="visually-hidden" id="block-footersecond-menu">
                    Footer Second
                  </h2>
                  <div className="">
                    <h6 className="footer-head">
                      Media Center
                      <span className="underline" />
                      <i aria-hidden="true" className="fa fa-plus footerIcons">
                        ‌
                      </i>
                    </h6>
                    <ul className="clearfix nav list-unstyled">
                      <li>
                        <a
                          href="https://www.rblbank.com/press-releases"
                          className="nav-link nav-link--press-releases"
                          data-drupal-link-system-path="press-releases"
                        >
                          Press Releases
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/media-kit"
                          className="nav-link nav-link--media-kit"
                          data-drupal-link-system-path="media-kit"
                        >
                          Media Kit
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ir.rblbank.com/investor-kit.aspx"
                          className="nav-link nav-link-https--irrblbankcom-investor-kitaspx"
                        >
                          Investor Kit
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ir.rblbank.com/"
                          className="nav-link nav-link-https--irrblbankcom-"
                        >
                          Investor Relations
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </section>
              <section className="row col-md-3 footer-col">
                <nav
                  role="navigation"
                  aria-labelledby="block-footerthird-menu"
                  id="block-footerthird"
                  className="block block-menu navigation menu--footer-third"
                >
                  <h2 className="visually-hidden" id="block-footerthird-menu">
                    Footer Third
                  </h2>
                  <div className="">
                    <h6 className="footer-head">
                      Products
                      <span className="underline" />
                      <i aria-hidden="true" className="fa fa-plus footerIcons">
                        ‌
                      </i>
                    </h6>
                    <ul className="clearfix list-unstyled">
                      <li>
                        <a
                          href="https://www.rblbank.com/personal-banking/accounts/savings-accounts"
                          className="nav-link nav-link--personal-banking-accounts-savings-accounts"
                          data-drupal-link-system-path="node/13"
                        >
                          Savings Account
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/business-banking/business/partnering-your-growth/current-accounts"
                          className="nav-link nav-link--business-banking-business-partnering-your-growth-current-accounts"
                          data-drupal-link-system-path="node/42"
                        >
                          Current Account
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/personal-banking/cards/credit-cards"
                          className="nav-link nav-link--personal-banking-cards-credit-cards"
                          data-drupal-link-system-path="node/182"
                        >
                          Credit Cards
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/personal-banking/term-deposits"
                          className="nav-link nav-link--personal-banking-term-deposits"
                          data-drupal-link-system-path="node/171"
                        >
                          Fixed Deposits
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/personal-banking/loans/personal-loan"
                          className="nav-link nav-link--personal-banking-loans-housing-loan"
                          data-drupal-link-system-path="node/249"
                        >
                          Personal Loan
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/nri-banking"
                          className="nav-link nav-link--nri-banking"
                          data-drupal-link-system-path="node/220"
                        >
                          NRI Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </section>
              <section className="row col-md-3 footer-col">
                <nav
                  role="navigation"
                  aria-labelledby="block-footerfourth-menu"
                  id="block-footerfourth"
                  className="block block-menu navigation menu--footer-fourth"
                >
                  <h2 className="visually-hidden" id="block-footerfourth-menu">
                    Footer Fourth
                  </h2>
                  <div className="">
                    <h6 className="footer-head">
                      Important Links
                      <span className="underline" />
                      <i aria-hidden="true" className="fa fa-plus footerIcons">
                        ‌
                      </i>
                    </h6>
                    <ul className="clearfix nav list-unstyled">
                      <li>
                        <a
                          href="https://www.rblbank.com/base-disclosures"
                          className="nav-link nav-link--base-disclosures"
                          data-drupal-link-system-path="node/510"
                        >
                          Regulatory Disclosures
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/bank-policies"
                          className="nav-link nav-link--bank-policies"
                          data-drupal-link-system-path="node/512"
                        >
                          Bank Policies
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/service-charges"
                          className="nav-link nav-link--service-charges"
                          data-drupal-link-system-path="node/514"
                        >
                          Service Charges &amp; Fees
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/interest-rates"
                          className="nav-link nav-link--news"
                          data-drupal-link-system-path="node/803"
                        >
                          Interest Rates
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/download-form"
                          className="nav-link nav-link--download-form"
                          data-drupal-link-system-path="node/414"
                        >
                          Download Forms
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com"
                          className="nav-link nav-link--interest-rates"
                          data-drupal-link-system-path="node/355"
                        >
                          Site Map
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </section>
              <section className="row col-md-3 footer-col">
                <nav
                  role="navigation"
                  aria-labelledby="block-customerservice-menu"
                  id="block-customerservice"
                  className="block block-menu navigation menu--footer-fifth"
                >
                  <h2
                    className="visually-hidden"
                    id="block-customerservice-menu"
                  >
                    Customer Service
                  </h2>
                  <div className="">
                    <h6 className="footer-head">
                      Customer Service
                      <span className="underline" />
                      <i aria-hidden="true" className="fa fa-plus footerIcons">
                        ‌
                      </i>
                    </h6>
                    <ul className="clearfix nav list-unstyled">
                      <li>
                        <a
                          href="https://www.rblbank.com/contact-us"
                          className="nav-link nav-link--contact-us"
                          data-drupal-link-system-path="node/37"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/locate-branch"
                          className="nav-link nav-link-https--wwwrblbankcom-locate-branch"
                        >
                          Locate Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/do-not-call"
                          className="nav-link nav-link--do-not-call"
                          data-drupal-link-system-path="do-not-call"
                        >
                          Do Not Call Registry
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://drws17a9qx558.cloudfront.net/document/Footer%20-%20Grievance%20Redressal/GrievanceRedressalProcess.pdf"
                          className="nav-link nav-link-https--drws17a9qx558cloudfrontnet-document-footer20-20grievance20redressal-grievanceredressalprocesspdf"
                        >
                          Grievance Redressal
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/feedback"
                          className="nav-link nav-link--feedback"
                          data-drupal-link-system-path="feedback"
                        >
                          Feedback
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/suggestion-and-complaints"
                          className="nav-link nav-link--suggestion-and-complaints"
                          data-drupal-link-system-path="suggestion-and-complaints"
                        >
                          Report a Complaint/Fraud
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/unclaimed-deposits"
                          className="nav-link nav-link--unclaimed-deposits"
                          data-drupal-link-system-path="unclaimed-deposits"
                        >
                          Unclaimed Deposits
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.rblbank.com/"
                          className="nav-link nav-link--certificates-issued-by-the-bank"
                          data-drupal-link-system-path="node/852"
                        >
                          Customer Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </section>
            </div>
            <div className="site-footer__bottom">
              <section className="row">
                <div
                  id="block-footer"
                  className="block block-block-content block-block-content2e6a6517-4990-4fb3-adde-cbefd535ebeb"
                >
                  <div className="content">
                    <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item a3">
                      <div>
                        <footer>
                          <div className="container">
                            <div className="row row2 other-list-row">
                              <div className="col-lg-1">
                                <h6 className="footer-head">
                                  Others{" "}
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-plus footerIcons"
                                  >
                                    ‌
                                  </i>
                                </h6>
                              </div>
                    
      
                              
                              <div className="col-lg-11">
                                <div className="other-list-wrap xs-mb0">
                                  
                                  <a
                                    className="footerIcons-other hide-mobile"
                                   
                                    id="footerIcons-other-a"
                                  >
                                    <i>          <button className="expand_button"  
                                    onClick={() => setExpand(!expand)} 
                                       >
                                    <i  className={`fa ${expand ? 'fa-minus' : 'fa-plus'}`} />
                                </button>
                                      ‌
                                    </i>
                                  </a>
                                 
                                  <ul className="list-unstyled xs-mb0">
                                    <li>
                                      <a href="https://www.rblbank.com/terms-and-conditions">
                                        Terms &amp; Conditions{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://www.rblbank.com/bcsbi-members">
                                        BCSBI Member{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://www.rblbank.com/banking-ombudsman">
                                        Banking Ombudsman{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://www.rblbank.com/customer-knowledge-center">
                                        Customer Knowledge Center{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a className="remove_blue"
                                       
                                        href="https://www.rbi.org.in/CommonPerson/english/scripts/rbikehtahai.aspx"
                                        
                                      >
                                        RBI Kehta Hai{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://drws17a9qx558.cloudfront.net/document/PDF%20Pages/rbl-bank-gst-reg_details.pdf">
                                        Our GSTIN{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://www.rblbank.com/sustainability-framework">
                                        Sustainability Framework{" "}
                                      </a>
                                    </li>
                                  </ul>
                                    {expand && (
                                  <ul
                                    className="list-unstyled footerIcons-toggle"
                                    id="footerIcons-toggle-ul"
                                  >
                                    <li>
                                      <a href="https://drws17a9qx558.cloudfront.net/document/footer-use-of-un-parliamentary-language/use-of-un-parliamentary-language.pdf">
                                        Use of Un-parlimentary Language by
                                        Customers{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://drws17a9qx558.cloudfront.net/document/whats-new/gst-customer-communication.pdf">
                                        GST Customer Communication{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://drws17a9qx558.cloudfront.net/document/pdfs/aadhaar-enrolment-updation-centers.pdf">
                                        Aadhaar Enrolment Centers{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://drws17a9qx558.cloudfront.net/document/Footer%20-%20NEFT%20Customer%20Facilitation%20Center/NEFT-NOC.pdf">
                                        NEFT Customer Facilitation Center{" "}
                                      </a>
                                    </li>
                                  </ul>
                                   )}
                                </div>
                              </div>
                            </div>

                         
                            <div className="row row3 align-items-center">
                              <div className="col-lg-5 col-md-6">
                                <p className="pbottom mb15 hide-mobile">
                                  Copyright 2023 RBL Bank Ltd.
                                </p>
                                <p className="pbottom mb15 hide-mobile">
                                  Site best viewed in IE 9-11, Edge 25, Chrome
                                  58, Firefox 53, Safari 10.1
                                </p>
                              </div>
                              <div
                                className="col-lg-3 col-md-6 Center paddingcopy"
                               
                              >
                                <p className="pbottom mb15 hide-mobile">
                                  <select
                                    name="cars"
                                    id="cars"
                                    className="select-selected"
                                    style={{
                                      color: "#ffffff",
                                      background: "#444141bd",
                                      padding: 10,
                                      borderRadius: 4,
                                      border: "0px solid red",
                                      width: "-webkit-fill-available",
                                      fontSize: 14,
                                      borderRight: "10px solid #3b3939"
                                    }}
                                  >
                                    <option value="volvo">Other Sites</option>
                                    <option value="saab">Other Sites1</option>
                                    <option value="mercedes">
                                      Other Sites2
                                    </option>
                                    <option value="audi">Other Sites3</option>
                                  </select>
                                  <style
                                    dangerouslySetInnerHTML={{ __html: "\n\n" }}
                                  />
                                </p>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <ul className="follow-us-ul">
                                  <li className="hide-mobile">
                                    <p className="p16">Follow us</p>
                                  </li>
                                  <li>
                                    <a
                                      className="a-fb"
                                      href="https://www.facebook.com/TheRBLBank"
                                      target="_blank"
                                    >
                                      <i
                                        className="fa fa-facebook"
                                        data-bgcolor="#1877F2"
                                      >
                                        ‌
                                      </i>{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="a-linkedin"
                                      href="https://www.linkedin.com/company/rbl-bank"
                                      target="_blank"
                                    >
                                      <i className="fa fa-linkedin">‌</i>{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="a-twitter"
                                      href="https://twitter.com/rblbank"
                                      target="_blank"
                                    >
                                      <i className="fa fa-twitter">‌</i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="a-insta"
                                      href="https://www.instagram.com/rbl_bank/"
                                      target="_blank"
                                    >
                                      <i className="fa fa-instagram">‌</i>{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="a-yt"
                                      href="https://www.youtube.com/c/RblBankofficial"
                                      target="_blank"
                                    >
                                      <i className="fa fa-youtube-play">‌</i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </footer>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  </div>
  <div className="common-footer-wrapper">
    <div
      className="modal fade right menumodal"
      id="modal-products"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="Products-content"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <span className="mobile-overlay-modal" data-bs-dismiss="modal" />
      <div className="modal-dialog" role="document">
        <div className="modal-content ">
          <div className="modal-header">
            <h5 className="modal-title title-center justify-content-center">
              Our Products
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body custom-mobile-menu-content">
            <section className="nav-wrap">
              <nav
                className="acnav acnavOurProd acnavOurProd-xs"
                role="navigation"
              >
                <ul className="acnav__list acnav__list--level1">
                  <li className="has-children">
                    <div className="acnav__label">
                      <a href="https://developer.rblbank.com/products">
                        API Products
                      </a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      <a href="  how_it_works.html">How it works</a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      <a href="faq.html">FAQs</a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      {" "}
                      <a href="quick_assistance.html"> Quick Assistance</a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      {" "}
                      <a href="https://developer.rblbank.com/register">
                        {" "}
                        Register
                      </a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      {" "}
                      <a href="https://developer.rblbank.com/login"> Login</a>
                    </div>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div className="go-to-top-wrap hide-mobile st">
      <img
        src="pages/themes/custom/rbl_bank/images/top-icon.svg"
        alt="go-to-top"
        className="go-to-top st"
      />
      <p className="p14 st">TOP</p>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="attention-link-modalLabel"
    className="modal fade common-modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    id="attention-link-modal"
    tabIndex={-1}
  >
   
  </div>
  <div
    className="modal fade g-search-modal"
    id="g-search-modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="g-search-modalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content">
        <div className="modal-body">
          <div className="container">
            <a href="#" data-bs-dismiss="modal" className="search-close-a">
              <img
                src="pages/themes/custom/rbl_bank/images/close-black.svg"
                alt="close-black"
                className="close-black st"
              />
            </a>
            <div className="search_section">
              <div
                className="views-exposed-form bef-exposed-form block block-views block-views-exposed-filter-blocksearch-rbl-data-page-1"
                data-drupal-selector="views-exposed-form-search-rbl-data-page-1"
                id="block-exposedformsearch-rbl-datapage-1"
              >
                <div className="content">
                  <form
                    action="/search-rbl-data"
                    method="get"
                    id="views-exposed-form-search-rbl-data-page-1"
                    acceptCharset="UTF-8"
                  >
                    <div className="row">
                      <div className="js-form-item js-form-type-search-api-autocomplete form-type-search-api-autocomplete js-form-item-search-api-fulltext form-item-search-api-fulltext mb-3">
                        <label htmlFor="edit-search-api-fulltext">
                          Fulltext search
                        </label>
                        <input
                          data-drupal-selector="edit-search-api-fulltext"
                          type="text"
                          id="edit-search-api-fulltext"
                          name="search_api_fulltext"
                          defaultValue=""
                          size={30}
                          maxLength={128}
                          className="form-control"
                        />
                      </div>
                      <div
                        data-drupal-selector="edit-actions"
                        className="form-actions js-form-wrapper form-wrapper mb-3"
                        id="edit-actions"
                      >
                        <button
                          data-drupal-selector="edit-submit-search-rbl-data"
                          type="submit"
                          id="edit-submit-search-rbl-data"
                          value="Apply"
                          className="button js-form-submit form-submit btn btn-primary"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="cookieNotice"
    className="modal-cookies-wrap"
    style={{ display: "none" }}
  >

    
    <div className="modal-dialog" role="document">
      <div className="modal-content cookies-modal-wrap">
        <div className="cookies-modal" id="cookiesModal">
          <img
            src="pages/themes/custom/rbl_bank/images/icons/cookies-graphic.png"
            alt="cookie-image"
          />
          <h4 className="cookie-setting">Cookie settings</h4>
          <p className="cookie-p mb-0">
            By continuing to use this site, you are accepting the bank's
            <a href="https://rblbank.com/static-pages/cookie-policy">
              cookie policy.{" "}
            </a>
            The information collected would be used to improve your journey
            &amp; to personalize your website experience.
          </p>
          <div className="row align-items-center">
            <div className="col-12">
              <button
                className="btn common-btn-blue w-100"
                id="accept-term-modal"
                onClick="acceptCookieConsent();"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>
);
};
