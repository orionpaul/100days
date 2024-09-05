import express from "express"; // import express framework

const app = express()//express app instance
const port = 9090 //server port

app.get('/', function(req, res) {
   const fruits = ["Apple", "Banana", "Orange", "pine"]
   res.send(fruits)
})

app.use(express.json())

app.post('/', function(req, res) {
    const {name, age} = req.body;
    const result = `Hello ${name}, you are ${age} years old`;
    res.send(result);
    console.log(result);
})
app.listen(port, () => console.log(`our server is now running on: ${port}`))