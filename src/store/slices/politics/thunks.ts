import { API } from "../../../api/API";
import { setPolitics, updatePolitics } from "./politics-slice";
import { AppThunk } from "../../store";

export const getPoliticsThunks = (): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/politics`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
      });

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        dispatch(setPolitics(data[0]));
      } else {
        console.log('No hay datos disponibles.');
      }
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};

export const postPoliticsThunks = (id: string | null = null, newIntroduction: string, newPoliticts: string[], targets: string[]): AppThunk => {
  return async (dispatch) => {
    try {
      console.log(id, newIntroduction, newPoliticts, targets)

      if (!id) {
        await fetch(`${API}/politics`, {
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

      await fetch(`${API}/politics/${id}`, {
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

      dispatch(updatePolitics({
        newIntroduction,
        newPoliticts,
        targets
      }));
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};


