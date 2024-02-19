import ReactQueryProvider from "@/app/components/layout/ReactQueryProvider";
import "./globals.css";

export const metadata = {
  title: "DailyDev",
  description: "Daily Dev Post",
  viewport: "initial-scale=1.0,width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="apple-touch-icon" href="/images/main/main.png" />
        <link rel="apple-touch-icon" href="/images/main/main.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
