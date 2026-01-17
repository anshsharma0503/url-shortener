function generateShortCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let code = "";

    for(let i =0 ; i < length ; i++){
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return code;
}

const  url = require("../models/URL");

const shortenUrl = async(req , res) =>{
    try{
        const { longUrl } = req.body;
        const shortCode = generateShortCode();
        
        const newUrl = new url({
            longUrl ,
            shortCode,
        });

        await newUrl.save();

        const shortUrl = `${req.protocol}://${req.get("host")}/${shortCode}`;

        res.status(201).json({ shortUrl });

    } catch (error) {
        res.status(500).json({message: "server error"});
    }

  };

  module.exports ={
    shortenUrl,
  };