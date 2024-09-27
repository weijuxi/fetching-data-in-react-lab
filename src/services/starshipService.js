
const BASE_URL = 'https://swapi.dev/api/starships';

const getStarships = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}?search=${query}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

export { getStarships };