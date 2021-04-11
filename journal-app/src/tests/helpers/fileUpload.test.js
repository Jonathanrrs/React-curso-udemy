import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary';

cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
  });


describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el URL ', async() => {
        
        const resp = await fetch('https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png'); /* creamos el archivo */
        const url = await fileUpload(file);
        
        expect(typeof url).toBe('string');

        //borrar img por id
        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.png', '');


        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            // done();
        });

    });

    test('Debe retornar un error ', async() => {
        const file = new File([], 'foto.png'); 
        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
    
    
})
