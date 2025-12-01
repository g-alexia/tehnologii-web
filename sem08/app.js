const express = require('express')
const app = express();
const port = 3000;
const Book = require('./Book');

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
     .get('/books', (req, res) =>{
    let filteredBooks = [];
    if(req.query.genre){
        filteredBooks = books.filter(x=> x.genre == req.query.genre);
    }else{
        filteredBooks = books;
    }
    res.json(filteredBooks);
} )

// pas 1
// un request de tip GET pt a returna lista tuturor cartilor in ordine alfabetica
app.get('/books/sorted', (req, res) => {
    let listaSortataAlfabetic = [...books].sort((a, b) => 
        a.name.localeCompare(b.name));
   res.json(listaSortataAlfabetic);
})


// app.post('/addBooks', (req, res) => {
//     let newBook  = new Book(req.body.id, 
//                             req.body.name, 
//                             req.body.genre, 
//                             req.body.author)
//     books.push(newBook)
//     console.log(books);
//     return res.json(newBook);
// })

// pas2 - un request post care sa valideze informatiile trimise in corpul cererii inainte de a salva
app.post('/addBooks', (req, res) => {
    const {id, name, genre, author} = req.body;
    if (!id || typeof id !== "number") 
        return res.status(400).json({ error: "ID obligatoriu si trebuie sa fie numar" });
    
    if (!name || typeof name !== "string" || name.trim().length === 0) 
        return res.status(400).json({ error: "Nume obligatoriu si sa nu fie nul" });
    
    if (!genre || typeof genre !== "string") 
        return res.status(400).json({ error: "Genul obligatoriu si sa nu fie nul" });
    
    if (!author || typeof author !== "string") 
        return res.status(400).json({ error: "Autor obligatoriu si sa nu fie nul" });
   
    const carteExistenta = books.find(x => x.id === id);
    if(carteExistenta)
        return res.status(400).json({ error: 'Exista deja cartea!' });

    let carteNoua = new Book(id, name, genre, author);
    books.push(carteNoua);
    console.log("Lista: ", books);

    return res.status(201).json(carteNoua);
});

