import React from "react";

export default function ProfileCard({ profile, selectedFilament }) {
  const config = profile.filamentos[selectedFilament];
  const handleDownload = ()=>{
    const json = JSON.stringify({perfil:profile.nome,filamento:selectedFilament,config},null,2);
    const blob = new Blob([json],{type:"application/json"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${profile.nome}-${selectedFilament}.json`;
    link.click();
  }

  return (
    <div className="border rounded-lg p-4 shadow-lg m-2 max-w-sm bg-gray-50">
      <h3 className="text-lg font-bold mb-2">{profile.nome}</h3>
      <p><strong>Camada:</strong> {config.camada}</p>
      <p><strong>Preenchimento:</strong> {config.preenchimento}</p>
      <p><strong>Velocidade:</strong> {config.velocidade}</p>
      <p><strong>Temperatura:</strong> {config.temperatura}</p>
      {config.paredes && <p><strong>Paredes:</strong> {config.paredes}</p>}
      <p className="mb-2">{profile.descricao}</p>
      <div className="mb-2"><strong>Pontos Fortes:</strong><ul className="list-disc list-inside">{profile.pros.map((p,i)=><li key={i}>{p}</li>)}</ul></div>
      <div className="mb-2"><strong>Pontos Fracos:</strong><ul className="list-disc list-inside">{profile.cons.map((c,i)=><li key={i}>{c}</li>)}</ul></div>
      <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Baixar Configuração</button>
    </div>
  )
}

