
import axios from 'axios';

const baseUrl = 'https://api.unsplash.com/search/photos?';
const apikey = 'Q-AQWhRWiI0BRfjBGddjma1g0g4_RyXNbRpgzeJth4s';

class ImageService{
    
    static getPictures(location){
        return axios(`${baseUrl}&query=${location}&client_id=${apikey}&per_page=8&auto=format`);
    }
}


export default ImageService;
