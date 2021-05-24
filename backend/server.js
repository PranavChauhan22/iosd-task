import express from 'express';
import data from './data';

const app=express();
app.get('/',(req,res)=>{
    res.send('Server is Ready');
})  
app.get('/api/shirts',(req,res)=>{
    res.send(data.shirts);
}) 
app.get('/api/shoes',(req,res)=>{
    res.send(data.shoes);
}) 

app.listen(5000,()=>{console.log('Server started at http://localhost:5000')})