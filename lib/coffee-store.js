const getURLForCoffeeStores = (latLong, query, limit) => {
    return (`https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`)
}
import { createApi } from 'unsplash-js';
const unsplash = createApi({
    accessKey: 'UNSPLASH_ACCESS_KEY',
});
export const fetchCoffeeStore = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.FOURSQUARE_API_KEY,
        }
    };

    const response = await fetch(getURLForCoffeeStores("29.893137436943032%2C-95.7139295553942", "coffee", 6), options);
    const data = await response.json();
    return data.results

    // .catch(err => console.error(err));
}