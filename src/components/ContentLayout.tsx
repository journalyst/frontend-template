import { Bell, Calendar, Moon } from "lucide-react";

const ContentLayout = () => {
  return (
    <main className="p-12 w-full text-white">
      <section className="flex justify-between items-center w-full">
        <h1 className="text-4xl font-bold font-montserrat mb-4">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 cursor-pointer" />
          <Calendar className="w-6 h-6 cursor-pointer" />
          <Moon className="w-6 h-6 cursor-pointer" />
        </div>
      </section>
    </main>
  );
};

export default ContentLayout;
