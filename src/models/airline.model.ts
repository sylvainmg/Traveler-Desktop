export default interface Airline {
    num_convention: number;
    id_compagnie_aerienne: number;
    nom: string;
    date_convention: string;
}

export interface TopDestination {
    pays: string;
    visites: number;
}

export interface TopHotel {
    hotel: string;
    reservation: number;
}

export interface TopAirline {
    nom: string;
    reservation: number;
}

export interface AirlineRating {
    ratings: {
        id_compagnie_aerienne: number;
        note_compagnie_aerienne_aller: number;
        avis_compagnie_aerienne_aller: string;
        note_compagnie_aerienne_retour: number;
        avis_compagnie_aerienne_retour: string;
    }[];
    average: { moyenne: string };
}
