import ReactQueryProvider from "@/app/components/layout/ReactQueryProvider";
import "./globals.css";

export const metadata = {
  title: "DailyDev",
  description: "Daily Dev Post",
  viewport:
    "initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  "use client";

  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
