import axios from 'axios';

const API_KEY = '32003673-6678ea5058f0970b487cd30b2';
const URL = 'https://pixabay.com/api/?key=';

export class PixabayApi {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.per_page = 40;
  }

  async fetchPhoto() {
    const options = {
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.page,
      per_page: this.per_page,
    };

    return await axios.get(`${URL}`, { params: options });
  }
}
