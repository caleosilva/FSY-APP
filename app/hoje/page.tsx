import DialogActivity from "@/components/formatedComponents/DialogActivity";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">

      {/* Header */}
      <div className="flex flex-col items-start justify-center p-6 bg-white shadow-md ">
        <h1 className="text-xl font-semibold">Hoje</h1>
        <h2 className="text-base text-gray-500">
          Fsy 2025 - Sessão Feira de Santana
        </h2>
      </div>

      {/* Cards com proporção 1/4, 2/4, 1/4 */}
      <div className="flex flex-col flex-1 h-full p-4  space-y-4 ">
        <DialogActivity
          additionalClass=" flex-[1] shadow-lg rounded-xl p-4"
          backgroundColor="#FDE68A"
        />
      </div>
    </div>
  );
}
