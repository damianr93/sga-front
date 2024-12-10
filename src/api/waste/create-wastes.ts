import { API } from "../API";



export const postWastes = async (data: any) => {
    // const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API}/waste`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, measurement: parseInt(data.cantidad) }),
        });

        if (!response.ok) {

            const errorMessage = await response.text();
            throw new Error(`Error en la solicitud POST: ${errorMessage || response.statusText}`);
        }

        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
};

export const postSpecialWastes = async (data: any) => {
    // const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API}/special-waste`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //   Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ...data, measurement: parseInt(data.cantidad) }),
        });

        if (!response.ok) {

            const errorMessage = await response.text();
            throw new Error(`Error en la solicitud POST: ${errorMessage || response.statusText}`);
        }

        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
};

export const postMetalicos = async (data: any) => {
    // const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API}/metal-waste`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //   Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ...data, measurement: parseInt(data.cantidad) }),
        });

        if (!response.ok) {

            const errorMessage = await response.text();
            throw new Error(`Error en la solicitud POST: ${errorMessage || response.statusText}`);
        }

        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
};

export const postSpecialLiquids = async (data: any) => {
    // const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API}/special-liquids`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //   Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ...data, measurement: parseInt(data.cantidad) }),
        });

        if (!response.ok) {

            const errorMessage = await response.text();
            throw new Error(`Error en la solicitud POST: ${errorMessage || response.statusText}`);
        }

        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
};