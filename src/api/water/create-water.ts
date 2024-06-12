import { API } from "../API";


export const postWater = async (data: any) => {
    // const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API}/water`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //   Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ...data, measurement: parseFloat(data.cantidad) }),
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
}

export const postWashWater = async (data: any) => {
    // const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API}/wash-water`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //   Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ...data, measurement: parseFloat(data.cantidad) }),
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
}