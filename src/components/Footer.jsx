const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Library Management System</h3>
          <p className="text-gray-400">
            Your one-stop solution for managing books, members, and library operations efficiently. 
            A smarter way to organize and enhance your library experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a
                href="/home"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/categories"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Book Categories
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@librarysystem.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Library Management System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
