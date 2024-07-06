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
      console.log(data[0]);

      dispatch(setPolitics(data));
    } catch (error) {
      console.error('Failed to fetch politics:', error);
    }
  };
};