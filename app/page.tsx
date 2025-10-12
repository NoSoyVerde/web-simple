import Header from "./components/header";
import ConceptsSection from "./components/conceptsSection";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-white">
      <Header />
      <ConceptsSection />
    </main>
  );
}
