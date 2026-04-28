"use client";

import { Home, Grid, Settings, ShoppingBag } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-white border-r flex flex-col items-center py-6 gap-6">
      <div className="w-8 h-8 bg-black rounded-md" />

      <NavIcon icon={<Home size={18} />} />
      <NavIcon icon={<Grid size={18} />} />
      <NavIcon icon={<Settings size={18} />} />
      <NavIcon icon={<ShoppingBag size={18} />} />
    </div>
  );
}

function NavIcon({ icon }) {
  return (
    <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      {icon}
    </div>
  );
}
