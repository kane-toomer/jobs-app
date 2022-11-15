const path = require("path");
const axios = require("axios");
const serverless = require("serverless-http");
const express = require("express");

const router = express.Router();

const app = express();

const buildPath = path.join(__dirname, "..", "build");

app.use(express.static(buildPath));

app.get("/jobs", async (req, res) => {
	try {
		let { description = "", full_time, location = "", page = 1 } = req.query;
		description = description ? encodeURIComponent(description) : "";
		location = location ? encodeURIComponent(location) : "";
		full_time = full_time === "true" ? "&full_time=true" : "";

		if (page) {
			page = parseInt(page);
			page = isNaN(page) ? "" : `&page=${page}`;
		}

		const query = `https://kane-toomer.github.io/Data/jobs.json?description=${description}&location=${location}${full_time}${page}`;
		const result = await axios.get(query);
		res.send(result.data);
	} catch (error) {
		res.status(400).send("Error while getting list of jobs.Try again later.");
	}
});

app.use("/.netlify/functions/server", router);

module.exports = app;
module.exports.handler = serverless(app);
