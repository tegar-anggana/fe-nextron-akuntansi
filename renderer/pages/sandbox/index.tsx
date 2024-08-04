import React from "react";
import SidebarLayout from "../../components/layouts/SidebarLayout";
import ContohButton from "../../components/ContohButton";

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default function index() {
  return (
    <div className="bg-white p-3">
      <ContohButton />
    </div>
  );
}
