const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path =  require('path');

require('dotenv').config();

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true,useFindAndModify: false }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//gets
const featuredrooms =require('./routes/featuredrooms');
const allrooms =require('./routes/allrooms');
const singleroom =require('./routes/singleroom');

//posts
const postroom =require('./routes/postroom');
const reservation =require('./routes/reservation');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/',featuredrooms);
app.use('/rooms',allrooms);
app.use('/rooms/',singleroom);
app.use('/add',postroom);
app.use('/reservation',reservation);


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname,'client', 'build')));
  app.get('*', function (req, res) { // This wildcard method handles all requests

    Router.run(routes, req.path, function (Handler, state) {
        var element = React.createElement(Handler);
        var html = React.renderToString(element);
        res.render('main', { content: html });
    });
});
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});