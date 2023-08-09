import React from "react";
import "./globals.css";

export const metadata = {
  title: "소개합니다!",
  description: "포트폴리오 만들었음니다",
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
