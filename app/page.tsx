import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">
      {/* Header */}
      <div className="flex flex-col items-start justify-center p-6 bg-white shadow-md ">
        <h1 className="text-xl font-semibold">Olá, líder</h1>
        <h2 className="text-base text-gray-500">
          Fsy 2025 - Sessão Feira de Santana
        </h2>
      </div>

      {/* Conteúdo adicional */}
      <div className="flex flex-col items-center text-center p-6 space-y-10">
        {/* Imagem centralizada */}
        <Image
          src="/fsy2.png"
          alt="Apresentação do Software"
          width={300}
          height={200}
          className="rounded-lg shadow-lg"
        />

        <p className="text-sm text-gray-500 italic">
          “Buscai-me em cada pensamento; não duvideis, não temais” — Doutrina e Convênios 6:36.
        </p>


        {/* Parágrafo centralizado */}
        <p className="text-lg text-gray-700 max-w-lg">
          O software tem como objetivo auxiliar na memorização e lembrete dos principais pontos do manual e suas atividades. No entanto, ele não substitui o manual oficial, cujo estudo é indispensável para que esteja preparado para o FSY.</p>

        {/* E-mail do responsável */}
        <p className="text-gray-500 text-sm">
          Para dúvidas e sugestões, entre em contato:
          <a href="mailto:caleosilva75@gmail.com" className="text-blue-500 underline"> caleosilva75@gmail.com</a>
        </p>
      </div>
      
    </div>
  );
}
