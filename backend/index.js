const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "63a7fddd-e30c-476d-9b73-5e92225edbe9" },}
    );
    return res.status(r.status).json(r.data);
  }
  catch (e) {
    // If there's an error and the response object is undefined, handle it accordingly
    if (e.response) {
      res.status(e.response.status).json({ error: e.response.data });
    } else {
      console.error("Internal Server Error:", e);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(3001);