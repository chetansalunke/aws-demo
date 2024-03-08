import express from 'express';

const app = express();

app.listen(5001,(req,res)=> console.log(`server is running on the port 5001`));

app.get('/',res.json('Ram Ram Server Is live !!'));