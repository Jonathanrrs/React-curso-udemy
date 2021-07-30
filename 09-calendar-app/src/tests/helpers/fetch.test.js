import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

describe('Pruebas en el helper fetch', () => {
    
    let token = '';

    test('FetchsinToken debe funcionar', async () => {
        const resp = await fetchSinToken('auth', {email: 'jona@gmail.com', password: '123456'}, 'POST');
        expect(resp instanceof Response).toBe(true);

        const body = await resp.json();
        expect(body.ok).toBe(true);

        token = body.token;
    });

    
    test('FetchConToken debe funcionar', async () => {
       localStorage.setItem('token', token);

       const resp = await fetchConToken('events/610201407860231a7c94436b', {}, 'DELETE');
       const body = await resp.json();

       expect(body.msg).toBe('Evento no existe por ese id');
    });


    
})
