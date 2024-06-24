import { API } from "../API";

const CompressedCardboard = async (data:any) => {
    // const token = localStorage.getItem('token');
  
    console.log(data)
    try {
      const response = await fetch(`${API}/compressed-cardboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({...data, measurement: parseInt(data.cantidad)}),
      });
  
      if (!response.ok) {
  
        const errorMessage = await response.text();
        throw new Error(`Error en la solicitud POST: ${errorMessage || response.statusText}`);
      }

      const result = await response.json();
      
      return result;
    } catch (error) {
      throw error;
    }
  };
  
  export default CompressedCardboard;