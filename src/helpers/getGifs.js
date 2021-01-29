 export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TA1LDEUmmCTr0u3JDwijFNXq5tUw4hwX&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        const { id, title, images: { downsized_medium }, } = img;
        return {
            id: id, 
            title: title,
            url: downsized_medium.url,
        }
    });
    return gifs;
}