import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageSquare,
  Briefcase,
  ShoppingBag,
  Info,
  FileText,
  Target,
  Award,
  Users,
  LayoutDashboard,
  Image,
  UserCheck,
  CalendarDays,
  MessageCircle,
} from "lucide-react"; // Extended icons for contact info and links

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Ref for the intersection observer
  const ref = useRef(null); // ← create ref
  const inView = useInView(ref, {
    once: true,
    amount: 0.2, // 20% visible
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      console.log("Form data submitted:", formData);
      setSubmitMessage(
        "Your message has been sent successfully! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage(
        "There was an error sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    },
    tap: {
      scale: 0.98,
    },
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/road2tech",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/road2tech",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/road2tech",
      label: "Twitter",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/road2tech",
      label: "YouTube",
    },
    {
      icon: MessageCircle,
      href: "https://telegram.com/road2tech",
      label: "Telegram",
    },
    {
      icon: MessageSquare,
      href: "https://wa.me/7033623289",
      label: "WhatsApp",
    }, // Assuming a direct WhatsApp link
  ];

  const servicesLinks = [
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

  const productsLinks = [
    { label: "Mobile App", href: "/products/mobile-app" },
    { label: "Website & Portal", href: "/products/website-portal" },
    { label: "Web Application", href: "/products/web-application" },
    { label: "Digital Products", href: "/products/digital-products" },
  ];

  const importantPagesLinks = [
    { label: "About Us", href: "/aboutus" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Our Aim", href: "/our-aim" },
    { label: "Our Expertise", href: "/expertise" },
    { label: "Our Services", href: "/services" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Our Clients", href: "/our-clients" },
    { label: "Our Plan", href: "/our-plan" },
    { label: "Our Team", href: "/our-team" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Our Testimonials", href: "/testimonials" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Return & Refund Policy", href: "/return-refund-policy" },
    { label: "AMC Policy", href: "/amc-policy" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800 flex items-center justify-center">
      <motion.div
        ref={ref} // Attach the ref here
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8" // Added max-w-7xl for content width control
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate based on inView status
      >
        {/* Contact Information & Social Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-100 flex flex-col justify-start" // Added styling here
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-800 mb-4 drop-shadow-sm">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have a question or a project in mind? We'd love to hear from you.
            Fill out the form or reach us directly.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <MapPin
                size={24}
                className="text-purple-600 flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Address
                </h3>
                <p className="text-gray-700">Near Metro , Pune</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-700">+91 </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare
                size={24}
                className="text-purple-600 flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  WhatsApp
                </h3>
                <p className="text-gray-700">+91 </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={24} className="text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Email Us
                </h3>
                <p className="text-gray-700">road2tech@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 hover:text-purple-700 transition-colors duration-200 shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-2xl border border-purple-100 lg:col-span-2" // Added styling here
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white"
                placeholder="Tell us about your project or inquiry..."
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </motion.button>
            {submitMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-center text-sm font-medium ${
                  submitMessage.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
