import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header axil-header header-style-1">
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <a href="/">
                <img
                  src="Admin/images/Road2techlogo_1733290531539.jpeg"
                  alt="Logo"
                  style={{ width: "180px", height: "100px" }}
                />
              </a>
            </div>

            <div className="header-main-nav">
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <ul className="mainmenu">
                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="/services">Our Services</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="/services/website-designing">
                          Website Designing
                        </a>
                      </li>
                      <li>
                        <a href="/services/website-development">
                          Website Development
                        </a>
                      </li>
                      <li>
                        <a href="/services/software-development">
                          Software Development
                        </a>
                      </li>
                      <li>
                        <a href="/services/mobile-app-development">
                          Mobile App Development
                        </a>
                      </li>
                      <li>
                        <a href="/services/digital-marketing">
                          Digital Marketing
                        </a>
                      </li>
                      <li>
                        <a href="/services/social-media">
                          Social Media Management
                        </a>
                      </li>
                      <li>
                        <a href="/services/seo">Search Engine Optimization</a>
                      </li>
                      <li>
                        <a href="/services/graphic-design">
                          Logo & Graphic Designing
                        </a>
                      </li>
                      <li>
                        <a href="/services/crm-development">CRM Development</a>
                      </li>
                      <li>
                        <a href="/services/whatsapp-marketing">
                          Whatsapp Marketing
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="/products">Our Products</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="/products/mobile-app">Mobile App</a>
                      </li>
                      <li>
                        <a href="/products/website-portal">Website & Portal</a>
                      </li>
                      <li>
                        <a href="/products/web-application">Web Application</a>
                      </li>
                      <li>
                        <a href="/products/digital-products">
                          Digital Products
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="/our-aim">Our Aim</a>
                      </li>
                      <li>
                        <a href="/expertise">Our Expertise</a>
                      </li>
                      <li>
                        <a href="/portfolio">Our Portfolio</a>
                      </li>
                      <li>
                        <a href="/clients">Our Clients</a>
                      </li>
                      <li>
                        <a href="/plan">Our Plan</a>
                      </li>
                      <li>
                        <a href="/team">Our Team</a>
                      </li>
                      <li>
                        <a href="/why-choose-us">Why Choose Us</a>
                      </li>
                      <li>
                        <a href="/testimonials">Testimonials</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-action">
              <ul className="list-unstyled">
                <li className="sidemenu-btn d-lg-block d-none">
                  <button
                    className="btn-wrap"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMenuRight"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
                <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button
                    className="btn-wrap"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobilemenu-popup"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
