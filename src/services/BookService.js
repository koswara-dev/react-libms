import axios from 'axios'

const BOOKS_REST_API_URL = 'http://localhost:8080/api/book';

class BookService {

    getBooks(){
        return axios.get(BOOKS_REST_API_URL);
    }
}

export default new BookService();
