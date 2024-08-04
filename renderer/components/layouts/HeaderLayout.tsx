import React from "react";
import Header from "../Header";

export default function HeaderLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="bg-base-200 grow p-4">{children}</div>
    </div>
  );
}
