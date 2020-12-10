import React from 'react'
import styled, {keyframes} from 'styled-components'


const StyledFooter = styled.div `
    background-image: url('https://images.unsplash.com/photo-1518514854541-fe58ae2a5ef1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Roboto', sans-serif;
    background-color: black;

    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    height: 10vh;

    h3 {
        color: white;
        font-size: 1.5rem;
    }
`;

function NasaFooter() {
    return (
        <StyledFooter>
            <h3>Visit us at: <a href='https://www.nasa.gov/' target='_blank'>https://www.nasa.gov/</a> for more information.</h3>
            <p>Explore with us</p>
        </StyledFooter>
    )
}

export default NasaFooter
