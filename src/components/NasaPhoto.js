import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledPhoto = styled.img`
    border: 1px solid crimson;
    border-radius: 20px;

`;

const StyledPhotoInfo = styled.div `
    font-family: 'Roboto', sans-serif;

    h2, h3{
        color: white;
        
        padding-top: 50px;
    }
`;

function NasaPhoto(props) {
    return (
        <div>
            <StyledPhoto src={props.url} width='50%' height='500'></StyledPhoto>
            <StyledPhotoInfo>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
            </StyledPhotoInfo>
        </div>
    )
}

export default NasaPhoto;
