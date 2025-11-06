import type React from "react";
import { useEffect, useState } from "react";
import Hotel from "../components/Hotel";
import Airline from "../components/Airline";
import ScrollArea from "../components/ScrollArea";

function AddPartenatiat({
    setShowNavbar,
}: {
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    useEffect(() => {
        setShowNavbar(false);

        return () => setShowNavbar(true);
    }, []);

    const [select, setSelect] = useState("Airline");

    return (
        <ScrollArea className="flex flex-col h-screen justify-center items-center">
            <div className="grid grid-rows-1">
                <div className="row-span-1">
                    <p className="text-2xl text-center">
                        Ajouter un partenariat
                    </p>
                    <p className="p-0.5 bg-black mt-1.5"></p>
                </div>

                <div className="row-span-1">
                    <div className="grid grid-cols-3 items-center gap-y-2.5">
                        <p className="col-span-2">Type de partenariat</p>
                        <select
                            value={select}
                            onChange={(e) => setSelect(e.target.value)}
                            className="col-span-1 p-2"
                        >
                            <option value="Hotel">Hôtel</option>
                            <option value="Airline">Compagnie aérienne</option>
                        </select>

                        {select === "Hotel" ? (
                            <div className="col-span-3 grid grid-cols-3 items-center gap-y-2.5">
                                <Hotel />
                            </div>
                        ) : (
                            <div className="col-span-3 grid grid-cols-3 items-center gap-y-2.5">
                                <Airline />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}

export default AddPartenatiat;
