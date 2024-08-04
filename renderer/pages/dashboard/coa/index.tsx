import Link from "next/link";
import React from "react";
import SidebarLayout from "../../../components/layouts/SidebarLayout";
import { PlusCircle } from "../../../components/Icons/PlusCircle";
import { MagnifyingGlass } from "../../../components/Icons/MagnifyingGlass";
import { ArrowDownTray } from "../../../components/Icons/ArrowDownTray";
import { ArrowUpTray } from "../../../components/Icons/ArrowUpTray";
import { Printer } from "../../../components/Icons/Printer";
import ChevronDown from "../../../components/Icons/ChevronDown";

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default function index() {
  return (
    <div>
      <div className="w-full">
        <div className="card bg-base-100 w-full shadow-md mb-3">
          <div className="py-4 px-5 flex justify-between items-center">
            <p className="text-xl font-bold font-manrope">Chart of Account</p>
            <div className="flex gap-2">
              <div>
                <button className="btn btn-primary text-base font-bold">
                  <PlusCircle />
                  Tambah Data
                </button>
              </div>
              <div>
                <label className="input input-bordered border-2 border-secondary flex items-center gap-2">
                  <MagnifyingGlass />
                  <input type="text" className="grow" placeholder="Cari" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-md mb-5">
          <div className="py-4 px-5 flex justify-end items-center">
            <div className="flex gap-2">
              <div>
                <button className="btn btn-outline btn-primary font-bold">
                  <ArrowDownTray />
                  Impor
                </button>
              </div>
              <div>
                <button className="btn btn-outline btn-primary font-bold">
                  <ArrowUpTray />
                  Ekspor
                </button>
              </div>
              <div>
                <button className="btn btn-outline btn-secondary font-bold">
                  <Printer />
                  Print
                </button>
              </div>
              <div>
                <label className="input input-bordered border-2 border-secondary flex items-center gap-2">
                  <MagnifyingGlass />
                  <input type="text" className="grow" placeholder="Cari" />
                </label>
              </div>
              <div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-outline btn-secondary font-bold"
                  >
                    Tipe Akun
                    <ChevronDown />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
