import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async () => {
        /* vamos a utilizar la libreria de testing para los hooks */
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Naruto') );
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);


    });

    test('Debe retornar un arreglo de imgs y el loading en false', async () => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Naruto') );
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
