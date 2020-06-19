const monsters = (app, fs) => {
	// variables
	const dataPath = "./data/monsters.json";

	// READ
	app.get("/monsters", (req, res) => {
		fs.readFile(dataPath, "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
	});

	app.get("/monsters/:name", (req, res) => {
		let name = req.params["name"];
		const monsterPath = `./data/${name}.json`;
		fs.readFile(monsterPath, "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
	});

	app.get("/monsters/attribute/:element", (req, res) => {
		const element = req.params["element"];
		fs.readFile(dataPath, "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			const info = JSON.parse(data)
			const filterData = info.filter(item => item.attribute.tid === element.toUpperCase());
			res.send(filterData);
		});
	});

	app.get("/monsters/class/:type", (req, res) => {
		const type = req.params["type"];
		fs.readFile(dataPath, "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			const info = JSON.parse(data)
			const filterData = info.filter(item => item.class.tid === type.toUpperCase());
			res.send(filterData);
		});
	});
};

module.exports = monsters;