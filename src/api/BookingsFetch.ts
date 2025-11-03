import url from "./url";

import type Booking from "../models/booking.model";

export interface BookingFetchInterface {
    limit: number;
    date_reservation: {
        year: null | number;
        month: null | number;
        day: null | number;
    };
    destination: string;
    num_client: null | number;
}

export default async function BookingFetch(
    token: string,
    options?: BookingFetchInterface
) {
    const response = await fetch(url + "bookings", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    const bookings = (await response.json()) as Booking[];

    return {
        bookings,
        status: response.status,
    };
}
