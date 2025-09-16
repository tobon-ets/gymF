import { del } from "../services/api";

export default function DeleteButton({ url, document, onDelete }) {

    const deleteBton = async () => {
        try {
            const response = await del(`${url}`, `${document}`);
            console.log(response);

            if (response.status === 200) {
                onDelete(document);  // Actualiza el estado de la tabla
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
