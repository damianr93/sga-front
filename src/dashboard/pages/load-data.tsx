import { FormEvent, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { postWashWater, postWater } from "../../api/water/create-water";
import postEnergy from "../../api/energy/create-energy";
import { postMetalicos, postSpecialLiquids, postSpecialWastes, postWastes } from "../../api/waste/create-wastes";
import CompressedCardboard from "../../api/carton/carton";


export const LoadDataPage = () => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate()

    const { onInputChange, tipo, user, cantidad } = useForm({
        tipo: '',
        user: '',
        cantidad: '',

    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setLoading(true)

        try {

            switch (tipo) {
                case 'aguaLav':
                    await postWashWater({ createdBy: user, cantidad });
                    break;
                case 'aguaGral':
                    await postWater({ createdBy: user, cantidad });
                    break;
                case 'energia':
                    await postEnergy({ createdBy: user, cantidad });
                    break;
                case 'y48':
                    await postSpecialWastes({ createdBy: user, cantidad });
                    break;
                case 'metalicos':
                    await postMetalicos({ createdBy: user, cantidad });
                    break;
                case 'generales':
                    await postWastes({ createdBy: user, cantidad });
                    break;
                case 'y8':
                    await postSpecialLiquids({ createdBy: user, cantidad });
                    break;
                case 'compressedCardboard':
                    await CompressedCardboard({ createdBy: user, cantidad });
                    break;
                default:
                    setLoading(false)
                    return setErrorMessage("Seleccione el tipo de elemento medido");

            }

            setSuccessMessage("Datos cargados exitosamente");
            setErrorMessage("");

        } catch (error) {

            setSuccessMessage("");
            setErrorMessage("Error al cargar los datos");
        }

        setLoading(false);
    }
    return (
        <div className="container"> //! Hay que agregar un margin top
            <h2 className="text-center">Cargar cantidad de:</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <select
                        className="form-select"
                        onChange={onInputChange}
                        name="tipo"
                        value={tipo}
                    >
                        <option>Seleccione una opción</option>
                        <option value="aguaLav">Agua Lavadero</option>
                        <option value="aguaGral">Agua General</option>
                        <option value="energia">Energia</option>
                        <option value="y48">Residuos Especiales</option>
                        <option value="metalicos">Residuos Metalicos</option>
                        <option value="generales">Residuos Generales</option>
                        <option value="y8">Y8</option>
                        <option value="compressedCardboard">Carton comprimido</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">Medido por:</label>
                    <input
                        type="string"
                        className="form-control"
                        id="user"
                        name="user"
                        placeholder="Operador..."
                        value={user}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidad" className="form-label">Cantidad:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="cantidad"
                        placeholder="cantidad..."
                        value={cantidad}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                <button onClick={() => navigate('/dashboard')} className="btn btn-info m-5">Volver</button>
            </form>

            {loading &&
                <div className="w-100 d-flex">
                    <CircularProgress color="success" className="m-auto" />
                </div>
            }
            {successMessage && <div className="alert alert-success mt-5">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger mt-5">{errorMessage}</div>}
        </div>
    )
}
