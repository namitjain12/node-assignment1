const express = require('express');
const app = express();
const http = require('http');
let books = [
    {
        "id": "001",
        "name": "palace of illusion",
        "author": "chitra banerjee"
    },
    {
        "id": "002",
        "name": "Getting things done",
        "author": "david"
    }
];
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/books') {
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify(books));
        }
    }
    if (req.method === 'POST') {
        if (req.url === '/books') {
            let body = '';
            req.on('data', (chunk) => {
                
                body += chunk.toString();//chunl is in binary form
            });
            req.on('end', () => {
                try {
                   
                    const newBook = JSON.parse(body);

                    books.push(newBook);

                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify( newBook ));
                } catch (error) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Invalid JSON data' }));
                }
            });
        }
    }
    if(req.method==='DELETE'){
        if (req.url.startsWith('/books/')) {
            const bookID = req.url.split('/books/')[1]; 
            const updatedBooks = books.filter((book) => book.id !== bookID);
            books = updatedBooks; 
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedBooks));
        }
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



