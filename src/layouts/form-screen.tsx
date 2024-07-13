import { Box } from "@mui/material"
import { PoliticsForm } from "../components/politics-form"

export const FormScreen = ({ setEditing }:any) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.774)",
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
            }}
        >
            <PoliticsForm setEditing={setEditing}/>
        </Box>
    )
}
