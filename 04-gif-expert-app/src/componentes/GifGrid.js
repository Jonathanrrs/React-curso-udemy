import React, { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=vD2873pCOTBaVMmRB83BYa1KkLi62PhF`
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}></button>
        </div>
    )
}
