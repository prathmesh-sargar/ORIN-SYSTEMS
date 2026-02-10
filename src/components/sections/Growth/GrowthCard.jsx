export default function GrowthCard({ image, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-4 items-start hover:shadow-sm transition">
      
      <div className="bg-gray-100 p-3 rounded-md">
        <div className="w-14 h-14 flex items-center justify-center">
          <img src={image} alt={title}  />
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="hero-heading text-gray-600 text-lg mt-2 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}
