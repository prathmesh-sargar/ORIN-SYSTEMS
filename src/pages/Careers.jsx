import Container from "../components/layout/Container";

export default function Careers() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="pt-36 pb-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className=" hero-heading text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
              Careers at ORIN SYSTEMS
            </h1>

            <p className=" hero-heading mt-6 text-lg text-gray-600 leading-relaxed">
              Build technology that solves real enterprise challenges.
              At ORIN SYSTEMS, we focus on engineering excellence,
              long-term thinking, and meaningful innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20">
        <Container>
          <h2 className=" hero-heading text-2xl font-semibold text-gray-900 mb-12">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering-First Culture",
                desc: "We prioritize strong architecture, clean systems, and disciplined engineering practices over shortcuts.",
              },
              {
                title: "Real-World Impact",
                desc: "Work on systems that operate in real enterprise and industrial environments.",
              },
              {
                title: "Long-Term Growth",
                desc: "We invest in building deep technical expertise and sustainable career growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
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

      {/* WORK AREAS */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className=" hero-heading text-2xl font-semibold text-gray-900 mb-12">
            Areas You Can Work In
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AI & Machine Learning",
              "Cloud & Distributed Systems",
              "Industrial IoT (IIoT)",
              "Enterprise Applications",
              "Cyber Security",
              "Data Engineering & Analytics",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-20">
        <Container>
          <h2 className=" hero-heading text-2xl font-semibold text-gray-900 mb-12">
            Open Positions
          </h2>

          <div className="space-y-4">
            {[
              {
                role: "Frontend Engineer (React)",
                location: "Remote / India",
                type: "Full Time",
              },
              {
                role: "Backend Engineer (Java / Spring)",
                location: "Remote / India",
                type: "Full Time",
              },
              {
                role: "AI/ML Engineer",
                location: "Hybrid",
                type: "Full Time",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {job.role}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-md text-sm">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className=" hero-heading text-2xl font-semibold text-gray-900 mb-12">
            Our Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Application Review",
              "Technical Discussion",
              "Engineering Evaluation",
              "Final Interaction",
            ].map((step, index) => (
              <div key={index}>
                <div className="text-3xl font-semibold text-gray-300">
                  0{index + 1}
                </div>
                <p className="mt-2 text-gray-900 font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="max-w-2xl">
            <h2 className=" hero-heading text-3xl font-semibold">
              Build Systems That Matter
            </h2>
            <p className=" hero-heading mt-6 text-gray-300 leading-relaxed">
              If you enjoy solving complex engineering problems and building
              reliable technology for real-world environments, we would like
              to hear from you.
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
}
