import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-blue-600 text-white shadow-md rounded-b-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Olá, líder!</h1>
          <h2 className="text-sm opacity-90">
            FSY 2025 • Feira de Santana
          </h2>
        </div>
      </div>


      <div className="flex flex-col items-center text-center p-6 space-y-8 bg-gray-50 rounded-xl shadow-md mx-4 my-6">
        {/* Imagem centralizada */}
        <Image
          src="/fsy2.png"
          alt="Apresentação do Software"
          width={300}
          height={200}
          className="rounded-xl shadow-xl border-2 border-gray-200"
        />

        {/* Citação com destaque */}
        <blockquote className="text-md text-gray-600 italic border-l-4 border-blue-600 pl-4">
          “Buscai-me em cada pensamento; não duvideis, não temais”
          <br />
          <span className="font-semibold text-gray-500">— Doutrina e Convênios 6:36</span>
        </blockquote>

        {/* Parágrafo centralizado com destaque */}
        <p className="text-base text-gray-800 max-w-md leading-relaxed">
          Este software tem o propósito de <span className="font-semibold text-blue-600">apoiar líderes do FSY</span> na revisão dos principais tópicos do manual.
          <br />Embora seja um recurso prático, ele <span className="font-semibold text-red-500">não substitui</span> o estudo do manual oficial, essencial para sua preparação.
        </p>

        {/* E-mail do responsável com botão estilizado */}
        <a
          href="mailto:caleosilva75@gmail.com"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Enviar Sugestões ou Dúvidas
        </a>
      </div>


    </div>
  );
}
