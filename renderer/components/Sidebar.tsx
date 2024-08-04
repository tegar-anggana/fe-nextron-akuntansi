import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="bg-base-100 pt-3">
      <div>
        <p className="pl-6 text-xs">MAIN</p>
        <ul className="menu w-56 text-base">
          <li>
            <Link
              className={pathname === "/dashboard" ? "active" : ""}
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/dashboard/coa" ? "active" : ""}
              href="/dashboard/coa"
            >
              Chart of Account
            </Link>
          </li>
          <li>
            <Link href="/perusahaan">Perusahaan</Link>
          </li>
          <li>
            <Link href="/sandbox">Sandbox</Link>
          </li>
          <li>
            <Link href="/home">Home Debug</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
