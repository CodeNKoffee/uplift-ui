import Link from "next/link";
import Image from "next/image";

interface Link {
  name: string;
  href: string;
}

interface Section {
  title: string;
  links: Link[];
}

interface FooterProps {
  footerLinks: Section[];
  brandName: string;
  defaultColor: string;
  footerLogo: string;
}

const isExternal = (url: string) => /^https?:\/\//.test(url);
const isAnchorLink = (url: string) => /^#/.test(url);

export default function Footer({ footerLinks, brandName, defaultColor, footerLogo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-framify-black w-full py-8 sm:py-32 flex justify-start sm:justify-between items-start`}>
      <div className="kontainer">
        <div className="row flex flex-col sm:flex-row gap-16 sm:gap-0">
          <ul className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-8 sm:gap-24">
            {footerLinks.map((section, index) => (
              <li key={index} className="flex flex-col">
                <h4 className={`text-left ${defaultColor} font-semibold mb-4`}>{section.title}</h4>
                <ul className="text-left flex flex-col gap-2 items-start justify-start">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={isAnchorLink(link.href) ? `/${link.href}` : link.href}
                        className="block hover:underline text-white"
                        target={isExternal(link.href) ? "_blank" : "_self"}
                        rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="text-left w-full sm:w-1/4 flex flex-col items-center sm:items-start justify-start">
            <Link href="/" className="text-3xl">
              <Image src={footerLogo} alt={`${brandName} logo`} width={100} height={50} />
            </Link>
            <span className="text-xs font-medium mt-4 text-white">
              Copyright &copy; {currentYear} {brandName}.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

