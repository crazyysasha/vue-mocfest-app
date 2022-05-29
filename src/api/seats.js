import axios from "@/utils/axios";

export const getSeats = (idOrSlug) => {
    return axios.get(`seats/${idOrSlug}`);
}

export const getSeatsPrices = () => {
    return axios.get('seats/groups')
}

export const bookSeat = (chosenSeats) => {
    const seats = chosenSeats.map(seat => {
        return {
            section: seat.section,
            row: seat.row,
            number: seat.number
        }
    })

    return axios.post(`seats/book`, { seats })
}