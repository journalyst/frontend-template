import {
  LayoutDashboard,
  BarChart3,
  Folder,
  Users,
  Settings,
  Bell,
  LogOut,
  MoreHorizontal,
} from "lucide-react";
// import { useState } from "react";

const icons = [LayoutDashboard, BarChart3, Folder, Users, Settings, Bell];

const Sidebar = () => {
  // const [currentIconIndex, setCurrentIconIndex] = useState(0);

  return (
    <section className="w-full max-w-32 bg-[#222] py-10 flex flex-col gap-10">
      <div className="text-sm text-center font-bold text-white ">
        Journalyst
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        {icons.map((Icon) => (
          <div
            className={
              "px-8 py-3 rounded-2xl cursor-pointer hover:bg-[#0e1323]"
            }
          >
            <Icon stroke="white" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-10 justify-end items-center grow-1">
        <LogOut stroke="white" className="w-6 h-6 cursor-pointer" />
        <MoreHorizontal stroke="white" className="w-6 h-6 cursor-pointer" />
      </div>
    </section>
  );
};

export default Sidebar;
