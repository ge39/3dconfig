import React, { useState } from "react";

export default function FeedbackForm({ printerId, profileId, filamento, addFeedback }) {
  const [usuario,setUsuario] = useState("");
  const [comentario,setComentario] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!usuario||!comentario) return;
    addFeedback({ printerId, profileId, filamento, usuario, comentario });
    setUsuario(""); setComentario("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 p-2 border-t border-gray-300">
      <input type="text" placeholder="Seu nome" value={usuario} onChange={e=>setUsuario(e.target.value)} className="border rounded p-1 mr-2"/>
      <input type="text" placeholder="Comentário" value={comentario} onChange={e=>setComentario(e.target.value)} className="border rounded p-1 mr-2"/>
      <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Enviar</button>
    </form>
  );
}

