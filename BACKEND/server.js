import express from 'express';
import cors from 'cors';
import mysql from 'mysql2'
import bodyParser from 'body-parser';
const app = express();
const port=3000;
app.use(bodyParser.json());
app.use(cors());

const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'pavan@123',
    database:'pavan'
}).promise()


app.get('/',(req,res)=>{
    res.send('Server is ready');
});


var result;

app.post('/api/names', async (req, res) => {
    const receivedData = req.body.selectedData;
    receivedData.sort((a, b) => {
        if (a.header < b.header) return -1;
        if (a.header > b.header) return 1;
    
        if (a.option < b.option) return -1;
        if (a.option > b.option) return 1;
        return 0;
    });
    let  previous='';
    console.log(receivedData);
    let query = 'SELECT * FROM LAPTOP WHERE (';
    for (const element of receivedData) {
        const { header, option } = element;
        console.log(header,option);
            if(header==='SreenResolution'){
                if(previous===''){
                    query+=header+" "

                }
            }
            else if(previous===header || previous===''){
            query += header + " LIKE '%" + option + "%' or ";
            previous=header;
            }
            else{
                query = query.slice(0, -4);
                query+=")and ("+header+ " LIKE '%" + option + "%' or ";
                previous=header;
            }

       
    }
    query = query.slice(0, -4);
    query += ");";
    console.log("the pk ", query);
    result = await db.query(query);
    console.log(result[0].length);
    res.send(result[0]);
    query = '';
});
var num=0;
app.post('/api/laptopdata',async(req,res)=>{
    console.log(req.body.param);
    num=req.body.param;
})
app.get('/api/getdata',(req,res)=>{
    res.send(result[0][num]);
})
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);

});