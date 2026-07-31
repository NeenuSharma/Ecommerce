import { Button, Container, Typography } from "@mui/material";

function App() {
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h3" gutterBottom>
                E-Commerce Dashboard
            </Typography>

            <Button variant="contained" color="primary">
                Material UI Working
            </Button>
        </Container>
    );
}

export default App;