import { post } from "../services/api";
import Form from "../components/form";

export default function Home(){
    return (
        <div>
            <h1>Registro de Empleado</h1>
                <Form
                    onSubmit={(data) => post(data, "/employees")}
                />
        </div>
    );
}