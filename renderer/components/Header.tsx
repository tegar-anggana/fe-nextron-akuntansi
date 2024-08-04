import React from "react";

export default function Header() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl border-b-2 border-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">FDPJ Solution</a>
        </div>
        <div className="flex-none gap-2">
          <div className="text-right">
            <p className="text-lg font-bold">Rafi Fadhlan</p>
            <p className="text-sm">IT Specialist</p>
          </div>
          <div className="dropdown dropdown-end flex items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full flex items-center">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-44 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
