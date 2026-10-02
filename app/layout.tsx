import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";


const manrope = Manrope({
  weight:"400",
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Sudeep's Space",
  description: "A tiny portion of the internet that showcases my work, projects and everything I do....",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="rounded-2xl bg-[linear-gradient(135deg,#E8F5FA_0%,#FFF8D9_35%,#FFE99A_100%)] min-h-full flex flex-col">
       <Header/>

        <main>
          {children}
        </main>  
        
        <Footer/>
      </body>
    </html>
  );
}
