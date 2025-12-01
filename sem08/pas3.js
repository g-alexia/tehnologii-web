const express = require('express')
const app = express();
const port = 3000;
const Book = require('./Book');
const { resourceUsage } = require('process');

const bookRouter = express.Router();
app.use('/api', bookRouter);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send('Welcome to my API');
})

app.listen(port, () => {
    console.log("Running on port " + port);
})

let books = [new Book(1, "Dune", "sf", "Frank Herbert"), 
             new Book(2, "Robinson Crusoe", "adventures", "Daniel Defoe"),
             new Book(3, "Foundation", "sf", "Asimov")];

bookRouter.route('/books')
    .get((req, res) =>{
    let filteredBooks = [];
    if(req.query.genre){
        filteredBooks = books.filter(x=> x.genre == req.query.genre);
    }else{
        filteredBooks = books;
    }
    res.json(filteredBooks);
} )
    .post((req, res) => {
    let newBook  = new Book(req.body.id, 
                            req.body.name, 
                            req.body.genre, 
                            req.body.author)
    books.push(newBook)
    console.log(books);
    return res.json(newBook);
})

bookRouter.route('/books/:bookId')
    .put((req, res) => {
        const bookId = parseInt(req.params.bookId);
        const bookModif = books.find(x => x.id === bookId);

        bookModif.name = req.body.name;
        bookModif.genre = req.body.genre;
        bookModif.author = req.body.author;
        return res.json(bookModif);
   ß });

// pas 4 - delete pentru lista de carti
bookRouter.route('/books/:bookId')
    .delete((req, res) => {
        const bookId = parseInt(req.params.bookId);

        const index = books.findIndex(b => b.id === bookId);
        if (index === -1) {
            return res.status(404).json({ error: "Cartea nu a fost gasita." });
        }


        const deletedBook = books.splice(index, 1)[0];

        return res.json({
            message: "Cartea s-a sters",
            book: deletedBook
        });
    });

    

