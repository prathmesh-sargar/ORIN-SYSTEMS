import { useState, useRef, useEffect } from "react";
import Container from "../Container";
import MegaMenu from "./MegaMenu";
import WhatWeDoMenu from "./WhatWeDoMenu";
import IndustriesMenu from "./IndustriesMenu";
import { navigation } from "../../../data/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const timeoutRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  /* ---------- SCROLL DETECTION ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- CLOSE MOBILE MENU ON ROUTE CHANGE ---------- */
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  /* ---------- DROPDOWN HANDLING ---------- */
  const openMenu = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50">
      <Container>
        <div
          className={`rounded-xl px-6 py-4 flex items-center justify-between transition-all duration-300
          ${
            isTransparent
              ? "bg-white/10 backdrop-blur-md border border-white/20"
              : "bg-white shadow-md border border-gray-200"
          }`}
        >
          {/* LOGO */}
          <Link to="/" onClick={closeMobileMenu}>
            <div
              className={`font-semibold text-lg transition-colors ${
                isTransparent ? "text-white" : "text-black"
              }`}
            >
              ORIN SYSTEMS
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div
            className={`hidden lg:flex items-center gap-8 text-sm font-medium ${
              isTransparent ? "text-white" : "text-black"
            }`}
          >
            {/* WHAT WE DO */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("what")}
              onMouseLeave={closeMenu}
            >
              <button className="flex items-center gap-1">
                What We Do
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    activeMenu === "what" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMenu === "what" && (
                <MegaMenu>
                  <WhatWeDoMenu />
                </MegaMenu>
              )}
            </div>

            {/* INDUSTRIES */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("industries")}
              onMouseLeave={closeMenu}
            >
              <button className="flex items-center gap-1">
                Industries
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    activeMenu === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMenu === "industries" && (
                <MegaMenu>
                  <IndustriesMenu />
                </MegaMenu>
              )}
            </div>

            <Link to="/who-we-are">Who We Are</Link>
            <Link to="/innovations-lab">Innovations Lab</Link>
            <Link to="/careers">Careers</Link>
          </div>

          {/* DESKTOP CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex bg-black text-white px-4 py-2 rounded-md text-sm"
          >
            Contact Us
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className={`lg:hidden ${
              isTransparent ? "text-white" : "text-black"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white mt-3 rounded-xl shadow-md border p-4 space-y-4">

            {/* WHAT WE DO */}
            <button
              className="flex items-center gap-2"
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === "what" ? null : "what"
                )
              }
            >
              What We Do <ChevronDown size={16} />
            </button>

            {mobileDropdown === "what" && (
              <div className="ml-4 space-y-2 text-sm">
                {navigation.whatWeDo.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* INDUSTRIES */}
            <button
              className="flex items-center gap-2"
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === "industries" ? null : "industries"
                )
              }
            >
              Industries <ChevronDown size={16} />
            </button>

            {mobileDropdown === "industries" && (
              <div className="ml-4 space-y-2 text-sm">
                {[...navigation.industriesColumn1,
                  ...navigation.industriesColumn2].map((item, i) => {
                  if (item.label) {
                    return (
                      <Link
                        key={i}
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="block"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.title}>
                      <p className="font-medium">{item.title}</p>
                      <div className="ml-3 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={closeMobileMenu}
                            className="block text-gray-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <Link to="/who-we-are" onClick={closeMobileMenu}>
              Who We Are
            </Link><br />
            <Link to="/innovations-lab" onClick={closeMobileMenu}>
              Innovations Lab
            </Link><br />
            <Link to="/careers" onClick={closeMobileMenu}>
              Careers
            </Link><br /><br />
          
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
