const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const PORT = 5000;
const app = express();

// set for public access
app.use(express.static(__dirname + "/public"));

// set for ejs views for response
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("home");
})

app.post('/contact-us',(req,res)=>{
    
    console.log(req.body);

    const receiverClient = "morisidhraj001@gmail.com";
    const subjectClient = "New Contact from portfolio site";
    const htmlClient = `<p>
    Contact's details: <br/>
        name: ${req.body.name}<br/>
        email: ${req.body.email}<br/>
        message: ${req.body.message}<br/>
    </p>`;
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.OUTLOOK_EMAIL,
            pass: process.env.OUTLOOK_PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.OUTLOOK_EMAIL, // sender address
        to: receiverClient, // list of receivers
        subject: subjectClient,
        html:htmlClient,
    };

    transporter.sendMail(mailOptions,async (err,info)=>{
        if(err) throw Error(err);
        console.log(info);
        res.redirect("/");
    });
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}...`);
});