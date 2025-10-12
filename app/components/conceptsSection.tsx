import ConceptCard from "./conceptCard";

export default function ConceptsSection() {
  return (
    <section className="bg-[#6b00b3] rounded-2xl p-10 w-full max-w-6xl shadow-lg shadow-purple-900/30 text-center">
      {/* Título dentro del recuadro */}
      <h2 className="text-2xl font-bold mb-10 font-[var(--font-sixtyfour)]">
        Conceptos básicos de React
      </h2>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-[var(--font-geist-sans)]">
        <ConceptCard
          imgSrc="/components.png"
          title="Componentes"
          text="El núcleo de la Interfaz de usuario en React: Composición de la interfaz soportada por múltiples componentes."
        />

        <ConceptCard
          imgSrc="/jsx-ui.png"
          title="JSX"
          text="Crea código del estilo HTML potencialmente dinámico para definir el renderizado final de la página."
        />

        <ConceptCard
          imgSrc="/react-core-concepts.png"
          title="Props"
          text="Haz tus componentes configurables (y reusables) mediante el paso de datos de entrada."
        />

        <ConceptCard
          imgSrc="/state-mgmt.png"
          title="State"
          text="Datos gestionados por React que, con los cambios de valor, provocan el renderizado del componente para actualizar la UI al cambio."
        />
      </div>
    </section>
  );
}
