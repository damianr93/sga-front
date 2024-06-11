import PorcentageCyrcle from "../porcentage-cyrcle"
import { useEffect, useState } from "react";
import { getWater } from "../../api/water/water";
import CollapsibleTable from "../collapsed-table";
import CartesianTable from "../cartesian-table";


export const WaterConsumption = () => {
    const [water, setWater] = useState({})

    useEffect(() => {
        const fetchWastes = async () => {
            try {

                const dataWater = await getWater();
                setWater(dataWater);
                console.log(water)

            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        fetchWastes();
    }, []);


    return (
        <>
            <header>
                <h1>
                    CONSUMO DE AGUA:
                </h1>
            </header>
            <div className="table-container">
                <CollapsibleTable data={water} />
                <PorcentageCyrcle data={water} />
            </div>
            <div className="graph-container">
                <CartesianTable data={water} />
            </div>
        </>

    )

}
