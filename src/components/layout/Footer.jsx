import Container from "./Container";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <Container>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h3 className=" hero-heading text-white text-xl font-semibold">
              ORIN SYSTEMS
            </h3>

            <p className=" hero-heading mt-4 text-sm leading-relaxed text-gray-400 max-w-sm">
              Building intelligent enterprise systems through innovation,
              engineering excellence, and scalable technology solutions
              designed for modern businesses.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className=" hero-heading text-white font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#">AI & Generative AI</Link></li>
              <li><Link to="#">Data Analytics</Link></li>
              <li><Link to="#">Cloud Services</Link></li>
              <li><Link to="#">Enterprise Solutions</Link></li>
              <li><Link to="#">IT Consulting</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className=" hero-heading text-white font-medium mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#">Financial Services</Link></li>
              <li><Link to="#">Healthcare</Link></li>
              <li><Link to="#">Manufacturing</Link></li>
              <li><Link to="#">Retail</Link></li>
              <li><Link to="#">Energy & Utilities</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className=" hero-heading text-white font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/innovations-lab">Innovations Lab</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
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
            <a href="#" className="hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Github size={18} />
            </a>
          </div>

        </div>

      </Container>
    </footer>
  );
}
