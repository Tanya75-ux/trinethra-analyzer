const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// API route
app.post("/analyze", async (req, res) => {
  const { transcript } = req.body;

  if (!transcript) {
    return res.status(400).json({ error: "Transcript is required" });
  }

  // Optimized short prompt (fast response)
  const prompt = `
Analyze this supervisor feedback and give structured output:

1. Evidence (with positive/negative/neutral)
2. Score (1-10 with reason)
3. KPI Mapping
4. Gaps
5. Follow-up Questions (3)

Keep answer short and clear.

Transcript:
${transcript}
`;

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "phi3",   // ⚡ FAST MODEL
        prompt: prompt,
        stream: false
      })
    });

    const data = await response.json();

    res.json({ result: data.response });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// start server
app.listen(5000, () => {
  console.log(" Server running on http://localhost:5000");
});