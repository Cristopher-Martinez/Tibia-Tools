require ('dotenv').config();
const nodemailer = require('nodemailer');


//step 1

let transporter = nodemailer.createTransport({

   service: 'gmail',
   auth:{
       user: process.env.EMAIL,
       pass:process.env.PASSWORD
   }



});

//step 2

let mailOptions = {

  from: 'darrylsmillermiller@gmail.com',
  to:'xcristopher335@gmail.com',
  subjet:'Probando funcion',
  text:'Funcionaaa!!! Genial 3'

};
//step 3
transporter.sendMail(mailOptions,function(err,data){
   if (err){
      console.log('Ha ocurrido un error');
   
   }else{
      console.log("Hemos enviado el correo exitosamente");
   }
   
})