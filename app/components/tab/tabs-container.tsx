"use client";
import React, { useState } from "react";
import TabButton from "./tab-button";

type TabKey = "components" | "jsx" | "props" | "state";

const tabContent: Record<TabKey, { title: string; description: string; code?: string }> = {
  components: {
    title: "Components",
    description:
      "Los componentes son bloques reutilizables de UI que pueden recibir props y mantener estado.",
    code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  jsx: {
    title: "JSX/TSX",
    description:
      "JSX es una sintaxis parecida a HTML usada por React para describir la UI. En TSX puedes añadir types.",
    code: `const element = <h1 className={styles.title}>Hello, world!</h1>;`,
  },
  props: {
    title: "Props",
    description:
      "Props son la forma de pasar datos desde un componente padre a un componente hijo.",
    code: `function Greeting({ name }) {
  return <p>Hello, {name}</p>;
}`,
  },
  state: {
    title: "State",
    description:
      "El estado permite a los componentes de React cambiar la salida a lo largo del tiempo en respuesta a eventos y/o respuestas de red.",
    code: `function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};

export default function TabsContainer() {
  const [current, setCurrent] = useState<TabKey>("state");

  const data = tabContent[current];

  return (
    <section className="my-12 md:mx-12 mx-44 flex flex-col">
      <div className="flex justify-center mb-6">
        <TabButton isSelected={current === "components"} onClick={() => setCurrent("components")} ariaLabel="components">components</TabButton>
        <TabButton isSelected={current === "jsx"} onClick={() => setCurrent("jsx")} ariaLabel="jsx">jsx</TabButton>
        <TabButton isSelected={current === "props"} onClick={() => setCurrent("props")} ariaLabel="props">props</TabButton>
        <TabButton isSelected={current === "state"} onClick={() => setCurrent("state")} ariaLabel="state">state</TabButton>
      </div>

      <div className="bg-slate-600/60 p-10 rounded-md">
        <h2 className="text-white text-xl mb-6 font-[var(--font-sixtyfour)]">{data.title}</h2>
        <p className="text-slate-200 mb-6">{data.description}</p>

        <hr className="border-slate-400/40 my-6" />

        {data.code && (
          <pre className="bg-slate-700 p-6 rounded text-slate-100 overflow-x-auto">
            {data.code}
          </pre>
        )}
      </div>
    </section>
  );
}
