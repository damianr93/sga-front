import { Box } from '@mui/system'
import { Politics } from '../views/politics';
import { Toolbar } from '@mui/material';
import { Objective } from '../views/objective';


export const HomeLayout = () => {
    return (
        <Box
            component='main'
            sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                flexDirection: "column",
                p: 5,
            }}
        >
            <Toolbar />
            <Politics />
            <Objective />
        </Box>

    )
}