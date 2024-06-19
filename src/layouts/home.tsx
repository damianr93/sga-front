
import { Box } from '@mui/system'
import { NavBar } from '../components/app-bar';
import { Politics } from '../views/politics';
import { Toolbar } from '@mui/material';


const drawerWidth = 0;

export const HomeLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{ display:"flex", justifyContent:"center", flexGrow: 1, p: 10}}
            >
                <Toolbar />
                <div className='politics-container'>
                <Politics/>

                </div>
            </Box>
        </Box>
    )
}