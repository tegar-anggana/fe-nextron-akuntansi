import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function SidebarLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex bg-base-200 grow">
        <Sidebar />
        <div className="pt-2 px-4 w-full">{children}</div>
      </div>
    </div>
  );
}
