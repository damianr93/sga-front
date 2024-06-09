const api = 'http://localhost:3000';

const urlWaste = `${api}/wastes-data`


export const getWastes = async () => {

    // const token = localStorage.getItem('token');

    const resp = await fetch(urlWaste, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true' 
        },
    })
        .then((res) => res.json())
    return resp
}
