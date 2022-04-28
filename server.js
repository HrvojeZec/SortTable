const express = require('express')
const app = express();
let { Globalclubs } = require('./backend/database')


app.use(express.static('./frontend'))


app.get('/clubs', (req, res) => {

    res.json(Globalclubs)


})

app.listen(3000, (err) => {
    if (err) {
        console.error('Failure to launch server');
        return;
    }
    console.log('server is listening on port 3000');
})


