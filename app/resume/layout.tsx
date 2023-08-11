import React from "react";
import GithubCal from "./components/GithubCal";
import MeInfo from "./components/MeInfo";
import ToggleInfo from "./components/ToggleInfo";

function Header() {
  return (
    <header>
      <ToggleInfo />
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
