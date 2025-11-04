import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import type Stats from "../models/stats.model";
import {
    getAirlines,
    getBookings,
    getClients,
    getHotels,
    getTopClients,
    getTopDestinations,
    getTopHotels,
} from "../api/StatsFetch";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaPlane, FaUmbrellaBeach, FaUser } from "react-icons/fa";
import React from "react";
import type { TopClient } from "../models/client.model";
import type { TopAirline, TopDestination } from "../models/airline.model";
import type { TopHotel } from "../models/hotel.model";
import inputStyle from "../utils/inputStyle";

function Home() {
    const { token, refreshToken } = useAuth();
    const navigate = useNavigate();
    const [stats, setStats] = useState<Stats>({
        bookingNumber: null,
        clientNumber: null,
        hotelsNumber: null,
        airlinesNumber: null,
        topClients: null,
        topDestinations: null,
        topHotels: null,
        topAirlines: null,
    });
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const fetchStats = async () => {
            if (!token) return;

            let bookings = await getBookings(token);
            let clients = await getClients(token);
            let hotels = await getHotels(token);
            let airlines = await getAirlines(token);
            let topClients = (await getTopClients(token)) as TopClient[];
            let topDestinations = (await getTopDestinations(
                token
            )) as TopDestination[];
            let topHotels = (await getTopHotels(token)) as TopHotel[];
            let topAirlines = (await getTopHotels(token)) as TopAirline[];

            if (bookings.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                bookings = await getBookings(newToken);
            }
            setStats({
                bookingNumber: bookings,
                clientNumber: clients,
                hotelsNumber: hotels,
                airlinesNumber: airlines,
                topClients,
                topDestinations,
                topHotels,
                topAirlines,
            });
        };
        fetchStats();
    }, []);

    return (
        <React.Fragment>
            <div className="h-screen grid grid-cols-2 gap-5 bg-gradient-to-br from-white via-sky-100 to-blue-100">
                <div className="grid grid-rows-1 gap-5">
                    <div className="col-span-1 mt-3 ml-2 pt-10 pb-10 flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 rounded-4xl border-2 border-cyan-600">
                        <p className="flex items-center gap-1.5 mb-5 text-blue-50">
                            <FaUmbrellaBeach size={24} />
                            <span>
                                {stats?.bookingNumber} Voyages programmées
                            </span>
                        </p>
                        <p className="flex items-center gap-1.5 mb-5 text-blue-50">
                            <FaUser size={18} />
                            <span>{stats?.clientNumber} Clients</span>
                        </p>
                        <p className="flex items-center gap-1.5 mb-5 text-blue-50">
                            <FaBuilding size={18} />
                            <span>
                                {stats?.hotelsNumber} Hôtels partenaires
                            </span>
                        </p>
                        <p className="flex items-center gap-1.5 text-blue-50">
                            <FaPlane size={22} />
                            <span>
                                {stats?.airlinesNumber} Compagnies aériennes
                                partenaires
                            </span>
                        </p>
                    </div>

                    <div className="col-span-1 ml-2 text-center bg-gradient-to-br from-purple-300 via-pink-200 to-rose-100 rounded-4xl border-purple-600">
                        <div className="py-0.5 gap-2 flex justify-center items-center">
                            <p className="font-bold text-gray-600">
                                Réservations au cours de l'année
                            </p>
                            <input
                                type="number"
                                name=""
                                id=""
                                className={
                                    "border-2 border-gray-500 rounded-xl mb-2 w-1/12 focus:border-blue-600 outline-none mt-1.5 " +
                                    inputStyle
                                }
                                value={year}
                                onChange={(e) =>
                                    setYear(Number(e.target.value))
                                }
                            />
                        </div>
                        <Chart year={year} />
                    </div>
                </div>
                <div className="col-span-1 mr-2 mt-3 bg-gradient-to-br from-blue-200 via-blue-300 to-gray-400 border-2 border-blue-200 rounded-4xl">
                    <div className="grid grid-rows-3">
                        <div className="row-span-1 flex flex-col justify-center">
                            <div className="row-span-1 grid grid-cols-4">
                                <p className="text-center font-bold text-gray-100 col-span-4 border-b-2 p-1">
                                    Top 10 clients
                                </p>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Identifiant
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Nom
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Prénoms
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Réservations
                                </div>

                                <div className="text-center text-gray-100">
                                    {stats.topClients &&
                                        stats.topClients.map((top) => (
                                            <div key={top.id_client}>
                                                {top.id_client}
                                            </div>
                                        ))}
                                </div>
                                <div className="text-center text-gray-100">
                                    {stats.topClients &&
                                        stats.topClients.map((top) => (
                                            <div key={top.id_client}>
                                                {top.nom}
                                            </div>
                                        ))}
                                </div>
                                <div className="text-center text-gray-100">
                                    {stats.topClients &&
                                        stats.topClients.map((top) => (
                                            <div key={top.id_client}>
                                                {top.prenom}
                                            </div>
                                        ))}
                                </div>
                                <div className="text-center text-gray-100">
                                    {stats.topClients &&
                                        stats.topClients.map((top) => (
                                            <div key={top.id_client}>
                                                {top.reservation}
                                            </div>
                                        ))}
                                </div>
                                <div className="border-b-2 border-white col-span-4" />
                            </div>
                        </div>

                        <div className="row-span-1 flex flex-col justify-center mt-12 -mb-12 text-white">
                            <div className="row-span-1 grid grid-cols-4">
                                <p className="text-center font-bold text-gray-100 col-span-4 border-white border-b-2 p-1">
                                    Top 10 destinations
                                </p>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10"></div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Pays
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Réservations
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10"></div>

                                <div className="text-center"></div>
                                <div className="text-center">
                                    {stats.topDestinations &&
                                        stats.topDestinations.map((top) => (
                                            <div key={top.pays}>{top.pays}</div>
                                        ))}
                                </div>
                                <div className="text-center">
                                    {stats.topDestinations &&
                                        stats.topDestinations.map((top) => (
                                            <div key={top.pays}>
                                                {top.visites}
                                            </div>
                                        ))}
                                </div>
                                <div className="text-center"></div>
                                <div className="border-b-2 border-white col-span-4" />
                            </div>
                        </div>
                        <div className="row-span-1 flex flex-col justify-center mt-3">
                            <div className="grid grid-cols-4 border-b-2 border-white p-1 text-white">
                                <p className="col-span-2 font-bold text-gray-100 text-center border-b-2 border-white p-1">
                                    Top 3 hôtels
                                </p>
                                <p className="col-span-2 font-bold text-gray-100 text-center border-b-2 border-white p-1">
                                    Top 3 compagnies aériennes
                                </p>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Hôtels
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10 border-white border-r-2">
                                    Réservations
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Compagnies aériennes
                                </div>
                                <div className="text-center font-semibold text-gray-100 bg-blue-400/10">
                                    Réservations
                                </div>

                                <div className="text-center">
                                    {stats.topHotels &&
                                        stats.topHotels.map((top) => (
                                            <div key={top.hotel}>
                                                {top.hotel}
                                            </div>
                                        ))}
                                </div>
                                <div className="text-center border-white border-r-2">
                                    {stats.topHotels &&
                                        stats.topHotels.map((top) => (
                                            <div
                                                key={top.hotel}
                                                className="gap-2"
                                            >
                                                {top.reservation}
                                            </div>
                                        ))}
                                </div>

                                <div className="text-center">
                                    {stats.topAirlines &&
                                        stats.topAirlines.map((top) => (
                                            <div key={top.hotel}>
                                                {top.hotel}
                                            </div>
                                        ))}
                                </div>
                                <div className="text-center">
                                    {stats.topAirlines &&
                                        stats.topAirlines.map((top) => (
                                            <div key={top.hotel}>
                                                {top.reservation}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-64" />
            </div>
        </React.Fragment>
    );
}

export default Home;
