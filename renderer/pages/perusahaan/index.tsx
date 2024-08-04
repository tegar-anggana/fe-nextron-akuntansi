import Link from "next/link";
import React from "react";
import HeaderLayout from "../../components/layouts/HeaderLayout";

index.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default function index() {
  return (
    <div>
      <p>perusahaan page</p>
      <Link href="/home">Back to home</Link>
    </div>
  );
}
