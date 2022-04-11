const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/posts.js')
const setRoutes = require('./routes/sets.js')

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/sets', setRoutes);


const CONNECTION_URL = 'mongodb+srv://StudyStreamMain:StudyStreamTF_CEN3031@sscluster.ev2vm.mongodb.net/SSCluster?retryWrites=true&w=majority:StudyStreamTF_CEN3031@sscluster.ev2vm.mongodb.net/SSCluster?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL).then(()=>{console.log('Server running on port correctly')})
//mongoose.set('useFindAndModify',false); //no warnings in console??
