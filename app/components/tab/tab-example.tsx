import React from "react";
import TabButton from "./tab-button";

export default function TabExample() {
    return (
        <section id="tab-section" className="my-12 md:mx-12">
            <TabButton children={undefined} onClick={function (): void {
                throw new Error("Function not implemented.");
            } } isSelected={false}/>
            <TabExample/>
        </section>
    )
}