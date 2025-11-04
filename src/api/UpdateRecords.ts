import url from "./url";

export interface NewRecord {
    year: number | null;
    month: number | null;
    day: number | null;
    num_convention: number | null;
}

export async function UpdateAirline(token: string, newAirline: NewRecord) {
    const response = await fetch(url + "airlines", {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify(newAirline),
    });

    return {
        status: response.status,
    };
}

export async function UpdateHotel(token: string, newHotel: NewRecord) {
    const response = await fetch(url + "hotels", {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newHotel),
    });

    return {
        status: response.status,
    };
}
