import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: Props) => {
  return (
    <li>
      <Link href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">{label}</Link>
    </li>
  );
};

export default NavLink;
