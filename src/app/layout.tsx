import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF9F6] text-[#1A1A1A]">{children}</body>
    </html>
  );
}
