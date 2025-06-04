// app/blogs/page.tsx

import {  blogs } from "@/constants/blogsData";
import { Container } from "@/components/shared/Container";
import GlareCTA from "@/components/shared/GlareCTA";
import BlogCard from "@/components/blogs/BlogCard";
import LatestBlogCard from "@/components/blogs/LatestBlogCard";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import BlogsSwiper from "@/components/blogs/BlogsSwiper";

export default function BlogListPage() {
  // Destructure out the 3 newest posts (assumes `blogs` is sorted newest → oldest)
  const [latest1, latest2, latest3, ...rest] = blogs;

  return (
    <section className="relative py-12 mt-42 lg:pb-24">
      <Container>
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-h1 text-gradient mb-4">Discover Our Latest Insights</h1>
          <p className="text-paragraph">
            Dive into expert advice, trend reports, and in‐depth guides to keep
            your sneaker game on point.
          </p>
        </div>

        {/*** Top 3 Featured Layout ***/}
        <FadeInStagger className="flex flex-col gap-8 lg:flex-row">
          {latest1 && (
            <FadeIn direction="right">
              <LatestBlogCard priority blog={latest1} />
            </FadeIn>
          )}

          <div className="flex gap-8 flex-col sm:flex-row lg:flex-col lg:flex-1 lg:min-w-[400px]">
            {latest2 && (
              <FadeIn direction="down" className="size-full flex-1">
                <BlogCard priority  blog={latest2} />
              </FadeIn>
            )}

            {latest3 && (
              <FadeIn direction="up" className="size-full flex-1">
                <BlogCard priority  blog={latest3} />
              </FadeIn>
            )}
          </div>
        </FadeInStagger>

        {/* Divider */}
       <div className="border-t border-neutral-200 my-12 md:my-18" />
        <div className="max-w-3xl space-y-6 mx-auto text-center mb-8">
          <h2 className="text-h2 font-semibold">More Articles</h2>
          <p className="text-paragraph ">
            Explore our full library of posts covering everything from style guides to behind-the-scenes looks.
          </p>
        </div>

        {/*** The Rest of the Blogs ***/}
        {/* {rest.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog: Blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )} */}
        <BlogsSwiper blogs={rest}/>

        <GlareCTA />
      </Container>
    </section>
  );
}
