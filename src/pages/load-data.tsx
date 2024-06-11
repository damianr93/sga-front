import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import postEnergy from "../api/energy/create-energy";
import { postMetalicos, postSpecialLiquids, postSpecialWastes, postWastes } from "../api/waste/create-wastes";
import { postWashWater, postWater } from "../api/water/create-water";


export const LoadData = () => {

    const { formState, onInputChange, tipo, user, cantidad } = useForm({
        tipo: '',
        user: '',
        cantidad: '',

    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        switch (tipo) {
            case 'aguaLav':
                postWashWater({ createdBy: user, cantidad })
                break
            case 'aguaGral':
                postWater({ createdBy: user, cantidad })
                break
            case 'energia':
                postEnergy({ createdBy: user, cantidad });
                break
            case 'y48':
                postSpecialWastes({ createdBy: user, cantidad });
                break
            case 'metalicos':
                postMetalicos({ createdBy: user, cantidad });
                break
            case 'generales':
                postWastes({ createdBy: user, cantidad });
                break
            case 'y8':
                postSpecialLiquids({ createdBy: user, cantidad });
                break

        }
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center">Cargar cantidad de:</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <select
                        className="form-select"
                        onChange={onInputChange}
                        value={tipo}
                    >
                        <option value="aguaLav">Agua Lavadero</option>
                        <option value="aguaGral">Agua General</option>
                        <option value="energia">Energia</option>
                        <option value="y48">Residuos Especiales</option>
                        <option value="metalicos">Residuos Metalicos</option>
                        <option value="generales">Residuos Generales</option>
                        <option value="y8">Y8</option>
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
            </form>
        </div>
    )
}
