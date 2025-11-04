import url from "./url";
import type Options from "../models/options.model";
import type Hotel from "../models/hotel.model";

export default async function AirlinesFetch(
    token: string,
    options: Options | undefined
) {
    const response = await fetch(url + "hotels", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify(options),
    });

    const hotels = (await response.json()) as Hotel[];

    return {
        hotels,
        status: response.status,
    };
}
