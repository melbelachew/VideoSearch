import axios from 'axios';

const KEY = 'AIzaSyD9D7iMuW_bEb-VGNBkp1tzB-k-PB9cpLk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxReasults: 5,
        key: KEY
    }
})