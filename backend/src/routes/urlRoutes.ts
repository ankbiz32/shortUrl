import express from "express";
import shortid from "shortid";
import Url from "../models/Url";

const router = express.Router();

router.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: "URL is required" });
    }
    
    const shortUrl = shortid.generate();

    const newUrl = new Url({ originalUrl, shortUrl });
    try {
        await newUrl.save();
        res.json({ shortUrl });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error });
    }

});

router.get("/:shortUrl", async (req, res) => {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });

    if (url) {
        return res.json(url.originalUrl);
    } else {
        return res.status(404).json({ error: "URL not found" });
    }
});

export default router;