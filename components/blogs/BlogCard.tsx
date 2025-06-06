import { Blog } from "@/constants/blogsData";
import Image from "next/image";
import Link from "next/link";
import { TbArrowBigRightLines } from "react-icons/tb";

export default function BlogCard({
  className,
  blog,
  priority = false
}: {
  className?: string;
  blog: Blog;
  priority?:boolean
}) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={`group relative size-full select-none block pb-8 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          priority={priority}
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4 bg-white">
        <h2 className="text-2xl font-semibold mb-2 line-clamp-2 group-hover:text-primary-accent ">
          {blog.title}
        </h2>
        <p className="text-sm text-neutral-500 mb-2">
          {new Date(blog.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
          {" • "}
          <span className="text-primary-accent">{blog.category}</span>
        </p>
        <p className="text-base text-neutral-600 line-clamp-2">{blog.intro}</p>
      </div>

      <span className="absolute flex items-center gap-2 -translate-x-[200px] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 left-3 bottom-3 text-primary-accent">Read More
        <TbArrowBigRightLines />
      </span>
    </Link>
  );
}
