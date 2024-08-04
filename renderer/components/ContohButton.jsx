import React from 'react';
import { PlusCircle } from './Icons/PlusCircle';
import { ArrowDownTray } from './Icons/ArrowDownTray';
import { ArrowUpTray } from './Icons/ArrowUpTray';
import { MagnifyingGlass } from './Icons/MagnifyingGlass';
import { Printer } from './Icons/Printer';

export default function ContohButton() {
  return (
    <div className="flex flex-wrap gap-2">
      <div>
        <button className="btn btn-primary">Simpan</button>
      </div>
      <div>
        <button className="btn btn-primary">
          <PlusCircle />
          Tambah Data
        </button>
      </div>
      <div>
        <button className="btn btn-secondary">Secondary</button>
      </div>
      <div>
        <button className="btn btn-outline btn-primary">Batal</button>
      </div>
      <div>
        <button className="btn btn-outline btn-primary">
          <ArrowDownTray />
          Impor
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-primary">
          <ArrowUpTray />
          Ekspor
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-secondary">
          Outline Secondary
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-secondary">
          <MagnifyingGlass />
          Outline Secondary
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-secondary">
          <Printer />
          Print
        </button>
      </div>
      <div>
        <button className="btn btn-accent">Accent Sidebar</button>
      </div>
    </div>
  );
}
