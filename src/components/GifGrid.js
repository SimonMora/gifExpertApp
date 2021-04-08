import React from 'react'
import { useFetchGifs } from '../hooks/UseFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // useEffect(() => getGifs(category).then(setImages), [category]);

    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className='card-grid'>

            <br />
            {loading && <p>Loading..</p>}
            {images.map(img => {

                return <>
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                </>
            })}

        </div>
    )
}
