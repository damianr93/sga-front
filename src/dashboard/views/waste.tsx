import { useEffect, useState } from "react";
import { getWastes } from "../../api/waste/wastes";
import CollapsibleTable from "../components/collapsed-table";
import CartesianTable from "../components/cartesian-table";
import PorcentageCyrcle from "../components/porcentage-cyrcle";

interface Measurement {
    createdAt: string;
    createdBy: string;
    measurement: number;
    id: string;
  }
  
  interface WasteType {
    id: string;
    medidoPor: string;
    serie: number[];
    total: number;
    maximo: number;
    minimo: number;
    promedio: number;
    consumo: number;
    fechaMedicion: string;
    historial: Measurement[];
  }
  
  interface Wastes {
    carton: WasteType;
    metal: WasteType;
    liquido: WasteType;
    especial: WasteType;
    generales: WasteType;
  }
  

export const Waste = () => {
    const [waste, setWaste] = useState<Wastes | null>(null);
  
    useEffect(() => {
      const fetchWastes = async () => {
        try {
          const dataWastes = await getWastes();
          setWaste(dataWastes);
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
  
      fetchWastes();
    }, []);
  
    if (!waste) {
      return <div>Cargando...</div>;
    }
  
    return (
      <>
        <header>
          <h1>GESTION DE RESIDUOS:</h1>
        </header>
        <div className="table-container">
          <CollapsibleTable data={waste as any} />
          <div className="w-50 m-5">
            <h2><b>Cartones y Liquidos:</b></h2>
            <h4>Liquidos Especiales:</h4>
            <li>
              Total: <b>{waste.liquido.total && waste.liquido.total } Lts.</b>
            </li>
            <li>
              Promedio:<b>{waste.liquido.promedio && waste.liquido.promedio } Lts.</b>
            </li>
            <li>
              Máximo:<b>{waste.liquido.maximo  && waste.liquido.maximo } Lts.</b>
            </li>
            <li>
              Mínimo:<b>{waste.liquido.minimo  && waste.liquido.minimo } Lts.</b>
            </li>
  
            <h4>Carton comprimido:</h4>
            <li>
              Total: <b>{waste.carton.total && waste.carton.total} Comp.</b>
            </li>
            <li>
              Promedio:<b>{waste.carton.promedio && waste.carton.promedio} Comp.</b>
            </li>
            <li>
              Máximo:<b>{waste.carton.maximo && waste.carton.maximo} Comp.</b>
            </li>
            <li>
              Mínimo:<b>{waste.carton.minimo && waste.carton.minimo} Comp.</b>
            </li>
          </div>
        </div>
        <div className="graph-container">
          <CartesianTable data={waste} />
          <PorcentageCyrcle data={waste} />
        </div>
      </>
    );
  };
  