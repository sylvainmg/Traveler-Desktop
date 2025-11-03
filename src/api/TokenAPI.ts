import url from "./url";

export default async function TokenAPI(refreshToken: string) {
    try {
        const response = await fetch(url + "auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
        });
        if (!response.ok) return null;

        const data = await response.json();
        return data.accessToken as string;
    } catch (err) {
        console.error(err);
        return null;
    }
}
