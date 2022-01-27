const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    edition_year: Number,
    pages: Number,

})

bookSchema.methods.newBook = async function newBook() {
    try{
        await this.save();
    } catch(err) {
        console.log(err);
    }
}

module.exports = mongoose.model("Book", bookSchema);