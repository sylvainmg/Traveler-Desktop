import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import type Admin from "../models/admin.model";
import AdminFetch from "../api/AdminFetch";
import { FaSpinner, FaUser } from "react-icons/fa";
import Button from "../components/Button";
import Logout from "../api/Logout";
import { LogOut } from "lucide-react";

function Account({
    setShowNavbar,
}: {
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [admin, setAdmin] = useState<Admin>();
    const { token, refreshToken } = useAuth();
    const navigate = useNavigate();

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

    if (!admin)
        return (
            <div className="h-screen flex flex-col items-center mt-64 col-span-3">
                <FaSpinner className="animate-spin" size={30} />
            </div>
        );

    return (
        <div className="flex flex-col h-screen justify-center flex-1 pb-72 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200">
            <div className="grid grid-cols-3 bg-gradient-to-bl from-blue-50 via-cyan-200 to-blue-300 text-white text-shadow-lg shadow-lg ml-50 mr-50 pt-20 pb-30 py-12 rounded-b-4xl border-white border">
                <div className="flex justify-center items-center">
                    <div>
                        <div className="flex flex-row items-end">
                            <FaUser
                                size={120}
                                className="text-gray-50 border-2 rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-rows-4 text-lg">
                    <p className="grid grid-cols-7">
                        <span className="col-span-2 font-semibold">
                            Identifiant
                        </span>
                        <span className="col-span-5">
                            {admin.admin.id_admin}
                        </span>
                    </p>

                    <p className="grid grid-cols-7">
                        <span className="col-span-2 font-semibold">Nom</span>
                        <span className="col-span-5">{admin.admin.nom}</span>
                    </p>

                    <p className="grid grid-cols-7">
                        <span className="col-span-2 font-semibold">
                            Prénoms
                        </span>
                        <span className="col-span-5">{admin.admin.prenom}</span>
                    </p>

                    <p className="grid grid-cols-7">
                        <span className="col-span-2 font-semibold">E-mail</span>
                        <span className="col-span-5">{admin.admin.email}</span>
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
                <Button
                    className="border-2 p-2 mt-5 hover:bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200 rounded-xl transition-colors duration-300 font-semibold text-white px-4 py-2"
                    onClick={async () => {
                        const status = await Logout(
                            token,
                            admin.admin.id_admin
                        );
                        if (status === 200) {
                            navigate("/login");
                            setShowNavbar(false);
                        }
                    }}
                >
                    <p>
                        Se déconnecter
                        <LogOut className="inline w-4 h-4 ml-1 mb-1" />
                    </p>
                </Button>
            </div>
        </div>
    );
}

export default Account;
