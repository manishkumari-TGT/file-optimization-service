// app.js
const express = require('express');
const app = express();

// ✅ Health route
app.get('/health', (req, res) => {
  res.send('✅ App is running and routing works!');
});

// ✅ Load optimize routes
const optimizeRoutes = require('./routes/optimizeRoutes');
app.use('/api', optimizeRoutes);

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
