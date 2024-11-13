const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


app.get('/mentors', (res, resp) => {


    const filepath = path.join(__dirname, 'data/mentors.json');
    fs.readFile(filepath, 'utf-8', (err, data)=>{
        if(err){
            resp.status(500).send({message: 'Failed to load mentors data'}); 
        }
        try{
            const mentors =JSON.parse(data);
            resp.send(mentors);
        }
        catch(err){
            resp.status(500).send({message: 'Failed to parse mentors data'});
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})