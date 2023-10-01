const url = "http://localhost:3000/users";
export const getUser = async (name) => {
    try {
        const data = await fetch(`${url}/name/${name}`);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}
export const getUserById = async (id) => {
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

export const newUser=async(user)=>{
    try {
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    } catch (error) {
        console.log(error);
    }
}