import { useEffect, useState } from "react";
import type Airline from "../models/airline.model";
import { useAuth } from "../contexts/AuthContext";
import AirlinesFetch from "../api/AirlinesFetch";
import { useNavigate } from "react-router-dom";
import {
    FaComment,
    FaPen,
    FaPlane,
    FaRegBuilding,
    FaSpinner,
} from "react-icons/fa";
import ScrollArea from "../components/ScrollArea";
import setStatus from "../utils/setStatus";
import Button from "../components/Button";
import HotelsFetch from "../api/HotelsFetch";
import type Options from "../models/options.model";
import type Hotel from "../models/hotel.model";
import React from "react";
import { borderAnimation } from "../utils/borderAnimations";
import Modal from "react-modal";
import type { NewRecord } from "../api/UpdateRecords";
import { UpdateAirline, UpdateHotel } from "../api/UpdateRecords";
import inputStyle from "../utils/inputStyle";
import { AirlineRatingsFetch, HotelRatingsFetch } from "../api/RatingsFetch";
import type { HotelRating } from "../models/hotel.model";
import setStars from "../utils/setStars";
import type { AirlineRating } from "../models/airline.model";

Modal.setAppElement("#root");

function Partenariats() {
    const [airlines, setAirlines] = useState<Airline[]>();
    const [hotels, setHotels] = useState<Hotel[]>();
    const { token, refreshToken } = useAuth();
    const navigate = useNavigate();
    const [select, setSelect] = useState("Hotel");
    const [isOpenEdit, setIsOpenEdit] = useState(false); // pour le modal d'edit
    const [isOpenRating, setIsOpenRating] = useState(false); // pour le modal de ratings
    const [newAirline, setNewAirline] = useState<NewRecord>({
        year: null,
        month: null,
        day: null,
        num_convention: null,
    });
    const [newHotel, setNewHotel] = useState<NewRecord>({
        year: null,
        month: null,
        day: null,
        num_convention: null,
    });

    const [options, setOptions] = useState<Options | undefined>({
        limit: 500,
        id: null,
        year: null,
    });

    useEffect(() => {
        const fetchAirlines = async () => {
            if (!token) return;

            let data = await AirlinesFetch(token, options);

            if (data.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                data = await AirlinesFetch(newToken, options);
            }
            setAirlines(data.airlines);
        };

        const fetchHotels = async () => {
            if (!token) return;

            let data = await HotelsFetch(token, options);

            if (data.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                data = await HotelsFetch(newToken, options);
            }
            setHotels(data.hotels);
        };

        select === "Airline" ? fetchAirlines() : fetchHotels();
    }, [select, isOpenEdit, options]);

    const [hotelRatings, setHotelRatings] = useState<HotelRating>();
    const [airlineRatings, setAirlineRatings] = useState<AirlineRating>();
    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchHotelRatings = async (id: number) => {
            if (!token) return;

            let data = await HotelRatingsFetch(token, id);

            if (data.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                data = await HotelRatingsFetch(newToken, id);
            }
            setHotelRatings(data.data);
        };

        const fetchAirlineRatings = async (id: number) => {
            if (!token) return;

            let data = await AirlineRatingsFetch(token, id);

            if (data.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                data = await AirlineRatingsFetch(newToken, id);
            }
            setAirlineRatings(data.data);
        };

        if (select === "Hotel") fetchHotelRatings(id);
        else fetchAirlineRatings(id);
    }, [isOpenRating, hotelRatings, select, options]);

    return (
        <React.Fragment>
            {/* Modal Edit */}
            <Modal
                isOpen={isOpenEdit}
                onRequestClose={() => setIsOpenEdit(false)}
            >
                {select !== "Hotel" ? (
                    <div className="flex h-full flex-col justify-center items-center">
                        <p className="text-center mb-3 font-semibold">
                            Mise à jour de la convention N°
                            {newAirline?.num_convention} de compagnie aérienne
                        </p>
                        <div className="grid grid-cols-3">
                            <div className="flex flex-col items-center">
                                <p>Jour</p>
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    min={1}
                                    max={31}
                                    className="border-2 w-1/2 placeholder:text-center"
                                    placeholder="dd"
                                    value={newAirline?.day || ""}
                                    onChange={(e) =>
                                        setNewAirline({
                                            ...newAirline,
                                            day: Number(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <p>Mois</p>
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    min={1}
                                    max={12}
                                    className="border-2 w-1/2 placeholder:text-center"
                                    placeholder="mm"
                                    value={newAirline?.month || ""}
                                    onChange={(e) =>
                                        setNewAirline({
                                            ...newAirline,
                                            month: Number(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <p>Année</p>
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    className="border-2 w-1/2 placeholder:text-center"
                                    placeholder="yyyy"
                                    value={newAirline?.year || ""}
                                    onChange={(e) =>
                                        setNewAirline({
                                            ...newAirline,
                                            year: Number(e.target.value),
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <Button
                            className="rounded-2xl mt-5 bg-green-400 px-4 py-2 hover:bg-green-500 hover:text-gray-200 transition-colors duration-300"
                            onClick={async () => {
                                if (
                                    !token ||
                                    !newAirline.day ||
                                    !newAirline.month ||
                                    !newAirline.year
                                )
                                    return alert("Données manquantes !");
                                UpdateAirline(token, newAirline);
                                setIsOpenEdit(false);
                                setNewAirline({
                                    year: null,
                                    month: null,
                                    day: null,
                                    num_convention: null,
                                });
                            }}
                        >
                            <p className="font-semibold">Valider</p>
                        </Button>
                        <Button
                            className="rounded-2xl mt-3 bg-red-400 px-4 py-2 hover:bg-red-500 transition-colors duration-300"
                            onClick={() => setIsOpenEdit(false)}
                        >
                            <p className="font-semibold">Quitter</p>
                        </Button>
                    </div>
                ) : (
                    <div className="flex h-full flex-col justify-center items-center">
                        <p className="text-center mb-3 font-semibold">
                            Mise à jour de la convention N°
                            {newHotel?.num_convention} d'hôtel
                        </p>
                        <div className="grid grid-cols-3">
                            <div className="flex flex-col items-center">
                                <p>Jour</p>
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    min={1}
                                    max={31}
                                    className="border-2 w-1/2 placeholder:text-center"
                                    placeholder="dd"
                                    value={newHotel?.day || ""}
                                    onChange={(e) =>
                                        setNewHotel({
                                            ...newHotel,
                                            day: Number(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <p>Mois</p>
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    min={1}
                                    max={12}
                                    className="border-2 w-1/2 placeholder:text-center"
                                    placeholder="mm"
                                    value={newHotel?.month || ""}
                                    onChange={(e) =>
                                        setNewHotel({
                                            ...newHotel,
                                            month: Number(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <p>Année</p>
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    className="border-2 w-1/2 placeholder:text-center"
                                    placeholder="yyyy"
                                    value={newHotel?.year || ""}
                                    onChange={(e) =>
                                        setNewHotel({
                                            ...newHotel,
                                            year: Number(e.target.value),
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <Button
                            className="rounded-2xl mt-5 bg-green-400 px-4 py-2 hover:bg-green-500 hover:text-gray-200 transition-colors duration-300"
                            onClick={async () => {
                                if (
                                    !token ||
                                    !newHotel.day ||
                                    !newHotel.month ||
                                    !newHotel.year
                                )
                                    return alert("Données manquantes !");
                                UpdateHotel(token, newHotel);
                                setIsOpenEdit(false);
                                setNewHotel({
                                    year: null,
                                    month: null,
                                    day: null,
                                    num_convention: null,
                                });
                            }}
                        >
                            <p className="font-semibold text-white">Valider</p>
                        </Button>
                        <Button
                            className="rounded-2xl mt-3 bg-red-400 px-4 py-2 hover:bg-red-500 transition-colors duration-300"
                            onClick={() => setIsOpenEdit(false)}
                        >
                            <p className="font-semibold text-white">Quitter</p>
                        </Button>
                    </div>
                )}
            </Modal>

            {/* Modal Avis */}
            <Modal
                isOpen={isOpenRating}
                onRequestClose={() => setIsOpenRating(false)}
            >
                {select === "Hotel" ? (
                    <div className="h-full flex flex-col justify-center items-center">
                        <p className="font-semibold w-full text-center mb-12 text-xl">
                            {hotelRatings &&
                                hotels &&
                                hotels.find((hotel) => hotel.id_hotel === id)
                                    ?.nom}
                        </p>
                        <div className="grid grid-cols-2">
                            {hotelRatings && (
                                <React.Fragment>
                                    <p className="text-center border-b-2 pb-1.5 mb-1.5">
                                        Avis
                                    </p>
                                    <p className="text-center border-b-2 pb-1.5 mb-1.5">
                                        Note
                                    </p>
                                </React.Fragment>
                            )}

                            {hotelRatings ? (
                                <ScrollArea className="grid grid-cols-2 col-span-2 h-48">
                                    <div className="text-center">
                                        {(hotelRatings &&
                                            hotelRatings.ratings.map(
                                                (rating) => (
                                                    <div
                                                        key={`${rating.id_hotel} ${rating.avis_hotel}`}
                                                    >
                                                        {rating.avis_hotel}
                                                    </div>
                                                )
                                            )) || <p>Aucun résultat.</p>}
                                    </div>
                                    <div className="text-center">
                                        {(hotelRatings &&
                                            hotelRatings.ratings.map(
                                                (rating) => (
                                                    <div
                                                        key={`${rating.id_hotel} ${rating.avis_hotel} 2`}
                                                    >
                                                        {setStars(
                                                            rating.note_hotel
                                                        )}
                                                    </div>
                                                )
                                            )) ||
                                            ""}
                                    </div>
                                </ScrollArea>
                            ) : (
                                <FaSpinner className="animate-spin" size={30} />
                            )}
                        </div>
                        <div className="text-center mt-10 flex gap-3">
                            {hotelRatings && (
                                <React.Fragment>
                                    <span>Note moyenne :</span>
                                    <span
                                        className={
                                            (hotelRatings &&
                                                (Number(
                                                    hotelRatings.average.moyenne
                                                ) < 2.5
                                                    ? "text-red-500"
                                                    : Number(
                                                          hotelRatings.average
                                                              .moyenne
                                                      ) >= 2.5 &&
                                                      Number(
                                                          hotelRatings.average
                                                              .moyenne
                                                      ) < 4
                                                    ? "text-yellow-500"
                                                    : "text-green-500")) ||
                                            ""
                                        }
                                    >
                                        {Number(
                                            hotelRatings?.average.moyenne
                                        ).toFixed(2)}
                                        /5
                                    </span>
                                </React.Fragment>
                            )}
                        </div>
                        <Button
                            className="bg-red-400 px-4 py-2 rounded-2xl mt-5 font-semibold text-white hover:bg-red-500 transition-colors duration-300"
                            onClick={() => setIsOpenRating(false)}
                        >
                            <p>Fermer</p>
                        </Button>
                    </div>
                ) : (
                    <div className="h-full flex flex-col justify-center items-center">
                        <p className="font-semibold w-full text-center mb-12 text-xl">
                            {hotelRatings &&
                                hotels &&
                                hotels.find((hotel) => hotel.id_hotel === id)
                                    ?.nom}
                        </p>
                        <div className="grid grid-cols-2">
                            {airlineRatings && (
                                <React.Fragment>
                                    <p className="text-center border-b-2 pb-1.5 mb-1.5">
                                        Avis
                                    </p>
                                    <p className="text-center border-b-2 pb-1.5 mb-1.5">
                                        Note
                                    </p>
                                </React.Fragment>
                            )}

                            {airlineRatings ? (
                                <ScrollArea className="grid grid-cols-2 col-span-2 h-48">
                                    <div className="text-center">
                                        {(airlineRatings &&
                                            airlineRatings.ratings.map(
                                                (rating) => (
                                                    <div
                                                        key={`${rating.id_compagnie_aerienne} ${rating.avis_compagnie_aerienne_aller}`}
                                                    >
                                                        <div>
                                                            {
                                                                rating.avis_compagnie_aerienne_aller
                                                            }
                                                        </div>
                                                        <div>
                                                            {
                                                                rating.avis_compagnie_aerienne_retour
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            )) || <p>Aucun résultat.</p>}
                                    </div>
                                    <div className="text-center">
                                        {(airlineRatings &&
                                            airlineRatings.ratings.map(
                                                (rating) => (
                                                    <div
                                                        key={`${rating.id_compagnie_aerienne} ${rating.avis_compagnie_aerienne_aller}`}
                                                    >
                                                        <div>
                                                            {setStars(
                                                                rating.note_compagnie_aerienne_aller
                                                            )}
                                                        </div>
                                                        <div>
                                                            {setStars(
                                                                rating.note_compagnie_aerienne_retour
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            )) ||
                                            ""}
                                    </div>
                                </ScrollArea>
                            ) : (
                                <FaSpinner className="animate-spin" size={30} />
                            )}
                        </div>
                        <div className="text-center mt-10 flex gap-3">
                            {hotelRatings && (
                                <React.Fragment>
                                    <span>Note moyenne :</span>
                                    <span
                                        className={
                                            (airlineRatings &&
                                                (Number(
                                                    airlineRatings.average
                                                        .moyenne
                                                ) < 2.5
                                                    ? "text-red-500"
                                                    : Number(
                                                          airlineRatings.average
                                                              .moyenne
                                                      ) >= 2.5 &&
                                                      Number(
                                                          airlineRatings.average
                                                              .moyenne
                                                      ) < 4
                                                    ? "text-yellow-500"
                                                    : "text-green-500")) ||
                                            ""
                                        }
                                    >
                                        {Number(
                                            airlineRatings?.average.moyenne
                                        ).toFixed(2)}
                                        /5
                                    </span>
                                </React.Fragment>
                            )}
                        </div>
                        <Button
                            className="bg-red-400 px-4 py-2 rounded-2xl mt-5 font-semibold text-white hover:bg-red-500 transition-colors duration-300"
                            onClick={() => setIsOpenRating(false)}
                        >
                            <p>Fermer</p>
                        </Button>
                    </div>
                )}
            </Modal>

            <div className="grid grid-cols-2 pb-3">
                <div
                    className={`col-span-1 text-center cursor-pointer flex justify-center
                    `}
                    onClick={() => {
                        setSelect("Hotel");
                        setOptions(undefined);
                        setOptions({
                            id: null,
                            year: null,
                            limit: 500,
                        });
                    }}
                >
                    <p
                        className={`flex items-center gap-2 justify-center p-2 w-1/2 hover:bg-gray-200 transition-colors duration-300 ${
                            select === "Hotel" ? "border-b-2" : borderAnimation
                        }`}
                    >
                        <FaRegBuilding size={20} />
                        <span>Hôtels</span>
                    </p>
                </div>
                <div
                    className={`col-span-1 text-center cursor-pointer flex justify-center 
                    `}
                    onClick={() => {
                        setSelect("Airline");
                        setOptions({
                            limit: 500,
                            id: null,
                            year: null,
                        });
                    }}
                >
                    <p
                        className={`flex items-center gap-2 justify-center p-2 w-1/2 hover:bg-gray-200 transition-colors duration-300 ${
                            select !== "Hotel" ? "border-b-2" : borderAnimation
                        }`}
                    >
                        <FaPlane size={20} />
                        <span>Compagnies aériennes</span>
                    </p>
                </div>
            </div>
            {/* Filtres de recherche */}
            <div className="grid grid-cols-3 mb-1">
                <div className="justify-center flex flex-col items-center">
                    <p>Limite</p>
                    <div className="flex justify-center">
                        <input
                            type="number"
                            name=""
                            id=""
                            className={
                                "border-2 w-1/2 items-center outline-none focus:border-blue-600 " +
                                inputStyle
                            }
                            min={1}
                            value={options?.limit || ""}
                            onChange={(e) =>
                                setOptions({
                                    ...options,
                                    limit: Number(e.target.value),
                                } as Options)
                            }
                        />
                    </div>
                </div>

                <div className="justify-center flex flex-col items-center">
                    <p>Identifiant</p>
                    <div className="flex justify-center">
                        <input
                            type="number"
                            name=""
                            id=""
                            className={
                                "border-2 w-1/2 items-center outline-none focus:border-blue-600 " +
                                inputStyle
                            }
                            min={1}
                            value={options?.id || ""}
                            onChange={(e) =>
                                setOptions({
                                    ...options,
                                    id: Number(e.target.value),
                                } as Options)
                            }
                        />
                    </div>
                </div>

                <div className="justify-center flex flex-col items-center">
                    <p>Année de convention</p>
                    <div className="flex justify-center">
                        <input
                            type="number"
                            name=""
                            id=""
                            className={
                                "border-2 w-1/2 items-center outline-none focus:border-blue-600 " +
                                inputStyle
                            }
                            min={1}
                            value={options?.year || ""}
                            onChange={(e) =>
                                setOptions({
                                    ...options,
                                    year: Number(e.target.value),
                                } as Options)
                            }
                        />
                    </div>
                </div>
            </div>
            {select === "Airline" ? (
                <div className="overflow-hidden h-screen grid grid-cols-6">
                    <div className="grid grid-cols-6 bg-gray-400/40 fixed w-full">
                        <div className="text-center py-2 font-semibold">
                            Numéro de convention
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Identifiant
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Nom
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Date de convention
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Statut
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Actions
                        </div>
                    </div>
                    <ScrollArea className="col-span-6 mt-12">
                        {airlines ? (
                            airlines?.map((airline) => (
                                <div
                                    key={airline.num_convention}
                                    className="text-center grid grid-cols-6 hover:bg-gray-200/70 transition-colors duration-300"
                                >
                                    <div>{airline.num_convention}</div>
                                    <div>{airline.id_compagnie_aerienne}</div>
                                    <div>{airline.nom}</div>
                                    <div>
                                        {new Date(
                                            airline.date_convention
                                        ).toLocaleDateString()}
                                    </div>
                                    <div>
                                        {setStatus(
                                            Number(
                                                airline.date_convention.split(
                                                    "-"
                                                )[0]
                                            )
                                        )}
                                    </div>
                                    <div>
                                        <Button
                                            onClick={() => {
                                                setNewAirline({
                                                    ...newAirline,
                                                    num_convention:
                                                        airline.num_convention,
                                                });
                                                setIsOpenEdit(true);
                                            }}
                                        >
                                            <div className="flex flex-row items-center gap-x-1.5 justify-center hover:bg-gray-400/40 px-5 transition-colors duration-300 rounded-2xl">
                                                <FaPen
                                                    color="#0000ff"
                                                    size={16}
                                                />
                                                <p className="font-semibold">
                                                    Modifier
                                                </p>
                                            </div>
                                        </Button>

                                        <Button
                                            onClick={() => {
                                                setId(
                                                    airline.id_compagnie_aerienne
                                                );
                                                setIsOpenRating(true);
                                            }}
                                        >
                                            <div className="flex flex-row items-center gap-x-1.5 justify-center hover:bg-gray-400/40 px-5 transition-colors duration-300 rounded-2xl">
                                                <FaComment
                                                    color="#fafa00"
                                                    size={16}
                                                />
                                                <p className="font-semibold">
                                                    Avis
                                                </p>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center mt-46 col-span-5">
                                <FaSpinner className="animate-spin" size={30} />
                            </div>
                        )}
                    </ScrollArea>
                    <div className="mb-64" />
                    <div className="text-center fixed bottom-0 left-0 w-full bg-gray-400 text-white font-semibold">
                        {airlines?.length || ""}{" "}
                        {airlines && airlines?.length > 1
                            ? "Résultats"
                            : airlines?.length === 1
                            ? "Résultat"
                            : "Aucun résultat"}
                    </div>
                </div>
            ) : (
                <div className="overflow-hidden h-screen grid grid-cols-6">
                    <div className="grid grid-cols-6 bg-gray-400/40 fixed w-full">
                        <div className="text-center py-2 font-semibold">
                            Numéro de convention
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Identifiant
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Nom
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Date de convention
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Statut
                        </div>
                        <div className="text-center py-2 font-semibold">
                            Actions
                        </div>
                    </div>
                    <ScrollArea className="col-span-6 mt-12">
                        {hotels ? (
                            hotels.map((hotel) => (
                                <div
                                    key={hotel.num_convention}
                                    className="text-center grid grid-cols-6 hover:bg-gray-200/70 transition-colors duration-300"
                                >
                                    <div>{hotel.num_convention}</div>
                                    <div>{hotel.id_hotel}</div>
                                    <div>{hotel.nom}</div>
                                    <div>
                                        {new Date(
                                            hotel.date_convention
                                        ).toLocaleDateString()}
                                    </div>
                                    <div>
                                        {setStatus(
                                            Number(
                                                hotel.date_convention.split(
                                                    "-"
                                                )[0]
                                            )
                                        )}
                                    </div>
                                    <div>
                                        <Button
                                            onClick={() => {
                                                setNewHotel({
                                                    ...newHotel,
                                                    num_convention:
                                                        hotel.num_convention,
                                                });
                                                setIsOpenEdit(true);
                                            }}
                                        >
                                            <div className="flex flex-row items-center gap-x-1.5 justify-center hover:bg-gray-400/40 px-5 transition-colors duration-300 rounded-2xl">
                                                <FaPen
                                                    color="#0000ff"
                                                    size={16}
                                                />
                                                <p className="font-semibold">
                                                    Modifier
                                                </p>
                                            </div>
                                        </Button>

                                        <Button
                                            onClick={() => {
                                                setId(hotel.id_hotel);
                                                setIsOpenRating(true);
                                            }}
                                        >
                                            <div className="flex flex-row items-center gap-x-1.5 justify-center hover:bg-gray-400/40 px-5 transition-colors duration-300 rounded-2xl">
                                                <FaComment
                                                    color="#fafa00"
                                                    size={16}
                                                />
                                                <p className="font-semibold">
                                                    Avis
                                                </p>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center mt-72 col-span-5">
                                <FaSpinner className="animate-spin" size={30} />
                            </div>
                        )}
                    </ScrollArea>
                    <div className="mb-64" />
                    <div className="text-center fixed bottom-0 left-0 w-full bg-gray-400 text-white font-semibold">
                        {hotels?.length || ""}{" "}
                        {hotels && hotels?.length > 1
                            ? "Résultats"
                            : hotels?.length === 1
                            ? "Résultat"
                            : "Aucun résultat"}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Partenariats;
