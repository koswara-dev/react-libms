import React from "react";
import BookService from "../services/BookService";

class BookComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books:[]
        }
    }

    componentDidMount(){
        document.title = "Library Management System"
        BookService.getBooks().then((response) => {
            this.setState({ books: response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className = "text-center">Books List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Book Id</td>
                            <td> Book ISBN</td>
                            <td> Book Title</td>
                            <td> Book Publication Year</td>
                            <td> Book Language</td>
                            <td> Book Author Name</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.books.map(
                                book => 
                                <tr key = {book.id}>
                                     <td> {book.id}</td>   
                                     <td> {book.isbn}</td>   
                                     <td> {book.bookTitle}</td>   
                                     <td> {book.publicationYear}</td>   
                                     <td> {book.language}</td>   
                                     <td> {book.authorName}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
        )
    }
}

export default BookComponent;