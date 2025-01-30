import * as React from "react"
import { Label } from "@/components/ui/label"


interface FormFieldViewProps {
    placeholder: string;
    label: string;
    className?: string;
}

export default function FormFieldView({ placeholder, label, className }: FormFieldViewProps) {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <Label className="">{label}</Label>
            <div className="text-sm text-muted-foreground  mt-2">
                {placeholder}
            </div>
        </div>
    )
}