import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/sections/navigation/Nav/Nav";
import StoreProvider from "./StoreProvider";
import NotificationProvider from "./components/ui/Notification/NotificationProvider";
import Notification from "./components/ui/Notification/Notification";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneakers",
  description: "Frontend Mentor: E-commerce product page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable}`}>
        <StoreProvider>
          <NotificationProvider>
            <Nav />
            <main className="pageCont">
              <Notification />
              {children}
            </main>
          </NotificationProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
