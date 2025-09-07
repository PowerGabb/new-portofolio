import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/powergabb",
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/rangga-bayu-969184286/",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://instagram.com/rang_ga_bayu",
      color: "hover:text-pink-600"
    }
  ];

  const quickLinks = [
    { name: "Tentang Saya", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "API Development",
    "Consulting"
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Rangga Dev
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Full Stack Developer & UI/UX Designer yang passionate dalam menciptakan solusi digital inovatif dan user-friendly.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="w-4 h-4 text-blue-400" />
                <a href="mailto:ranggabp17@gmail.com" className="hover:text-blue-400 transition-colors">
                  ranggabp17@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="w-4 h-4 text-green-400" />
                <a href="tel:+6281412138980" className="hover:text-green-400 transition-colors">
                  +62 814-1213-8980
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4 text-red-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Rangga Dev. Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in Indonesia</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
    </footer>
  );
}