import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import NextTopLoader from "nextjs-toploader";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Piyush Singh",
  description: "Curious Being", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="bg-[rgb(27_26_25/1)] text-[rgb(255_255_255)] flex flex-col min-h-screen"
      >
        <NextTopLoader
          color="rgb(255, 230, 3)"        // blue line
          height={2}          // thin bar
          showSpinner={false} // 🔥 no rounded spinner
          crawl={true}
        />
        <Header/>
        <main
          className="flex-1 max-w-6xl mx-auto w-full px-6 py-10"
        >
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
