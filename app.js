const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');

//routes import start
const userRoute = require('./routes/userRoutes')
const creatorRoute = require('./routes/creatorRoutes')
const donationRoute = require('./routes/donationRoutes')
//routes import end

mongoose.connect('mongodb://localhost:27017/duckcart')
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routes sections
app.use('/users',userRoute)
app.use('/creator',creatorRoute)
app.use('/donation',donationRoute)


//port and server 
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})