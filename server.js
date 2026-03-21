const dotenv=require("dotenv");
dotenv.config();

const connectDB = require('./config/db');
const app=require("./app");



const port = process.env.PORT;


connectDB().then(()=>{
  
app.listen(port, () => {
  console.log(`Cart functionality app listening on port ${port}`)
});

});
