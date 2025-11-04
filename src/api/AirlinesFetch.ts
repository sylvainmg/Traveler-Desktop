import url from "./url";
import type Airline from "../models/airline.model";
import type Options from "../models/options.model";

export default async function AirlinesFetch(
    token: string,
    options: Options | undefined
) {
    const response = await fetch(url + "airlines", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify(options),
    });

    const airlines = (await response.json()) as Airline[];

    return {
        airlines,
        status: response.status,
    };
}
