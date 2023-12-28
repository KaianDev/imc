import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "IMC",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-Br">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col ">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
