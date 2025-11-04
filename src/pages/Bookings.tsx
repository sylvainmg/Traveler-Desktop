import { useEffect, useState } from "react";
import BookingFetch, { type BookingFetchInterface } from "../api/BookingsFetch";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import type Booking from "../models/booking.model";
import ScrollArea from "../components/ScrollArea";
import setStars from "../utils/setStars";
import { FaSpinner } from "react-icons/fa";
import inputStyle from "../utils/inputStyle";

function Bookings() {
    const [bookings, setBookings] = useState<Booking[]>();
    const { token, refreshToken } = useAuth();
    const navigate = useNavigate();

    const [options, setOptions] = useState<BookingFetchInterface>({
        limit: 100,
        date_reservation: {
            year: null,
            month: null,
            day: null,
        },
        destination: "",
        num_client: null,
    });

    useEffect(() => {
        const fetchClients = async () => {
            if (!token) return;

            let data = await BookingFetch(token, options);

            if (data.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                data = await BookingFetch(newToken, options);
            }
            setBookings(data.bookings);
        };
        fetchClients();
    }, [options]);

    return (
        <div className="grid grid-cols-3 h-screen overflow-hidde bg-gradient-to-br from-white via-sky-100 to-blue-100">
            {/* Filtres de recherche */}
            <div className="col-span-3 mb-3">
                <p className="font-bold text-slate-700 text-center pt-2">Filtres de recherche</p>
                <div className="grid grid-cols-4">
                    <div>
                        <p className="font-semibold text-slate-500 text-center">Limite</p>
                        <div className="flex justify-center">
                            <input
                                type="number"
                                min={1}
                                name=""
                                id=""
                                className={
                                    "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                    inputStyle
                                }
                                value={options.limit}
                                onChange={(e) =>
                                    setOptions({
                                        ...options,
                                        limit: Number(e.target.value),
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-500 text-center">Date de réservation</p>
                        <div className="grid grid-cols-3">
                            <div className="col-span-1 flex justify-end">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    className={
                                        "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                        inputStyle
                                    }
                                    placeholder="yyyy"
                                    min={1}
                                    value={options.date_reservation.year || ""}
                                    onChange={(e) =>
                                        setOptions({
                                            ...options,
                                            date_reservation: {
                                                ...options.date_reservation,
                                                year: Number(e.target.value),
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div className="col-span-1 flex justify-center">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    className={
                                        "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                        inputStyle
                                    }
                                    placeholder="mm"
                                    min={1}
                                    value={options.date_reservation.month || ""}
                                    onChange={(e) =>
                                        setOptions({
                                            ...options,
                                            date_reservation: {
                                                ...options.date_reservation,
                                                month: Number(e.target.value),
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div className="col-span-1 flex justify-start">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    className={
                                        "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                        inputStyle
                                    }
                                    placeholder="dd"
                                    min={1}
                                    value={options.date_reservation.day || ""}
                                    onChange={(e) =>
                                        setOptions({
                                            ...options,
                                            date_reservation: {
                                                ...options.date_reservation,
                                                day: Number(e.target.value),
                                            },
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-500 text-center">Destination</p>
                        <div className="flex justify-center">
                            <input
                                type="text"
                                name=""
                                id=""
                                className={
                                    "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                    inputStyle
                                }
                                value={options.destination}
                                onChange={(e) =>
                                    setOptions({
                                        ...options,
                                        destination: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-500 text-center">Numéro client</p>
                        <div className="flex justify-center">
                            <input
                                type="number"
                                name=""
                                id=""
                                min={1}
                                className={
                                    "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                    inputStyle
                                }
                                value={options.num_client || ""}
                                onChange={(e) =>
                                    setOptions({
                                        ...options,
                                        num_client: Number(e.target.value),
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollArea className="col-span-3 grid grid-cols-3 gap-5 overflow-x-hidden">
                {bookings ? (
                    bookings.map((booking) => (
                        <div
                            key={booking.num_reservation}
                            className="flex flex-col justify-center items-center bg-blue-300/20 p-3 rounded-4xl border-2 border-blue-200 ml-2 mr-2"
                        >
                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-2 text-center border-b-2">
                                    Réservation numéro {booking.num_reservation}{" "}
                                    {booking.categorie === "Individuel" ? (
                                        <p className="text-violet-400 font-bold">
                                            {booking.categorie}
                                        </p>
                                    ) : (
                                        <p className="text-green-700 font-bold">
                                            {booking.categorie}
                                        </p>
                                    )}
                                </div>
                                <p className="col-span-2 text-center">
                                    Destination {booking.destination}
                                </p>
                                <p className="col-span-2 text-center">
                                    Réservation du{" "}
                                    {new Date(
                                        booking.date_reservation
                                    ).toLocaleDateString()}
                                </p>

                                <div className="col-span-3">
                                    <p className="col-span-3 text-center text-indigo-800">
                                        Client numéro {booking.id_client}
                                    </p>
                                    <div className="grid grid-cols-2">
                                        <p className="text-center">
                                            Nom et prénoms
                                        </p>
                                        <p className="text-center text-cyan-500">
                                            {booking.nom} {booking.prenom}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <p className="text-center">E-mail</p>
                                        <p className="text-center text-fuchsia-800">
                                            {booking.email}
                                        </p>
                                    </div>
                                </div>

                                <p className="col-span-2 text-center font-bold border-b-2">
                                    Vols
                                </p>
                                <div className="col-span-2 grid grid-cols-2 divide-x-2">
                                    <div className="col-span-1 grid grid-cols-2">
                                        <p className="text-center border-b- col-span-2 font-semibold">
                                            Aller
                                        </p>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Compagnie aérienne</p>
                                            <p className="text-gray-400 font-bold">
                                                {
                                                    booking.compagnie_aerienne_aller
                                                }
                                            </p>
                                        </div>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Date</p>
                                            <p className="text-red-800 font-bold">
                                                {new Date(
                                                    booking.date_vol_aller
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Heure</p>
                                            <p className="text-orange-900 font-bold">
                                                {booking.heure_depart_aller}
                                            </p>
                                        </div>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Prix</p>
                                            <p className="text-emerald-400 font-bold">
                                                $
                                                {parseInt(
                                                    booking.prix_vol_aller
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 grid grid-cols-2">
                                        <p className="text-center border-b- col-span-2 font-semibold">
                                            Retour
                                        </p>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Compagnie aérienne</p>
                                            <p className="text-gray-400 font-bold">
                                                {
                                                    booking.compagnie_aerienne_retour
                                                }
                                            </p>
                                        </div>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Date</p>
                                            <p className="text-red-800 font-bold">
                                                {new Date(
                                                    booking.date_vol_retour
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Heure</p>
                                            <p className="text-orange-900 font-bold">
                                                {booking.heure_depart_retour}
                                            </p>
                                        </div>
                                        <div className="col-span-2 grid grid-cols-2 p-2">
                                            <p>Prix</p>
                                            <p className="text-emerald-400 font-bold">
                                                $
                                                {parseInt(
                                                    booking.prix_vol_retour
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className="col-span-2 text-center font-bold text-slate-800 border-b-2">
                                    Hôtel
                                </p>
                                <div className="col-span-2 grid grid-cols-2 items-center">
                                    <p className="text-center">Nom</p>
                                    <p className="text-start text-blue-400 font-bold">
                                        {booking.nom_hotel}
                                    </p>
                                    <p className="text-center">Etoile</p>
                                    <p>{setStars(booking.nb_etoile)}</p>
                                    <p className="text-center">Prix</p>
                                    <p className="text-emerald-400 font-bold">
                                        ${booking.prix_chambre}/nuit
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center mb-32 col-span-3">
                        <FaSpinner className="animate-spin" size={30} />
                    </div>
                )}
            </ScrollArea>
            <div className="mb-28" />
            <div className="text-center fixed bottom-0 left-0 w-full bg-gray-400 text-white font-semibold">
                {bookings?.length || ""}{" "}
                {bookings && bookings?.length > 1
                    ? "Résultats"
                    : bookings?.length === 1
                    ? "Résultat"
                    : "Aucun résultat"}
            </div>
        </div>
    );
}

export default Bookings;
