const app = require("./server/server");
const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`server start on port ${port}`);
});
