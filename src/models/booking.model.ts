export default interface Booking {
    num_reservation: number;
    categorie: string;
    date_reservation: string;
    destination: string;
    id_client: number;
    nom: string;
    prenom: string;
    email: string;
    num_vol_aller: number;
    date_vol_aller: string;
    compagnie_aerienne_aller: string;
    heure_depart_aller: string;
    prix_vol_aller: string;
    num_vol_retour: number;
    date_vol_retour: string;
    compagnie_aerienne_retour: string;
    heure_depart_retour: string;
    prix_vol_retour: string;
    nom_hotel: string;
    nb_etoile: number;
    prix_chambre: string;
    debut_sejour: string;
}

export interface BookingStats {
    data: {
        Janvier: number | null;
        Février: number | null;
        Mars: number | null;
        Avril: number | null;
        Mai: number | null;
        Juin: number | null;
        Juillet: number | null;
        Août: number | null;
        Septembre: number | null;
        Octobre: number | null;
        Novembre: number | null;
        Décembre: number | null;
    };
    status: number;
}
