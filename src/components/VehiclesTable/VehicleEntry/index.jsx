import { Root } from "./style";

const VehicleTotalPopulation = ({ vehicle }) => {
	const name = vehicle.name;
	const totalPopulation = vehicle.totalPopulation === 0 ? "Info. not available" : vehicle.totalPopulation;
	const emoji = "🛸";
	return (
		<h2>
			{emoji}{name} - {totalPopulation}
		</h2>
	);
};

const Homeworld = ({ homeworld }) => {
	const name =
		homeworld?.name === "unknown" ? "Unknown Planet" : homeworld.name;
	const population =
		homeworld?.population === 0
			? "Info. not available"
			: homeworld.population;
	const emoji = "🌌";

	return (
		<h3>
			{emoji}{name} - {population}
		</h3>
	);
};

const Pilot = ({ pilot }) => {
	const emoji = pilot.gender === "female" ? "👩‍‍✈️" : "👨‍‍✈️";

	return (
		<h4>
			{emoji}{pilot.name}
		</h4>
	);
};

const VehicleEntry = ({ vehicle }) => {
	return (
		<Root>
			<VehicleTotalPopulation vehicle={vehicle} />
			{vehicle.pilots?.map((p) => (
				<Homeworld homeworld={p.homeworld} />
			))}
			{vehicle.pilots?.map((p) => (
				<Pilot pilot={p} />
			))}
		</Root>
	);
};

export default VehicleEntry;
