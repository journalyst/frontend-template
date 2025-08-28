import ContentLayout from "./components/ContentLayout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="min-h-screen w-full bg-[#eeece8] flex">
      <Sidebar />

      <ContentLayout />
    </main>
  );
}

export default App;
