const express = require('express');

let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.listen(PORT, () => {
    console.log(`Express server is up on port ${PORT}`);
});