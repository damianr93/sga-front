import { API } from "../../../api/API";
import { setPolitics } from "./politics-slice";
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

export const postPoliticsThunks = (id:string, newPoliticts:any): AppThunk => {  //TODO:tipar
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/politics${id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
      });

      console.log(response)

      dispatch(setPolitics(newPoliticts));
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};