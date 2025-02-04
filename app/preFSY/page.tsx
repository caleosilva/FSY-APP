"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

import preFSYData from "@/data/preFSY.json";


export default function Hoje() {

  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">

      {/* Header */}
      <div className="flex flex-col items-start justify-center p-6 bg-white shadow-md ">
        <h1 className="text-xl font-semibold">Pré FSY</h1>
        <h2 className="text-base text-gray-500">
          Lista do que deve ser feito com sua dupla antes do FSY. Contamos com vocês!
        </h2>
      </div>

      <div className="p-4 space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {Object.entries(preFSYData).map(([, { topics, description }], index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl shadow-md transition-transform "
            >
              <AccordionTrigger className="px-4 py-3 font-medium text-gray-800 text-lg">
                <div className="flex flex-col items-start">
                  <h2 className="text-lg font-semibold text-left">Dia {index + 1}</h2>
                  <p className="text-gray-500 text-base text-left">{description}</p>
                </div>


              </AccordionTrigger>

              <AccordionContent className="p-4 text-gray-700 bg-gray-50 rounded-b-xl space-y-2">
                <ul className="list-decimal pl-5 space-y-2">
                  {topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
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
