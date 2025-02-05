import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import preFSYData from "@/data/preFSY.json";


export default function preFSY() {

  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">

      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-blue-600 text-white shadow-md rounded-b-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Pré FSY</h1>
          <h2 className="text-sm opacity-90">
            Lista do que deve ser feito com sua dupla antes do FSY. Contamos com vocês!
          </h2>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {Object.entries(preFSYData).map(([, { topics, description }], index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-lg border border-gray-200 transition-transform transform "
            >
              <AccordionTrigger className="px-4 py-3 flex justify-between items-center text-gray-800 text-lg font-semibold">
                <div className="flex flex-col items-start">
                  <h2 className="text-lg font-bold text-blue-600">Dia {index + 1}</h2>
                  <p className="text-gray-500 text-sm  text-left">{description}</p>
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-4 text-gray-700 bg-gray-50 rounded-b-2xl space-y-3 border-t border-gray-200">
                <ul className="list-decimal pl-5 space-y-2 text-sm">
                  {topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="hover:text-blue-600 transition-colors">
                      {topic}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
}
