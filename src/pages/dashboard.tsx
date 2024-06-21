import { useState } from 'react'
import { Waste } from '../components/waste/waste'
import { WaterConsumption } from '../components/water/water'
import { Energy } from '../components/energy/energy'
import {useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const [optionSelected, setOptionSelected] = useState('');
    const navigate = useNavigate();

    const handleSelectOption = (option:string) => {
        setOptionSelected(option);
    };

    const renderContent = (option:string) => {
        switch (option) {
            case 'Energia':
                return <Energy/>;
            break;
            case 'Agua':
                return <WaterConsumption/>;
            break;
            case 'Residuos':
                return <Waste/>;
            break;
        };
    };
    
    const handleCargaDatos = () => {
        navigate("/load-data");
    };



    return (
        <div className="dashboard-container">
            <div className="dashboard-nav d-flex flex-column justify-content-center ">
                <div className="img-logo-container">
                    <img src="/img/Nuevo-BOS2.png" alt=""></img>
                </div>
                <div className="d-flex flex-column justify-content-center w-75">
                    <button onClick={() => handleSelectOption('Energia')} className="btn btn-primary m-3">ENERGIA</button>
                    <button onClick={() => handleSelectOption('Agua')} className="btn btn-primary m-3">AGUA</button>
                    <button onClick={() => handleSelectOption('Residuos')} className="btn btn-primary m-3">RESIDUOS</button>
                    <button onClick={() => handleCargaDatos()} className="btn btn-link m-3">CARGA DE DATOS</button>
                </div>
            </div>
            <div className="dashboard-main">
                {optionSelected && renderContent(optionSelected)  }
            </div>
        </div>
    );
};


