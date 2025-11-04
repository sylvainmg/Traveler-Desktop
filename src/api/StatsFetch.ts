import type { TopAirline, TopDestination } from "../models/airline.model";
import type { BookingStats } from "../models/booking.model";
import type { TopClient } from "../models/client.model";
import type { TopHotel } from "../models/hotel.model";
import url from "./url";

export async function getBookings(token: string) {
    const response = await fetch(url + "bookings", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    return data.nombre;
}

export async function getClients(token: string) {
    const response = await fetch(url + "clients", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    return data.nombre;
}

export async function getHotels(token: string) {
    const response = await fetch(url + "hotels", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    return data.nombre;
}

export async function getAirlines(token: string) {
    const response = await fetch(url + "airlines", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    return data.nombre;
}

export async function getTopClients(token: string) {
    const response = await fetch(url + "clients/top", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = (await response.json()) as TopClient[];

    return data;
}

export async function getTopDestinations(token: string) {
    const response = await fetch(url + "airlines/topDest", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = (await response.json()) as TopDestination[];

    return data;
}

export async function getTopHotels(token: string) {
    const response = await fetch(url + "hotels/topHotels", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = (await response.json()) as TopHotel[];

    return data;
}

export async function getTopAirlines(token: string) {
    const response = await fetch(url + "airlines/topAir", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = (await response.json()) as TopAirline[];

    return data;
}

export async function getBookingsStats(token: string, year: number) {
    const response = await fetch(url + "bookings/stats", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ year }),
    });
    const data = (await response.json()) as BookingStats;

    return { data, status: response.status };
}
