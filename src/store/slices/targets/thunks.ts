import { API } from "../../../api/API";
import { AppDispatch, AppThunk } from "../../store";
import { setTargets } from "./targets";


export const getTargetsThunks = (): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/targets`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
            });

            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                dispatch(setTargets(data));
            } else {
                console.log('No hay datos disponibles.');
            }
        } catch (error) {
            console.error('Failed to fetch targets:', error);
        }
    };

}

export const postTargetThunks = (target: any): any => {
    return async (dispatch: AppDispatch) => {
        try {

            const response = await fetch(`${API}/targets`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(target)
            });

            const data = await response.json();

            if (data) {
                dispatch(getTargetsThunks());
            } else {
                console.log('No hay datos disponibles.');
            }
        } catch (error) {
            console.error('Failed to fetch targets:', error);
        }
    }
}

export const postTargetsThunks = (targets: any): any => {
    return async (dispatch: any) => {
        try {

            targets.map(async (target: any) => {
                const response = await fetch(`${API}/targets`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true'
                    },
                    body: JSON.stringify(target)
                });

                const data = await response.json();

                if (data) {
                    dispatch(getTargetsThunks());
                } else {
                    console.log('No hay datos disponibles.');
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
}


export const deleteTargetThunk = (id: string): any => {
    return async (dispatch: any) => {
        try {
            const response = await fetch(`${API}/targets/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
            });

            const data = await response.json();

            if (data) {
                dispatch(getTargetsThunks());
            } else {
                console.log('No hay datos disponibles.');
            }

        } catch (error) {
            console.log(error)
        }

    }
}