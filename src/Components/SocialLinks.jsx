import socialLinks from "@/constants/socialLinks";
import Link from "next/link";

export default function SocialLinks({ alignStart }) {
  return (
    <ul
      className={`w-full flex  items-center ${
        alignStart ? "justify-start" : "justify-center"
      } gap-4`}
    >
      {socialLinks.map(({ link, icon, platform }) => (
        <li className="icon" key={platform}>
          <Link target="_blank" href={link}>
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
