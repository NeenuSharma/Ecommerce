import {
    Box,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <Box
            sx={{
                width: 250,
                borderRight: "1px solid #ddd",
                minHeight: "calc(100vh - 64px)",
            }}
        >
            <List>
                <ListItemButton component={Link} to="/dashboard">
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <ListItemButton component={Link} to="/home">
                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={Link} to="/products">
                    <ListItemText primary="Products" />
                </ListItemButton>

                <ListItemButton component={Link} to="/orders">
                    <ListItemText primary="Orders" />
                </ListItemButton>

                <ListItemButton component={Link} to="/inventory">
                    <ListItemText primary="Inventory" />
                </ListItemButton>

                <ListItemButton component={Link} to="/payments">
                    <ListItemText primary="Payments" />
                </ListItemButton>

                <ListItemButton component={Link} to="/notfound">
                    <ListItemText primary="Not Found" />
                </ListItemButton>

            </List>
        </Box>
    );
}