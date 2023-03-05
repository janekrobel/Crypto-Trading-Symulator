const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/*
app.use(cors({
    origin: '*'
}));
*/

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});