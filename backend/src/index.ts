import express from "express";
import OpenAi from "openai";
import cors from "cors";
import { zodResponseFormat } from "openai/helpers/zod";
import dotenv from "dotenv";
import { outfitSchema } from "./types/models.zod.js";

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY2 });
const port = 3000;

app.get("/", async (req, res) => {
  res.send("XD");
});

app.post("/style", async (req, res) => {
  console.log(req);

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a fashion stylist who can cater to any user's needs. Users will tell you their styles and what sort of clothing they want, and you will return full outfits with base URLs to multiple websites where they can find the item (e.g. asos.com, louisvuitton.com, selfridges.com), price, colour, type e.g., sweater or t-shirt, and description of all the clothing and accessories. They may reference celebrities and other individuals. You should use these people as inspiration for choices. Also, return your reasoning behind why you picked each items.",
      },
      {
        role: "user",
        content: req.body.prompt,
      },
    ],
    response_format: zodResponseFormat(outfitSchema, "Outfit"),
    store: true,
  });

  console.log(completion.choices);
  res.json(completion.choices[0].message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
