const express = require('express')
const formidable = require('formidable')
let Router = express.Router()

module.exports = Router


Router.get('/form', (req, res) => {
    res.render('upload/form')
})

Router.post('/fileUpload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./nodeupload/statics2/imgs"
    form.keepExtensions = true
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.log(err)
        }
        let imgpath = files.file.path
        imgpath = imgpath.slice(10)
        res.send(`<img id = "img" src="${imgpath}" />`)
    });
})