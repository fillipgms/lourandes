require("dotenv").config();

import { Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={montserrat.className && "bg-dark text-light"}>
                <Header />
                {children}
            </body>
        </html>
    );
}
