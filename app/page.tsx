import Header from "./components/header";
import ConceptsSection from "./components/conceptsSection";
import TabsContainer from "./components/tab/tabs-container";
import Dropdown from "./components/dropdown";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-white">
      <Header />
      <Dropdown menuText="Hola" />
       <Dropdown menuText="Adios" />

      <ConceptsSection />
      <TabsContainer />
    </main>
  );
}
