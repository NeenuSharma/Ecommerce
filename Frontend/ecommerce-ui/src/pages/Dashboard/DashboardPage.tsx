import { Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaymentsIcon from "@mui/icons-material/Payments";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DashboardCard from "../../components/dashboard/DashboardCard";
import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../api/dashboardApi";
import type { DashboardSummary } from "../../api/dashboardApi";

export default function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {
        const data = await getDashboardSummary();
        setSummary(data);
    }

    return (
        <>
            <Typography
                variant="h4"
                gutterBottom
            >
                Dashboard
            </Typography>

            <Grid
                container
                spacing={4}
            >
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <DashboardCard
                        title="Orders Today"
                        value={summary?.ordersToday ?? 0}
                        icon={<ShoppingCartIcon />}
                        color="#3f51b5"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <DashboardCard
                        title="Products"
                        value={summary?.totalProducts ?? 0}
                        icon={<Inventory2Icon />}
                        color="#4caf50"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <DashboardCard
                        title="Revenue"
                        value={summary?.revenueToday ?? "₹0"}
                        icon={<PaymentsIcon />}
                        color="#ff9800"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <DashboardCard
                        title="Inventory Alerts"
                        value={summary?.inventoryAlerts ?? 0}
                        icon={<WarningAmberIcon />}
                        color="#f44336"
                    />
                </Grid>
            </Grid>
        </>
    );
}