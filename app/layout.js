import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Prosper Dynamic Construction - Building Excellence",
  description:
    "Professional construction company specializing in bungalow construction, project management, and design-build services in Shah Alam, Selangor.",
  keywords:
    "construction, bungalow, project management, Shah Alam, Selangor, Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
