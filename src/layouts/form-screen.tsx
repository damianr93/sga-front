import { Box } from "@mui/material"
import { PoliticsForm } from "../components/politics-form"
import { TargetsForm } from "../components/targets-form"
import { useSelector } from "react-redux";

interface EditState {
    from: string
}

interface RootState {
    editForms: EditState;
}


export const FormScreen = () => {

    const from = useSelector((state: RootState) => state.editForms.from)

    const formSelected = () => {

        switch (from) {
            case "targets":
                return <TargetsForm />
            case "politics":
                return <PoliticsForm />
            default:
                break;
        }
    }

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

            {formSelected()}

        </Box>
    )
}
