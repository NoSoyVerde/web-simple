import React from "react";
import TabButton from "./tab-button";
export default function TabExampleSection() {
    function handleClick(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <section id="tab-section" className='my-12 md:mx-12 mx-44 flex flex-col'>
            <TabButton isSelected={false} onClick={handleClick} children={undefined}></TabButton>
        </section>
    )
       
    
}