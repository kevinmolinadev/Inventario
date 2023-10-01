const url = "http://localhost:3000/records";
export const getAllRecords = async () => {
    try {
        const data = await fetch(url);
        if (!data.ok) {
            throw new Error("Error al obtener recursos");
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}

export const newRecord = async (record) => {
    try {
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(record)
        })
    } catch (error) {
        console.log(error);
    }
}