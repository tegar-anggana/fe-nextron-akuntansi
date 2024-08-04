import React from "react";
import SidebarLayout from "../../components/layouts/SidebarLayout";

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default function index() {
  return <div>sandbox page</div>;
}
