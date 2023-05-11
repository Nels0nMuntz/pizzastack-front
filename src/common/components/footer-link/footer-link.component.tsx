import { PropsWithChildren } from "react";

interface FooterLinkProps {
  href: string;
}

export const FooterLink: React.FC<FooterLinkProps & PropsWithChildren> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline"
    >
      {children}
    </a>
  )
};