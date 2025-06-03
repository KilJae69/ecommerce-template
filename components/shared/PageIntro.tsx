

import Breadcrumbs from "./Breadcrumbs";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export default function PageIntro({ title }: { title: string }) {
  return (
    <section className="relative py-4 mt-38 md:mt-42 lg:py-11.5 bg-radial-[at_50%_95%] from-primary-accent to-primary">
     
      <Container className="">
        <FadeIn className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold tracking-widest text-white lg:text-5xl">
            {title}
          </h1>
          <Breadcrumbs />
        </FadeIn>
      </Container>
    </section>
  );
}
