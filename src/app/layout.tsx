import type { Metadata } from "next";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Sample List",
  description: "Reactで色々作成した物のサンプルです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="grid grid-cols-12">
          <div className="grid-item col-span-2">
            <SideMenu />
          </div>
          <div className="grid-item col-span-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
