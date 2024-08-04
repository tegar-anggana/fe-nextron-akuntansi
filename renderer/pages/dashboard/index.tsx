import Link from "next/link";
import React from "react";
import SidebarLayout from "../../components/layouts/SidebarLayout";

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default function index() {
  return (
    <div>
      <p>dasbor index page</p>
      <Link href="/home">Back to home</Link>
    </div>
  );
}
