const api_url = "http://127.0.0.1:8000/api";

export async function post(data, $route){
    try {
        const response = await fetch(`${api_url}${$route}`, {
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

export async function get($route){
    try {
        const response = await fetch(`${api_url}${$route}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        if (!response.ok){
            throw new Error("Error al obtener empleados");
        }
        return await response.json();
    } catch (error){
        console.error("Error en la obtencion", error);
        throw error;
    }
}
