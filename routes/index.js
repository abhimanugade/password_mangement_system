var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var userModel=require('../modules/user');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
      user:'abhimanugade@gmail.com',
      pass:'9637587393'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Registration' });
});
router.post('/', function(req, res, next) {
  var fname=req.body.fname;
  var lname=req.body.lname;
  var mobile_no=req.body.mobile_no;
  var email=req.body.email;
  var password=req.body.password;

  var user=new userModel({
    fname :fname,
    lname:lname, 
    mobile_no:mobile_no,
    email:email,
    password:password,
    flag:'unactive',
    
 
  });

  var mailoptions={
    from:'abhimanugade@gmail.com',
    to:`${req.body.email}`,
    subject: "Account Verification",
    html: `<h1>Hello Friend Please Click on this link<h1><br><hr><p>HELLO I AM</p>
          <br><a href="http://localhost:3000/">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>`
   }
  
  user.save(function(err,doc){
    console.log(user);
    if(err) {
      console.log(err);
    }
    
    else{
      transporter.sendMail(mailoptions,function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Email sent: ");
        }
    })
    

    }

    res.render('/', { title: 'Email' });

});
});

module.exports = router;
