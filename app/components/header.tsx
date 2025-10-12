import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center mb-12">
    
      <div className="flex justify-center mb-6">
        <Image
          src="/react-core-concepts.png"
          alt="React core concepts illustration"
          width={80}
          height={80}
          className="drop-shadow-[0_0_10px_rgba(179,136,255,0.6)]"
          priority
        />
      </div>

      
      <h1 className="text-4xl md:text-5xl font-bold text-[#b388ff] tracking-wider font-[var(--font-press-start)] leading-snug">
        Conceptos básicos de React
      </h1>

    
      <p className="text-lg text-gray-300 mt-4 font-[var(--font-geist-sans)]">
        Cuatro conceptos fundamentales para entender React
      </p>
    </header>
  );
}
