import { API } from "../API";



export const getPolitics = async () => {

    // const token = localStorage.getItem('token');

    const resp = await fetch(`${API}/politics`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true' 
        },
    })
        .then((res) => res.json())
    return resp[0]
}
