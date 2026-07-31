import Typography from "@mui/material/Typography";

import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <MainLayout>
            <Typography variant="h3">
                Dashboard
            </Typography>

            <Typography sx={{ mt: 2 }}>
                Welcome to the E-Commerce System.
            </Typography>
        </MainLayout>
    );
}

export default App;