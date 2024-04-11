import { Navbar } from "@/components/Nav/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yashveer Bika",
  description: "he makes cool stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center text-black bg-white min-h-screen">
          {/* TODO: loading bar animation */}
          <div className="flex flex-col items-center max-w-[1028px]">
            <div className="h-32 w-screen max-w-[1028px]">
              <Navbar />
            </div>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
