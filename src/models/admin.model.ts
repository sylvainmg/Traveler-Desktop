export default interface Admin {
    message: string;
    admin: {
        id_admin: number;
        nom: string;
        prenom: string;
        email: string;
    };
}
