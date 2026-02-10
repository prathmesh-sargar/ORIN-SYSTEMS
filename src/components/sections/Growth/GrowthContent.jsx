
import GrowthCard from "./GrowthCard";
import { growthSection, growthCards } from "./growthData";

export default function GrowthContent() {

  console.log("GrowthContent rendered",growthCards );
  return (
    <div>
      {/* SECTION HEADING */}
      <h2 className="hero-heading text-3xl md:text-4xl font-semibold leading-tight">
        {growthSection.title}
      </h2>

      {/* SECTION DESCRIPTION */}
      <p className="md:text-lg hero-heading text-gray-700 mt-5 max-w-lg leading-relaxed">
        {growthSection.description}
      </p>

      {/* CARDS */}
      <div className="mt-8 space-y-5">
        {growthCards.map((card) => (
          <GrowthCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
