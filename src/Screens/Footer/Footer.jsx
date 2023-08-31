import SocialLinks from "@/Components/SocialLinks";
import { emailID } from "@/constants/socialLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="contact" className="px-4 md:px-9 py-8 bg-gray-800 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Let's get in touch</h1>
      <p className="text-sm text-netural-300">
        For business inquiry please send email to{" "}
        <Link href={`mailto:${emailID}`} target="_blank" className="font-bold">
          {emailID}
        </Link>
      </p>
      <SocialLinks alignStart />
    </section>
  );
}
