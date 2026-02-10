import Container from "../../layout/Container";
import GrowthContent from "./GrowthContent";
import growthImage from "../../../assets/images/gifs/growth-section.mp4";
export default function Growth() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#e5eaf1] to-[#dbe2ea]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT VIDEO */}
          <div className="relative">
            <div className="absolute inset-0 bg-black/5 rounded-xl"></div>

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full md:h-[760px] h-auto rounded-xl object-cover"
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
