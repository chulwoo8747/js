const express = require('express');

const app = express();

app.get('/parkdoyeonbeongsin', (req,res)=> {
    res.send('kodomo');
})

app.get('/user/asd', (req,res) => {
    res.sendFile(__dirname + '/kim.html');
})

app.listen(3000, () => {
    console.log('start')
});

// http 메서드 get,post,put,patch,delate 어떻게 작동하는지
// request, response 