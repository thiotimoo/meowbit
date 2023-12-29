import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Meowbit",
    description: "Simple link shortener",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className + " "}>
                <main className="flex-grow min-h-screen flex flex-col items-center justify-between p-24">
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
