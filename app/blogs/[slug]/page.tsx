// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { Blog, blogs } from "@/constants/blogsData";
import GlareCTA from "@/components/shared/GlareCTA";

/**
 * If you don’t have a dedicated Quote component, you can use the one defined below:
 */
function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative border-l-4 border-primary-accent pl-4 italic text-gray-700 my-8">
      <p>&quot;{children}&quot;</p>
    </blockquote>
  );
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogPage({
  params,
}: {
  // In Next.js 15+, params can be a Promise or an object
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog: Blog | undefined = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="relative py-12 mt-42 lg:pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* ───── Title ───── */}
          <h1 className="text-h1 text-gradient mb-4">{blog.title}</h1>

          {/* ───── Meta: date, category, tags ───── */}
          <div className="text-sm text-neutral-500 mb-8">
            <time dateTime={blog.publishDate}>
              {new Date(blog.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {" • "}
            <span className="font-medium text-primary-accent">{blog.category}</span>
            {" • "}
            {blog.tags.map((tag) => (
              <span key={tag} className="inline-block mr-1 last:mr-0">
                #{tag}
              </span>
            ))}
          </div>

          {/* ───── Featured Image ───── */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* ───── Intro Paragraph ───── */}
          <p className="text-paragraph mb-8">{blog.intro}</p>

          {/* ───── Content Blocks ───── */}
          {blog.content.map((block, idx) => {
            if (block.type === "heading") {
              return (
                <h2 key={idx} className="text-2xl font-semibold mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p key={idx} className="text-paragraph mb-6">
                  {block.text}
                </p>
              );
            }
            if (block.type === "image") {
              return (
                <div
                  key={idx}
                  className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden"
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }
            return null;
          })}

          {/* ───── Insert a “Quote” Block ───── */}
          <Quote>
            The perfect collaboration is where art meets functionality—Sneakers that stand out and tell a story.
          </Quote>

          {/* ───── Secondary Image ───── */}
          <div className="relative w-full h-[400px] my-10 rounded-lg overflow-hidden shadow-md">
            <Image
              src={blog.secondaryImage}
              alt={`${blog.title} secondary`}
              fill
              className="object-cover"
            />
          </div>

          {/* ───── Additional Concluding Text ───── */}
          <h2 className="text-2xl font-semibold mb-4">Why These Collabs Matter</h2>
          <p className="text-paragraph mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu purus molestie vulputate. Vivamus vel rhoncus nisl, at ullamcorper dui. Integer non sem nec urna scelerisque dictum. Cras posuere magna risus, id porta purus interdum sed.
          </p>
          <p className="text-paragraph mb-6">
            Etiam vel orci a orci luctus fringilla. Praesent lectus justo, viverra vitae erat sit amet, ultricies suscipit enim. Curabitur rhoncus neque ac nibh efficitur, in cursus lectus aliquet. Nulla facilisi. Aenean nec tellus nec justo luctus dictum id vitae justo.
          </p>
        </div>
        <GlareCTA/>
      </Container>
    </article>
  );
}
