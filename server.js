const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (_req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
	console.log(`listening: game, set, match on port: ${port}`);
})