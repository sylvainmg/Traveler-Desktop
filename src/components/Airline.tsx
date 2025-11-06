import { useNavigate } from "react-router-dom";
import pays from "../utils/pays";
import type Admin from "../models/admin.model";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import AdminFetch from "../api/AdminFetch";
import url from "../api/url";
import Swal from "sweetalert2";

function Airline() {
    const navigate = useNavigate();

    const [admin, setAdmin] = useState<Admin>();
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

    const [count, setCount] = useState(1);
    const [code, setCode] = useState([{ code: pays[0].CODE }]);
    const addPays = () => setCode([...code, { code: "" }]);
    const [name, setName] = useState("");
    const [date, setDate] = useState({
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    });

    const handleChange = (i: number, field: string, value: string | number) => {
        const copy = [...code];
        (copy[i] as any)[field] = value;
        setCode(copy);
    };

    const handleSubmit = async () => {
        if (!name)
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

        const response = await fetch(url + "airlines/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify({
                nom: name,
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

            <p className="text-center col-span-3 mt-3">Pays desservis</p>
            <p className="col-span-3 bg-black p-0.5 mb-3" />

            {code.map((p, i) => (
                <div
                    key={i}
                    className="col-span-3 grid grid-cols-3 items-center gap-2.5"
                >
                    <select
                        className="col-span-3"
                        onChange={(e) =>
                            handleChange(i, "code", e.target.value)
                        }
                    >
                        {pays.map((c) => (
                            <option key={c.CODE}>{c.NOM}</option>
                        ))}
                    </select>
                </div>
            ))}

            <button
                className="col-span-3 bg-blue-400 hover:bg-blue-300 transition-colors duration-300 text-white px-4 py-2 rounded-xl mt-3"
                onClick={() => {
                    setCount(count + 1);
                    addPays();
                }}
            >
                Ajouter un pays
            </button>

            <div className="grid grid-cols-2 col-span-3 my-3 gap-3 items-center">
                <button
                    className="col-span-1 text-white rounded-xl bg-red-400 hover:bg-red-300 transition-colors duration-300 px-4 py-2"
                    onClick={() => navigate("/partenariats")}
                >
                    Retour
                </button>

                <button
                    className="col-span-1 text-white rounded-xl bg-emerald-400 hover:bg-emerald-300 transition-colors duration-300 px-4 py-2"
                    onClick={async () => {
                        const status = await handleSubmit();
                        if (status === 200) navigate("/partenariats");
                    }}
                >
                    Valider
                </button>
            </div>
        </>
    );
}

export default Airline;
