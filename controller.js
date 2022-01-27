const path = require('path');
const mongoose = require('mongoose');
// const Book
const connection = require('./config/connection');
const Book = require('./model/Book');

exports.sendLandingPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
}

exports.getNewBookPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "newBook.html"));
}
exports.getSearchBookPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "searchBook.html"));
}
exports.getUpdateBookPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "updateBook.html"));
}
exports.getDeleteBookPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "deleteBook.html"));
}

exports.insertNewBook = async (req,res) => {
    const result = connection();
    const book = new Book({title:req.body.title, author:req.body.author, publisher:req.body.publisher, edition_year:req.body.edition_year, pages:req.body.pages});
    book.newBook();
    console.log(book);
    res.send("Libro añadido correctamente");
}

exports.findBook = async (req,res) => {
    const result = connection();
    try {
        const book = await Book.findOne({title: req.body.find_book_title}, {_id: 0, __v: 0});
        res.send(book);
        console.log(book)
    } catch(err) {
        console.log(err)
    }
}

exports.updateBook = async (req,res) => {
    const result = connection();
    
}

exports.deleteBook = async (req,res) => {
    const result = connection();
    try {
        await Book.deleteOne({title: req.body.del_book_title});
        res.send("Libro borrado correctamente");
    } catch(err) {
        console.log(err)
    }
}