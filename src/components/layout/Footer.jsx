import Container from "./Container";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-20 pb-10">
      <Container>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h3 className="hero-heading text-white text-2xl font-semibold">
              ORIN SYSTEMS
            </h3>

            <p className="hero-heading mt-4 text-xl leading-relaxed text-gray-400 max-w-sm">
              Building intelligent enterprise systems through innovation,
              engineering excellence, and scalable technology solutions
              designed for modern businesses.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-2 text-lg">
              <p className="flex items-center gap-2 text-gray-400">
                <Mail size={30} /> info@orinsystems.com
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={30} /> +91 9766545100
              </p>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="hero-heading text-white text-xl font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-lg">
              <li><Link to="#" className="hover:text-white">AI & Generative AI</Link></li>
              <li><Link to="#" className="hover:text-white">Data Analytics</Link></li>
              <li><Link to="#" className="hover:text-white">Cloud Services</Link></li>
              <li><Link to="#" className="hover:text-white">Enterprise Solutions</Link></li>
              <li><Link to="#" className="hover:text-white">IT Consulting</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="hero-heading text-white text-xl font-medium mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-lg">
              <li><Link to="#" className="hover:text-white">Financial Services</Link></li>
              <li><Link to="#" className="hover:text-white">Healthcare</Link></li>
              <li><Link to="#" className="hover:text-white">Manufacturing</Link></li>
              <li><Link to="#" className="hover:text-white">Retail</Link></li>
              <li><Link to="#" className="hover:text-white">Energy & Utilities</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="hero-heading text-white text-xl font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-lg">
              <li><Link to="/who-we-are" className="hover:text-white">Who We Are</Link></li>
              <li><Link to="/innovations-lab" className="hover:text-white">Innovations Lab</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-gray-500">
            © {new Date().getFullYear()} ORIN SYSTEMS. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/orinsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={25} />
            </a>

            <a
              href="https://x.com/ORIN_SYSTEMS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter size={25} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61587302525235"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook size={25} />
            </a>

            <a
              href="https://www.instagram.com/orin_systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram size={25} />
            </a>
          </div>

        </div>

      </Container>
    </footer>
  );
}
