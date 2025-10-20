import React from "react";
import TabButton from "./tab-button";
export default function TabExampleSection() {
    function handleClick(label: string): void {
        // Temporary click handler — logs label to the console
        console.log(`Tab button clicked: ${label}`);
    }

    return (
        <section id="tab-section" className='my-12 md:mx-12 mx-44 flex flex-col'>
            <div className="bg-slate-600/60 p-10 rounded-md">
                <h2 className="text-white text-xl mb-6">State</h2>
                <p className="text-slate-200 mb-6">El estado permite a los componentes de React cambiar la salida a lo largo del tiempo en respuesta a eventos y/o respuestas de red.</p>

                <hr className="border-slate-400/40 my-6" />

                <pre className="bg-slate-700 p-6 rounded text-slate-100 overflow-x-auto">
{`function Counter() {
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
}`}
                </pre>
            </div>

            {/* Bottom button row */}
            <div className="mt-6 flex justify-center">
                <TabButton isSelected={false} onClick={() => handleClick('components')} ariaLabel="components">components</TabButton>
                <TabButton isSelected={false} onClick={() => handleClick('jsx')} ariaLabel="jsx">jsx</TabButton>
                <TabButton isSelected={false} onClick={() => handleClick('props')} ariaLabel="props">props</TabButton>
                <TabButton isSelected={false} onClick={() => handleClick('state')} ariaLabel="state">state</TabButton>
            </div>
        </section>
    )

}