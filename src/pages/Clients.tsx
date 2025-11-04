import { useEffect, useState } from "react";
import ScrollArea from "../components/ScrollArea";
import type Client from "../models/client.model";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ClientFetch from "../api/ClientsFetch";
import { getCountry, getCode } from "../utils/countries";
import inputStyle from "../utils/inputStyle";

function Clients({
    setShowNavbar,
}: {
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [clients, setClients] = useState<Client>();
    const [options, setoptions] = useState<{
        id?: number | null;
        nom?: string;
        prenom?: string;
        email?: string;
        code?: string;
        limit: number;
    }>({
        id: null,
        nom: "",
        prenom: "",
        email: "",
        code: "",
        limit: 500,
    });
    const { token, refreshToken } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchClients = async () => {
            if (!token) return;

            let data = await ClientFetch(token, {
                ...options,
                code:
                    getCode(
                        options.code!.charAt(0).toUpperCase() +
                            options.code!.slice(1).toLowerCase()
                    ) ?? "",
            });

            if (data.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                data = await ClientFetch(newToken, options);
            }
            setClients(data.clients);
            setShowNavbar(true);
        };
        fetchClients();
    }, [token, options, refreshToken, navigate, setShowNavbar]);

return (
    <React.Fragment>
        <div className="bg-gradient-to-br from-white via-sky-100 to-blue-100">   
            <div>
                <p className="font-bold text-slate-700 text-xl mb-3 text-center pt-2">Filtres de recherche</p>
                <div className="grid grid-cols-6 mb-3">
                    <div className="col-span-1 flex flex-col items-center">
                        <p className="font-semibold text-slate-500 text-center">Limite</p>
                        <input
                            type="number"
                            className={
                                "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                inputStyle
                            }
                            min={1}
                            value={options.limit}
                            onChange={(e) =>
                                setoptions({
                                    ...options,
                                    limit: Number(e.target.value),
                                })
                            }
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <p className="font-semibold text-slate-500 text-center">Identifiant</p>
                        <input
                            type="number"
                            className={
                                "border-2 border-gray-300 rounded-xl w-1/2 items-center outline-none focus:border-blue-600 " +
                                inputStyle
                            }
                            min={1}
                            value={options.id ? options.id : ""}
                            onChange={(e) =>
                                setoptions({
                                    ...options,
                                    id: Number(e.target.value),
                                })
                            }
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <p className="font-semibold text-slate-500 text-center">Nom</p>
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-xl items-center outline-none focus:border-blue-600 text-center"
                            value={options.nom}
                            onChange={(e) =>
                                setoptions({
                                    ...options,
                                    nom: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <p className="font-semibold text-slate-500 text-center">Prénoms</p>
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-xl items-center outline-none focus:border-blue-600 text-center"
                            value={options.prenom}
                            onChange={(e) =>
                                setoptions({
                                    ...options,
                                    prenom: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <p className="font-semibold text-slate-500 text-center">E-mail</p>
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-xl items-center outline-none focus:border-blue-600 text-center"
                            value={options.email}
                            onChange={(e) =>
                                setoptions({
                                    ...options,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <p className="font-semibold text-slate-500 text-center">Pays</p>
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-xl items-center outline-none focus:border-blue-600 text-center"
                            value={options.code}
                            onChange={(e) =>
                                setoptions({
                                    ...options,
                                    code: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Headers */}
                <div className="grid grid-cols-5">
                    <div className="col-span-1 text-center font-bold text-slate-500 bg-blue-600/10 p-2">
                        Identifiant
                    </div>
                    <div className="col-span-1 text-center font-bold text-slate-500 bg-blue-600/10 p-2">
                        Nom
                    </div>
                    <div className="col-span-1 text-center font-bold text-slate-500 bg-blue-600/10 p-2">
                        Prénoms
                    </div>
                    <div className="col-span-1 text-center font-bold text-slate-500 bg-blue-600/10 p-2">
                        E-mail
                    </div>
                    <div className="col-span-1 text-center font-bold text-slate-500 bg-blue-600/10 p-2">
                        Pays
                    </div>
                </div>
                {clients ? (
                    clients.clients.length > 0 ? (
                        <ScrollArea className="grid grid-cols-5">
                            {clients.clients.map((client) => (
                                <React.Fragment key={client.ID_CLIENT}>
                                    <p className="text-center">
                                        {client.ID_CLIENT}
                                    </p>
                                    <p className="text-center">{client.NOM}</p>
                                    <p className="text-center">
                                        {client.PRENOM}
                                    </p>
                                    <p className="text-center">
                                        {client.EMAIL}
                                    </p>
                                    <p className="text-center">
                                        {getCountry(client.CODE)}
                                    </p>
                                </React.Fragment>
                            ))}
                        </ScrollArea>
                    ) : (
                        <p className="flex justify-center text-slate-500 font-bold mt-46">
                            Aucun résultat.
                        </p>
                    )
                ) : (
                    <div className="flex justify-center mt-72">
                        <FaSpinner className="animate-spin" size={30} />
                    </div>
                )}
                <div className="mb-56" />
                <div className="text-center fixed bottom-0 left-0 w-full bg-gray-400 text-white font-semibold">
                    {clients?.clients.length || ""}{" "}
                    {clients && clients?.clients.length > 1
                        ? "Résultats"
                        : clients?.clients.length === 1
                        ? "Résultat"
                        : "Aucun résultat"}
                </div>
            </div>
        </div>
    </React.Fragment>
);
}

export default Clients;
