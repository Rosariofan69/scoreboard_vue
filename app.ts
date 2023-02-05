import express from 'express'
import path from 'path';

const port = Number(process.env.PORT) || 3000;

const app = express()

// log
app.all("*", (req: any, res: any, next: any) => {
  console.log(req.method, req.path);
  next();
});

// static files
app.use(express.static(path.resolve("public")));

// API
app.get("/data.json", (req: any, res: any) => {
  const data = {
    date: new Date(),
    message: "Hello World!",
  };
  res.json(data);
});


app.get('/xlsx', (req: any, res: any) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  // res.send('GETパラメータ取得: ');

  const xlsx = require('xlsx');
  
  const book = xlsx.readFile('./public/Book1.xlsx');
  const worksheet = book.Sheets['Sheet1'];

  const rowIndex = 0;
  const columnIndex = 0;

  const cellAddress = xlsx.utils.encode_cell( {c:columnIndex, r:rowIndex} );
  const cell = worksheet[cellAddress];
  res.send('cel');
});


// start
app.listen(port, () => console.log("Listening at", port));
