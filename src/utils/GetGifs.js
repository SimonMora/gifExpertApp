export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SMsq7N9q3Dl9CKVtQz5gKXmaiJQ19xaS&q=${encodeURI(category)}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title.slice(0, 10),
            url: img.images?.downsized_medium.url,
        }
    })
    return gifs;
};
