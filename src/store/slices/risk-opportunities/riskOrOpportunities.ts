import { createSlice } from "@reduxjs/toolkit";

export interface RiskOrOpportunities {
    riskOrOpportunities: RiskOrOpportunity[]
}

export interface RiskOrOpportunity {
    contexto: Contexto;
    partesInteresadas: PartesInteresadas;
    process: Process;
    type: string;
    description: string;
    id: string;
    probabilidad?: string;
    ocurrencia?: string;
    probabilidadDeOcurencia?: number;
    perdidaDeClientesPotencial?: string;
    dañoPotencial?: string;
    conflictosGremialesPosibles?: string;
    incumplimientoLegal?: string;
    perdidaDeImagen?: string;
    costoCorreccion?: string;
    consecuencia?: number;
    factorDeRiesgo?: number;
}

export interface Contexto {
    type: string;
    description: string;
    id: string;
}

export interface PartesInteresadas {
    name: string;
    requirement: string;
    legalRequirement: boolean;
    intExt: string;
    id: string;
}

export interface Process {
    area: string;
    name: string;
    type: string;
    description: string;
    alcanzado: boolean;
    id: string;
}

const initialState: RiskOrOpportunities = {
    riskOrOpportunities: []
}


export const riskAndOpportunitiesSlice = createSlice({
    name: 'risk or opportunities',
    initialState,
    reducers: {
        setRiskOrOpportunities(state, action) {
            state.riskOrOpportunities = action.payload
        },
        addRiskOrOpportunities(state, action) {
            state.riskOrOpportunities.push(action.payload)
        },
        updateRiskOrOpportunities(state, action) {
            state.riskOrOpportunities = state.riskOrOpportunities.map((riskOrOpportunity) => {
                if (riskOrOpportunity.id === action.payload.id) {
                    return action.payload;
                }
                return riskOrOpportunity;
            });
        },
        deleteRiskOrOpportunities(state, action) {
            state.riskOrOpportunities = state.riskOrOpportunities.filter((state) => state.id !== action.payload)
        }
    }
})

export const {
    setRiskOrOpportunities,
    addRiskOrOpportunities,
    deleteRiskOrOpportunities,
    updateRiskOrOpportunities

} = riskAndOpportunitiesSlice.actions
export default riskAndOpportunitiesSlice.reducer