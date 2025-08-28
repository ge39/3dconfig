import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import FeedbackForm from "./FeedbackForm";
import profiles from "../data/profiles.json";

export default function PrinterSection({ printer, selectedFilament, feedbacks, setFeedbacks }) {
  const [activeTab,setActiveTab] = useState(1);
  const printerProfiles = profiles.map(p=>{
    const filteredFeedbacks = feedbacks.filter(f=>f.printerId===printer.id && f.profileId===p.id && f.filamento===selectedFilament);
    return {...p, feedbacks:filteredFeedbacks};
  });

  return (
    <section className="my-12 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{printer.nome}</h2>
      <div className="mb-4">
        <a href={printer.software_especifico} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mr-4">Software Específico</a>
        {printer.softwares_genericos.map((sw,i)=><a key={i} href={sw.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mr-4">{sw.nome}</a>)}
      </div>

      <div className="flex space-x-4 mb-4">
        {printerProfiles.map(p=><button key={p.id} className={`px-4 py-2 rounded ${activeTab===p.id?'bg-blue-500 text-white':'bg-gray-200'}`} onClick={()=>setActiveTab(p.id)}>{p.nome}</button>)}
      </div>

      {printerProfiles.filter(p=>p.id===activeTab).map(p=>{
        return (
          <div key={p.id}>
            <ProfileCard profile={p} selectedFilamento={selectedFilamento}/>
            <div className="mt-2">
              <h4 className="font-bold mb-1">Feedbacks:</h4>
              {p.feedbacks.length>0 ? <ul className="list-disc list-inside mb-2">{p.feedbacks.map((f,i)=><li key={i}><strong>{f.usuario}:</strong> {f.comentario}</li>)}</ul>:<p className="mb-2 text-gray-600">Sem feedbacks ainda.</p>}
              <FeedbackForm printerId={printer.id} profileId={p.id} filamento={selectedFilament} addFeedback={f=>setFeedbacks([...feedbacks,f])}/>
            </div>
          </div>
        )
      })}
    </section>
  )
}

