import { getEmployees } from "../services/api";
import { useState, useEffect } from "react";

export default function Table(){
    
    const [employees, setEmployees] = useState([]);
    const fetchEmployees = async () => {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error){
            console.error("Error al obtener empleados", error);
        }
    };
        useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Email</th>
            <th>Cargo</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employee) => (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.document}</td>
                <td>{employee.email}</td>
                <td>{employee.role?.rol}</td> {/* 👈 accede al rol */}
            </tr>
            ))}
        </tbody>
        </table>
   );

}