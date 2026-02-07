import GrowthCard from "./GrowthCard";
import { growthCards } from "./growthData";

export default function GrowthContent() {
  return (
    <div>
      <h2 className="hero-heading text-3xl md:text-4xl font-semibold leading-tight">
        Driving Your Growth:
        <br />
        Technology is Our Engine,
        Innovation Our Fuel
      </h2>

      <p className=" hero-heading text-gray-600 mt-5 max-w-lg">
        Whether you're building smarter products, scaling with cloud,
        reimagining the customer experience or unlocking AI-led efficiencies,
        our solutions are built to meet you where you are and take you further.
      </p>

      <div className="mt-8 space-y-5">
        {growthCards.map((card) => (
          <GrowthCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
