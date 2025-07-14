package com.book.service;

import com.book.entity.Book;
import java.util.List;

public interface BookService {
    List<Book> getAllBooks();
    Book getBookByIsbn(String isbn);
    String addBook(Book book);
    String updateBook(String isbn, Book updatedBook);
    String deleteBook(String isbn);
}
