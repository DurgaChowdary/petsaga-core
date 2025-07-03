const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 2300;

app.use(express.json()); // Middleware for parsing JSON

// Setting up a Mongoose object for establishing a DB connection
mongoose.connect('mongodb://localhost:27017/petsaga-dev', {
     useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connection established'))
.catch(err => console.error('MongoDB connection error:', err));

// App Routes
const PetRouter = require('./routes/pets');
app.use('/api/pets', PetRouter);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});