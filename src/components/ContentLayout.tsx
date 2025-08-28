import { Bell, Maximize } from "lucide-react";

const ContentLayout = () => {
  return (
    <main className="p-12 w-full">
      <section className="flex justify-between items-center w-full">
        <h1 className="text-4xl font-bold font-montserrat mb-4">Analytics</h1>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            className="block w-full bg-gray-200 text-black py-3 px-5 rounded-full "
            placeholder="Search"
          />
          <button className="bg-[#0e1323] text-white py-3 px-5 rounded-full">
            New Company
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 cursor-pointer" />
          <Maximize className="w-6 h-6 cursor-pointer" />
        </div>
      </section>
    </main>
  );
};

export default ContentLayout;
