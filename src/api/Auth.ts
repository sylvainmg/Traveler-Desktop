import url from "./url";

export async function login(admin: { email: string; password: string }) {
    const response = await fetch(url + "auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
    });

    if (!response.ok) throw new Error("Login failed");

    const data = await response.json();
    localStorage.setItem("refreshToken", data.refreshToken);
    return {
        token: data.accessToken,
        status: response.status,
    };
}

export async function signup(admin: {
    nom: string;
    prenom: string;
    email: string;
    password: string;
}) {
    const response = await fetch(url + "auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
    });

    if (!response.ok) throw new Error("Signup failed");

    const data = await response.json();
    localStorage.setItem("refreshToken", data.refreshToken);
    return {
        token: data.accessToken,
        status: response.status,
    };
}
