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
      <div className="flex items-center justify-between p-6 bg-blue-600 text-white shadow-md rounded-b-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Regras</h1>
          <h2 className="text-sm opacity-90">
            Normas e proibições do FSY que devem ser entendidas e passadas aos jovens.
          </h2>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {Object.entries(typedData).map(([, section], index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl shadow-lg border border-gray-200 "
            >
              <AccordionTrigger className="flex justify-between items-center px-4 py-4 bg-gradient-to-r from-blue-50 to-white rounded-t-2xl text-gray-800 font-bold text-lg transition-colors hover:bg-blue-100">
                <div className="space-y-1 text-left">
                  <h2 className="text-lg text-blue-600">{section.titulo}</h2>
                  <p className="text-gray-500 text-sm">{section.descricao}</p>
                </div>
                {/* <ChevronDownIcon className="w-5 h-5 text-blue-500 transition-transform duration-300 group-data-[state=open]:rotate-180" /> */}
              </AccordionTrigger>

              <AccordionContent className="p-4 bg-gray-50 rounded-b-2xl border-t border-gray-200 space-y-3">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                  {section.principais_pontos?.map((item: string, index: string) => (
                    <li key={index} className="hover:text-blue-600 transition-colors">{item}</li>
                  ))}
                  {section.regras?.map((item: string, index: string) => (
                    <li key={index} className="hover:text-blue-600 transition-colors">{item}</li>
                  ))}
                  {section.itens?.map((item: string, index: string) => (
                    <li key={index} className="hover:text-blue-600 transition-colors">{item}</li>
                  ))}
                  {section.armas_proibidas?.map((item: string, index: string) => (
                    <li key={index} className="hover:text-red-500 transition-colors font-medium">{item}</li>
                  ))}
                  {section.outros_itens_proibidos?.map((item: string, index: string) => (
                    <li key={index} className="hover:text-red-500 transition-colors font-medium">{item}</li>
                  ))}
                </ul>

                {section.compromisso && (
                  <p className="mt-2 text-blue-700 font-semibold text-center bg-blue-50 p-2 rounded-md shadow-sm">
                    {section.compromisso}
                  </p>
                )}
                {section.consequencias && (
                  <p className="mt-2 text-red-600 font-bold text-center bg-red-50 p-2 rounded-md shadow-sm">
                    {section.consequencias}
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
