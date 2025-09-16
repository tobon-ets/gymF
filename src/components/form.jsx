import { useState, useEffect } from "react";
import Notification from "./utils/notification";

export default function Form({ initialData = null, onSubmit }) {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRole_id] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDocument(initialData.document || "");
      setEmail(initialData.email || "");
      setRole_id(initialData.role_id || "");
    }else {
      setName("");
      setDocument("");
      setEmail("");
      setRole_id("");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    const data = { name, document, email, role_id };

    try {
      const response = await onSubmit(data);
      console.log(response);

      if (response.status === 201){
        setMessage(response.message);
        setMessageType("success"); 
        setIsLoading(false);
        
        setName("");
        setDocument("");
        setEmail("");
        setRole_id("");
      } else {
        setMessage(response?.message || "Ocurrió un error inesperado");
        setMessageType("error");
      }
    } catch (error) {
        const backendMessage = error.data?.message || "Hubo un error de validación o de red.";
        setMessage(backendMessage);
        setMessageType("error");
      } finally {
        setIsLoading(false);
    } 
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>
      <div>
        <label>Documento: </label>
        <input value={document} onChange={(e) => setDocument(e.target.value)} required/>
      </div>
      <div>
        <label>Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      <div>
        <label>Cargo: </label>
        <input value={role_id} onChange={(e) => setRole_id(e.target.value)} required/>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando..." : initialData?.id ? "Actualizar" : "Enviar"}
      </button>
    </form>
    
        <Notification 
        message={message} 
        type={messageType} 
        onClose={() => setMessage("")}
      />
    </div>
  );
}