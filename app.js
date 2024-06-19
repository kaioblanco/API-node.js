require('dotenv').config()
const express = require('express')
const router = require('./routes/routes')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

const PORT_APP = process.env.PORT || 3000
app.listen(PORT_APP, () => {
    console.log("system running: http://localhost:" + PORT_APP);
})