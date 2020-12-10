import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledHeader = styled.div `
    background-image: url('https://images.unsplash.com/photo-1518514854541-fe58ae2a5ef1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Roboto', sans-serif;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 100px;

    img {
        width:5%;
    }

    h1 {
        color: white;
        width: 60%;
        font-size: 2.5rem;
    }
`;

function NasaHeader() {
    return (
        <StyledHeader>
            <img src='https://cdn.iconscout.com/icon/free/png-256/nasa-282190.png' alt='nasa-logo'></img>
            <h1>NASA Photo of the Day</h1>
        </StyledHeader>
    )
}

export default NasaHeader
