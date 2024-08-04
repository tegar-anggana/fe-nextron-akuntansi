import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="p-3">
      <h1 className="text-2xl">Navigation</h1>
      <ul>
        <li>
          <Link href="/dashboard">Dasbor</Link>
        </li>
        <li>
          <Link href="/dashboard/coa">Dasbor - COA</Link>
        </li>
        <li>
          <Link href="/perusahaan">Perusahaan</Link>
        </li>
        <li>
          <Link href="/sandbox">Sandbox</Link>
        </li>
      </ul>
    </div>
  );
}
