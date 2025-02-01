import { API } from "../../../api/API";
import { AppThunk } from "../../store";
import { setUserLogged } from "./login-slice";

export const loginUserThunk = (username:string, password:string): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password
        })
      });

      const userLogged = await response.json()
      
      if(response.status !== 200){
        throw new Error("Error al logear usuario")  
      }

      dispatch(setUserLogged({userLogged}))

    } catch (error) {
      console.log("error al logear usuario", error);
    }
  };
};
