import Link from "next/link";
import React from "react";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import { PlusCircle } from "../../components/Icons/PlusCircle";
import { MagnifyingGlass } from "../../components/Icons/MagnifyingGlass";

index.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default function index() {
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-md mb-5">
        <div className="py-4 px-5 flex justify-between items-center">
          <p className="text-lg font-bold border-l-4 border-l-primary pl-3">
            Data Perusahaan
          </p>
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
                <input
                  type="text"
                  className="grow"
                  placeholder="Cari Data Perusahaan"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-start">
        <Link href="/dashboard/coa">
          <div className="rounded-xl bg-base-100 w-64 shadow-md cursor-pointer">
            <div className="p-4 pb-0">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-lg"
              />
            </div>
            <div className="py-3">
              <p className="text-sm font-bold text-center">
                PT Future Digital Product Jaya
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
