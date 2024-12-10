import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Energy } from '../views/energy';
import { WaterConsumption } from '../views/water';
import { Waste } from '../views/waste';

export const DashboardPage = () => {
    const [optionSelected, setOptionSelected] = useState('');
    const navigate = useNavigate();

    const handleSelectOption = (option: string) => {
        setOptionSelected(option);
    };

    const renderContent = (option: string) => {
        switch (option) {
            case 'Energia':
                return <Energy />;
                break;
            case 'Agua':
                return <WaterConsumption />;
                break;
            case 'Residuos':
                return <Waste />;
                break;
            case 'Volver':
                navigate('/dashboard');
                break;
        };
    };

    return (
        <div className="dashboard-container" >
            <div className="dashboard-nav d-flex flex-column justify-content-center">
                <div className="d-flex flex-column justify-content-center w-100">
                    <button onClick={() => handleSelectOption('Energia')} className="btn btn-primary m-3">ENERGIA</button>
                    <button onClick={() => handleSelectOption('Agua')} className="btn btn-primary m-3">AGUA</button>
                    <button onClick={() => handleSelectOption('Residuos')} className="btn btn-primary m-3">RESIDUOS</button>
                    <button onClick={() => {navigate('/loadDataPage')}} className="btn btn-link m-3">CARGA DE DATOS</button>
                </div>
            </div>
            <div className="dashboard-main">
                {optionSelected && renderContent(optionSelected)  }
            </div>
        </div>

    );
};


