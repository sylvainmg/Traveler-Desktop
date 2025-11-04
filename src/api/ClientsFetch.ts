import url from "./url";

import type Client from "../models/client.model";

export default async function ClientFetch(
    token: string,
    options?: {
        id?: number | null;
        nom?: string;
        prenom?: string;
        email?: string;
        code?: string;
        limit?: number;
    }
) {
    const response = await fetch(url + "clients", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify(options),
    });

    const clients = (await response.json()) as Client;

    return {
        clients,
        status: response.status,
    };
}
