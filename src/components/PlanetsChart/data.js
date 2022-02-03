import { fetchGeneralResource } from "../../api"

const neededPlanets = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];

const filterPlanets = (planets) => {
    const result = [];
    planets.forEach( planet => {
        if(neededPlanets.includes(planet.name)){
            result.push({ name: planet.name, population: planet.population })
        }
    });

    return result;
}

const getChartData = async () => {
    const planetsResponse = await fetchGeneralResource('https://swapi.dev/api/planets/');
    const planets = filterPlanets(planetsResponse);
    return planets;
}


export default getChartData;