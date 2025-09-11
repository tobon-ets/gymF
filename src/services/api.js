const api_url = "http://127.0.0.1:8000/api";

export async function createEmployee(data){
    try {
        const response = await fetch(`${api_url}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok){
            throw new Error("Error de envio de metodo");
        }
        return await response.json();
    } catch (error){
        console.error("Error en creacion", error);
        throw error;
    }
}