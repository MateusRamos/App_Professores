import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const [tab, setTab] = useState("atividades");

  const atividades = [
    {
      id: 1,
      nome: "Projeto IV – Interface...",
      periodo: "2024/2",
      entregas: "3 entregues",
      icon: "📚",
    },
    {
      id: 2,
      nome: "Design e sustentabilidade",
      periodo: "2024/2",
      entregas: "nenhuma entregue",
      icon: "🌀",
    },
    {
      id: 3,
      nome: "Computação gráfica",
      periodo: "2024/2",
      entregas: "1 entregues",
      icon: "🌍",
    },
  ];

  return (
    <div className="bg-[#B7D1D0] min-h-screen">
      <div className="bg-[#118693] m-0 p-5">
        <h1 className="text-xl font-semibold mb-3 text-[white] text-2xl">Olá, Fernando</h1>

        <div className="bg-[#b7e3e0] text-[#118693] p-4 rounded-xl mb-4 shadow">
          <div className="flex justify-between">
            <p className="font-semibold">Fique em dia!</p>
            <p>X</p>
          </div>
          <p className="text-sm">Lembre de atribuir notas às atividades dos seus alunos até 1 de abril.</p>
        </div>

        <div className="flex mb-2 border-b border-gray-300">
          <button className={`flex-1 py-2 text-center font-medium ${ tab === "atividades" ? "border-b-2 border-teal-600 text-teal-700" : "text-gray-500"}`} onClick={() => setTab("atividades")}>
            Atividades
          </button>
          <button className={`flex-1 py-2 text-center font-medium ${tab === "agenda" ? "border-b-2 border-teal-600 text-teal-700" : "text-gray-500"}`}onClick={() => setTab("agenda")}>
            Agenda
          </button>
        </div>
      </div>

      <div className="mb-3 relative">
        <input
          type="text"
          placeholder="Pesquise por disciplina ou aluno"
          className="w-full rounded-full pl-4 pr-10 py-2 border border-gray-300 focus:outline-none"
        />
        <Search className="absolute top-2.5 right-3 text-gray-400" size={18} />
      </div>

      <div className="flex gap-2 mb-4">
        <button className="bg-white text-sm px-3 py-1 rounded-full border border-gray-300">Todas as turmas</button>
        <button className="bg-white text-sm px-3 py-1 rounded-full border border-gray-300">Todos os alunos</button>
      </div>

      <div className="flex flex-col gap-3">
        {atividades.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-xl shadow p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{a.icon}</div>
              <div>
                <p className="font-medium">{a.nome}</p>
                <p className="text-sm text-gray-500">{a.periodo}; {a.entregas}</p>
              </div>
            </div>
            <span className="text-2xl text-gray-400">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
