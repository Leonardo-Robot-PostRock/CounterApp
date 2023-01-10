import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornar un objeto', () => {
        const nombreClave = 'Snake';

        const edad = 30;

        const obj = usContext(nombreClave, edad);

        expect(obj).toEqual({
            nombreClave: nombreClave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
})