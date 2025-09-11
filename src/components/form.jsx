import { useState } from "react";
import { createEmployee } from "../services/api";

export default function Form(){
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [email, setEmail] = useState("");
    const [role_id, setRole_id] = useState("");

    const caremonda = async (e) => {
        e.preventDefault();
        
        const data = {name, document, email, role_id};
    
        try {
            const result = await createEmployee(data);
            console.log("empleado creado", result);
            alert ("Empleado registrado exitosamente");
        } 
        catch (error){
            alert("no se pudo registrar el empleado");
        }
    }; 
    
    
    return (
        <form onSubmit={caremonda}>
            <div>
                <label>Nombre: </label>
                <input 
                    type="text" 
                    value={name} 
                    placeholder="Ingrese Nombre"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Documento: </label>
                <input 
                    type="number" 
                    value={document}
                    placeholder="Ingrese Documento" 
                    onChange={(e) => setDocument(e.target.value)}
                    required
                />
            </div>
             <div>
                <label>Email: </label>
                <input 
                    type="email" 
                    value={email}
                    placeholder="Ingrese Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cargo: </label>
                <input 
                    type="number" 
                    value={role_id}
                    placeholder="Ingrese cargo" 
                    onChange={(e) => setRole_id(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}