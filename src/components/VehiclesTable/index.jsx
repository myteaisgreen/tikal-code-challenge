import { useEffect, useState } from "react";
import getTableData from "./data";
import { Root } from "./style";
import VehicleEntry from "./VehicleEntry";

const VehiclesTable = () => {
	const [vehicles, setVehicles] = useState();

	useEffect(async () => {
        const fetchData = async () => {
            if (!vehicles) {
                const vehiclesData = await getTableData();
                setVehicles(vehiclesData);
            }
        }

        fetchData();
	}, [vehicles]);

	return (
		<Root>
            <h1>
                Which vehicle names have the highest sum of population for all its pilots’ home planets?
            </h1>
			{vehicles?.map((v) => (
				<VehicleEntry key={v.name} vehicle={v} />
			))}
		</Root>
	);
};

export default VehiclesTable;
