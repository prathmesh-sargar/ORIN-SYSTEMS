import Container from "../components/layout/Container";

export default function InnovationsLab() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className=" hero-heading text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
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

      {/* ABOUT SECTION */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className=" hero-heading text-2xl font-semibold text-gray-900">
                Engineering Innovation with Purpose
              </h2>

              <p className= "mt-6 text-gray-600 leading-relaxed">
                The ORIN SYSTEMS Innovation Lab is where ideas are transformed
                into practical, production-ready technology solutions. It serves
                as a dedicated environment for experimentation, engineering
                research, and the development of next-generation systems that
                address complex enterprise and industrial challenges.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our Innovation Lab focuses on exploring emerging technologies,
                validating new architectures, and building proof-of-concepts
                that can be scaled into real-world deployments. We collaborate
                closely with clients and partners to prototype solutions, test
                feasibility, and reduce implementation risks before full-scale
                adoption.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className=" hero-heading text-lg font-semibold text-gray-900">
                Why Innovation Lab Exists
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600">
                <li>• Validate emerging technologies before deployment</li>
                <li>• Reduce risk in large-scale enterprise implementation</li>
                <li>• Prototype scalable system architectures</li>
                <li>• Bridge research and production environments</li>
                <li>• Deliver measurable operational impact</li>
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className=" hero-heading text-2xl font-semibold text-gray-900 mb-12">
            Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Intelligent Automation",
                desc: "AI-driven automation systems designed to improve operational efficiency and reduce manual processes.",
              },
              {
                title: "Blockchain Solutions",
                desc: "Secure and transparent architectures for trust-driven enterprise workflows and data exchange.",
              },
              {
                title: "Cyber Security",
                desc: "Security-first engineering practices ensuring resilience, compliance, and system integrity.",
              },
              {
                title: "Cloud-Native Platforms",
                desc: "Modern scalable architectures built for performance, flexibility, and distributed systems.",
              },
              {
                title: "System Modernization",
                desc: "Transforming legacy infrastructure into scalable, future-ready technology platforms.",
              },
              {
                title: "Enterprise Architecture Research",
                desc: "Designing reliable system foundations for long-term enterprise growth and innovation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* INNOVATION APPROACH */}
      <section className="py-20">
        <Container>
          <h2 className=" hero-heading text-2xl font-semibold text-gray-900 mb-12">
            Our Innovation Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Research & Exploration",
              "Architecture Validation",
              "Prototype Development",
              "Enterprise Deployment",
            ].map((step, index) => (
              <div key={index}>
                <div className="text-3xl font-semibold text-gray-300">
                  0{index + 1}
                </div>
                <h3 className="mt-2 font-medium text-gray-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className=" hero-heading text-3xl font-semibold">
              Turning Innovation Into Enterprise Reality
            </h2>

            <p className=" hero-heading mt-6 text-gray-300 leading-relaxed">
              Every initiative in the ORIN SYSTEMS Innovation Lab is driven by
              real operational needs. Our goal is not experimentation alone,
              but delivering reliable, secure, and scalable solutions that
              organizations can confidently adopt in production environments.
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
}
