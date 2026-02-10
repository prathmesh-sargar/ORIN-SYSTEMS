import Container from "../components/layout/Container";
import {
  Cpu,
  ShieldCheck,
  Blocks,
  Cloud,
  Bot,
  Database,
  Rocket,
} from "lucide-react";

export default function InnovationsLab() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="pt-36 pb-24 bg-[linear-gradient(to_bottom,#f4f6ff,#eef2ff,#e8efff)]">
        <Container>
          <div className="max-w-3xl">
            <h1 className="hero-heading text-4xl md:text-5xl font-semibold tracking-tight">
              Innovations Lab
            </h1>

            <p className="hero-heading mt-6 text-lg text-gray-600 leading-relaxed">
              Transforming ideas into practical, production-ready technology
              solutions through engineering research, experimentation, and
              real-world validation.
            </p>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div>
              <h2 className="hero-heading text-3xl font-semibold">
                Engineering Innovation with Purpose
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                The ORIN SYSTEMS Innovation Lab is where ideas are transformed
                into practical, production-ready technology solutions. It serves
                as a dedicated environment for experimentation, engineering
                research, and the development of next-generation systems.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our Innovation Lab focuses on exploring emerging technologies,
                validating new architectures, and building proof-of-concepts
                that can be scaled into real-world deployments.
              </p>

              {/* IMAGE */}
              <div className="relative mt-10">
                <img
                  src="/images/ino_india2.jpg"
                  alt="Innovation Lab Engineering"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10"></div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 gap-4">
              {[
                "Validate emerging technologies before deployment",
                "Reduce risk in enterprise implementation",
                "Prototype scalable system architectures",
                "Bridge research and production environments",
                "Deliver measurable operational impact",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-r from-white to-[#f4f6ff] border border-gray-200 rounded-xl p-4"
                >
                  <Rocket className="text-indigo-600 mt-1" size={24} />
                  <p className="text-gray-600 text-lg">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-24 bg-gradient-to-b from-[#f7f8ff] to-white">
        <Container>
          <h2 className="hero-heading text-4xl font-semibold mb-12">
            Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Intelligent Automation",
                desc: "AI-driven automation systems designed to improve operational efficiency.",
                icon: Bot,
              },
              {
                title: "Blockchain Solutions",
                desc: "Secure architectures for trust-driven enterprise workflows.",
                icon: Blocks,
              },
              {
                title: "Cyber Security",
                desc: "Security-first engineering ensuring resilience and compliance.",
                icon: ShieldCheck,
              },
              {
                title: "Cloud-Native Platforms",
                desc: "Scalable architectures built for performance and flexibility.",
                icon: Cloud,
              },
              {
                title: "System Modernization",
                desc: "Transforming legacy infrastructure into scalable platforms.",
                icon: Cpu,
              },
              {
                title: "Enterprise Architecture Research",
                desc: "Designing reliable foundations for long-term innovation.",
                icon: Database,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition"
                >
                  <Icon className="text-indigo-600 mb-4" size={32} />

                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* IMAGE BLOCK — ENGINEERING VISUAL */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <img
                src="/images/ino_india.png"
                alt="Engineering innovation work"
                className="w-full h-[420px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10"></div>
            </div>

            <div>
              <h2 className="hero-heading text-3xl font-semibold">
                From Research to Real-World Deployment
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Innovation at ORIN SYSTEMS is driven by real operational
                challenges. Our teams move beyond experimentation to design,
                validate, and deploy systems that operate reliably in enterprise
                environments.
              </p>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Every solution is engineered with scalability, security, and
                long-term adaptability in mind.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* CLOSING */}
      <section className="py-24 bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] text-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="hero-heading text-3xl font-semibold">
              Turning Innovation Into Enterprise Reality
            </h2>

            <p className="hero-heading mt-6 text-gray-300 leading-relaxed">
              Every initiative in the ORIN SYSTEMS Innovation Lab is driven by
              real operational needs. Our goal is not experimentation alone, but
              delivering reliable, secure, and scalable solutions that
              organizations can confidently adopt in production environments.
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}
