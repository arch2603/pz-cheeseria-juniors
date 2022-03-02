import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const purchase = require('./data/purchase.json');
let fs = require('fs')

const filePath = "C:/work/personal/pz/pz-final/pz-cheeseria-juniors/src/server/data/";

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

router.post('/api/purchase', (req, res, next) => {
    try {
        //console.log( req.body);
        var data = JSON.stringify(req.body);
        fs.writeFile(filePath + "purchase.json", data , (err: any) =>{
            if(err){
                console.log(err.message)
            }else{
                console.log("Data saved");
            }
        });
        res.send("File successfully written");
    }catch (err){
        console.log(err.message)
    }


});

export default router;