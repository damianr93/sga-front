import { createSlice } from "@reduxjs/toolkit";

export interface EnvironmentalAspect {
    id?: string;
    process: string;
    condicion: 'Emision'| 'Derrame'| 'Residuo'| 'Vertido';
    context: string;
    affectedResource: 'Agua' |'Aire' |'Suelo';
    element: string;
    description:string;
    operatingCondition: 'Normal'| 'Anormal'| 'Emergencia';
    legalRequeriment:number;
    managementLegalRequeriment:number;
    legalRequirementNumberOrId:string;
    legalRequirementDescrption: string; 
    interestedParties: string[];
    interestedPartiesValue:number;
    managementRequerimentPart:number;
    impactFrequency:number;
    severityImpact:number;
    extentImpact:number;
    significance:number
}

export interface EnvironmentalAspects {
    environmentalAspects: EnvironmentalAspect[]
}

const initialState:EnvironmentalAspects = {
    environmentalAspects: []
}


export const environmentalAspectsSlice = createSlice({
    name: 'risk or opportunities',
    initialState,
    reducers: {
        setEnvironmentalAspects(state, action) {
            state.environmentalAspects = action.payload
        },
        addEnvironmentalAspects(state, action) {
            state.environmentalAspects.push(action.payload)
        },
        updateEnvironmentalAspects(state, action) {
            state.environmentalAspects = state.environmentalAspects.map((enviromentalAspect) => {
                if (enviromentalAspect.id === action.payload.id) {
                    return action.payload;
                }
                return enviromentalAspect;
            });
        },
        deleteEnvironmentalAspects(state, action) {
            state.environmentalAspects = state.environmentalAspects.filter((state) => state.id !== action.payload)
        }
    }
})

export const {
    setEnvironmentalAspects,
    addEnvironmentalAspects,
    updateEnvironmentalAspects,
    deleteEnvironmentalAspects,

} = environmentalAspectsSlice.actions
export default environmentalAspectsSlice.reducer