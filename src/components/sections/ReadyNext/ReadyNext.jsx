import Container from "../../layout/Container";
import readyImage from "../../../assets/images/corporate.jpg";

export default function ReadyNext() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className=" hero-heading text-3xl md:text-4xl font-semibold leading-tight">
              Ready for Now.
              <br />
              Built for What's Next.
            </h2>

            <p className=" hero-heading text-gray-600 mt-6 max-w-lg">
              ORIN Systems is committed to using our expertise, experience and
              ecosystem of innovation to empower enterprises on their journeys.
            </p>

            <p className=" hero-heading text-gray-600 mt-4 max-w-lg">
              We harness the power of technology and our people to drive
              impactful outcomes at speed and scale — now and for the long haul.
            </p>

            <button className=" hero-heading mt-8 bg-gray-100 hover:bg-gray-200 transition px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2">
              Learn more about ORIN Systems →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={readyImage}
              alt="Ready for next"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
