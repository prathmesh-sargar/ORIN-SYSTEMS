import Container from "../components/layout/Container";
import {
  Cpu,
  Lightbulb,
  TrendingUp,
  Cloud,
  ShieldCheck,
  Database,
  ArrowRight,
} from "lucide-react";

export default function Careers() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="pt-36 pb-24 bg-[linear-gradient(to_bottom,#f4f6ff,#eef2ff,#e9efff)]">
        <Container>
          <div className="max-w-3xl">
            <h1 className="hero-heading text-4xl md:text-5xl font-semibold tracking-tight">
              Careers at ORIN SYSTEMS
            </h1>

            <p className="hero-heading mt-6 text-xl text-gray-600 leading-relaxed">
              Build technology that solves real enterprise challenges.
              At ORIN SYSTEMS, we focus on engineering excellence,
              long-term thinking, and meaningful innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* IMAGE BLOCK 1 — CULTURE */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <img
                src="/images/career1.png"
                alt="Engineering collaboration"
                className="w-full h-[420px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10"></div>
            </div>

            <div>
              <h2 className="hero-heading text-3xl font-semibold">
                A Culture Built on Engineering Excellence
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At ORIN SYSTEMS, engineers work on real-world systems that
                require precision, reliability, and long-term thinking.
                We encourage experimentation, continuous learning, and
                ownership in solving complex challenges.
              </p>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our teams collaborate closely across disciplines to design
                scalable solutions that operate in enterprise and industrial
                environments.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24">
        <Container>

          <h2 className="hero-heading text-4xl font-semibold mb-12">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering-First Culture",
                desc: "We prioritize strong architecture, clean systems, and disciplined engineering practices over shortcuts.",
                icon: Cpu,
              },
              {
                title: "Real-World Impact",
                desc: "Work on systems that operate in real enterprise and industrial environments.",
                icon: Lightbulb,
              },
              {
                title: "Long-Term Growth",
                desc: "We invest in building deep technical expertise and sustainable career growth.",
                icon: TrendingUp,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition bg-white"
                >
                  <Icon size={35} className="text-indigo-600 mb-4" />
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

      {/* WORK AREAS */}
      <section className="py-24 bg-gradient-to-b from-[#f7f8ff] to-white">
        <Container>

          <h2 className="hero-heading text-4xl font-semibold mb-12">
            Areas You Can Work In
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AI & Machine Learning", icon: Cpu },
              { name: "Cloud & Distributed Systems", icon: Cloud },
              { name: "Industrial IoT (IIoT)", icon: Database },
              { name: "Enterprise Applications", icon: TrendingUp },
              { name: "Cyber Security", icon: ShieldCheck },
              { name: "Data Engineering & Analytics", icon: Database },
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 hover:shadow-sm transition"
                >
                  <Icon size={35} className="text-indigo-600" />
                  <p className="text-xl font-medium text-gray-900">
                    {area.name}
                  </p>
                </div>
              );
            })}
          </div>

        </Container>
      </section>

      {/* IMAGE BLOCK 2 — ENGINEERING WORK */}
      <section className="py-20 bg-gradient-to-b from-[#f6f7ff] to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="hero-heading text-3xl font-semibold">
                Work on Systems That Scale
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our engineering teams work across AI platforms,
                cloud-native architectures, industrial automation systems,
                and enterprise-grade applications.
              </p>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Every project focuses on solving real operational problems
                and delivering reliable outcomes at scale.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/career2.jpg"
                alt="Engineering work environment"
                className="w-full h-[420px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10"></div>
            </div>

          </div>
        </Container>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24">
        <Container>

          <h2 className="hero-heading text-4xl font-semibold mb-12">
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
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.role}
                  </h3>
                  <p className="text-lg text-gray-600 mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>

                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm flex items-center gap-2">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] text-white">
        <Container>
          <div className="max-w-2xl">
            <h2 className="hero-heading text-4xl font-semibold">
              Build Systems That Matter
            </h2>

            <p className="text-xl hero-heading mt-6 text-gray-300 leading-relaxed">
              If you enjoy solving complex engineering problems and building
              reliable technology for real-world environments, we would like
              to hear from you.
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}
