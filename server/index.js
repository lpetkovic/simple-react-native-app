const express = require('express');
const storage = require('node-persist');
const app = express();
let lastUpdated = 0;
let policies = null;
const policyTypes = require('./policies.json').policies;
const policyTypesLength = policyTypes.length;

// On server start init storage and setup inital data
storage.init({
	logging: true
}).then(() => {
	storage.getItem('policies').then((data) => {
		policies = data;

		// Store new policies on interval - mock database changes
		setInterval(() => {
			addItem();
		}, 300000);
	});
});


app.use(function (req, res, next, err) {
	res.status(500).send('Server Error');
})

app.get('/get/policies/:userLastUpdated', (req, res) => {

	let { userLastUpdated } = req.params;

	storage.getItem('policies').then((data) => {

		let keys = [];
		try {
			keys = Object.keys(data);
		} catch (e) {
			console.log("Error while getting new policies");
			res.status(404).send({
				error: 'Could not fetch policies'
			})
		}

		let updatedPolicies = keys.reduce((acc, value) => {
			if (parseInt(value) > parseInt(userLastUpdated)) {
				acc[value] = data[value];
			}
			return acc;
		}, {});

		res.setHeader('Content-Type', 'application/json');
		res.json({
			lastUpdated,
			updatedPolicies
		});
	}).catch((err) => {
		console.log(err);
	})

});

let server = app.listen(3000, () => {
	console.log('Server started on port 3000');
});
server.timeout = 30000;

const addItem = () => {
	lastUpdated = Date.now();
	let { i, j } = generateRand(policyTypesLength);
	policies = {
		...policies,
		[lastUpdated]: [policyTypes[i], policyTypes[j]]
	}
	storage.setItem('policies', policies);
}

const generateRand = (max) => {
	let i = Math.floor(Math.random() * max)
	let j = Math.floor(Math.random() * max)

	while (i === j) {
		j = Math.floor(Math.random() * max)
	}
	return { i, j }
}