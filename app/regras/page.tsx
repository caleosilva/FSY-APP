import data from "@/data/regras.json";
import { DataStructure } from "@/types/activity";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

export default function Regras() {
  const typedData: DataStructure = data;

  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">

      {/* Header */}
      <div className="flex flex-col items-start justify-center p-6 bg-white shadow-md ">
        <h1 className="text-xl font-semibold">Logística</h1>
        <h2 className="text-base text-gray-500">
          Fsy 2025 - Sessão Feira de Santana
        </h2>
      </div>

      {/* Accordion Section */}
      <div className="p-4 space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {Object.entries(typedData).map(([, section], index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl shadow-md transition-transform"
            >
              <AccordionTrigger className="px-4 py-3 font-medium text-gray-800 text-lg">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">{section.titulo}</h2>
                  <p className="text-gray-500 text-base">{section.descricao}</p>
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-4 text-gray-700 bg-gray-50 rounded-b-xl space-y-2">
                <ul className="list-disc pl-5 space-y-2">
                  {section.principais_pontos && section.principais_pontos.map((item: string, index: string) => (
                    <li key={index}>{item}</li>
                  ))}
                  {section.regras && section.regras.map((item: string, index: string) => (
                    <li key={index}>{item}</li>
                  ))}
                  {section.itens && section.itens.map((item: string, index: string) => (
                    <li key={index}>{item}</li>
                  ))}
                  {section.armas_proibidas && section.armas_proibidas.map((item: string, index: string) => (
                    <li key={index}>{item}</li>
                  ))}
                  {section.outros_itens_proibidos && section.outros_itens_proibidos.map((item: string, index: string) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {section.compromisso && (
                  <p className="mt-2 font-semibold text-gray-800">{section.compromisso}</p>
                )}
                {section.consequencias && (
                  <p className="mt-2 font-semibold text-red-600">{section.consequencias}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
