import express from 'express'
import path from "path";
import fs from 'node:fs';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fs.readdir('./files', function (err, files) {

        if (err) {
            return res.status(500).send("Unable to read files");
        }

        res.render('index', { files: files });
    });
});


app.get('/edit/:filename', (req, res) => {
    res.render('edit',{filename:req.params.filename});
    
});

app.post('/edit', (req, res) => {
    
    fs.rename(`./files/${req.body.previous}` ,`./files/${req.body.new}`,function(err){
        res.redirect("/");
    })
    
});




app.get('/files/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, data) => {

        if (err) {
            return res.send("File not found");
        }

        res.render("show", {
            filename: req.params.filename,
            filedata: data
        });

    });
});




app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split('').join('')}.txt`, req.body.details, function (err) {
        res.redirect('/');

    });
});




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});
