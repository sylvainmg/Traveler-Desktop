import url from "./url";
import type Admin from "../models/admin.model";

export default async function AdminFetch(token: string) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
    });

    const admin = (await response.json()) as Admin;

    return {
        admin,
        status: response.status,
    };
}
