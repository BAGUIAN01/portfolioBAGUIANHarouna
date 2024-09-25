import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Sidebar } from "@/components/sidebar";
import { PortfolioNavbar } from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen overflow-hidden  font-sans flex flex-row text-white bg-smoky_black antialiased",
          fontSans.variable
        )}
      >
     
       <Sidebar />
        <main className="mx-10 mt-10 overflow-hidden flex flex-col rounded-lg border-md bg-eerie-black-2 w-full">
          <ScrollArea className="h-screen">
            <PortfolioNavbar />
            <div className="p-6">
              {children}
            </div>
          </ScrollArea>
        </main>
   
      </body>
    </html>
  );
}
