const api = 'http://localhost:3000';

const url = `${api}/energy`

const getEnergy = async () => {

    // const token = localStorage.getItem('token');

    const resp = await fetch(url, {
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

export default getEnergy