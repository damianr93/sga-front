import { API } from "../../../api/API";
import { setPolitics, updatePolitics } from "./politics-slice";
import { AppThunk } from "../../store";
import { setEditForms } from "../edit-forms/edit-slice";

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

export const postPoliticsThunks = (
  id: string | null = null,
  newIntroduction: string,
  newPoliticts: string[],
): AppThunk => {

  return async (dispatch) => {
    try {

      if (!id) {
        const response = await fetch(`${API}/politics`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
          },
          body: JSON.stringify({
            introduction: newIntroduction,
            politics: newPoliticts,
          })
        });

        if (response) {
          dispatch(setEditForms({ form: "" }))
        }

      }

      const response = await fetch(`${API}/politics/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
          introduction: newIntroduction,
          politics: newPoliticts,
        })
      });

      if (response) {
        dispatch(setEditForms({ form: "" }))
      }

      dispatch(updatePolitics({
        newIntroduction,
        newPoliticts,
      })
      );

    } catch (error) {

      console.error('Failed to fetch politics:', error);

    }
  };
};


