package com.book.controller;

import com.book.entity.Book;
import com.book.repo.BookRepo;
import com.book.service.BookService;
import com.book.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {


    @Autowired
    private BookService bookService;


    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{isbn}")
    public Book getBookByIsbn(@PathVariable String isbn) {
        return bookService.getBookByIsbn(isbn);
    }

    @PostMapping
    public String addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @PutMapping("/{isbn}")
    public String updateBook(@PathVariable String isbn, @RequestBody Book updatedBook) {
        return bookService.updateBook(isbn, updatedBook);
    }

    @DeleteMapping("/{isbn}")
    public String deleteBook(@PathVariable String isbn) {
        return bookService.deleteBook(isbn);
    }
}
