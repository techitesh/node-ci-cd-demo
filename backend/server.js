const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const User = require('./models/user')
const app = express()

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log(`Connected to Database`))
.catch(error => console.log("Error",error.message))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',async (req, res, next) => {
    return res.status(200).json({ success: true, data: "Hello world" });
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});