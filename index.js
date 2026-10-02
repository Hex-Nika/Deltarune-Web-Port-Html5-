const express = require('express');
const path = require('path');
const app = express();

const publicDirectoryPath = path.join(__dirname, 'deltarune-main');

app.use(express.static(publicDirectoryPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Static server running securely on http://localhost:${PORT}`);
});
