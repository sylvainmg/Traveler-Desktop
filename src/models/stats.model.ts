import type { TopAirline, TopDestination, TopHotel } from "./airline.model";
import type { TopClient } from "./client.model";

export default interface Stats {
    bookingNumber: number | null;
    clientNumber: number | null;
    airlinesNumber: number | null;
    hotelsNumber: number | null;
    topClients: null | TopClient[];
    topDestinations: null | TopDestination[];
    topHotels: null | TopHotel[];
    topAirlines: null | TopAirline[];
}
