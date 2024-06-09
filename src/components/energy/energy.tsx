import { useEffect, useState } from "react"
import BasicTable from "../table"
import getEnergy from "../../api/energy/energy"
import SimpleLineChart from "../catesian-table-basic"


export const Energy = () => {
    const [energy, setEnergy] = useState([])

    useEffect( () => {

        const fetchEnergy = async () => {
            try {

                const energyData = await getEnergy();
                setEnergy(energyData)
            } catch (error) {

                console.error('Error al obtener los datos:', error);
            }
        }

        fetchEnergy()
    }, [])
    

    return (
        <>
            <header><h1>Mediciones de Energia:</h1></header>
            <div className="table-container">
                {
                 energy.length > 0 ? <BasicTable rows={energy}/> : <p>sin datos</p>
                }

            </div>
            <div className="graph-container">
                <SimpleLineChart serie={energy}/>
            </div>
        </>
    )
}
