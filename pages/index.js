import React, { useState } from "react";
import PrinterSection from "../components/PrinterSection";
import FilterBar from "../components/FilterBar";
import printers from "../data/printers.json";
import feedbacksData from "../data/feedbacks.json";

export default function Home() {
  const [selectedPrinter,setSelectedPrinter] = useState(0);
  const [selectedFilament,setSelectedFilament] = useState("PLA");
  const [feedbacks,setFeedbacks] = useState(feedbacksData);

  const filteredPrinters = printers.filter(p=>{
    const printerMatch = selectedPrinter===0 || p.id===selectedPrinter;
    const filamentMatch = !selectedFilament || p.filamentos.includes(selectedFilament);
    return printerMatch && filamentMatch;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Portal de Configurações 3D</h1>
        <p className="text-gray-700 mt-2">Filtros por impressora e filamento, perfis em abas, feedbacks e downloads.</p>
      </header>

      <FilterBar printers={printers} selectedPrinter={selectedPrinter} setSelectedPrinter={setSelectedPrinter} selectedFilament={selectedFilament} setSelectedFilament={setSelectedFilament}/>

      {filteredPrinters.length>0 ? filteredPrinters.map(p=><PrinterSection key={p.id} printer={p} selectedFilamento={selectedFilament} feedbacks={feedbacks} setFeedbacks={setFeedbacks}/>) : <p className="text-center text-gray-600">Nenhuma impressora encontrada para esse filtro.</p>}
    </div>
  )
}
