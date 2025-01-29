import { Separator } from "@/components/ui/separator"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

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
                        <Separator />
                        <p>{activity?.time.split(" - ")[1]}</p>
                    </div>

                    <Separator orientation="vertical" />

                    <div className="w-4/5 flex items-center justify-center">
                        <p className="text-md "> {`${activity?.name}`} </p>
                    </div>
                </div>

            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}
