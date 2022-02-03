import { useEffect, useState } from "react";
import getChartData from "./data";
import PlanetEntry from "./PlanetEntry";
import { Root } from "./style";

const PlanetsChart = () => {
    const [planets, setPlanets] = useState();
    
    useEffect(() => {
		const fetchData = async () => {
            if (!planets) {
                const planetsData = await getChartData();
                setPlanets(planetsData);
            }
        }
        fetchData();
	}, [planets]);

    return (
        <Root>
            {planets?.map(planet => (
                <PlanetEntry key={planet.name} planet={planet}/>
            ))}
        </Root>
    )
}

export default PlanetsChart;