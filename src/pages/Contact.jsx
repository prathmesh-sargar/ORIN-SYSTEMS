import Container from "../components/layout/Container";

export default function Contact() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="pt-36 pb-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className="hero-heading text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
              Contact Us
            </h1>

            <p className="hero-heading mt-6 text-lg text-gray-600 leading-relaxed">
              Let’s discuss how ORIN SYSTEMS can help you design and build
              secure, scalable, and intelligent technology solutions for your
              organization.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE — CONTACT INFO */}
            <div>
              <h2 className=" hero-heading text-2xl font-semibold text-gray-900">
                Get in Touch
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you are exploring a new project, looking for a technology
                partner, or want to learn more about our capabilities, our team
                is ready to assist you.
              </p>

              <div className="mt-10 space-y-6">

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 font-medium">
                    contact@orinsystems.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900 font-medium">
                    +91 00000 00000
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  <p className="text-gray-900 font-medium">
                    India
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900">
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
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your requirement..."
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </Container>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-20 bg-gray-900 text-white">
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

    </div>
  );
}
