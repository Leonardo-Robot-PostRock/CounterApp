

export const usContext = ({ clave = 'Snake', nombre, edad = 30, rango = 'Capitán' }) => {

    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

