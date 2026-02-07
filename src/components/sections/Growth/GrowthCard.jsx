export default function GrowthCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-4 items-start hover:shadow-sm transition">
      
      <div className="bg-gray-100 p-3 rounded-md">
        <Icon size={22} className="text-blue-600" />
      </div>

      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}
