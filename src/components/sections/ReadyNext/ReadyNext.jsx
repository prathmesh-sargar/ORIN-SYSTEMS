import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import readyImage from "../../../assets/images/corporate.png";

export default function ReadyNext() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#e9eef5] to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="hero-heading text-4xl md:text-5xl font-semibold leading-tight">
              Ready for Now.
              <br />
              Built for What's Next.
            </h2>

            <p className="md:text-lg hero-heading text-gray-700 mt-6 max-w-lg leading-relaxed">
              ORIN SYSTEMS partners with enterprises to turn complex
              technology initiatives into clear, executable outcomes.
              We combine deep engineering expertise, real-world experience,
              and a focused innovation ecosystem to support organizations
              at every stage of transformation.
            </p>

            <p className=" md:text-lg hero-heading text-gray-700 mt-4 max-w-lg leading-relaxed">
              Whether modernizing core systems, building intelligent platforms,
              or improving operational efficiency, we work closely with teams
              to deliver value today while ensuring solutions remain adaptable
              for the future.
            </p>

            <Link
              to="/contact"
              className="hero-heading inline-flex mt-8 bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-900 transition"
            >
              Contact Us →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={readyImage}
              alt="ORIN Systems enterprise collaboration"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
