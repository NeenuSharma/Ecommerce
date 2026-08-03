import {
    Card,
    CardContent,
    Typography,
    Box,
} from "@mui/material";

import type { ReactNode } from "react";

type DashboardCardProps = {
    title: string;
    value: string | number;
    icon: ReactNode;
    color: string;
};

export default function DashboardCard({
    title,
    value,
    icon,
    color,
}: DashboardCardProps) {
    return (
        <Card
            elevation={4}
            sx={{
                borderLeft: `6px solid ${color}`,
            }}
        >
            <CardContent>
                <Box

                  sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            color="text.secondary"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                        >
                            {value}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            color,
                            fontSize: 40,
                        }}
                    >
                        {icon}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}