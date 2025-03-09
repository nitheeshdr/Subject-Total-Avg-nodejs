const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const { sub1, sub2, sub3 } = req.body;
    const total = sub1 + sub2 + sub3;
    const average = total / 3;
    res.json({ total, average });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
