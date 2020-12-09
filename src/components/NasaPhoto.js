import React from 'react'


function NasaPhoto(props) {
    return (
        <div>
            <iframe src={props.url} width='50%' height='500'></iframe>
            <div>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
            </div>
        </div>
    )
}

export default NasaPhoto;
