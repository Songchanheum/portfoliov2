import React from "react";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport:
    "initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
