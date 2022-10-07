import express from 'express'

const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send("Hello you");
    
})

app.listen(port, ()=> {
    console.log("Hello you");
    console.log("Meow meow meeeeoowwwwww");
})