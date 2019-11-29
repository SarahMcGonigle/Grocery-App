// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB ='mongodb+srv://admin:admin@cluster0-ku2kj.mongodb.net/grocery?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const grocerySchema = new Schema({
  name:String,
  price:String,
  category:String,
  amount:String
});

const GroceryModel = mongoose.model('grocery',grocerySchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.put('/api/groceries/:id', (req, res)=>{
  console.log(req.body);
  console.log("Edit "+req.params.id);

  GroceryModel.findByIdAndUpdate(req.params.id,
    req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
})


app.get('/api/groceries', (req,res,next) => {

  console.log("get request")
  GroceryModel.find((err,data)=>{
    res.json({groceries:data});
  })
})




app.delete('/api/groceries/:id', (req,res) =>{
  console.log(req.params.id);

  GroceryModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);
     
    res.json(data);
  })
})




app.post('/api/groceries', (req,res) =>{
console.log('post Sucessfull');
console.log(req.body)
console.log(req.body.name);
console.log(req.body.price);
console.log(req.body.cateory);
console.log(req.body.amount);


GroceryModel.create({
  name: req.body.name,
  price: req.body.price,
  category: req.body.category,
  amount: req.body.amount

});
res.json('data uploaded')

})

app.get('/api/groceries/:id',(req,res)=>{
  console.log(req.params.id);

  GroceryModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})



app.listen(PORT, () => 
console.log(`Example app listening on port ${PORT}!`))