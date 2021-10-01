const express = require('express');
const app = express();

// to make a POST request
const bodyParser = require('body-parser');


app.use(bodyParser.json());


const mockUserData = [
    {name:'Paul'},
    {name:'Osamose'}
]

//colons are used as variables taht be viewed in the params
app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
});

app.post('/login', function(req, res){
    //typically passwords are encrypted like this
    const username = req.body.username;
    const password = req.body.password;

    //this should come from the db
    const mockUsername = "Omoore94";
    const mockPassword = "thesonofthesoil1994";


    if (username === mockUsername && password === mockPassword) {
        //In practice, use JSON web token sign method here
        res.json({
            success: true,
            message: 'the password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'the password and username do not match, please try again later'
        })
    }
});


app.get('/users', function(req, res) {
        res.json({
            success: true, 
            message: 'successfully got users. Nice work!',
            users: mockUserData
        })
});


app.listen(5000, function() {
    console.log('listening on port 5000')
});