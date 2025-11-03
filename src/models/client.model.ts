export default interface Client {
    clients: {
        ID_CLIENT: number;
        CODE: string;
        NOM: string;
        PRENOM: string;
        EMAIL: string;
    }[];
}

export interface TopClient {
    id_client: number;
    nom: string;
    prenom: string;
    reservation: number;
}
