import React, { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      </body>
    </html>
  );
}
