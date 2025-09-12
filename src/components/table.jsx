import { get } from "../services/api";
import { useState, useEffect } from "react";
import DeleteButton from "./btonDel";

export default function Table(){

    const url_ = "/employees";
    const url_destroy = "/employees/document";
    
    const [employees, setEmployees] = useState([]);

    // Función para obtener empleados
    const fetchEmployees = async () => {
        try {
            const response = await get(url_);
            setEmployees(response.data);
        } catch (error){
            console.error("Error al obtener empleados", error);
        }
    };

    // Función para actualizar la tabla después de eliminar un empleado
    const deleteSucces = (employeeDocument) => {
        setEmployees(prevEmployee => prevEmployee.filter(employee => employee.document !== employeeDocument));
    };

    // Cargar empleados al montar el componente
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
            <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employee) => (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.document}</td>
                <td>{employee.email}</td>
                <td>{employee.role?.rol}</td>
                <td>
                    <DeleteButton
                        url={url_destroy}
                        document={employee.document}
                        onDelete={deleteSucces}
                    />
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}
