import Container from "../components/layout/Container";
import {
  Cpu,
  ShieldCheck,
  Lightbulb,
  Target,
  Handshake,
  Users,
} from "lucide-react";

export default function WhoWeAre() {
  const principles = [
    {
      title: "Engineering Excellence",
      desc: "We emphasize strong system architecture, technical rigor, and disciplined execution to deliver reliable and well-engineered solutions.",
      icon: Cpu,
    },
    {
      title: "Reliability & Trust",
      desc: "We design systems organizations can depend on for critical operations, long-term use, and consistent performance.",
      icon: ShieldCheck,
    },
    {
      title: "Purposeful Innovation",
      desc: "We pursue innovation with intent, focusing on solutions that address real challenges and deliver practical value.",
      icon: Lightbulb,
    },
    {
      title: "Value Creation",
      desc: "We solve real business and operational problems with accountability, ownership, and long-term thinking.",
      icon: Target,
    },
    {
      title: "Integrity & Transparency",
      desc: "We operate with honesty, clarity, and accountability in every interaction with clients, partners, and teams.",
      icon: Handshake,
    },
    {
      title: "Collaboration & Ownership",
      desc: "We work as trusted partners, taking responsibility for outcomes and collaborating closely to achieve shared goals.",
      icon: Users,
    },
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-[linear-gradient(to_bottom,#f4f5ff,#eef2ff,#e8efff)] overflow-hidden">
        <div className="absolute -top-40 right-[-120px] w-[400px] h-[400px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <Container>
          <div className="max-w-3xl relative z-10">
            <h1 className="hero-heading text-4xl md:text-5xl font-semibold tracking-tight">
              Who We Are
            </h1>

            <p className="hero-heading mt-6 text-xl text-gray-600">
              Engineering intelligent, secure, and scalable technology systems
              for modern enterprises.
            </p>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-semibold">
                About ORIN SYSTEMS
              </h2>

              <p className="text-lg">
                ORIN SYSTEMS is a technology company specializing in the design
                and engineering of secure, scalable, and intelligent software
                systems for modern enterprises. We deliver AI/ML-driven
                solutions, SaaS platforms, Industrial IoT systems, and
                enterprise-grade infrastructure.
              </p>

              <p className="text-lg">
                Our capabilities span industrial automation, enterprise
                applications, cloud platforms, and data analytics systems,
                enabling organizations to achieve operational visibility and
                improved productivity.
              </p>

              <p className="text-lg">
                At the core of ORIN SYSTEMS is an engineering-first approach,
                emphasizing strong architecture and disciplined execution.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative group">
              <img
                src="/images/comapnypic.png"
                alt="Engineering collaboration"
                className="w-full h-[420px] object-cover rounded-xl transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10"></div>
            </div>

          </div>
        </Container>
      </section>

      {/* IMAGE MESSAGE BLOCK (NEW VISUAL SECTION) */}
      <section className="py-24 bg-gradient-to-b from-[#f7f8ff] to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <img
                src="/images/grow.png"
                alt="Engineering team working"
                className="w-full h-[420px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10"></div>
            </div>

            <div>
              <h2 className="hero-heading text-3xl font-semibold">
                Engineering Systems That Scale With Growth
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our focus is not only building technology but engineering
                systems that remain reliable, adaptable, and scalable as
                organizations evolve. We combine architectural discipline
                with practical execution to solve complex enterprise problems.
              </p>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Every solution is designed with long-term sustainability,
                performance, and operational clarity in mind.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24 bg-gradient-to-b from-[#f5f6ff] to-[#eef2ff]">
        <Container>

          <div className="max-w-2xl mb-14">
            <h2 className="hero-heading text-4xl font-semibold">
              Vision & Principles
            </h2>

            <p className="text-xl text-gray-700 mt-4 leading-relaxed">
              Our work is guided by engineering discipline, long-term thinking,
              and measurable value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 transition hover:shadow-lg hover:-translate-y-1"
                >
                  <Icon size={32} className="text-indigo-600 mb-4" />

                  <h3 className="font-semibold text-xl">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </Container>
      </section>

      {/* CLOSING */}
      <section className="py-24 bg-[linear-gradient(to_right,#0f172a,#1e1b4b)] text-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="hero-heading text-4xl font-semibold">
              Built for Long-Term Impact
            </h2>

            <p className="hero-heading mt-6 text-gray-300 text-xl leading-relaxed">
              ORIN SYSTEMS focuses on building technology that supports
              sustained performance, operational reliability, and continuous
              innovation — systems designed to evolve as organizations grow.
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}
