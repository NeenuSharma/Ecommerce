export type DashboardSummary = {
    ordersToday: number;
    totalProducts: number;
    revenueToday: string;
    inventoryAlerts: number;
};

export async function getDashboardSummary(): Promise<DashboardSummary> {

    // Simulating backend API

    return Promise.resolve({

        ordersToday: 10,

        totalProducts: 120,

        revenueToday: "₹1,25,000",

        inventoryAlerts: 2

    });

}