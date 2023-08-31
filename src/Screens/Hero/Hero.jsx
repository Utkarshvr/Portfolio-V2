import SocialLinks from "@/Components/SocialLinks";
import Button from "@/Components/common/Button";
import { heroContent } from "@/constants/content";

export default function Hero() {
  return (
    <section
      id="about"
      className="px-4 mt-[10vh] py-20 md:py-15 flex flex-col items-center justify-center gap-6"
    >
      <div className="flex max-w-[700px] flex-col gap-4 items-center justify-center">
        <img
          src="/me.png"
          className="w-20 h-20  md:w-[160px] md:h-[160px] rounded-full"
        />

        <h6 className="text-sm selection:font-bold text-center md:text-2xl text-neutral-200">
          {heroContent["small-headline"]}
        </h6>

        <h1 className="font-bold text-4xl md:text-6xl text-white text-center">
          {heroContent.title}
        </h1>

        <p className="text-sm text-neutral-200 md:text-lg text-center">
          {heroContent.text}
        </p>
      </div>
      <Button isLink download={"Utkarsh CV.pdf"} href={"/Utkarsh CV.pdf"}>
        Download CV
      </Button>
      {/* LINKS */}
      <SocialLinks />
    </section>
  );
}
