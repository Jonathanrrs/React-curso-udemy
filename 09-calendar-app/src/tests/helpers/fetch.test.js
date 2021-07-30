import { fetchSinToken } from "../../helpers/fetch"

describe('Pruebas en el helper fetch', () => {
    
    test('FetchsinToken debe funcionar', async () => {
        const resp = await fetchSinToken('auth', {email: 'jona@gmail.com', password: '123456'}, 'POST');
        expect(resp instanceof Response).toBe(true);

        const body = await resp.json();
        expect(body.ok).toBe(true);
    });
    
})
