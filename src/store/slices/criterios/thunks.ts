import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { addCriterio, Criterio, setCriterios, updateCriterio } from "./criterios";


export const getCriteriosThunks = (): AppThunk => {
    return async (dispatch) => {

        try {

            const response = await fetch(`${API}/criterios`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
            });

            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                dispatch(setCriterios(data));
            } else {
                console.log('No hay datos disponibles.');
            }

        } catch (error) {
            console.log(error)
        }

    }
}

export const createCriterioThunk = (criterio: Criterio): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/criterios`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(criterio)
            });

            const data = await response.json();

            if (data) {
                dispatch(addCriterio(data));
                return { success: true, data };
            } else {
                console.log('Error al crear el criterio');
                return { success: false };
            }
        } catch (error) {
            console.log(error);
            return { success: false, error };
        }
    }
}

// Actualizar un criterio existente
export const updateCriterioThunk = (criterio: Criterio): AppThunk => {
    return async (dispatch) => {
        try {
            if (!criterio._id) {
                console.log('El criterio debe tener un ID para actualizarlo');
                return { success: false, error: 'ID no proporcionado' };
            }

            const response = await fetch(`${API}/criterios/${criterio._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(criterio)
            });

            const data = await response.json();

            if (data) {
                dispatch(updateCriterio(data));
                return { success: true, data };
            } else {
                console.log('Error al actualizar el criterio');
                return { success: false };
            }
        } catch (error) {
            console.log(error);
            return { success: false, error };
        }
    }
}