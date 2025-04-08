import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { addEnvironmentalAspects, deleteEnvironmentalAspects, setEnvironmentalAspects, updateEnvironmentalAspects } from "./environmental-aspects";


export const getEnvironmentalAspectsThunks = (): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/environmental-aspects`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            dispatch(setEnvironmentalAspects(data))
        } catch (error) {
            console.log("Failed to fetch Aspecto Ambiental:", error);

        }
    }
}
//!Tipar
export const postEnvironmentalAspectsThunks = (newEnvironmentalAspect: any): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/environmental-aspects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEnvironmentalAspect)
            });

            const data = await response.json();

            dispatch(addEnvironmentalAspects(data))
        } catch (error) {
            console.log("Failed to fetch Aspecto Ambiental:", error);

        }
    }
}

export const patchEnvironmentalAspectsThunks = (newEnvironmentalAspect: any): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/environmental-aspects/${newEnvironmentalAspect.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEnvironmentalAspect)
            });

            const data = await response.json();

            dispatch(updateEnvironmentalAspects(data))
        } catch (error) {
            console.log("Failed to fetch Aspecto Ambiental:", error);

        }
    }
}

export const deleteEnvironmentalAspectsThunks = (id: string): AppThunk => {
    return async (dispatch) => {
        try {

            const response = await fetch(`${API}/environmental-aspects/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                dispatch(deleteEnvironmentalAspects(id))
            }
        } catch (error) {
            console.log("Failed to delete Aspecto Ambiental:", error);

        }
    }
}
