const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();
var connection = require('../app');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.get("/api", function(req, res) {
  let sql = "SELECT * FROM employee_info";
  connection.query(sql, function(err, results){
      if (err) throw err;
      res.send(results);
  });
});
//console.log(`Server listening on ${PORT}`);
app.listen(PORT, function(){
  console.log(`App Listening on port ${PORT}`);
  connection.connect(function(err){
      if(err) throw err;
      console.log('Database connected!');
  })
});