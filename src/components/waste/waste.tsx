import { useEffect, useState } from "react"
import BarGraph from "../bar-graph"
import CartesianTable from "../cartesian-table"
import CollapsibleTable from "../collapsed-table"
import PorcentageCyrcle from "../porcentage-cyrcle"
import { getCompressedCarton, getSpecialLiquids, getWaste, getWasteMetal, getWasteSpecial } from "../../api/waste/wastes"



export const Waste = () => {


    useEffect(() => {

        const fetchEnergy = async () => {
            try {





            } catch (error) {

                console.error('Error al obtener multas:', error);
            }
        }

        fetchEnergy()
    }, [])


    return (
        <>
            <header><h1>GESTION DE RESIDUOS:</h1></header>
            <div className="table-container">
                <CollapsibleTable />
                <PorcentageCyrcle />
            </div>
            <div className="graph-container">
                <BarGraph />
                <CartesianTable />
            </div>
        </>
    )
}
