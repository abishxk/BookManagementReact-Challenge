package com.book.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Book {

    @Id
    private String isbn;

    private String title;

    private String author;

    private String yop;

    public Book() {
    }

    public Book(String isbn, String title, String author, String yop) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.yop = yop;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getYop() {
        return yop;
    }

    public void setYop(String yop) {
        this.yop = yop;
    }
}
