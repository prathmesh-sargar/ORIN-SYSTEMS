import Container from "../components/layout/Container";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-36 pb-24 bg-[linear-gradient(to_bottom,#f4f6ff,#eef2ff,#e8efff)] relative overflow-hidden">
        <div className="absolute -top-32 right-[-120px] w-[420px] h-[420px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <Container>
          <div className="max-w-3xl relative z-10">
            <h1 className="hero-heading text-4xl md:text-5xl font-semibold tracking-tight">
              Contact Us
            </h1>

            <p className="hero-heading mt-6 text-xl text-gray-600 leading-relaxed">
              Let’s discuss how ORIN SYSTEMS can help you design and build
              secure, scalable, and intelligent technology solutions for your
              organization.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE */}
            <div>
              <h2 className="hero-heading text-3xl font-semibold">
                Get in Touch
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you are exploring a new project, looking for a
                technology partner, or want to learn more about our
                capabilities, our team is ready to assist you.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-indigo-600 mt-1" size={22} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium">
                      info@orinsystems.com
                    </p>
                    <p className="text-gray-900 font-medium">
                      support@orinsystems.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-indigo-600 mt-1" size={22} />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900 font-medium">+91 9766545100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-indigo-600 mt-1" size={22} />
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="text-gray-900 font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-10">
                <p className="text-sm text-gray-500 mb-4">Follow Us</p>

                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/orinsystems"
                    className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61587302525235"
                    className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition"
                  >
                    <Facebook size={18} />
                  </a>

                  <a
                    href="https://x.com/ORIN_SYSTEMS"
                    className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition"
                  >
                    <Twitter size={18} />
                  </a>

                  <a
                    href="https://www.instagram.com/orin_systems"
                    className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* IMAGE BLOCK */}
              <div className="relative mt-12">
                <img
                  src="/images/contactus.png"
                  alt="Engineering discussion"
                  className="w-full h-[260px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10"></div>
              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* FORM HEADER */}
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 px-8 py-6 text-white">
                <h3 className="text-xl font-semibold">Send Us a Message</h3>
                <p className="text-sm text-white/90 mt-1">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form className="p-8 space-y-6 p-6">
                {/* FIRST + LAST NAME */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-lg text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Alex"
                      className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-lg text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Johnson"
                      className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-600 outline-none"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-lg text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                     required
                    placeholder="alex.johnson@example.com"
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-600 outline-none"
                  />
                </div>

                {/* COMPANY + PHONE */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-lg text-gray-700">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Company Name"
                      className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-lg text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <div className="mt-2 flex gap-2">
                      <select className="border border-gray-300 rounded-md px-3 py-3 bg-white">
                        <option>IN +91</option>
                      </select>

                      <input
                        type="tel"
                        required
                        placeholder="9876543210"
                        className="flex-1 border w-[150px] border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-600 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* INDUSTRY */}
                <div>
                  <label className="text-lg text-gray-700">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-600 outline-none">
                    <option>Select your industry</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                    <option>Retail</option>
                    <option>Technology</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* PROJECT DETAILS */}
                <div>
                  <label className="text-lg text-gray-700">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project requirements and how we can help you achieve your objectives."
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-600 outline-none"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white py-3.5 rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-95 transition"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* CLOSING */}
      <section className="py-24 bg-[linear-gradient(to_right,#0f172a,#1e1b4b)] text-white">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">
              Build Reliable Technology Together
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              ORIN SYSTEMS partners with organizations to build technology
              systems that are secure, scalable, and built for long-term
              performance. Reach out to start the conversation.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
