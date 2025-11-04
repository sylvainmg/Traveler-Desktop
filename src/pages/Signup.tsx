import { useState } from "react";
import logo from "../assets/traveler-nobg.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { signup } from "../api/Auth";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

function Signup() {
    const [admin, setAdmin] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
    });
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const data = await signup(admin);
            setToken(data.token);
            return data.status;
        } catch (err) {
            console.log("Signup failed", err);
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 py-12 px-4">
            <div className="grid grid-rows-1">
                <div className="row-span-1 flex justify-center items-center select-none">
                    <img
                        src={logo}
                        alt="traveler-icon"
                        className="w-1/3 bg-white rounded-full shadow-lg mb-4"
                    />
                </div>
                <div className="row-span-2">
                    <p className=" text-bold text-white text-center text-3xl mb-3">
                        Bienvenue !
                    </p>
                    <p className="text-blue-50 text-center text-xl mb-10">
                        Veuillez créer vos identifiants administrateur.
                    </p>
                    <div className="p-5 grid grid-cols-3 gap-3 items-center bg-white rounded-2xl">
                        <div className="col-span-3 text-semibold text-gray-700">
                            <User className="inline w-4 h-4 mr-1 mb-1" />
                            Nom
                        </div>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            className="col-span-3 border-2 p-3 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-12"
                            value={admin.nom}
                            onChange={(e) =>
                                setAdmin({ ...admin, nom: e.target.value })
                            }
                        />
                        <div className="col-span-3 text-semibold text-gray-700">
                            <User className="inline w-4 h-4 mr-1 mb-1" />
                            Prénoms
                        </div>
                        <input
                            type="text"
                            placeholder="Votre prénom"
                            className="col-span-3 border-2 p-3 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-12"
                            value={admin.prenom}
                            onChange={(e) =>
                                setAdmin({ ...admin, prenom: e.target.value })
                            }
                        />
                        <div className="col-span-3 text-semibold text-gray-700">
                            <Mail className="inline w-4 h-4 mr-1 mb-1" />
                            E-mail
                        </div>
                        <input
                            type="text"
                            placeholder="example@email.com"
                            className="col-span-3 border-2 p-3 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-12"
                            value={admin.email}
                            onChange={(e) =>
                                setAdmin({ ...admin, email: e.target.value })
                            }
                        />
                        <div className="col-span-1 text-semibold text-gray-700">
                            <Lock className="inline w-4 h-4 mr-1 mb-1" />
                            Mot de passe
                        </div>
                        <div className="col-span-3 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full border-2 p-3 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-12"
                                value={admin.password}
                                onChange={(e) =>
                                    setAdmin({
                                        ...admin,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                        <div className="col-span-1"></div>
                        <Button
                            className="mt-4 mb-2 gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
                            onClick={async () => {
                                const status = await handleSubmit();
                                if (status === 200) navigate("/");
                            }}
                        >
                            <p>Valider</p>
                        </Button>
                    </div>

                    {/* <div className="grid grid cols-1" /> */}
                    <p className="mt-10 text-center text-white">
                        Vous êtes déjà administrateur ?{" "}
                        <Link
                            className="text-center font-bold text-white hover:text-blue-100 underline"
                            to="/login"
                        >
                            Connectez-vous
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
