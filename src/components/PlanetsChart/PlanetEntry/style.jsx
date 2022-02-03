import styled from "styled-components";

export const Root = styled.div`
    display: flex; 
    flex-direction: column;
`;

export const Chart = styled.div`
    @keyframes ${props => `${props.name}`} {
        0% { height: 0px }
        10% { height: ${props => `${0.1*((props.population/100000)*0.01+10)}px`} }
        20% { height: ${props => `${0.2*((props.population/100000)*0.01+10)}px`} }
        30% { height: ${props => `${0.3*((props.population/100000)*0.01+10)}px`} }
        40% { height: ${props => `${0.4*((props.population/100000)*0.01+10)}px`} }
        50% { height: ${props => `${0.5*((props.population/100000)*0.01+10)}px`} }
        60% { height: ${props => `${0.6*((props.population/100000)*0.01+10)}px`} }
        70% { height: ${props => `${0.7*((props.population/100000)*0.01+10)}px`} }
        80% { height: ${props => `${0.8*((props.population/100000)*0.01+10)}px`} }
        90% { height: ${props => `${0.9*((props.population/100000)*0.01+10)}px`} }
        100% { height: ${props => `${((props.population/100000)*0.01+10)}px`} }
    }
    
    animation-name: ${props => `${props.name}`};
    animation-duration: 5s;
    height: ${props => `${(props.population/100000)*0.01+10}px`};
    background-color: #54BAB9;
`;

export const PlanetName = styled.span`
    
`;

export const Population = styled.span`

`;