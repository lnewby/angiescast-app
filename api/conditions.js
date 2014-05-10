exports.TemperatureConditions = [{
	high: 200,
	low: 99,
	status: 'too hot is click here to get a/c serviced',
	priority: 10
}, {
	high: 98,
	low: 85,
	status: 'toohot',
	priority: 9
}, {
	high: 32,
	low: -100,
	status: 'freezing',
	priority: 8
}];

exports.PrecipitationConditions = [{
	high: 100,
	low: 70,
	type: 'rain',
	status: 'heavyrain',
	priority: 8
}, {
	high: 100,
	low: 70,
	type: 'snow',
	status: 'heavysnow',
	priority: 9
}, {
	high: 100,
	low: 70,
	type: 'sleet',
	status: 'heavysnow',
	priority: 9
}, {
	high: 100,
	low: 70,
	type: 'hail',
	status: 'heavyrain',
	priority: 9
}];

exports.WindConditions = [{
	high: 140,
	low: 30,
	status: 'highwind',
	priority: 10
}];

exports.SeasonalConditions = [{
	month: 1,
	status: 'winter',
	priority: 1
}, {
	month: 3,
	status: 'allergy',
	priority: 1
}, {
	month: 4,
	status: 'allergy',
	priority: 1
}, {
	month: 12,
	status: 'winter',
	priority: 1
}];

exports.Statuses = [{
	status: 'toohot',
	message: "It's too hot! Click here",
	url: 'http://www.angieslist.com',
	sps: ['Valley Heating, Cooling and Eletrical']
}, {
	status: 'freezing',
	message: "It's freezing out!",
	url: 'http://www.angieslist.com',
	sps: ['AAA Furnace & Air Conditioning Co']
}, {
	status: 'heavyrain',
	message: "There's a storm coming!",
	url: 'http://www.angieslist.com',
	sps: ['Westshore Roofing Inc', 'All About Gutters']
}, {
	status: 'heavysnow',
	message: "There's a snow storm on the way!",
	url: 'http://www.angieslist.com',
	sps: ['Tip Top Roofing', 'Pelle Heating & Air Conditioning']
}, {
	status: 'highwind',
	message: "High wind incoming!",
	url: 'http://www.angieslist.com',
	sps: ['Carlos Tree Service', 'American Vision Windows']
}, {
	status: 'winter',
	message: "Winter is coming.",
	url: 'http://www.angieslist.com',
	sps: ['DunRite Heating & Air Inc.']
}, {
	status: 'allergy',
	message: "The allergy season is starting.",
	url: 'http://www.angieslist.com',
	sps: ['Indoor-Restore Environmental Services', 'Allergy & Asthma Associates']
}, {
	status: 'default',
	message: "Nice day today!",
	url: 'http://www.angieslist.com',
	sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
}];
