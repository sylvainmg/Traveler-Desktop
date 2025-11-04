import url from "./url";

export default async function Logout(token: string | null, id_admin: number) {
    if (!token) return;
    const response = await fetch(url + "auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({ id_admin }),
    });

    if (response.status === 200) localStorage.removeItem("refreshToken");

    return response.status;
}
