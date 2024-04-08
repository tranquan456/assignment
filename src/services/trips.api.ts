import { ITrip } from "../interfaces/trips";
import instance from "./instance";

export const getTrips = (query: string) => {
    const uri = "/trips?" + query
    const data = instance.get(uri)
    return data
}

export const getTripById = (id: number | string) => {
    const data = instance.get("/trips/" + id)
    return data
}

export const postTrip = async (data: ITrip) => {
    const uri = "trips"
    return instance.post(uri, data)
}

export const putTrip = async (id: string | number, data: ITrip) => {
    const uri = "trips/" + id
    return instance.put(uri, data)
}

export const deleteTrip = async (id: string | number) => {
    const uri = "trips"+id
    return instance.delete(uri)
}