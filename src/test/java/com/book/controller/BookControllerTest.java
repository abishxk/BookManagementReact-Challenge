package com.book.controller;

import com.book.entity.Book;
import com.book.service.BookServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class BookControllerTest {

    private MockMvc mockMvc;

    @Mock
    private BookServiceImpl bookService;

    @InjectMocks
    private BookController bookController;

    private ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(bookController).build();
    }

    @Test
    public void testGetAllBooks() throws Exception {
        List<Book> books = Arrays.asList(
                new Book("1001", "Java Basics", "Author X", "2025"),
                new Book("1002", "Python Basics", "Author Y", "2025")
        );

        when(bookService.getAllBooks()).thenReturn(books);

        mockMvc.perform(get("/api/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2));
    }

    @Test
    public void testGetBookByIsbn() throws Exception {
        Book book = new Book("1001", "Java Basics", "Author X", "2025");

        when(bookService.getBookByIsbn("1001")).thenReturn(book);

        mockMvc.perform(get("/api/books/1001"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.isbn").value("1001"))
                .andExpect(jsonPath("$.title").value("Java Basics"));
    }

    @Test
    public void testAddBook() throws Exception {
        Book book = new Book("1003", "C Basics", "Author Z", "2025");

        when(bookService.addBook(any(Book.class))).thenReturn("Book added successfully.");

        mockMvc.perform(post("/api/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(book)))
                .andExpect(status().isOk())
                .andExpect(content().string("Book added successfully."));
    }

    @Test
    public void testUpdateBook() throws Exception {
        Book updatedBook = new Book("1001", "Updated Java", "Author X", "2026");

        when(bookService.updateBook(eq("1001"), any(Book.class)))
                .thenReturn("Book updated successfully.");

        mockMvc.perform(put("/api/books/1001")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedBook)))
                .andExpect(status().isOk())
                .andExpect(content().string("Book updated successfully."));
    }

    @Test
    public void testDeleteBook() throws Exception {
        when(bookService.deleteBook("1001")).thenReturn("Book deleted successfully.");

        mockMvc.perform(delete("/api/books/1001"))
                .andExpect(status().isOk())
                .andExpect(content().string("Book deleted successfully."));
    }
}
