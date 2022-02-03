import { fetchArraySpecificResources, fetchGeneralResource, fetchSpecificResource } from '../../api/index.js';

const sortVehiclesByPopulation = (vehicles) => {
    vehicles.sort((a, b) => {
        if(a.totalPopulation <= b.totalPopulation){
            return 1;
        }

        if(a.totalPopulation > b.totalPopulation){
            return -1;
        }
    })
}
const filterVehicles = (vehicles) => {
    const vehiclesWithPilots = vehicles.filter( vehicle => vehicle.pilots.length > 0);
    const filteredVehicles = vehiclesWithPilots.map( vehicle => ({name: vehicle.name, pilots: vehicle.pilots}));

    return filteredVehicles;
}

const populateHomeworlds = async (vehicles) => {
    for(let i = 0; i < vehicles.length; i++){
        let vehicle = vehicles[i];
        let totalPopulation = 0;

        for(let j = 0; j < vehicle.pilots.length; j++){
            let pilot = vehicle.pilots[j];
            let homeworld = await fetchSpecificResource(pilot.homeworld);
            let population = homeworld.population !== 'unknown' ? +homeworld.population : 0;
            pilot.homeworld = { name: homeworld.name, population: population };
            totalPopulation += population;
        }

        vehicle.totalPopulation = totalPopulation;
    }
}

const populatePilots = async (vehicles) => {
    const vehiclesWithPilots = [];
    
    for(let i = 0; i < vehicles.length; i++){
        let pilots = await fetchArraySpecificResources(vehicles[i].pilots);
        let pilotsFiltered = pilots.map( pilot => (
            { name: pilot.name, homeworld: pilot.homeworld, gender: pilot.gender }
            ));
        vehiclesWithPilots.push({ name: vehicles[i].name, pilots: pilotsFiltered });
    }
    
    return vehiclesWithPilots; 
}

const getTableData = async () => {
	const vehiclesResponse = await fetchGeneralResource("https://swapi.py4e.com/api/vehicles/");
    const vehiclesWithoutPilots = filterVehicles(vehiclesResponse);
    const vehicles = await populatePilots(vehiclesWithoutPilots);
    await populateHomeworlds(vehicles);
	sortVehiclesByPopulation(vehicles);
    
    return vehicles;
};


export default getTableData;