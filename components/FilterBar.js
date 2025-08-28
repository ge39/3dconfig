import React from "react";

export default function FilterBar({ printers, selectedPrinter, setSelectedPrinter, selectedFilament, setSelectedFilament }) {
  return (
    <div className="flex justify-center mb-6 space-x-4">
      <select value={selectedPrinter} onChange={e=>setSelectedPrinter(Number(e.target.value))} className="border rounded p-2">
        <option value={0}>Todas as impressoras</option>
        {printers.map(p=><option key={p.id} value={p.id}>{p.nome}</option>)}
      </select>
      <select value={selectedFilament} onChange={e=>setSelectedFilament(e.target.value)} className="border rounded p-2">
        <option value="">Todos os filamentos</option>
        <option value="PLA">PLA</option>
        <option value="PETG">PETG</option>
        <option value="TPU">TPU</option>
        <option value="ABS">ABS</option>
      </select>
    </div>
  );
}

