import { FaClock, FaCheck } from "react-icons/fa";

export default function setStatus(year: number) {
    const currentYear = new Date().getFullYear();

    if (year < currentYear)
        return (
            <div className="flex flex-row items-center justify-center gap-1.5">
                <FaClock color="#ff880f" size={16} />
                <p className="text-[#ff880f]">Expirée</p>
            </div>
        );
    else
        return (
            <div className="flex flex-row items-center justify-center gap-1.5">
                <FaCheck color="#00a300" size={16} />
                <p className="text-[#00a300]">Valide</p>
            </div>
        );
}
