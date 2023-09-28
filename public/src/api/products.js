const url = "http://localhost:3000/products";
export const getProducts = async () => {
    try {
        const data = await fetch(url);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}

export const getProduct=async(id)=>{
    try {
        const data = await fetch(`${url}/${id}`);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}
