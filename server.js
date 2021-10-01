const express = require('express');
const app = express();


const mockUserData = [
    {name:'Paul'},
    {name:'Osamose'}
]


app.get('/users', function(req, res) {
        res.json({
            success: true, 
            message: 'successfully got users. Nice work!',
            users: mockUserData
        })
});


app.listen(5000, function() {
    console.log("this server is up and runnning")
    });