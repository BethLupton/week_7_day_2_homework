import React from 'react';

const Film = ({film}) => {
    return (
        <>
        <a className='movie-titles'  href={film.url}><h4>{film.name}</h4></a> 
        </>
    );
}

export default Film;