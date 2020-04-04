const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const User = require('./models/user')
const app = express()
const { getSecret } = require('./helpers/helper')

const mongo_url = (process.env.NODE_ENV == 'development') ? process.env.MONGO_URL : getSecret('MONGO_URL_FILE')
console.log(mongo_url)
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log(`Connected to Database`))
.catch(error => console.log("Error",error.message))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',async (req, res, next) => {
    const user = await User.find({  })
    return res.status(200).json({ success: true, data: "Hello world" });
})

app.get('/generate-user',async (req, res) => {
    const user = new User({ email: "admin@gmail.com" })
    await user.save()
    return res.status(200).json({ success: true, data: user });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});