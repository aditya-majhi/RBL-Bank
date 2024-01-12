
import Categories from './API_Categories.json';
import Products from './API_Products.json';
import APIs from './API_listing.json';
import Header  from './header';
import Footer from './footer';


export default function Apiproducts(props) {


	

  return (

<>
 
<Header />
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
          <ul className="no-dropbox ml-0"></ul>
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
      <div id="page">
        <div className="highlighted">
          <aside
            className="container section clearfix"
            role="complementary"
          ></aside>
        </div>
        <div id="main-wrapper" className="layout-main-wrapper clearfix">
          <div id="main">
            <div className="row-offcanvas row-offcanvas-left clearfix">
             <main className="main-content col" id="content" role="main">


              <section className="section">
                <div
                  id="block-rblmobileapp"
                  className="block block-block-content block-block-content39d3403e-81eb-4d01-ba8c-e150ab085d80"
                >
                  <div className="content">
                    <section
                      className="related-blog-section bg-gray-c"
                      style={{ background: "#ffffff" }}
                    >
                      <div className="container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              '\n\n#myInput {\n\n  background-position: 10px 12px;\n  background-repeat: no-repeat;\n  width: 100%;\n  font-size: 16px;\n  padding: 3px 20px 3px 20px;\n\n \n      border: 0px solid red;\n}\nform {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n \n}\n\ninput[type="search"] {\n  border: none;\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  color: inherit;\n  border: 1px solid transparent;\n  border-radius: inherit;\n}\n\ninput[type="search"]::placeholder {\n  color: #bbb;\n}\n\nbutton[type="submit"] {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 40px;\n  padding: 0;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  background: transparent url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' class=\'bi bi-search\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\'%3E%3C/path%3E%3C/svg%3E") no-repeat center;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\nbutton[type="submit"]:hover {\n  opacity: 1;\n}\n\nbutton[type="submit"]:focus,\ninput[type="search"]:focus {\n  box-shadow: 0 0 3px 0 #1183d6;\n  border-color: #1183d6;\n  outline: none;\n}\n\nform.nosubmit {\n border: none;\n padding: 0;\n}\n\ninput.nosubmit {\n  width: 100%;\n  padding: 9px 4px 9px 40px;\n}\n\n.level1 > a > i{position: absolute;\n    right: 0%;\n    margin-top: 12px;}\n\t.level2 > a > div{position: absolute;\n    right: 0%;\n    margin-top: 3px;}\n#myUL li a:hover:not(.header) {\n  background-color: #eee;\n}\n\n.sub-menu {border-bottom:1px solid #dcdcdc}\n.sub-menu {text-align:left;padding:0px 20px 0px 0px;text-decoration:none}\n.sub-menu level2 {text-align:left;padding:0px 20px 0px 20px}\n.level1 li {text-align:left;padding:0px 0px 0px 0px;border:0px solid red}\n.level1 a {text-align:left;padding:10px 0px 10px 0px;}\n.level1 > a{color:#303030;font-weight:500;font-size:16px;text-align:left;padding:10px 0px 10px 0px;display: block;}\n.level2 > a{text-align:left;padding:10px 0px 10px 20px;color:#304087;display: block;text-decoration: none;}\n.level3 > li a {text-align:left;padding:10px 20px 10px 20px;color:#606060;font-size:14px}\n.level3 li{padding-left:20px; padding: 0px 0px 10px 20px;}\n\n'
                          }}
                        />
                        <div className="row">
                          <div
                            className="col-lg-3"
                            style={{ background: "#F6F6F7" }}
                          >
                            <div
                              className="col-lg-12"
                              style={{ paddingTop: 10, textAlign: "center" }}
                            >
                            
                              
                             

                              <nav
  className="animated bounceInDown "
  style={{ paddingTop: 40, position: "relative" }}
>
  <ul className="navside">
    <li className="sub-menu level1">
      <a href="#settings">
        <img
          alt="samsung pay"
          src="../img/clock2.png"
          style={{ height: 40, marginRight: 10 }}
        />
       Collection
        <i className="fa fa-angle-right" style={{ paddingLeft: 10 }} />
      </a>
      <ul>
        <li className="sub-menu level2 ">
          <a href="#settings"  >
          virtual-account-api-plan
            <div
              className="fa fa-angle-right"
              style={{ paddingLeft: 10 }}
            />
          </a>
          <a href="#settings" >
          upi-collection-of-api-product
            <div
              className="fa fa-angle-right"
              style={{ paddingLeft: 10 }}
            />
          </a>
         
        
        </li>
      </ul>
      
      
    </li>
    <li className="sub-menu level1">
      <a href="#settings">
        <img
          alt="samsung pay"
          src="../img/clock2.png"
          style={{ height: 40, marginRight: 10 }}
        />
       KYC
        <i className="fa fa-angle-down right" style={{ paddingLeft: 10 }} />
      </a>
      <ul>
        <li className="sub-menu level2">
          <a href="#settings" style={{ color: "#000000"}}>
          pl-cibil-enquiry-product
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
          <a href="#settings" style={{ color: "#000000"}}>
          jocata-api-product
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
          <a href="#settings" style={{ color: "#000000"}}>
          ekyc-requery-api-product
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
         
        </li>
      </ul>
     
      
    </li>
    <li className="sub-menu level1">
      <a href="#settings">
        <img
          alt="samsung pay"
          src="../img/clock2.png"
          style={{ height: 40, marginRight: 10 }}
        />
      Payments
        <i className="fa fa-angle-down right" style={{ paddingLeft: 10 }} />
      </a>
      <ul>
        <li className="sub-menu level2">
          <a href="#settings" style={{ color: "#000000"}}>
          aeps-api-product
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
          <a href="#settings" style={{ color: "#000000"}} >
          rbl-dmt-non-kyc-api
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
          <a href="#settings" style={{ color: "#000000"}}>
          upi-payment-api-product
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
        </li>
      </ul>
     
     
    </li>
    <li className="sub-menu level1">
      <a href="#settings">
        <img
          alt="samsung pay"
          src="../img/clock2.png"
          style={{ height: 40, marginRight: 10 }}
        />
       Value added services
        <i className="fa fa-angle-down right" style={{ paddingLeft: 10 }} />
      </a>
      <ul>
        <li className="sub-menu level2">
          <a href="#settings" style={{ color: "#000000"}}>
          account-statement-api-product
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
          <a href="#settings" style={{ color: "#000000"}}>
          corporate-accounts-api-plan
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
          <a href="#settings" style={{ color: "#000000"}}>
          rbl-public-api-plan
            <div
              className="fa fa-angle-down right"
              style={{ paddingLeft: 10 }}
            />
          </a>
         
        </li>
      </ul>
    
     
    </li>
  </ul>
</nav>



                            </div>
                          </div>
                          <div
                            className="col-lg-9"
                            style={{
                              paddingTop: 50,
                              paddingLeft: 30,
                              paddingRight: 30
                            }}
                          >
                            <div className="row">
                              <div className="col-lg-8">
                                <form>
                                  <input
                                    type="text"
                                    className="nosubmit"
                                    placeholder="Search..."
                                    id="myInput"
                                    onkeyup="myFunction()"
                                    title="Type in a name"
                                  />
                                  <button type="submit">Search</button>
                                </form>
                              </div>
                              <div className="col-lg-4">
                                <select
                                  name="cars"
                                  id="cars"
                                  style={{
                                    color: "#000000",
                                    background: "#D9D9D9",
                                    padding: 10,
                                    borderRadius: 4,
                                    border: "0px solid red",
                                    width: "-webkit-fill-available",
                                    fontSize: 14,
                                    borderRight: "10px solid #d9d9d9"
                                  }}
                                >
                                  <option value="volvo">Sort by</option>
                                  <option value="saab">Other Sites1</option>
                                  <option value="mercedes">Other Sites2</option>
                                  <option value="audi">Other Sites3</option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <ul id="myUL" className="row">
                              <li className="col-lg-4">
                                
                                <div className=" mb-2">
                                  <div className="">
                                    <div
                                      className="   "
                                      style={{
                                        background: "#f6f6f7",
                                        borderRadius: 15,
                                        padding: 10,
                                        marginBottom: 20
                                      }}
                                    >
                                      <div
                                        className="card-body"
                                        style={{ padding: 17, paddingTop: 20 }}
                                      >
                                        <div style={{ textAlign: "left" }}>
                                          <h6
                                            style={{
                                              textAlign: "left",
                                              fontSize: 16,
                                              color: "#303030"
                                            }}
                                          >
                                           Collection alert based on date and time
                                          </h6>
                                          <p
                                            className="card-font"
                                            style={{
                                              textAlign: "left",
                                              fontSize: 15,
                                              color: "#606060",
                                              paddingTop: 13,
                                            
                                            }}
                                          >
                                            Corporate Multi Payment API
                                          </p>
                                          <br />
                                          <br />
                                          <button className="btn common-btn-blue a-attention-link-add-script">
                                            Explore
                                          </button>
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                             
                              <li className="col-lg-4">
                                
                                <div className=" mb-2">
                                  <div className="">
                                    <div
                                      className="   "
                                      style={{
                                        background: "#f6f6f7",
                                        borderRadius: 15,
                                        padding: 10,
                                        marginBottom: 20
                                      }}
                                    >
                                      <div
                                        className="card-body"
                                        style={{ padding: 17, paddingTop: 20 }}
                                      >
                                        <div style={{ textAlign: "left" }}>
                                          <h6
                                            style={{
                                              textAlign: "left",
                                              fontSize: 16,
                                              color: "#303030"
                                            }}
                                          >
                                           Virtual Account Creation API
                                          </h6>
                                          <p
                                            className="card-font"
                                            style={{
                                              textAlign: "left",
                                              fontSize: 15,
                                              color: "#606060",
                                              paddingTop: 13,
                                            
                                            }}
                                          >
                                            Session creation API
                                          </p>
                                          <br />
                                          <br />
                                          <button className="btn common-btn-blue a-attention-link-add-script">
                                            Explore
                                          </button>
                                          
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              
                              
                              <li className="col-lg-4">
                                
                                <div className="mb-2">
                                  <div className="">
                                    <div
                                      className="   "
                                      style={{
                                        background: "#f6f6f7",
                                        borderRadius: 15,
                                        padding: 10,
                                        marginBottom: 20
                                      }}
                                    >
                                      <div
                                        className="card-body"
                                        style={{ padding: 17, paddingTop: 20 }}
                                      >
                                        <div style={{ textAlign: "left" }}>
                                          <h6
                                            style={{
                                              textAlign: "left",
                                              fontSize: 16,
                                              color: "#303030"
                                            }}
                                          >
                                           UPI Collections API
                                          </h6>
                                          <p
                                            className="card-font"
                                            style={{
                                              textAlign: "left",
                                              fontSize: 15,
                                              color: "#606060",
                                              paddingTop: 13,
                                           
                                            }}
                                          >
                                           Funds will be transferred when the user authorizes the collection.
                                          </p>
                                          <br />
                                         
                                          <button className="btn common-btn-blue a-attention-link-add-script">
                                            Explore
                                          </button>
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </main>
            </div>
           
          <Footer />
          </div>
        </div>
      </div>
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
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title">Attention</h5>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div className="modal-body">
            <p className="p14 text-para-gray">
              You are leaving RBL Bank website (“RBL Bank’s website”) and being
              re-directed to third party website at your request. The privacy
              and security policy of this website may differ from RBL Bank and
              may provide less security than RBL Bank’s website. RBL Bank and
              its affiliates do not endorse, make any warranty or assume legal
              liability for the products, services, content accuracy or opinions
              expressed in the website or other links provided on the website.
              RBL Bank and its affiliates are not responsible for any loss,
              damage, cost etc. that you may incur in the event of any
              deficiency in the product or services offered on this website.
            </p>
          </div>
          <div className="modal-footer justify-content-center">
            {" "}
            <span data-bs-dismiss="modal">
              {" "}
              <a
                className="btn btn-sm btn-view-adj"
                href="#"
                target="_blank"
                type="button"
                id="attention-link-btn"
                style={{
                  background: "#304087 !important",
                  color: "#fff !important"
                }}
              >
                Proceed
              </a>
            </span>
          </div>
        </div>
      </div>
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
              src="themes/custom/rbl_bank/images/icons/cookies-graphic.png"
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
                  onclick="acceptCookieConsent();"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

);
};