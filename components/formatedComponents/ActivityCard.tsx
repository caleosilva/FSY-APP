import { Button } from "@/components/ui/button"

interface ActivityCardProps {
    additionalClass?: string;
    backgroundColor: string
    titulo: string;
}

export default function ActivityCard({
    additionalClass = "",
    titulo,
    backgroundColor
}: ActivityCardProps) {
    return (
        <div
            className={`p-4 flex flex-col justify-between h-full  ${additionalClass}`}
            style={{ backgroundColor }}
        >
            {/* Título no topo */}
            <h3 className="text-xl font-bold">{titulo}</h3>

            {/* Informações e Botão na parte inferior */}
            <div className="mt-auto flex flex-col">
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">{"info1"}</p>
                    <p className="text-sm text-gray-600">{"info2"}</p>
                </div>
                <div className="self-end mt-4">
                    <Button variant="ghost">
                        {"buttonLabel"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
