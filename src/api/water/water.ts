import { API } from "../API";


const urlWaste = `${API}/water-data`


export const getWater = async () => {

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
