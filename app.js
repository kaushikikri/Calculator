const express = require('express');
const bodyparse = require('body-parser');
const app = express();
app.use(bodyparse.urlencoded({ extended: true }));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/resl', (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    if (req.body.res == '+') {
        const result = n1 + n2;
        res.send('Addition' + ' ' + '=' + ' ' + result);
    }
    else if (req.body.res == '-') {
        const result = n1 - n2;
        res.send('Subtraction' + ' ' + '=' + ' ' + result);
    }
    else if (req.body.res == '*') {
        const result = n1 * n2;
        res.send('Multiplication' + ' ' + '=' + ' ' + result);
    }
    else if (req.body.res == '/') {
        const result = n1 / n2;
        res.send('Division' + ' ' + '=' + ' ' + result);
    }
    else if (req.body.res == '%') {
        const result = n1 % n2;
        res.send('Modulus' + ' ' + '=' + ' ' + result);
    }
    else {
        res.send('Please select any operations First!');
    }

});
app.listen(3000, (res) => {
    console.log('Connected at port 3000');
});