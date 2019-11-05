// jshint esversion:6

const expres=require("express");
const app=expres();

const port=200;

const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));

 app.get("/",function(req , res){

   res.sendfile(__dirname+"\\bmicalc.html");
 });
 app.post("/",function(req,res){
   var n1=Number(req.body.n1);
   var n2=Number(req.body.n2);
   var bmi=(n2/(n1*n1));


   if(bmi<25)
   {
        res.send("bmi is : "+bmi+ " and is normal");
   }
 });

app.listen(port,function(){
  console.log("server has started");
});
