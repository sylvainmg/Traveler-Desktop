export default interface Hotel {
    num_convention: number;
    id_hotel: number;
    nom: string;
    date_convention: string;
}

export interface TopHotel {
    hotel: string;
    reservation: number;
}

export interface HotelRating {
    ratings: { id_hotel: number; note_hotel: number; avis_hotel: string }[];
    average: { moyenne: string };
}
