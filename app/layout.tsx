import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker App",
  description: "Track your expenses and create a budget. My code along with the YouTube course by Brad Traversy. This will help me with the fundamentals of PrismaORM, Database integration, user management, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
