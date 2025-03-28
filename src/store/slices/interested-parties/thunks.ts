import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { setEditForms } from "../edit-forms/edit-slice";
import {
  deleteInterestedParties,
  setInterestedParties,
  updateInterestedParties,
} from "./interested-parties-slice";

export const getInterestedPartiesThunks = (): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/interested-parties`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        dispatch(setInterestedParties(data));
      } else {
        console.log("No hay datos disponibles.");
      }
    } catch (error) {
      console.error("Failed to fetch politics:", error);
    }
  };
};

export const getInterestedPartiesByIdThunks = (id: string): AppThunk => {
  return async () => {
    try {
      const response = await fetch(`${API}/interested-parties/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Failed to fetch context analysis:", error);
      throw error;
    }
  };
};

export const postInterestedPartiesThunks = (
  name: string,
  requirement: string,
  legalRequirement: boolean,
  intExt: string
): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/interested-parties`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          name,
          requirement,
          legalRequirement,
          intExt,
        }),
      });

      const newPartInterested = await response.json();

      if(response){
        dispatch(setEditForms({ from: "" }))
      }

      dispatch(updateInterestedParties(newPartInterested));
    } catch (error) {
      console.error("Failed to post context analysis:", error);
    }
  };
};

export const patchInterestedPartiesThunks = (
  id: string,
  name: string,
  requirement: string,
  legalRequirement: boolean,
  intExt: string
): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/interested-parties/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          name,
          requirement,
          legalRequirement,
          intExt,
        }),
      });

      if(response){
        dispatch(setEditForms({ from: "" }))
      }

      dispatch(updateInterestedParties({ id, name, requirement, legalRequirement, intExt }));
    } catch (error) {
      console.error("Failed to post context analysis:", error);
    }
  };
};

export const deletInterestedPartiesThunks = (id: string): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/interested-parties/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to delete interested parties");
      }

      dispatch(deleteInterestedParties(id));
    } catch (error) {
      console.error("Failed to post context analysis:", error);
    }
  };
};
