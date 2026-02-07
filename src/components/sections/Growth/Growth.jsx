import Container from "../../layout/Container";
import GrowthContent from "./GrowthContent";
import growthImage from "../../../assets/images/gifs/growth-section.mp4";

export default function Growth() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto rounded-lg object-cover"
            >
              <source src={growthImage} type="video/mp4" />
            </video>
          </div>

          {/* RIGHT CONTENT */}
          <GrowthContent />
        </div>
      </Container>
    </section>
  );
}
