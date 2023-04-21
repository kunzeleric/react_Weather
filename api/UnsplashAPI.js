
import axios from 'axios';

const baseUrl = '';
const apikey = '';

class ImageService{
    
    static getCurrentWeather(location){
        return axios(`${baseUrl}`);
    }

    static getForecastWeather(location){
        return axios(`${baseUrl}`);
    }
}

export default ImageService;