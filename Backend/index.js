// app.js (or server.js)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const healthHistoryRoutes = require('./routes/Health');
const userAuthRoutes = require('./routes/Auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (make sure to replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://aaravraj:aarav@medicare.wr9kcqc.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Server and database linked")
})
// Use the health history routes
app.use('/', healthHistoryRoutes);
app.use('/auth',userAuthRoutes); //server routes


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
