import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { setEditForms } from "../edit-forms/edit-slice";
import { deleteAnalisisContext, setAnalisisContext, updateAnalisisContext } from "./context-analysis-slice";


export const getContextAnalysisThunks = (): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/context-analysis`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
      });

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        dispatch(setAnalisisContext(data));
      } else {
        console.log('No hay datos disponibles.');
      }
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};

export const getContextAnalysisByIdThunks = (id: string): AppThunk => {
  return async () => {
    try {
      const response = await fetch(`${API}/context-analysis/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Failed to fetch context analysis:', error);
      throw error;
    }
  };
};

export const postContextAnalysisThunks = (type: string, description: string): AppThunk => {
  return async (dispatch) => {
    try {

      const response = await fetch(`${API}/context-analysis`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
          type,
          description
        })
      });

      const newAnalysis = await response.json();

      if(response) {
        dispatch(setEditForms({ from: ""}))
      }

      dispatch(updateAnalisisContext(newAnalysis));


    } catch (error) {
      console.error('Failed to post context analysis:', error);
    }
  };
};

export const patchContextAnalysisThunks = (id: string, type: string, description: string): AppThunk => {
  return async (dispatch) => {
    try {

      const response = await fetch(`${API}/context-analysis/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
          type,
          description
        })
      });

      if(response) {
        dispatch(setEditForms({ from: ""}))
      }

      dispatch(updateAnalisisContext({ id, type, description }));


    } catch (error) {
      console.error('Failed to post context analysis:', error);
    }
  };
};

export const deleteContextAnalysisThunks = (id: string): AppThunk => {
  return async (dispatch) => {
    try {

      await fetch(`${API}/context-analysis/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
      });

      dispatch(deleteAnalisisContext(id));


    } catch (error) {
      console.error('Failed to post context analysis:', error);
    }
  };
};

