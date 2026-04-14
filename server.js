import express from "express";
import bodyParser from "body-parser";
import { generateAI } from "./utils/ai.js";
import { generateMeta } from "./utils/meta.js";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const ai = await generateAI(message);
    const meta = generateMeta(message);

    res.json({
      success: true,
      ai,
      meta
    });

  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on " + PORT));
