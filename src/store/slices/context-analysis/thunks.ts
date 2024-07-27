import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { setAnalisisContext, updateAnalisisContext } from "./context-analysis-slice";


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

export const postContextAnalysisThunks = (type:string, description:string): AppThunk  => {
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

        dispatch(updateAnalisisContext(newAnalysis));
      

    } catch (error) {
      console.error('Failed to post context analysis:', error);
    }
  };
};


