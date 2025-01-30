"use client"

import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function Dias() {
  const router = useRouter();

  const handleRedirect = (dia: string) => {
    router.push(`/dias/${dia}`);
  };

  const dias = [
    { id: 1, title: "Dia 1", description: "Filho chora, mãe não vê..." },
    { id: 2, title: "Dia 2", description: "Fé no Pai que esse dia vai!" },
    { id: 3, title: "Dia 3", description: "Ou o dia acaba ou ele acaba comigo." },
    { id: 4, title: "Dia 4", description: "Tá acabando... não acredito :(" },
    { id: 5, title: "Dia 5", description: "Queria mais, porém que bom que acabou rsrs :)" },
  ];


  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">

      {/* Header */}
      <div className="flex flex-col items-start justify-center p-6 bg-white shadow-md ">
        <h1 className="text-xl font-semibold">Dias</h1>
        <h2 className="text-base text-gray-500">
          Fsy 2025 - Sessão Feira de Santana
        </h2>
      </div>

      <div className="flex flex-col flex-1 h-auto p-4 space-y-4">
        {dias.map((dia) => (
          <div
            key={dia.id}
            className="flex items-center justify-between p-6 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100 transition"
            onClick={() => handleRedirect(String(dia.id))}
          >
            <div>
              <h2 className="text-lg font-semibold">{dia.title}</h2>
              <p className="text-gray-500">{dia.description}</p>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
