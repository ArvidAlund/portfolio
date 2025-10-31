import { Geist, Geist_Mono, Caveat_Brush, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import ChatBot from "./components/chatbot/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets:['latin']
})

const caveat  = Caveat_Brush({
  variable: "--font-caveat-brush",
  weight: "400"
})

export const metadata = {
  title: "Arvid Ålund",
  description: "Portfolio website for Arvid Ålund",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body
        className={`${caveat.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <ChatBot/>
      </body>
    </html>
  );
}
