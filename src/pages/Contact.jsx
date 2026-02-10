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
              secure, scalable, and intelligent technology solutions for
              your organization.
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
                    <p className="text-gray-900 font-medium">
                      +91 9766545100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-indigo-600 mt-1" size={22} />
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="text-gray-900 font-medium">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-10">
                <p className="text-sm text-gray-500 mb-4">
                  Follow Us
                </p>

                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/orinsystems"
                     className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
                    <Linkedin size={18} />
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=61587302525235"
                     className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
                    <Facebook size={18} />
                  </a>

                  <a href="https://x.com/ORIN_SYSTEMS"
                     className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
                    <Twitter size={18} />
                  </a>

                  <a href="https://www.instagram.com/orin_systems"
                     className="p-3 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
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
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

              <h3 className="text-xl font-semibold text-gray-900">
                Send us a message
              </h3>

              <form className="mt-6 space-y-5">

                <div>
                  <label className="text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your requirement..."
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 transition"
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
