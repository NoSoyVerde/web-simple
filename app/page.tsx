import Header from "./components/header";
import ConceptsSection from "./components/conceptsSection";
import TabsContainer from "./components/tab/tabs-container";
import Dropdown from "./components/dropdown";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-white">
      <Header />

      <div className="w-full bg-[#6b00b3] h-14 flex justify-center items-stretch">
        <div className="w-full bg-[#6b00b3] h-14 flex justify-center items-stretch gap-110">
          <Dropdown menuText="MenuLeft" />
          <Dropdown menuText="MenuRight" />
        </div>
      </div>

      <br />

      <ConceptsSection />
      <TabsContainer />
    </main>
  );
}
