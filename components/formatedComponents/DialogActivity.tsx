import { Separator } from "@/components/ui/separator"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import FormFieldView from "./FormFieldView";
import { Activity } from "@/types/activity";


interface DialogActivityProps {
    additionalClass?: string;
    backgroundColor?: string
    activity?: Activity;
    day: string;
}

export default function DialogActivity({
    additionalClass = "",
    activity,
    backgroundColor,
    day
}: DialogActivityProps) {
    const timeForDay = activity?.time[day]; // Obter o horário específico para o dia

    return (
        <Dialog>
            <DialogTrigger>
                <div
                    className={`flex w-full h-32 shadow-lg bg-gray-100 p-4 rounded-xl ${additionalClass}`}
                    style={{ backgroundColor }}
                >
                    {/* Caixa de horário */}
                    <div className="w-1/5 flex flex-col items-center justify-center space-y-2 p-2">
                        <p className="text-lg font-semibold text-gray-700">{timeForDay?.split(" - ")[0]}</p>
                        <Separator className="bg-stone-400 opacity-50 w-full" />
                        <p className="text-lg font-semibold text-gray-700">{timeForDay?.split(" - ")[1]}</p>
                    </div>

                    {/* Separador vertical mais sutil */}
                    <Separator orientation="vertical" className="bg-stone-400 opacity-40 w-[2px]" />

                    {/* Nome da atividade */}
                    <div className="w-4/5 flex items-center justify-center text-center">
                        <p className="text-lg  text-gray-800">{activity?.name}</p>
                    </div>
                </div>
            </DialogTrigger>


            <DialogContent className="w-11/12 sm:max-w-md rounded-lg">
                <DialogHeader className="items-start gap-y-2">
                    <DialogTitle className="">{activity?.name}</DialogTitle>

                    <Separator className="bg-stone-600" />

                    <div className="w-full grid grid-cols-2 gap-8">
                        <FormFieldView label="Local" placeholder={`${activity?.location}`} className=" " />
                        <FormFieldView label="Horário" placeholder={`${timeForDay}`} />
                    </div>

                    <Separator className="bg-stone-600" />

                    <div className="w-full max-h-[70%] overflow-y-auto pr-2">
                        <Accordion type="single" collapsible>
                            {activity?.key_points.map((point, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{point.title ? point.title : "Lista do que precisa ser feito"}</AccordionTrigger>
                                    <AccordionContent className="text-left">
                                        <p>{point.details}</p>

                                        {/* Exibir lista de tarefas (todo) */}
                                        {point.todo && point.todo.length > 0 && (
                                            <div className="mt-2">
                                                <ul className="list-disc pl-5">
                                                    {point.todo.map((task, taskIndex) => (
                                                        <li className="mb-2" key={taskIndex}>{task}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Exibir lista de tarefas (todo) */}
                                        {point.list && point.list.length > 0 && (
                                            <div className="mt-2">
                                                <ul className="list-disc pl-5">
                                                    {point.list.map((task, taskIndex) => (
                                                        <li className="mb-2" key={taskIndex}>{task}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Exibir timeline */}
                                        {point.timeline && point.timeline.length > 0 && (
                                            <div className="">
                                                <ul className="list-disc pl-5 space-y-2">
                                                    {point.timeline.map((item, timelineIndex) => (
                                                        <li key={timelineIndex} className="relative">
                                                            <strong>{item.time}:</strong> {item.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}
