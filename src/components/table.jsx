import { get, put } from "../services/api";
import { useState, useEffect } from "react";
import DeleteButton from "./btonDel";
import Form from "./form";
import Modal from "./modal"; 

export default function Table(){

    const url_ = "/employees";
    const url_destroy = "/employees/document";
    
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchEmployees = async () => {
        try {
            const response = await get(url_);
            setEmployees(response.data);
        } catch (error){
            console.error("Error al obtener empleados", error);
        }
    };

    const deleteSucces = (employeeDocument) => {
        setEmployees(prev => prev.filter(e => e.document !== employeeDocument));
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setIsModalOpen(true);
    };

    const handleUpdate = async (data) => {
        try {
        await put(data, `/employees/document`, `${selectedEmployee.document}`);
        setIsModalOpen(false);
        fetchEmployees();
        } catch (error) {
        console.error("Error al actualizar empleado", error);
        }
    };

    return (
        <>
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
                    <button onClick={() => handleEdit(employee)}>Editar</button>
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

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>Editar empleado</h2>
            <Form
            initialData={selectedEmployee}
            onSubmit={handleUpdate}
            />
        </Modal>
        </>
    );
}
