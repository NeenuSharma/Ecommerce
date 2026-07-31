import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <Box
            sx={{
                bgcolor: "#1976d2",
                color: "white",
                p: 2,
                textAlign: "center",
            }}
        >
            <Typography>
                © 2026 E-Commerce System
            </Typography>
        </Box>
    );
}