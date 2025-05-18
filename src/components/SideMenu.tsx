"use client";
import { useState } from "react";
import NavLink from "./NavLink";

const menuItems = [
  { href: "/", label: "ホーム" },
  { href: "/validation", label: "入力チェック" }
];

const SideMenu: React.FC = () => {

  return (
    <div>
      <aside id="default-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </ul>
        </div>
      </aside >
    </div >
  );
};

export default SideMenu;


