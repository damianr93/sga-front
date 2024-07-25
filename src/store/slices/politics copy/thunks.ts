import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { setAnalisisContext, updateAnalisisContext } from "./politics-slice";

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

export const postContextAnalysisThunks = (id: string | null = null, newIntroduction: string, newPoliticts: string[], targets: string[]): AppThunk => {
  return async (dispatch) => {
    try {
      console.log(id, newIntroduction, newPoliticts, targets)

      if (!id) {
        await fetch(`${API}/context-analysis`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
          },
          body: JSON.stringify({
            introduction: newIntroduction,
            politics: newPoliticts,
            targets: targets
          })
        });
      }

      await fetch(`${API}/context-analysis/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
          introduction: newIntroduction,
          politics: newPoliticts,
          targets: targets
        })
      });

      // dispatch(updateAnalisisContext({
      //   newPoliticts,
      //   targets
      // }));
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};


