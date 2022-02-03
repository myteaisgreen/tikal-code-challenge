import { Root, Chart, PlanetName, Population } from "./style";

const PlanetEntry = ({ planet }) => {
    
    return (
        <Root>
            <Population>
                {planet.population}
            </Population>
            <Chart name={planet.name} population={planet.population}/>
            <PlanetName>
                {planet.name}
            </PlanetName>
        </Root>
    )
}

export default PlanetEntry;