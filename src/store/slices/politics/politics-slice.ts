import { createSlice } from '@reduxjs/toolkit'



export const politicSlice = createSlice({
  name: 'politics',
  initialState: {
    id: "",
    introduction: "[Texto de ejemplo] En línea con nuestro compromiso de contribuir al Desarrollo Sustentable, La empresa, a fin de lograr un mejoramiento continuo en su desempeño de la Gestión ambiental se compromete a:"
,
    politics:["Cumplir con todas las normativas legales vigentes y otros requisitos en materia ambiental que la organización suscriba, asegurando el correcto desarrollo de nuestras actividades.","Proteger el medio ambiente mediante la implementación de medidas preventivas que eviten impactos negativos, promoviendo prácticas sustentables y respetuosas con el entorno.", "Un control y uso racional de los recursos renovables, en el lavado de vehículos, y en el uso de la energía eléctrica dentro de la empresa", "Optimizar la utilización de productos químicos focalizados en el cuidado del medio ambiente", "Gestionar correctamente los residuos derivados de nuestras actividades de posventa como hidrocarburos, filtros y metales, conforme a la legislación vigente, buscando minimizar el impacto ambiental", "Aplicar medidas preventivas tendientes a evitar impactos en el medio ambiental", "En la medida de lo posible, aplicar tecnologías alternativas que mejoren nuestro desempeño ambiental", "Buscar mejoras que contribuyan a la prevención, reducción  y reparación de los impactos ambientales negativos significativos", "Contribuir a la concientización en materia de cuidado medioambiental"],
    targets:["Que el consumo de agua derivado de las actividades de la empresa no supere los 68 lts anuales.", "Que el consumo promedio de energía eléctrica en el segundo trimestre del año no supere los 67424 KWh.", "Otros objetivos"],
  
  },
  reducers: {
    setPolitics: (state, action) => {
      state.id = action.payload.id
      state.politics = action.payload.politics
      state.introduction = action.payload.introduction
      state.targets = action.payload.targets
    },
    updatePolitics: (state, action) => {
      state.introduction = action.payload.newIntroduction
      state.politics = action.payload.newPoliticts
      state.targets = action.payload.targets
    }
  },
})


export const { setPolitics, updatePolitics} = politicSlice.actions
