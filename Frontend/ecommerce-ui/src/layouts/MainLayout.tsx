import Box from "@mui/material/Box";
import Sidebar from "../components/common/layout/ui/Sidebar";
import Navbar from "../components/common/layout/ui/Navbar";
import Footer from "../components/common/layout/ui/Footer";  

type Props = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Navbar />

            <Box
                sx={{
                    display: "flex",
                    minHeight: "calc(100vh - 64px)",
                }}
            >
                <Sidebar />

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                    }}
                >
                    {children}
                </Box>
            </Box>

            <Footer />
        </>
    );
}
