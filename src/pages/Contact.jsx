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
import toast from "react-hot-toast";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/client-enquiries/save`;
// console.log("API URL:", API_URL);


const industryOptions = [
  "Aerospace & Defense",
  "Automotive & Mobility",
  "Consumer Goods",
  "Energy & Utilities",
  "Financial Services",
  "Life Sciences & Healthcare",
  "Manufacturing",
  "Mining & Natural Resources",
  "Oil & Gas",
  "Private Equity",
  "Public Sector",
  "Retail",
  "Semiconductor",
  "Telecom & Media Services",
  "Travel, Transport, Logistics & Hospitality",
  "Other",
];

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
    const payload = {
      clientfullname: data.clientfullname,
      companyname: data.companyname,
      clientemail: data.clientemail,
      clientindustrysector: data.clientindustrysector,
      clientcountry: data.clientcountry || null,
      clientphoneno: data.clientphoneno
        ? `${data.countryCode || ""} ${data.clientphoneno}`
        : null,
      clientdesignation: data.clientdesignation || null,
      projectdetails: data.projectdetails,
      enquirychannel: "website",
      clientenquirydate: new Date()
        .toLocaleDateString("en-GB")
        .split("/")
        .join("-"),
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      toast.success(
        "Thank you for your response, our team will reach you within 24 hours"
      );
      reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
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
            {/* LEFT SIDE (UNCHANGED) */}
            <div>
              <h2 className="hero-heading text-3xl font-semibold">
                Get in Touch
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you are exploring a new project, looking for a
                technology partner, or want to learn more about our
                capabilities, our team is ready to assist you.
              </p>

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
                    <p className="text-gray-900 font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS (UNCHANGED) */}
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

            {/* RIGHT SIDE FORM */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 px-8 py-6 text-white">
                <h3 className="text-xl font-semibold">Send Us a Message</h3>
                <p className="text-sm text-white/90 mt-1">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">

                {/* FULL NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    error={errors.clientfullname}
                    {...register("clientfullname", {
                      required: "Full name is required",
                    })}
                  />
                </div>

                {/* COMPANY */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Organization Name *
                  </label>
                  <Input
                    error={errors.companyname}
                    {...register("companyname", {
                      required: "Organization name is required",
                    })}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Business Email Address *
                  </label>
                  <Input
                    type="email"
                    error={errors.clientemail}
                    {...register("clientemail", {
                      required: "Email required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>

                {/* INDUSTRY */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Industry *
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-4 py-3"
                    {...register("clientindustrysector", {
                      required: "Industry is required",
                    })}
                  >
                    <option value="">Select industry</option>
                    {industryOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.clientindustrysector && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.clientindustrysector.message}
                    </p>
                  )}
                </div>

                {/* PHONE OPTIONAL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Number (Optional)
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
                      className="flex-1 border border-gray-300 rounded-md px-4 py-3"
                      {...register("clientphoneno", {
                        pattern: {
                          value: /^[0-9]{7,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                  </div>
                  {errors.clientphoneno && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.clientphoneno.message}
                    </p>
                  )}
                </div>

                {/* COUNTRY OPTIONAL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <Input {...register("clientcountry")} />
                </div>

                {/* DESIGNATION OPTIONAL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Job Title / Designation
                  </label>
                  <Input {...register("clientdesignation")} />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    How Can We Help You? *
                  </label>
                  <textarea
                    rows="5"
                    className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3"
                    {...register("projectdetails", {
                      required: "Message required",
                    })}
                  />
                  {errors.projectdetails && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.projectdetails.message}
                    </p>
                  )}
                </div>

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
    </main>
  );
}
