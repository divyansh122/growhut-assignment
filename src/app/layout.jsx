import React from "react";
import "../app/globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 antialiased">{children}</body>
    </html>
  );
}

export default RootLayout;
