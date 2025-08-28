const express = require("express");
const itemsRoutes = require("./routes/items");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/", itemsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
