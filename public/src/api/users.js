const url = "http://localhost:3000/users";
export const getUser = async (name) => {
    try {
        const data = await fetch(`${url}/nombre/${name}`);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}
