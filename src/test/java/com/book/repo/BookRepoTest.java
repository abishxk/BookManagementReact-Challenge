package com.book.repo;

import com.book.entity.Book;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class BookRepoTest {

    @Autowired
    private BookRepo bookRepository;

    @Test
    public void testSaveBook() {
        Book book = new Book();
        book.setIsbn("2001");
        book.setTitle("Junit testing");
        book.setAuthor("Author A");
        book.setYop("2024");
        bookRepository.save(book);

        Book savedBook = bookRepository.findById("2001").orElse(null);
        Assertions.assertNotNull(savedBook);
        Assertions.assertEquals("Junit testing", savedBook.getTitle());
    }

    @Test
    public void testFindAllBooks() {
        List<Book> books = bookRepository.findAll();
        Assertions.assertNotNull(books);
        Assertions.assertTrue(books.size() >= 1);
    }

    @Test
    public void testDeleteBook() {
        Book book = new Book();
        book.setIsbn("2002");
        book.setTitle("Jwt");
        book.setAuthor("Author b");
        book.setYop("2022");
        bookRepository.save(book);

        Book savedBook = bookRepository.findById("2002").orElse(null);
        Assertions.assertNotNull(savedBook);

        bookRepository.deleteById("2002");

        Book deletedBook = bookRepository.findById("2002").orElse(null);
        Assertions.assertNull(deletedBook);
    }
}
