export interface ITrip {
    id?: string,
    fromStation: string,
    toStation: string,
    startTime: string,
    seats: number,
    price: number,
    busHouseId: string,
    busHouse?: IBusHouse,
    phone: number,
    station: string,
}

export interface IBusHouse {
    adress: string,
    id: string,
    name: string,
    phone: string,
}