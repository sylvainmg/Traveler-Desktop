import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pays from "../utils/pays";
import url from "../api/url";
import { useAuth } from "../contexts/AuthContext";
import AdminFetch from "../api/AdminFetch";
import type Admin from "../models/admin.model";
import Swal from "sweetalert2";
import { ArrowLeft, Check } from "lucide-react";

function Hotel() {
    const [_, setAdmin] = useState<Admin>();
    const [chambres, setChambres] = useState([{ categorie: "", prix: 0 }]);
    const { token, refreshToken } = useAuth();

    useEffect(() => {
        const fetchAdmin = async () => {
            if (!token) return;

            let data = await AdminFetch(token);

            if (data.status === 403) {
                const newToken = (await refreshToken()) as string;
                if (!newToken) navigate("/login");
                data = await AdminFetch(newToken);
            }
            setAdmin(data.admin);
        };
        fetchAdmin();
    }, []);

    const addChambre = () =>
        setChambres([...chambres, { categorie: "", prix: 0 }]);

    const handleChange = (i: number, field: string, value: string | number) => {
        const copy = [...chambres];
        (copy[i] as any)[field] = value;
        setChambres(copy);
    };

    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const [country, setCountry] = useState(pays[0].CODE);
    const [stars, setStars] = useState(1);
    const [date, setDate] = useState({
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    });

    const navigate = useNavigate();

    useEffect(() => {
        return setCount(1);
    }, []);

    const handleSubmit = async () => {
        if (!name || !stars)
            return Swal.fire({
                icon: "error",
                iconColor: "#fff",
                title: "Erreur",
                text: "Veuillez saisir tous les champs.",
                confirmButtonColor: "#bfdbfe",
                background:
                    "linear-gradient(to bottom right, #60a5fa, #67e8f9, #bfdbfe)",
                color: "#ffff",
            });

        const response = await fetch(url + "hotels/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify({
                code: country,
                nom: name,
                nb_etoile: stars,
                chambres: chambres,
                date_convention: `${date.year}-${date.month}-${date.day}`,
            }),
        });

        return response.status;
    };

    return (
        <>
            <p className="col-span-1">Nom</p>
            <input
                type="text"
                className="col-span-2 border-2 rounded-xl p-2 text-center"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p className="col-span-1">Nombre d'étoile</p>
            <input
                type="text"
                className="col-span-2 border-2 rounded-xl p-2 text-center"
                min={1}
                max={5}
                value={stars}
                onChange={(e) => setStars(Number(e.target.value))}
            />

            <p className="col-span-1">Pays</p>
            <select
                className="col-span-2"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >
                {pays.map((p) => (
                    <option key={p.CODE} value={p.CODE}>
                        {p.NOM}
                    </option>
                ))}
            </select>

            <p className="col-span-1">Date de convention</p>
            <div className="col-span-2 grid grid-cols-3 items-center gap-2.5">
                <input
                    type="number"
                    className="border-2 rounded-xl placeholder:text-center text-center"
                    placeholder="jj"
                    value={date.day}
                    onChange={(e) => {
                        setDate({
                            ...date,
                            day: Number(e.target.value),
                        });
                    }}
                />
                <input
                    type="number"
                    className="border-2 rounded-xl placeholder:text-center text-center"
                    placeholder="mm"
                    value={date.month}
                    onChange={(e) => {
                        setDate({
                            ...date,
                            month: Number(e.target.value),
                        });
                    }}
                />
                <input
                    type="number"
                    className="border-2 rounded-xl placeholder:text-center text-center"
                    placeholder="yyyy"
                    value={date.year}
                    onChange={(e) => {
                        setDate({
                            ...date,
                            year: Number(e.target.value),
                        });
                    }}
                />
            </div>

            {chambres.map((c, i) => (
                <div
                    key={i}
                    className="col-span-3 grid grid-cols-3 items-center gap-2.5"
                >
                    <p className="col-span-3 bg-black p-0.5 my-3" />
                    <p className="col-span-1">Catégorie de chambre</p>
                    <input
                        type="text"
                        value={c.categorie}
                        className="col-span-2 border-2 rounded-xl text-center"
                        onChange={(e) =>
                            handleChange(i, "categorie", e.target.value)
                        }
                    />
                    <p className="col-span-1">Prix</p>
                    <input
                        type="number"
                        className="col-span-2 border-2 rounded-xl text-center"
                        value={c.prix}
                        onChange={(e) =>
                            handleChange(i, "prix", Number(e.target.value))
                        }
                    />
                </div>
            ))}

            <div className="grid grid-cols-2 gap-3 col-span-3 my-3 items-center">
                <button
                    className="col-span-1 bg-gradient-to-r from-red-500 to-amber-600 hover:bg-red-700 hover:text-gray-200 transition-colors duration-300 text-white px-4 py-2 rounded-xl mt-3"
                    onClick={() => {
                        const newChambres = [...chambres];
                        if (newChambres.length > 1) {
                            newChambres.pop();
                            setChambres(newChambres);
                        }
                    }}
                >
                    Ajouter une chambre
                </button>
                <button
                    className="col-span-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-blue-700 hover:text-gray-200 transition-colors duration-300 text-white px-4 py-2 rounded-xl mt-3"
                    onClick={() => {
                        setCount(count + 1);
                        addChambre();
                    }}
                >
                    Ajouter une chambre
                </button>
            </div>

            <div className="grid grid-cols-2 col-span-3 my-3 gap-3 items-center">
                <button
                    className="col-span-1 text-white rounded-xl bg-gradient-to-br from-gray-200 to-gray-400 hover:text-gray-200 hover:bg-red-300 transition-colors duration-300 px-4 py-2"
                    onClick={() => navigate("/partenariats")}
                >
                    <ArrowLeft className="inline mr-1 mb-1" />
                    Retour
                </button>

                <button
                    className="col-span-1 text-white rounded-xl bg-gradient-to-r from-emerald-300 to-emerald-400 hover:bg-emerald-300 hover:text-gray-200 transition-colors duration-300 px-4 py-2"
                    onClick={async () => {
                        const status = await handleSubmit();

                        if (status === 200) navigate("/partenariats");
                    }}
                >
                    Valider
                    <Check className="inline ml-1 mb-1" />
                </button>
            </div>
        </>
    );
}

export default Hotel;
