const app= require('./app');
const dotenv=require("dotenv");
const cors=require('cors');

app.use(cors());

const connectDatabase=require("./config/database")

//config
dotenv.config({path:"./config/config.env"})

//conecting to database
connectDatabase()


app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})