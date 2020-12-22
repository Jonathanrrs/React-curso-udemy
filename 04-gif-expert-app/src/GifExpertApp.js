import React, {useState} from 'react';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Dragon ball', 'Naruto'];

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball', 'Naruto']);

    const hanleAdd = () => {
        setCategories([...categories, 'Death Note']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

           
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;