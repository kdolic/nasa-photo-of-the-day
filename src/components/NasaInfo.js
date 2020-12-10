import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledBody = styled.div `
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: white;
        border: 1px solid crimson;
        text-align: center;
        align-items: center;
        width: 30%;
        height: 30vh;
        padding-top: 50px;
    }
`;

function NasaInfo(props) {
    return (
        <StyledBody>
            <p>{props.explanation}</p>
        </StyledBody>
    )
}

export default NasaInfo
