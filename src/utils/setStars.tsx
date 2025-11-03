import type React from "react";
import { FaStar } from "react-icons/fa";

export default function setStars(stars: number) {
    const elements: React.ReactElement[] = [];
    for (let i = 0; i < stars; i++)
        elements.push(<FaStar key={i} color="#fafa00" size={16} />);

    return <span className="inline-flex flex-row">{elements}</span>;
}
