
export const getImagen = async() => {

    try {

        const apiKey = 'CaLzFBSf9WESCfQPoiHahB9GipP88cGW';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?${apiKey}`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



