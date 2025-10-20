"use client";
import React, { useState } from "react";
import TabButton from "./tab-button";

export default function TopTabs() {
  const [selected, setSelected] = useState<string>("state");

  function handleClick(label: string) {
    setSelected(label);
    console.log(`Top tab clicked: ${label}`);
  }

  return (
    <div className="mt-4 flex gap-2">
      <TabButton isSelected={selected === "components"} onClick={() => handleClick("components")} ariaLabel="components">Components</TabButton>
      <TabButton isSelected={selected === "jsx"} onClick={() => handleClick("jsx")} ariaLabel="jsx">JSX/TSX</TabButton>
      <TabButton isSelected={selected === "props"} onClick={() => handleClick("props")} ariaLabel="props">Props</TabButton>
      <TabButton isSelected={selected === "state"} onClick={() => handleClick("state")} ariaLabel="state">State</TabButton>
    </div>
  );
}
