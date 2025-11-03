import url from "./url";

import type { HotelRating } from "../models/hotel.model";
import type { AirlineRating } from "../models/airline.model";

export async function HotelRatingsFetch(token: string, id: number) {
    const response = await fetch(url + "hotels/rating", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
    });

    const data = (await response.json()) as HotelRating;

    return { status: response.status, data };
}

export async function AirlineRatingsFetch(token: string, id: number) {
    const response = await fetch(url + "airlines/rating", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
    });

    const data = (await response.json()) as AirlineRating;

    return { status: response.status, data };
}
