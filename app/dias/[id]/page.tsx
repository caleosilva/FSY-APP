export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];
}

import DiaEspecificoClient from "./DiaEspecificoClient"; // Novo componente cliente

export default function DiaEspecificoPage({ params }: { params: { id: string } }) {
  return <DiaEspecificoClient params={params} />;
}
