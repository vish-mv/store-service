const db = require("../firebase");

// Health check
exports.healthCheck = (req, res) => {
  res.json({ status: "ok" });
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const snapshot = await db.collection("items").get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get filtered items
exports.getFilteredItems = async (req, res) => {
  try {
    const { category, subCategory } = req.query;
    let query = db.collection("items");

    if (category) {
      query = query.where("category", "==", category);
    }
    if (subCategory) {
      query = query.where("subCategory", "==", subCategory);
    }

    const snapshot = await query.get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
