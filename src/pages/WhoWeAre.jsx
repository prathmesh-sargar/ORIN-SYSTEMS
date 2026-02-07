import Container from "../components/layout/Container";

export default function WhoWeAre() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="pt-40 pb-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className=" hero-heading text-4xl md:text-5xl font-semibold tracking-tight">
              Who We Are
            </h1>

            <p className=" hero-heading mt-6 text-lg text-gray-600">
              Engineering intelligent, secure, and scalable technology systems
              for modern enterprises.
            </p>
          </div>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold text-black">
              About ORIN SYSTEMS
            </h2>

            <p>
              ORIN SYSTEMS is a technology company specializing in the design
              and engineering of secure, scalable, and intelligent software
              systems for modern enterprises. We deliver AI/ML-driven
              solutions, SaaS platforms, Industrial IoT (IIoT) systems,
              advanced digital solutions, and enterprise-grade infrastructure
              that support efficient operations and informed decision-making.
            </p>

            <p>
              Our capabilities span industrial automation, process automation,
              enterprise applications, cloud platforms, and data analytics
              systems. Through these services, organizations achieve greater
              operational visibility, improved productivity, reduced manual
              effort, and actionable insights across complex and high-volume
              environments.
            </p>

            <p>
              At the core of ORIN SYSTEMS is an engineering-first approach. We
              emphasize strong system architecture, clean design principles,
              and disciplined execution to deliver solutions that are reliable,
              secure, and built for long-term use. Our focus is on creating
              technology systems that organizations can depend on for critical
              operations, sustained performance, and continuous innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* VISION & PRINCIPLES */}
      <section className="py-20 bg-gray-50">
        <Container>

          <div className="max-w-2xl mb-12">
            <h2 className=" hero-heading text-3xl font-semibold">
              Vision & Principles
            </h2>
            <p className="text-gray-600 mt-4">
              Our work is guided by engineering discipline, long-term thinking,
              and a commitment to delivering measurable value through
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Engineering Excellence",
                desc: "We emphasize strong system architecture, technical rigor, and disciplined execution to deliver reliable and well-engineered solutions.",
              },
              {
                title: "Reliability & Trust",
                desc: "We design systems organizations can depend on for critical operations, long-term use, and consistent performance.",
              },
              {
                title: "Purposeful Innovation",
                desc: "We pursue innovation with intent, focusing on solutions that address real challenges and deliver practical value.",
              },
              {
                title: "Value Creation",
                desc: "We solve real business and operational problems with accountability, ownership, and long-term thinking.",
              },
              {
                title: "Integrity & Transparency",
                desc: "We operate with honesty, clarity, and accountability in every interaction with clients, partners, and teams.",
              },
              {
                title: "Collaboration & Ownership",
                desc: "We work as trusted partners, taking responsibility for outcomes and collaborating closely to achieve shared goals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className=" hero-heading text-3xl font-semibold">
              Built for Long-Term Impact
            </h2>

            <p className=" hero-heading mt-6 text-gray-600 leading-relaxed">
              ORIN SYSTEMS focuses on building technology that supports
              sustained performance, operational reliability, and continuous
              innovation. Our goal is not only to deliver solutions but to build
              systems that evolve with organizations as they grow.
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}
