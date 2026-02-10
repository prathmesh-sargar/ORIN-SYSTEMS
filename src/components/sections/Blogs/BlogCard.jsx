import { Link } from "react-router-dom";

export default function BlogCard({
  title,
  description,
  image,
  slug,
  featured = false,
}) {
  return (
    <Link
      to={`/blogs/${slug}`}
      className={`group cursor-pointer block ${
        featured ? "" : "flex gap-4"
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]
        ${featured ? "w-full h-[320px]" : "w-28 h-24 flex-shrink-0"}`}
      />

      <div className={featured ? "mt-4" : ""}>
        <h3
          className={`font-semibold leading-snug ${
            featured ? "text-xl" : "text-sm"
          }`}
        >
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
