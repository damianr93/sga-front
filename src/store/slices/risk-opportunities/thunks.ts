import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { addRiskOrOpportunities, deleteRiskOrOpportunities, setRiskOrOpportunities, updateRiskOrOpportunities } from "./riskOrOpportunities";


export const getRiskOrOpportunitiesThunks = (): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/risk-and-opportunities`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            dispatch(setRiskOrOpportunities(data))
        } catch (error) {
            console.log("Failed to fetch Riesgos o oportunidades:", error);

        }
    }
}
//!Tipar
export const postRiskOrOpportunitiesThunks = (newRiskOrOpportunities: any): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/risk-and-opportunities`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newRiskOrOpportunities)
            });

            const data = await response.json();

            dispatch(addRiskOrOpportunities(data))
        } catch (error) {
            console.log("Failed to fetch Riesgos o oportunidades:", error);

        }
    }
}

export const patchRiskOrOpportunitiesThunks = (newRiskOrOpportunities: any): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API}/risk-and-opportunities/${newRiskOrOpportunities.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newRiskOrOpportunities)
            });

            const data = await response.json();

            dispatch(updateRiskOrOpportunities(data))
        } catch (error) {
            console.log("Failed to fetch Riesgos o oportunidades:", error);

        }
    }
}

export const deleteRiskOrOpportunitiesThunks = (id: string): AppThunk => {
    return async (dispatch) => {
        try {

            const response = await fetch(`${API}/risk-and-opportunities/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                dispatch(deleteRiskOrOpportunities(id))
            }
        } catch (error) {
            console.log("Failed to delete Riesgos o oportunidades:", error);

        }
    }
}
