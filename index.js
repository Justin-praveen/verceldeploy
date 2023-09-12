const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")

const app = express()


app.use(cors({
    origin : "*"
}))


app.get("/",(req,res)=>{

    const {data} = req.query

    async function main() {
        const pdfText = await readPdfText({url: data});
        // console.info(pdfText);
        res.send(pdfText)
    }
    
    main();
   

})




module.exports.handler = serverless(app)