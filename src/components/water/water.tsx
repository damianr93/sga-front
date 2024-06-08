import BarGraph from "../bar-graph"
import CartesianTable from "../cartesian-table"
import CollapsibleTable from "../collapsed-table"
import PorcentageCyrcle from "../porcentage-cyrcle"


export const WaterConsumption = () => (
    <>
        <header>
            <h1>
                CONSUMO DE AGUA:
            </h1>
        </header>
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
