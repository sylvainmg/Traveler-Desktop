import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import type { BookingStats } from "../models/booking.model";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getBookingsStats } from "../api/StatsFetch";
import getRandomColor from "../utils/getRandomColor";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function MyBarChart({ year }: { year: number }) {
    const { token, refreshToken } = useAuth();
    const navigate = useNavigate();
    const [stats, setStats] = useState<{
        data: BookingStats;
        status: number;
    }>();
    const [data, setData] = useState({
        labels: [] as string[],
        datasets: [] as {
            label: string;
            data: (number | null)[];
            backgroundColor: string | string[];
        }[],
    });

    useEffect(() => {
        const fetchStats = async () => {
            if (!token) return;

            let bookingsStats = await getBookingsStats(token, year);

            if (bookingsStats.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                bookingsStats = await getBookingsStats(newToken, year);
            }

            setStats(bookingsStats);
        };
        fetchStats();
    }, [year]);

    useEffect(() => {
        if (!stats || !stats.data) return;

        const labels = Object.keys(stats.data) as (keyof typeof stats.data)[];
        const datasetData = Object.values(stats.data) as (number | null)[];

        setData({
            labels,
            datasets: [
                {
                    label: "Réservations",
                    data: datasetData,
                    backgroundColor: Array.from({ length: 12 }, () =>
                        getRandomColor()
                    ),
                },
            ],
        });
    }, [stats]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Bar data={data} options={options} />;
}
