import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { iso } from "../../utils/puntosNorma";

interface SidebarProps {
  renderContent: (option: string) => void;
}

export default function Sidebar({renderContent}:SidebarProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 300, // ✅ Asegurar que tenga el mismo ancho que el Drawer
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {iso.map((punto) => (
          <ListItem key={punto.primary} disablePadding>
            <ListItemButton
            onClick={() => renderContent(punto.primary)}
            >
              <ListItemIcon>
                <ArrowForwardIosSharpIcon />
              </ListItemIcon>
              <ListItemText primary={punto.primary} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "70vh",
        marginTop: "65px",
      }}
    >
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          borderRadius: "50px",
        }}
      >
        <ArrowForwardIosSharpIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 300,
            top: "65px", // ✅ Desplaza el Drawer hacia abajo
            height: "calc(100% - 65px)", // ✅ Ajusta la altura para que no sobrepase la pantalla
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}




// import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import { useMediaQuery } from "@mui/material";
// import PropTypes from "prop-types";
// import { iso } from "../../utils/puntosNorma";
// import { useState } from "react";

// interface SidebarProps {
//   mobileOpen: boolean;
//   handleDrawerToggle: () => void;
//   renderContent: (option: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, handleDrawerToggle, renderContent }) => {
//   const isMobile = useMediaQuery("(max-width: 900px)");
  
//   // Guardar el item activo
//   const [activeItem, setActiveItem] = useState<string | null>(null);

//   const handleItemClick = (item: string) => {
//     // Actualizar el item activo al hacer clic
//     setActiveItem(item);
//     renderContent(item); // Llamar a la función renderContent
//   };

//   return (
//     <Drawer
//       variant={isMobile ? "temporary" : "permanent"}
//       open={isMobile ? mobileOpen : true}
//       onClose={handleDrawerToggle}
//       sx={{
//         width: isMobile ? '80%' : '20%',
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: isMobile ? '80%' : '20%',
//           boxSizing: 'border-box',
//           display: 'flex',
//           flexDirection: 'column', // Asegura que los items se apilen verticalmente
//           height: '100%', // Asegura que el Drawer ocupe toda la altura
//         },
//       }}
//     >
//         {iso.map((item) => (
//           <ListItem
//             key={item.primary}
//             onClick={() => handleItemClick(item.primary)} 
//             className={`listItem ${activeItem === item.primary ? "active" : ""}`} 
//           >
//             <ListItemIcon>
//               <ArrowForwardIosSharpIcon />
//             </ListItemIcon>
//             <ListItemText primary={item.primary} secondary={item.secondary} />
//           </ListItem>
//         ))}
//     </Drawer>
//   );
// };

// Sidebar.propTypes = {
//   mobileOpen: PropTypes.bool.isRequired,
//   handleDrawerToggle: PropTypes.func.isRequired,
//   renderContent: PropTypes.func.isRequired,
// };

// export default Sidebar;
