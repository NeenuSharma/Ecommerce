import Box from "@mui/material/Box";;
import Typography from "@mui/material/Typography";

export default function Sidebar() {
return (
<Box
            sx={{
                width: 250,
                bgcolor: "#ffffff",
                p: 2,
                borderRight: "1px solid #ddd",
                minHeight: "calc(100vh - 64px)",
            }}
        >
            <Typography variant="h6">
                Sidebar
            </Typography>
        </Box>
);

}
