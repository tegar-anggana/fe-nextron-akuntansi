import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function SideBarItem({ label, href, curpath }) {
  return (
    <Link
      className={clsx("hover:bg-accent hover:text-accent-content", {
        active: curpath === href,
      })}
      href={href}
    >
      {label}
    </Link>
  );
}

export default function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Chart of Account", href: "/dashboard/coa" },
    { label: "Perusahaan", href: "/perusahaan" },
    { label: "Sandbox", href: "/sandbox" },
  ];

  return (
    <div className="bg-base-100 pt-3">
      <div>
        <p className="pl-6 text-xs">MAIN</p>
        <ul className="menu w-56 text-base">
          {links.map((e, i) => (
            <li key={i}>
              <SideBarItem curpath={pathname} label={e.label} href={e.href} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
