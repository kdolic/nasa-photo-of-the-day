import React from 'react'


function NasaPhoto(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <div>
                <iframe src={props.url} width='50%' height='500'></iframe>
            </div>
        </div>
    )
}

export default NasaPhoto;
