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

      dispatch(setPolitics(data[0]));
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};

export const postPoliticsThunks = (id:string, newIntroduction:string, newPoliticts:string[] ): AppThunk => { 
  return async (dispatch) => {
    try {

      if(!id) {
        await fetch(`${API}/politics}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
          },
          body: JSON.stringify({
            introduction: newIntroduction,
            politics:newPoliticts
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
          politics:newPoliticts
        })
      });

      dispatch(updatePolitics({
        newIntroduction, 
        newPoliticts
      }));
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};


