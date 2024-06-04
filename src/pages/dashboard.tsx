import CustomizedTables from "../components/collapsed-table/collapsed-table"


export const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-nav d-flex flex-column justify-content-center ">
                <div className="img-logo-container">
                    <img src="./src/assets/Nuevo-BOS2.png" alt=""></img>
                </div>
                <div className="d-flex flex-column justify-content-center w-75">
                    <button className="btn btn-primary m-3">ENERGIA</button>
                    <button className="btn btn-primary m-3">AGUA GENERAL</button>
                    <button className="btn btn-primary m-3">AGUA LAVADERO</button>
                    <button className="btn btn-primary m-3">CARTON COMPRIMIDO</button>
                    <button className="btn btn-primary m-3">RESIDUOS</button>
                    <button className="btn btn-primary m-3">RESIDUOS ESPECIALES</button>
                </div>
            </div>
            <div className="dashboard-main">
                <div className="table-container">
                <CustomizedTables/>

                </div>
            </div>
        </div>
    )
}

