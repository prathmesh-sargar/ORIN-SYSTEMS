import { useParams, useNavigate } from "react-router-dom";
import Container from "../../layout/Container";
import { blogs } from "./blogData";
import { ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return null;

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#f6f8fc] mt-6 rounded-2xl shadow-lg">
      <Container>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition mb-8 cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </button>

        {/* HERO IMAGE */}
        <div className="max-w-5xl mx-auto relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl"
          />

          {/* subtle overlay for consistency */}
          <div className="absolute inset-0 bg-black/5 rounded-2xl"></div>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto mt-10">

          <h1 className=" text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            {blog.title}
          </h1>

          <div className="mt-8 text-gray-700 leading-relaxed space-y-6 whitespace-pre-line text-[16.5px] md:text-[17px]">
            {blog.content}
          </div>

        </div>

      </Container>
    </section>
  );
}
