import Image from "next/image";

type ConceptCardProps = {
  imgSrc: string;
  title: string;
  text: string;
};

export default function ConceptCard({ imgSrc, title, text }: ConceptCardProps) {
  return (
    <div className="flex flex-col items-center text-white px-2">
      <Image
        src={imgSrc}
        alt={title}
        width={80}
        height={80}
        className="mb-4 drop-shadow-lg"
      />
      <h3 className="text-lg font-bold mt-2 mb-2">{title}</h3>
      <p className="text-sm text-gray-200 leading-relaxed text-center">
        {text}
      </p>
    </div>
  );
}
