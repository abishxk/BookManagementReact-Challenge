package com.book.service;

import com.book.entity.Book;
import com.book.repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepo bookRepo;

    @Override
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    @Override
    public Book getBookByIsbn(String isbn) {
        return bookRepo.findById(isbn).orElse(null);
    }

    @Override
    public String addBook(Book book) {
        if (bookRepo.existsById(book.getIsbn())) {
            return "Book with ISBN " + book.getIsbn() + " already exists.";
        }

        bookRepo.save(book);
        return "Book added successfully.";
    }


    @Override
    public String updateBook(String isbn, Book updatedBook) {
        Book existingBook = bookRepo.findById(isbn).orElse(null);

        if (existingBook == null) {
            return "Book not found with ISBN: " + isbn;
        }

        if (updatedBook.getTitle() != null && !updatedBook.getTitle().isEmpty()) {
            existingBook.setTitle(updatedBook.getTitle());
        }

        if (updatedBook.getAuthor() != null && !updatedBook.getAuthor().isEmpty()) {
            existingBook.setAuthor(updatedBook.getAuthor());
        }

        if (updatedBook.getYop() != null && !updatedBook.getYop().isEmpty()) {
            existingBook.setYop(updatedBook.getYop());
        }

        bookRepo.save(existingBook);
        return "Book updated successfully.";
    }


    @Override
    public String deleteBook(String isbn) {
        Book existingBook = bookRepo.findById(isbn).orElse(null);

        if (existingBook == null) {
            return "Book not found with ISBN: " + isbn;
        }

        bookRepo.deleteById(isbn);
        return "Book deleted successfully.";
    }
}
