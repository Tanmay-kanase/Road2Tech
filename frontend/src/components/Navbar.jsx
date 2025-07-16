import React, { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const services = [
    { label: "Website Designing", href: "/services/website-designing" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Software Development", href: "/services/software-development" },
    {
      label: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Social Media Management", href: "/services/social-media" },
    { label: "Search Engine Optimization", href: "/services/seo" },
    { label: "Logo & Graphic Designing", href: "/services/graphic-design" },
    { label: "CRM Development", href: "/services/crm-development" },
    { label: "Whatsapp Marketing", href: "/services/whatsapp-marketing" },
  ];

  const products = [
    { label: "Mobile App", href: "/products/mobile-app" },
    { label: "Website & Portal", href: "/products/website-portal" },
    { label: "Web Application", href: "/products/web-application" },
    { label: "Digital Products", href: "/products/digital-products" },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expand, setExpand] = useState({
    services: false,
    products: false,
  });

  const toggleExpand = (section) => {
    setExpand((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-auto w-auto">
          <a href="/">
            <img
              src="Admin/images/Road2techlogo_1733290531539.jpeg"
              alt="Logo"
              className="h-16 w-auto"
            />
          </a>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8">
          {/* Home */}
          <a
            href="/"
            className="relative font-medium text-gray-700 group hover:text-blue-600 transition-colors duration-900"
          >
            Home
            <span className="absolute left-0 top-6 h-[2px] w-0 bg-blue-600 transition-all duration-900 group-hover:w-full"></span>
          </a>

          {/* Services */}
          <div className="relative group">
            <button className="relative cursor-pointer font-medium text-gray-700 hover:text-blue-600 transition-all duration-300  underline-offset-4 hover:pl-1">
              Our Services
              <span className="absolute left-0 top-6 h-[2px] w-0 bg-blue-600 transition-all duration-900 group-hover:w-full"></span>
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50 w-64">
              <ul className="py-2 px-2 space-y-2">
                {services.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transform transition-all duration-300 opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100"
                      style={{ transitionDelay: `${index * 75}ms` }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products */}
          <div className="relative group">
            <button className="relative font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:underline underline-offset-4 hover:pl-1">
              Our Products
            </button>
            <div className="absolute left-0  bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50 w-64">
              <ul className="py-2 px-2 space-y-2">
                {products.map((item, index) => (
                  <li
                    key={index}
                    className="transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-out"
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <a
            href="/contact"
            className="relative font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:underline underline-offset-4 hover:pl-1"
          >
            Contact
          </a>

          {/* Contact */}
          <a
            href="/contact"
            className="relative font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:underline underline-offset-4 hover:pl-1"
          >
            Pages
          </a>
        </nav>

        {/* Mobile hamburger */}
        {/* 1. Mobile-only button */}
        {/* 2. Desktop-only button */}
        <div className="md:block justify-between">
          {user ? (
            <a href="/profile" className="flex items-center gap-2">
              <img
                src={user.profileUrl}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-md hover:scale-105 transition-all duration-300"
              />
            </a>
          ) : (
            <a
              href="/get-started"
              className="inline-block px-6 py-2 font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          )}
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img
            src="Admin/images/Road2techlogo_1733290531539.jpeg"
            alt="Logo"
            className="h-10"
          />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu */}
        <ul className="px-4 py-2 space-y-2">
          <li>
            <a
              href="/"
              className="block px-2 py-2 text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>

          {/* Services */}
          <li>
            <button
              onClick={() => toggleExpand("services")}
              className="flex justify-between items-center w-full px-2 py-2 text-gray-700 hover:text-blue-600 transition"
            >
              Our Services{" "}
              {expand.services ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <ul
              className={`overflow-hidden transition-all duration-300 ${
                expand.services ? "max-h-96" : "max-h-0"
              }`}
            >
              {services.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Products */}
          <li>
            <button
              onClick={() => toggleExpand("products")}
              className="flex justify-between items-center w-full px-2 py-2 text-gray-700 hover:text-blue-600 transition"
            >
              Our Products{" "}
              {expand.products ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <ul
              className={`overflow-hidden transition-all duration-300 ${
                expand.products ? "max-h-96" : "max-h-0"
              }`}
            >
              {products.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
