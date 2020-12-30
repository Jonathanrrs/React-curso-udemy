import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', () => {
        /* vamos a utilizar la libreria de testing para los hooks */
        const {result} = renderHook(() => useFetchGifs('Naruto') );
        const {data, loading} = result.current;
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);


    });
    
})
