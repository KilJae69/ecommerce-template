import Link from "next/link";

export default function HeroButton() {
  return (
    <Link
      href="/collections"
      className="group w-fit z-10 relative px-4 md:px-8 py-4 text-3xl font-semibold uppercase tracking-[7px] text-white"
    >
      Shop Now
      <span className="absolute left-[-1%] top-[-5px] -z-10 h-full w-1/2 skew-x-[30deg] bg-primary [transition:all_0.3s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:left-1/2 group-hover:top-0 group-hover:skew-x-0" />
      <span className="absolute left-[51%] top-[5px] -z-10 h-full w-1/2 skew-x-[30deg] bg-primary-accent [transition:all_0.3s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:left-0 group-hover:top-0 group-hover:skew-x-0" />
    </Link>
  );
}
