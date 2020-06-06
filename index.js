const express = require('express');

const app = express();

app.get('/linkiv2', (req, res) => {
    res.sendFile(__dirname + '/linkiv2.html')
})


app.listen(8080, () => console.log('Listening on port 8080'));