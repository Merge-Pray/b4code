"use client";

import { useState } from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <html lang="en">
      <body>
        {hasStarted ? (
          <>
            <Header />
            <main>{children}</main>
          </>
        ) : (
          <WelcomeScreen onStart={handleStart} />
        )}
      </body>
    </html>
  );
}
