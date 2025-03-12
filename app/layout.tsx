import type { Metadata } from "next";
import "./globals.css";
import 'easymde/dist/easymde.min.css';
import { Toaster } from "@/components/ui/sonner";




export const metadata: Metadata = {
  title: "Pitchify",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
