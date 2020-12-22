import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifsGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category); /* se renombra data a images */
    
    return (
       <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className="card-grid">
                {
                   images.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
        </div>
       </>
    )
}