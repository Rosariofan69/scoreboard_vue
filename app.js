"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const port = Number(process.env.PORT) || 3000;
const app = (0, express_1.default)();
// log
app.all("*", (req, res, next) => {
    console.log(req.method, req.path);
    next();
});
// static files
app.use(express_1.default.static(path_1.default.resolve("public")));
// API
app.get("/data.json", (req, res) => {
    const data = {
        date: new Date(),
        message: "Hello World!",
    };
    res.json(data);
});
app.get('/xlsx', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    // res.send('GETパラメータ取得: ');
    const xlsx = require('xlsx');
    const book = xlsx.readFile('./public/Book1.xlsx');
    const worksheet = book.Sheets['Sheet1'];
    const rowIndex = 0;
    const columnIndex = 0;
    const cellAddress = xlsx.utils.encode_cell({ c: columnIndex, r: rowIndex });
    const cell = worksheet[cellAddress];
    res.send('cel');
});
// start
app.listen(port, () => console.log("Listening at", port));
//# sourceMappingURL=app.js.map