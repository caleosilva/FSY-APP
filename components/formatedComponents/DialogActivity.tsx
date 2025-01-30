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

interface KeyPoint {
    title?: string;
    details?: string;
    todo?: string[];
}

interface Activity {
    time: string;
    name: string;
    location: string;
    key_points: KeyPoint[];
}

interface DialogActivityProps {
    additionalClass?: string;
    backgroundColor?: string
    activity?: Activity;
}

export default function DialogActivity({
    additionalClass = "",
    activity,
    backgroundColor
}: DialogActivityProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <div
                    className={`flex w-full h-32  shadow-md bg-white p-4 ${additionalClass}`}
                    style={{ backgroundColor }}
                >
                    <div className="w-1/5 flex flex-col items-center justify-center space-y-4 p-2">
                        <p>{activity?.time.split(" - ")[0]}</p>
                        <Separator className="bg-stone-400"/>
                        <p>{activity?.time.split(" - ")[1]}</p>
                    </div>

                    <Separator orientation="vertical" className="bg-stone-400"/>

                    <div className="w-4/5 flex items-center justify-center">
                        <p className="text-md "> {`${activity?.name}`} </p>
                    </div>
                </div>

            </DialogTrigger>
            <DialogContent className="w-11/12 sm:max-w-md rounded-lg">
                <DialogHeader className="items-start gap-y-2">
                    <DialogTitle className="">{activity?.name}</DialogTitle>

                    <Separator className="bg-stone-600" />

                    <div className="w-full grid grid-cols-2 gap-8">
                        <FormFieldView label="Local" placeholder={`${activity?.location}`} className=" " />
                        <FormFieldView label="Horário" placeholder={`${activity?.time}`} />
                    </div>

                    <Separator className="bg-stone-600" />

                    <div className="w-full max-h-[70%] overflow-y-auto pr-2">
                        <Accordion type="single" collapsible>
                            {activity?.key_points.map((point, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{point.title ? point.title : "Lista do que precisa ser feito"}</AccordionTrigger>
                                    <AccordionContent className="text-left">
                                        <p>{point.details}</p>
                                        {point.todo && point.todo.length > 0 && (
                                            <div className="mt-2">
                                                <ul className="list-disc pl-5">
                                                    {point.todo.map((task, taskIndex) => (
                                                        <li className="mb-2" key={taskIndex}>{task}</li>
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
