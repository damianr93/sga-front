import { useState } from "react"
import { Waste } from "../components/waste/waste"
import { WaterConsumption } from "../components/water/water"
import { Energy } from "../components/energy/energy"

export const Dashboard = () => {
    const [optionSelected, setOptionSelected] = useState('')

    const handleSelectOption = (option:string) => {
        setOptionSelected(option)
    }

    const renderContent = (option:string) => {
        switch (option) {
            case 'Energia':
                return <Energy/>
            break
            case 'Agua':
                return <WaterConsumption/>
            break
            case 'Residuos':
                return <Waste/>
            break
        }
        

    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-nav d-flex flex-column justify-content-center ">
                <div className="img-logo-container">
                    <img src="./src/assets/Nuevo-BOS2.png" alt=""></img>
                </div>
                <div className="d-flex flex-column justify-content-center w-75">
                    <button onClick={() => handleSelectOption('Energia')} className="btn btn-primary m-3">ENERGIA</button>
                    <button onClick={() => handleSelectOption('Agua')} className="btn btn-primary m-3">AGUA</button>
                    <button onClick={() => handleSelectOption('Residuos')} className="btn btn-primary m-3">RESIDUOS</button>
                </div>
            </div>
            <div className="dashboard-main">
                {optionSelected && renderContent(optionSelected)  }
            </div>
        </div>
    )
}


