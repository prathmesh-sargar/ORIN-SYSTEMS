import Container from "../../layout/Container";
import BlogCard from "./BlogCard";
import { blogs } from "./blogData";

export default function Blogs() {
  const featured = blogs.find((b) => b.featured);
  const others = blogs.filter((b) => !b.featured);

  return (
    <section className="py-24 bg-gray-50">
      <Container>

        {/* Heading */}
        <h2 className=" hero-heading text-3xl md:text-4xl font-semibold mb-12">
          Latest Highlights
        </h2>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Featured Blog */}
          <div className="lg:col-span-2">
            <BlogCard {...featured} featured />
          </div>

          {/* Side Blogs */}
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
