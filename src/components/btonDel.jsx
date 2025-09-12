import { del } from "../services/api";

export default function DeleteButton({ url, document, onDelete }) {

    const deleteBton = async () => {
        try {
            const response = await del(`${url}`, `${document}`);
            console.log("Respuesta del backend al eliminar:", response);

            if (response.success) {
                onDelete(document); 
            } else {
                console.log("No se pudo eliminar", response.status);
            }
        } catch(error) {
            console.error("Error al eliminar", error);
        }
    };

    return (
        <button onClick={deleteBton} style={{ color: "red" }}>
            Eliminar
        </button>
    );
}
