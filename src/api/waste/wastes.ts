const api = 'http://localhost:3000';

const urlWaste = `${api}/waste`
const urlSpecialWaste = `${api}/special-waste`
const urlSpecialLiquids = `${api}/special-liquids`
const urlCompressedCarton = `${api}/compressed-cardboard`
const urlWasteMetal = `${api}/metal-waste`

export const getWaste = async () => {

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

export const getWasteSpecial = async () => {

    // const token = localStorage.getItem('token');

    const resp = await fetch(urlSpecialWaste, {
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

export const getSpecialLiquids = async () => {

    // const token = localStorage.getItem('token');

    const resp = await fetch(urlSpecialLiquids, {
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




export const getCompressedCarton = async () => {

    // const token = localStorage.getItem('token');

    const resp = await fetch(urlCompressedCarton, {
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

export const getWasteMetal = async () => {

    // const token = localStorage.getItem('token');

    const resp = await fetch(urlWasteMetal, {
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


