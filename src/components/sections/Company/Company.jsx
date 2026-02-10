import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import { Cpu, Layers, ShieldCheck } from "lucide-react";
import companyImage from "../../../assets/images/hero/comapny.png";

export default function Company() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#e9eef4] to-[#dfe6ee]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
           

            <h2 className="hero-heading text-3xl md:text-4xl font-semibold leading-tight">
              Engineering Future-Ready Enterprise Systems
            </h2>

            <p className="md:text-lg hero-heading text-gray-700 mt-6 max-w-lg leading-relaxed">
              ORIN SYSTEMS is an engineering-led technology company focused
              on building innovative, future-ready systems for enterprises.
              We translate complex challenges into practical, scalable
              solutions that deliver measurable operational value.
            </p>

            {/* CAPABILITIES */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Cpu className="mt-1 text-gray-800" size={25} />
                <p className=" md:text-lg hero-heading text-gray-600 text-lg">
                  Engineering-driven approach focused on reliability and scale
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="mt-1 text-gray-800" size={25} />
                <p className="md:text-lg hero-heading text-gray-600 text-lg">
                  Scalable platforms designed for real-world enterprise needs
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 text-gray-800" size={25} />
                <p className="md:text-lg hero-heading text-gray-600 text-sm">
                  Secure and future-ready systems built for long-term evolution
                </p>
              </div>
            </div>

            <Link
              to="/who-we-are"
              className="hero-heading inline-flex mt-8 bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-900 transition"
            >
              Learn more about ORIN Systems →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
         <div className="relative">
  <div className="absolute inset-0 bg-black/5 rounded-xl"></div>

  <img
    src={companyImage}
    alt="ORIN Systems team collaboration"
    className="w-full md:h-[640px] h-[400px] rounded-xl object-cover"
  />
</div>


        </div>
      </Container>
    </section>
  );
}
