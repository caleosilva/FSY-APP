"use client"

import DialogActivity from "@/components/formatedComponents/DialogActivity";
import { useActivities } from "@/hooks/useActivities";

export default function Hoje() {
  const activities = useActivities("dia1");

  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">

      {/* Header */}
      <div className="flex flex-col items-start justify-center p-6 bg-white shadow-md ">
        <h1 className="text-xl font-semibold">Hoje</h1>
        <h2 className="text-base text-gray-500">
          Fsy 2025 - Sessão Feira de Santana
        </h2>
      </div>

      <div className="flex flex-col flex-1 h-auto p-4 space-y-4 ">
        {activities.map((activity, index) => (
          <DialogActivity
            key={index}
            activity={activity}
            additionalClass="rounded-lg"
            backgroundColor="#ffffff"
          />
        ))}
      </div>
    </div>
  );
}
