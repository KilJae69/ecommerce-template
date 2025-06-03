import { Container } from "@/components/shared/Container";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";


export default function NotFound() {

  return (
    <section className="relative py-12 mt-42 lg:pb-24 ">
      <Container className="h-full">
        <div className="flex flex-col size-full justify-center items-center">
          <h1 className="flex text-h2 text-center py-2 leading-[1.5] flex-col gap-2">
            <span className="text-primary-accent text-h1 font-extrabold">
              404
            </span>
            <span className="text-gradient leading-[1.5]">Page Not Found</span>
          </h1>
          <p className="text-paragraph">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <InteractiveHoverButton className="mt-6" href="/">
            Back to Home
          </InteractiveHoverButton>
        </div>
      </Container>
    </section>
  );
}
