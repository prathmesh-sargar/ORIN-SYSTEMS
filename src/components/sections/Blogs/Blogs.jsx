import Container from "../../layout/Container";
import BlogCard from "./BlogCard";
import { blogs } from "./blogData";

export default function Blogs() {
  const featured = blogs.find((b) => b.featured);
  const others = blogs.filter((b) => !b.featured);

  return (
    <section className="py-24 bg-[linear-gradient(to_bottom,#f4f1ff,#e9e4ff,#ddd6fe)]">
      <Container>

        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <h1 className="hero-heading text-3xl md:text-4xl font-semibold">
            Insights & Perspectives
          </h1>

          <p className="md:text-xl hero-heading text-gray-600 mt-4">
            Engineering insights on building scalable systems,
            intelligent platforms, and future-ready enterprise technology.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <BlogCard {...featured}  />
          </div>

          <div className="space-y-6">
            {others.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
