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
import { useForm } from "react-hook-form";
import { countryCodes } from "../data/countryCodes";

function Input({ error, ...props }) {
  return (
    <div>
      <input
        {...props}
        className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {

    console.log("Form Data:", data);
  
  };

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

              {/* FORM */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
                {/* FULL NAME */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    error={errors.fullName}
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                  />
                </div>

                {/* ORGANIZATION */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Organization Name *
                  </label>
                  <Input
                    id="organization"
                    placeholder="Enter organization name"
                    error={errors.organization}
                    {...register("organization", {
                      required: "Organization name is required",
                    })}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    error={errors.email}
                    {...register("email", {
                      required: "Email required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Number *
                  </label>

                  <div className="flex gap-2 mt-2">
                    <select
                      {...register("countryCode")}
                      className="border border-gray-300 rounded-md px-3 py-3 bg-white"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.name} value={c.dialCode}>
                          {c.name} {c.dialCode}
                        </option>
                      ))}
                    </select>

                    <input
                      id="phone"
                      placeholder="Enter phone number"
                      className="w-[165px] flex-1 border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                      {...register("phone", {
                        required: "Phone number required",
                        pattern: {
                          value: /^[0-9]{7,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* COUNTRY */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country *
                  </label>
                  <Input
                    id="country"
                    placeholder="Enter your country"
                    error={errors.country}
                    {...register("country", {
                      required: "Country is required",
                    })}
                  />
                </div>

                {/* DESIGNATION */}
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title / Designation *
                  </label>
                  <Input
                    id="designation"
                    placeholder="Enter your designation"
                    error={errors.designation}
                    {...register("designation", {
                      required: "Designation required",
                    })}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How Can We Help You? *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Describe your requirement..."
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                    {...register("message", {
                      required: "Message required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-500">
                  All information submitted will be handled in accordance with
                  our confidentiality and data protection standards.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white py-3.5 rounded-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
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
