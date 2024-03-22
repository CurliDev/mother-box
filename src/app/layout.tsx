"use client";

import "./globals.css";
import "./fonts.css";

import { Provider } from "react-redux";
import { store } from "@/app/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <body suppressHydrationWarning={true}>{children}</body>
    </Provider>
  );
}
