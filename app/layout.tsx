import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Piyush Singh",
  description: "Curious Being",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[rgb(27_26_25/1)] text-white min-h-screen flex flex-col">
        <NextTopLoader
          color="rgb(255,230,3)"
          height={2}
          showSpinner={false}
        />

        {/* CONTENT COLUMN */}
        <div className="pl-10 pt-10 max-w-3xl flex-1">
          <Header />

          <main className="mt-16">
            {children}
          </main>
        </div>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
